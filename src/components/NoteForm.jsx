import { useState } from "react";

const NoteForm = ({ onSave }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      const newNote = {
        title,
        content,
        date: new Date().toLocaleDateString(),
        id: crypto.randomUUID(),
      };
      onSave(newNote); // Pass the note data to the parent component
      setTitle(""); // Reset the form
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-4 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <textarea
        rows={5}
        placeholder="Take a Note"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="p-4 mt-4 border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="mt-4 bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
      >
        Save Note
      </button>
    </form>
  );
};

export default NoteForm;
