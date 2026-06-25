import { TIER_THRESHOLDS, TIER_DISCOUNTS, POINTS_PER_AMOUNT } from '../constants/crm'

/**
 * Hitung poin berdasarkan total amount transaksi.
 * @param {number} amount - Nilai transaksi dalam Rupiah.
 * @returns {number} Points yang diperoleh.
 */
export function calculatePointsFromAmount(amount) {
  if (typeof amount !== 'number' || Number.isNaN(amount)) {
    return 0
  }

  return Math.floor(amount / POINTS_PER_AMOUNT)
}

/**
 * Tentukan tier berdasarkan total poin member.
 * @param {number} totalPoints
 * @returns {string} Tier name
 */
export function calculateTierFromPoints(totalPoints) {
  if (typeof totalPoints !== 'number' || Number.isNaN(totalPoints) || totalPoints < 0) {
    return 'Bronze'
  }

  if (totalPoints >= TIER_THRESHOLDS.Platinum) {
    return 'Platinum'
  }

  if (totalPoints >= TIER_THRESHOLDS.Gold) {
    return 'Gold'
  }

  if (totalPoints >= TIER_THRESHOLDS.Silver) {
    return 'Silver'
  }

  return 'Bronze'
}

/**
 * Ambil persentase diskon berdasarkan tier.
 * @param {string} tier
 * @returns {number} Discount percentage
 */
export function getDiscountPercentage(tier) {
  if (!tier || typeof tier !== 'string') {
    return 0
  }

  return TIER_DISCOUNTS[tier] ?? 0
}

/**
 * Konversi tier ke kelas CSS atau warna untuk badge.
 * @param {string} tier
 * @returns {string}
 */
export function getTierLabel(tier) {
  const normalized = typeof tier === 'string' ? tier : 'Bronze'

  switch (normalized) {
    case 'Platinum':
      return 'Platinum'
    case 'Gold':
      return 'Gold'
    case 'Silver':
      return 'Silver'
    default:
      return 'Bronze'
  }
}

/**
 * Return warna default untuk tier.
 * @param {string} tier
 * @returns {string}
 */
export function getTierColor(tier) {
  switch (tier) {
    case 'Platinum':
      return 'text-sky-600 bg-sky-100'
    case 'Gold':
      return 'text-amber-700 bg-amber-100'
    case 'Silver':
      return 'text-slate-700 bg-slate-100'
    default:
      return 'text-stone-700 bg-stone-100'
  }
}
