import { useEffect, useRef } from 'react'

// Soft drifting light/leaf particles inside the hero arch window.
// Loaded only on capable desktop viewports; three.js is dynamically imported
// so mobile visitors never download it.
export default function HeroParticles() {
  const mountRef = useRef(null)

  useEffect(() => {
    let renderer, scene, camera, points, raf, ro
    let stopped = false

    const onVisibility = () => {
      stopped = document.hidden
    }

    ;(async () => {
      const THREE = await import('three')
      if (!mountRef.current) return
      const el = mountRef.current
      const width = el.clientWidth
      const height = el.clientHeight

      scene = new THREE.Scene()
      camera = new THREE.OrthographicCamera(-width / 2, width / 2, height / 2, -height / 2, 0.1, 100)
      camera.position.z = 10

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
      renderer.setSize(width, height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      el.appendChild(renderer.domElement)

      // soft radial-gradient sprite, drawn on a canvas — no external asset needed
      const spriteCanvas = document.createElement('canvas')
      spriteCanvas.width = 64
      spriteCanvas.height = 64
      const ctx = spriteCanvas.getContext('2d')
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
      grad.addColorStop(0, 'rgba(255,255,255,1)')
      grad.addColorStop(1, 'rgba(255,255,255,0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, 64, 64)
      const spriteTex = new THREE.CanvasTexture(spriteCanvas)

      const COUNT = 42
      const positions = new Float32Array(COUNT * 3)
      const speeds = new Float32Array(COUNT)
      const sways = new Float32Array(COUNT)
      const colors = new Float32Array(COUNT * 3)
      const palette = [
        new THREE.Color('#DD7C3F'),
        new THREE.Color('#8FAE55'),
        new THREE.Color('#F3DFC9'),
      ]

      for (let i = 0; i < COUNT; i++) {
        positions[i * 3] = (Math.random() - 0.5) * width
        positions[i * 3 + 1] = (Math.random() - 0.5) * height
        positions[i * 3 + 2] = 0
        speeds[i] = 6 + Math.random() * 10
        sways[i] = Math.random() * Math.PI * 2
        const c = palette[i % palette.length]
        colors[i * 3] = c.r
        colors[i * 3 + 1] = c.g
        colors[i * 3 + 2] = c.b
      }

      const geo = new THREE.BufferGeometry()
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))

      const mat = new THREE.PointsMaterial({
        size: 14,
        map: spriteTex,
        transparent: true,
        opacity: 0.55,
        vertexColors: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })

      points = new THREE.Points(geo, mat)
      scene.add(points)

      const clock = new THREE.Clock()
      const halfH = height / 2

      const animate = () => {
        raf = requestAnimationFrame(animate)
        if (stopped) return
        const dt = Math.min(clock.getDelta(), 0.05)
        const t = clock.elapsedTime
        const pos = geo.attributes.position.array
        for (let i = 0; i < COUNT; i++) {
          pos[i * 3 + 1] += speeds[i] * dt
          pos[i * 3] += Math.sin(t * 0.6 + sways[i]) * 0.15
          if (pos[i * 3 + 1] > halfH) pos[i * 3 + 1] = -halfH
        }
        geo.attributes.position.needsUpdate = true
        renderer.render(scene, camera)
      }
      animate()

      ro = new ResizeObserver(() => {
        if (!mountRef.current || !renderer) return
        const w = mountRef.current.clientWidth
        const h = mountRef.current.clientHeight
        renderer.setSize(w, h)
        camera.left = -w / 2
        camera.right = w / 2
        camera.top = h / 2
        camera.bottom = -h / 2
        camera.updateProjectionMatrix()
      })
      ro.observe(el)

      document.addEventListener('visibilitychange', onVisibility)
    })()

    return () => {
      stopped = true
      document.removeEventListener('visibilitychange', onVisibility)
      if (raf) cancelAnimationFrame(raf)
      if (ro) ro.disconnect()
      if (renderer) {
        renderer.dispose()
        renderer.domElement?.remove()
      }
    }
  }, [])

  return <div ref={mountRef} style={{ position: 'absolute', inset: 0 }} aria-hidden="true" />
}
