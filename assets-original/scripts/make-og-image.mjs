import sharp from 'sharp'

const W = 1200
const H = 630

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FBF6EF"/>
      <stop offset="55%" stop-color="#F8ECDC"/>
      <stop offset="100%" stop-color="#F3DFC9"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <!-- soft decorative blobs -->
  <circle cx="1080" cy="80" r="220" fill="#33513F" opacity="0.05"/>
  <circle cx="60" cy="560" r="180" fill="#DD7C3F" opacity="0.07"/>

  <!-- logo mark: arch + five-leaf sprout, centered around (230,315), scaled 2.6x from 100x120 base -->
  <g transform="translate(75,60) scale(2.55)">
    <path d="M22 106V58A28 40 0 0 1 78 58V106Z" stroke="#DD7C3F" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M32 106Q50 84 68 106Z" fill="#DD7C3F"/>
    <path d="M50 98V80" stroke="#DD7C3F" stroke-width="3" stroke-linecap="round"/>
    <path transform="translate(50,80)" d="M0,0C6.5,-6.8 6.5,-24.8 0,-34C-6.5,-24.8 -6.5,-6.8 0,0Z" fill="#DD7C3F"/>
    <path transform="translate(50,80) rotate(-35)" d="M0,0C6,-5.2 6,-19 0,-26C-6,-19 -6,-5.2 0,0Z" fill="#8FAE55"/>
    <path transform="translate(50,80) rotate(35)" d="M0,0C6,-5.2 6,-19 0,-26C-6,-19 -6,-5.2 0,0Z" fill="#8FAE55"/>
    <path transform="translate(50,80) rotate(-75)" d="M0,0C7.5,-5.6 7.5,-20.4 0,-28C-7.5,-20.4 -7.5,-5.6 0,0Z" fill="#DD7C3F"/>
    <path transform="translate(50,80) rotate(75)" d="M0,0C7.5,-5.6 7.5,-20.4 0,-28C-7.5,-20.4 -7.5,-5.6 0,0Z" fill="#DD7C3F"/>
  </g>

  <text x="440" y="270" font-family="Georgia, 'Segoe UI', Arial, sans-serif" font-weight="700" font-size="88" fill="#1D2F22">clínica</text>
  <text x="440" y="380" font-family="Georgia, 'Segoe UI', Arial, sans-serif" font-weight="700" font-size="140" fill="#DD7C3F">Kair&#243;s</text>
  <text x="443" y="430" font-family="Georgia, 'Segoe UI', Arial, sans-serif" font-style="italic" font-size="34" fill="#B85E28">Tempo certo para crescer e florescer</text>

  <line x1="443" y1="470" x2="1120" y2="470" stroke="#241F16" stroke-opacity="0.15" stroke-width="2"/>

  <text x="443" y="518" font-family="'Segoe UI', Arial, sans-serif" font-weight="600" font-size="30" fill="#241F16">Fonoaudiologia &#183; Psicologia &#183; TEA e TDAH</text>
  <text x="443" y="558" font-family="'Segoe UI', Arial, sans-serif" font-size="27" fill="#241F16" opacity="0.65">Carapicu&#237;ba, SP &#8212; Nota 5,0 no Google</text>
</svg>
`

await sharp(Buffer.from(svg)).jpeg({ quality: 90 }).toFile('public/og-image.jpg')
console.log('wrote public/og-image.jpg')
