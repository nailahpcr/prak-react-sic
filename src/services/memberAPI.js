import axios from 'axios'

// Supabase configuration
const SUPABASE_URL = "https://faqpejhsuwmksvedywxt.supabase.co/rest/v1/Members"
const SUPABASE_KEY = "sb_publishable_ZnAGVgXG44s6P0-xUcrIIQ_w9X99aa1"
const API_URL = `${SUPABASE_URL}/Members`

const headers = {
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`,
    "Content-Type": "application/json",
}

export const memberAPI = {
    /**
     * Fetch all members dari Supabase
     * @returns {Promise<Array>} Array of member objects
     */
    async fetchAllMembers() {
        try {
            const response = await axios.get(API_URL, { headers })
            return response.data
        } catch (error) {
            console.error('Error fetching members:', error)
            throw new Error(`Gagal mengambil data members: ${error.message}`)
        }
    },

    /**
     * Fetch single member berdasarkan ID
     * @param {number} id - Member ID
     * @returns {Promise<Object>} Member object
     */
    async fetchMemberById(id) {
        try {
            const response = await axios.get(
                `${API_URL}?id=eq.${id}`,
                { headers }
            )
            if (response.data.length === 0) {
                throw new Error('Member tidak ditemukan')
            }
            return response.data[0]
        } catch (error) {
            console.error(`Error fetching member ${id}:`, error)
            throw new Error(`Gagal mengambil data member: ${error.message}`)
        }
    },

    /**
     * Fetch member berdasarkan email
     * @param {string} email - Member email
     * @returns {Promise<Object>} Member object
     */
    async fetchMemberByEmail(email) {
        try {
            const response = await axios.get(
                `${API_URL}?email=eq.${encodeURIComponent(email)}`,
                { headers }
            )
            if (response.data.length === 0) {
                throw new Error('Member dengan email tersebut tidak ditemukan')
            }
            return response.data[0]
        } catch (error) {
            console.error(`Error fetching member by email ${email}:`, error)
            throw new Error(`Gagal mengambil data member: ${error.message}`)
        }
    },

    /**
     * Update tier member berdasarkan total poin
     * @param {number} id - Member ID
     * @param {string} tier - Tier name (Bronze, Silver, Gold, Platinum)
     * @returns {Promise<Object>} Updated member object
     */
    async updateMemberTier(id, tier) {
        try {
            const response = await axios.patch(
                `${API_URL}?id=eq.${id}`,
                { tier },
                { headers }
            )
            if (response.data.length === 0) {
                throw new Error('Gagal update tier member')
            }
            return response.data[0]
        } catch (error) {
            console.error(`Error updating member tier ${id}:`, error)
            throw new Error(`Gagal update tier member: ${error.message}`)
        }
    },

    /**
     * Create new member
     * @param {Object} data - Member data {name, email}
     * @returns {Promise<Object>} Created member object
     */
    async createMember(data) {
        try {
            const memberData = {
                name: data.name,
                email: data.email,
                total_points: 0,
                tier: 'Bronze',
            }
            const response = await axios.post(API_URL, memberData, { headers })
            return response.data
        } catch (error) {
            console.error('Error creating member:', error)
            throw new Error(`Gagal membuat member baru: ${error.message}`)
        }
    },
}
