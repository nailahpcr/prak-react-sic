import axios from 'axios'

// Supabase configuration
const SUPABASE_URL = "https://faqpejhsuwmksvedywxt.supabase.co/rest/v1/Transactions"
const SUPABASE_KEY = "sb_publishable_ZnAGVgXG44s6P0-xUcrIIQ_w9X99aa1"
const API_URL = `${SUPABASE_URL}/Transactions`

const headers = {
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`,
    "Content-Type": "application/json",
}

export const transactionAPI = {
    /**
     * Fetch all transactions dari Supabase
     * @returns {Promise<Array>} Array of transaction objects
     */
    async fetchAllTransactions() {
        try {
            const response = await axios.get(API_URL, { headers })
            return response.data
        } catch (error) {
            console.error('Error fetching transactions:', error)
            throw new Error(`Gagal mengambil data transaksi: ${error.message}`)
        }
    },

    /**
     * Fetch transactions berdasarkan member ID
     * @param {number} memberId - Member ID
     * @returns {Promise<Array>} Array of transaction objects for the member
     */
    async fetchTransactionsByMemberId(memberId) {
        try {
            const response = await axios.get(
                `${API_URL}?member_id=eq.${memberId}&order=created_at.desc`,
                { headers }
            )
            return response.data
        } catch (error) {
            console.error(`Error fetching transactions for member ${memberId}:`, error)
            throw new Error(`Gagal mengambil data transaksi member: ${error.message}`)
        }
    },

    /**
     * Fetch single transaction berdasarkan ID
     * @param {number} id - Transaction ID
     * @returns {Promise<Object>} Transaction object
     */
    async fetchTransactionById(id) {
        try {
            const response = await axios.get(
                `${API_URL}?id=eq.${id}`,
                { headers }
            )
            if (response.data.length === 0) {
                throw new Error('Transaksi tidak ditemukan')
            }
            return response.data[0]
        } catch (error) {
            console.error(`Error fetching transaction ${id}:`, error)
            throw new Error(`Gagal mengambil data transaksi: ${error.message}`)
        }
    },

    /**
     * Fetch transactions with specific status
     * @param {string} status - Transaction status (Pending, Completed, Cancelled)
     * @returns {Promise<Array>} Array of transaction objects
     */
    async fetchTransactionsByStatus(status) {
        try {
            const response = await axios.get(
                `${API_URL}?status=eq.${status}&order=created_at.desc`,
                { headers }
            )
            return response.data
        } catch (error) {
            console.error(`Error fetching transactions with status ${status}:`, error)
            throw new Error(`Gagal mengambil data transaksi: ${error.message}`)
        }
    },

    /**
     * Create new transaction
     * @param {Object} data - Transaction data
     * @returns {Promise<Object>} Created transaction object
     */
    async createTransaction(data) {
        try {
            const transactionData = {
                member_id: data.member_id,
                total_amount: data.total_amount,
                discount_amount: data.discount_amount || 0,
                final_amount: data.final_amount,
                points_earned: data.points_earned,
                status: data.status || 'Pending',
            }
            const response = await axios.post(API_URL, transactionData, { headers })
            return response.data
        } catch (error) {
            console.error('Error creating transaction:', error)
            throw new Error(`Gagal membuat transaksi baru: ${error.message}`)
        }
    },

    /**
     * Update transaction status
     * @param {number} id - Transaction ID
     * @param {string} status - New status
     * @returns {Promise<Object>} Updated transaction object
     */
    async updateTransactionStatus(id, status) {
        try {
            const response = await axios.patch(
                `${API_URL}?id=eq.${id}`,
                { status },
                { headers }
            )
            if (response.data.length === 0) {
                throw new Error('Gagal update status transaksi')
            }
            return response.data[0]
        } catch (error) {
            console.error(`Error updating transaction ${id}:`, error)
            throw new Error(`Gagal update transaksi: ${error.message}`)
        }
    },
}
