export default function TierBadge({ tier = 'Bronze' }) {
  const tierStyle = {
    Bronze: 'bg-stone-100 text-stone-700',
    Silver: 'bg-slate-100 text-slate-700',
    Gold: 'bg-amber-100 text-amber-700',
    Platinum: 'bg-sky-100 text-sky-700',
  }

  const displayTier = ['Bronze', 'Silver', 'Gold', 'Platinum'].includes(tier)
    ? tier
    : 'Bronze'

  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${tierStyle[displayTier]}`}>
      {displayTier}
    </span>
  )
}
