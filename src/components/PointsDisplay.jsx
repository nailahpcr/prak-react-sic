export default function PointsDisplay({ points = 0 }) {
  const formatted = typeof points === 'number'
    ? points.toLocaleString('id-ID')
    : 0

  return (
    <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-800">
      {formatted} Poin
    </span>
  )
}
