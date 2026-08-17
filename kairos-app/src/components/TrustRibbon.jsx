import { useCountUp } from '../lib/useCountUp'
import { STATS } from '../data/content'

function StatItem({ stat }) {
  const ref = useCountUp(stat.value, { decimals: stat.decimals ?? 0 })
  return (
    <div className="ribbon-item">
      <div className="num">
        {stat.value != null ? (
          <>
            <span ref={ref}>0</span>
            {stat.suffix}
          </>
        ) : (
          stat.display
        )}
      </div>
      <div className="lbl">{stat.label}</div>
    </div>
  )
}

export default function TrustRibbon() {
  return (
    <div className="ribbon">
      <div className="ribbon-inner">
        {STATS.map((s, i) => (
          <StatItem stat={s} key={i} />
        ))}
      </div>
    </div>
  )
}
