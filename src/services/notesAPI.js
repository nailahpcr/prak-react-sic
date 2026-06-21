import axios from 'axios'

// Tautan URL dan Key yang kamu gunakan sebelumnya di RapidAPI
const API_URL = "https://faqpejhsuwmksvedywxt.supabase.co/rest/v1/note"
const API_KEY = "sb_publishable_ZnAGVgXG44s6P0-xUcrIIQ_w9X99aa1"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },
    
    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },
    async deleteNote(id) {
        const response = await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
        return response.data
    }
}