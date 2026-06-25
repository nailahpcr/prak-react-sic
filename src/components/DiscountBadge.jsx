export default function DiscountBadge({ discount = 0 }) {
  const label = `${discount}% Diskon`
  return (
    <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
      {label}
    </span>
  )
}
