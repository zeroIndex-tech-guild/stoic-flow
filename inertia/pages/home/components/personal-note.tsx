import { useState } from 'react'

const PersonalNote = () => {
  const [note, setNote] = useState('')
  const [notes, setNotes] = useState([])

  const handleNoteChange = (e) => {
    setNote(e.target.value)
  }

  const handleNoteSubmit = (e) => {
    e.preventDefault()
    if (note.trim()) {
      setNotes([...notes, note])
      setNote('')
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Personal Note</h2>
      <form onSubmit={handleNoteSubmit}>
        <textarea
          className="w-full p-4 border border-gray-300 rounded-md"
          rows={4}
          placeholder="Write your personal note here..."
          value={note}
          onChange={handleNoteChange}
        ></textarea>
        <button
          className="w-full py-2 bg-blue-600 text-white rounded-md mt-4 hover:bg-blue-700 transition-colors"
          type="submit"
        >
          Save Note
        </button>
      </form>

      {/* Personal Notes List */}
      <ul className="space-y-4 mt-4">
        {notes.map((note, index) => (
          <li key={index} className="p-4 border-b border-gray-300">
            {note}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PersonalNote
