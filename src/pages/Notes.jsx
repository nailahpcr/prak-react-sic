import React, { useState, useEffect } from "react"
import { notesAPI } from "../services/notesAPI"
import GenericTable from "../components/GenericTable"
import AlertBox from "../components/AlertBox"
import EmptyState from "../components/EmptyState"
import LoadingSpinner from "../components/LoadingSpinner"
import { AiFillDelete } from "react-icons/ai"

export default function Notes() {
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(false)
  const [submitLoading, setSubmitLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const [dataForm, setDataForm] = useState({
    title: "",
    content: "",
    status: ""
  })

  // 1. Fungsi Mengambil Data List Note (Poin 6)
  const loadNotes = async () => {
    try {
      setLoading(true)
      setError("")
      const data = await notesAPI.fetchNotes()
      setNotes(data)
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`)
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadNotes()
  }, [])

  // 2. Handle Perubahan Input Form
  const handleChange = (evt) => {
    const { name, value } = evt.target
    setDataForm({
      ...dataForm,
      [name]: value,
    })
  }

  // 3. Handle Submit Tambah Data (Poin 5 & Optimasi Loading)
  const handleSubmit = async (evt) => {
    evt.preventDefault()
    setSubmitLoading(true)
    setError("")
    setSuccess("")

    try {
      await notesAPI.createNote({
        title: dataForm.title,
        content: dataForm.content
      })
      
      setSuccess("Catatan baru berhasil ditambahkan!")
      setDataForm({ title: "", content: "", status: "" })
      loadNotes() // Refresh tabel otomatis
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`)
      console.error(err)
    } finally {
      setSubmitLoading(false)
    }
  }

  // 4. Handle untuk aksi hapus data (Poin 7)
  const handleDelete = async (id) => {
    const konfirmasi = confirm("Yakin ingin menghapus catatan ini?")
    if (!konfirmasi) return

    try {
      setLoading(true)
      setError("")
      setSuccess("")

      await notesAPI.deleteNote(id)

      setSuccess("Catatan telah berhasil dihapus!")
      loadNotes() // Refresh data setelah dihapus
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Notes App</h2>
      </div>

      {/* Alert Box Notifikasi */}
      {success && <AlertBox type="success">{success}</AlertBox>}
      {error && <AlertBox type="error">{error}</AlertBox>}

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Tambah Catatan Baru</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            value={dataForm.title}
            placeholder="Judul catatan"
            onChange={handleChange}
            required
            disabled={submitLoading}
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 duration-200 disabled:opacity-60 text-sm"
          />

          <textarea
            name="content"
            value={dataForm.content}
            placeholder="Isi catatan"
            onChange={handleChange}
            required
            rows="2"
            disabled={submitLoading}
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 duration-200 resize-none disabled:opacity-60 text-sm"
          />

          <button
            type="submit"
            disabled={submitLoading}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 transition-all duration-200 shadow-lg text-sm"
          >
            {submitLoading ? "Mohon Tunggu..." : "Tambah Catatan"}
          </button>
        </form>
      </div>

      {/* Notes Table Container */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-10">
        <div className="px-6 py-4">
          <h3 className="text-lg font-semibold">
            Daftar Catatan ({notes.length})
          </h3>
        </div>

        {/* ─── IMPLEMENTASI CONDITIONAL RENDERING ─── */}
        
        {/* 1. Kondisi Loading */}
        {loading && <LoadingSpinner text="Memuat catatan..." />}

        {/* 2. Kondisi Kosong Tanpa Error */}
        {!loading && notes.length === 0 && !error && (
          <EmptyState text="Belum ada catatan. Tambah catatan pertama!" />
        )}

        {/* 3. Kondisi Kosong Karena Error */}
        {!loading && notes.length === 0 && error && (
          <EmptyState text="Terjadi Kesalahan. Coba lagi nanti." />
        )}
        
        {/* 4. Kondisi Ketika Data Ada (Render GenericTable) */}
        {!loading && notes.length > 0 ? (
          <GenericTable
            columns={["#", "Judul", "Isi Catatan", "Aksi"]}
            data={notes}
            renderRow={(note, index) => (
              <> {/* 👈 Menggunakan Fragment agar data menyebar di kolomnya */}
                <td className="px-6 py-4 font-medium text-gray-700">
                  {index + 1}.
                </td>
                <td className="px-6 py-4">
                  <div className="font-semibold text-emerald-600">
                    {note.title}
                  </div>
                </td>
                <td className="px-6 py-4 max-w-xs">
                  <div className="truncate text-gray-600">
                    {note.content}
                  </div>
                </td>
                <td className="px-6 py-4 max-w-xs">
                  <div className="truncate text-gray-600">
                    <button
                      onClick={() => handleDelete(note.id)}
                      disabled={loading}
                      className="disabled:opacity-40"
                    >
                      <AiFillDelete className="text-red-400 text-2xl hover:text-red-600 transition-colors" />
                    </button>
                  </div>
                </td>
              </>
            )}
          />
        ) : null}
      </div>
    </div>
  )
}