export default function AttendanceTimeline({ history = [] }) {
  const DEMO_HISTORY = [
    { matchName:"Karachi Kings vs Lahore Qalandars",  timestamp:"April 14, 2026", pointsEarned:35, dot:"green"  },
    { matchName:"Peshawar Zalmi vs Quetta Gladiators", timestamp:"March 28, 2026", pointsEarned:35, dot:"gold"   },
    { matchName:"Islamabad United vs Multan Sultans",  timestamp:"March 15, 2026", pointsEarned:35, dot:"purple" },
    { matchName:"Lahore Qalandars vs Peshawar Zalmi",  timestamp:"March 1, 2026",  pointsEarned:35, dot:"cyan"   },
  ]

 const displayHistory = Array.isArray(history) && history.length > 0
  ? history
  : DEMO_HISTORY

  return (
    <div className="pp-timeline">
      {displayHistory.map((h, i) => (
        <div className="pp-timeline-item" key={i}>
          <div className={`pp-timeline-dot ${h.dot || "green"}`} />
          <div className="pp-timeline-info">
            <div className="pp-timeline-match">{h.matchName}</div>
            <div className="pp-timeline-date">{h.timestamp}</div>
          </div>
          <div className="pp-timeline-badge">+{h.pointsEarned} pts</div>
        </div>
      ))}
    </div>
  )
}