import { useNavigate } from "react-router-dom"
import { useWalletContext } from "../../context/WalletContext"
import { useFanContext } from "../../context/FanContext"

const LINKS = [
  { label:"Portal",      path:"/portal"      },
  { label:"Passport",    path:"/passport"    },
  { label:"Marketplace", path:"/marketplace" },
  { label:"Gate",        path:"/gate"        },
  { label:"Admin",       path:"/admin"       },
]

export default function Navbar({ active }) {
  const navigate = useNavigate()
  const { wallet, connect, loading, shortAddress } = useWalletContext()
  const { passport } = useFanContext()

  const tier = passport?.tier || null

  const TIER_ICONS = {
    "Rookie":   "⚪",
    "Fan":      "⭐",
    "Die-Hard": "🏅",
    "Legend":   "🏆",
  }

  return (
    <nav className="fp-nav">
      <div className="fp-logo" onClick={() => navigate("/")}>
        <div className="fp-logo-icon">🏏</div>
        <div className="fp-logo-txt">Wicket<span>Pass</span></div>
      </div>

      <div className="fp-navlinks">
        {LINKS.map((l) => (
          <div
            key={l.label}
            className={`fp-navlink ${active === l.label.toLowerCase() ? "active" : ""}`}
            onClick={() => navigate(l.path)}
          >
            {l.label}
          </div>
        ))}
      </div>

      <div className="fp-nav-right">
        {tier && (
          <div className="fp-tier-badge">
            {TIER_ICONS[tier] || "⭐"} {tier}
          </div>
        )}
        {wallet ? (
          <div className="fp-wallet">{shortAddress(wallet)}</div>
        ) : (
          <button
            className="fp-buy-btn"
            style={{padding:"8px 16px",fontSize:"13px",width:"auto"}}
            onClick={connect}
            disabled={loading}
          >
            {loading ? "Connecting..." : "🦊 Connect"}
          </button>
        )}
      </div>
    </nav>
  )
}