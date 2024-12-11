import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import NoteForm from "./NoteForm";
import "./styles/HomePage.css";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [editNoteId, setEditNoteId] = useState(null);
  const [editingField, setEditingField] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  const colors = [
    "#fe9b72",
    "#fec971",
    "#ae8df3",
    "#e2ee8e",
    "#00caf2",
    "#E8BCB9",
  ];

  // Fetch notes from local storage on component mount
  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      try {
        const parsedNotes = JSON.parse(storedNotes);
        setNotes(parsedNotes || []);
      } catch (error) {
        console.error("Error parsing notes from local storage:", error);
        setNotes([]); // Fallback to an empty array
      }
    }
  }, []);

  // Toggle the modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Save a new note
  const saveNote = (note) => {
    const updatedNotes = [...notes, note];
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    toggleModal(); // Close the modal after saving
  };

  const handleDelete = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
    localStorage.setItem("notes", JSON.stringify(filteredNotes));
  };

  const startInlineEdit = (id, field, value) => {
    setEditNoteId(id);
    setEditingField(field);
    if (field === "title") setEditTitle(value);
    if (field === "content") setEditContent(value);
  };

  const saveInlineEdit = (id, field, value) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, [field]: value } : note
      )
    );
    setEditNoteId(null);
    setEditingField("");
  };
  console.log(notes);

  return (
    <>
      <section>
        <div className="flex relative h-screen">
          <div className="w-1/12 flex flex-col items-center border-r p-4 text-center bg-gray-100 border-grey-200 h-full">
            <p className="text-2xl font-bold text-stone-900">My Notes</p>
            <div
              className="flex items-center justify-center mt-8 w-16 h-16 bg-blue-900 rounded-full text-white cursor-pointer"
              onClick={toggleModal}
            >
              <FontAwesomeIcon icon={faPlus} size="2x" inverse />
            </div>
          </div>
          <div className="w-11/12 p-4 ">
            <div>
              <p className="text-3xl font-bold text-stone-900">All Notes</p>
            </div>
            <div className="masonry-grid pt-8">
              {notes
                .slice()
                .reverse()
                .map((note) => (
                  <div
                    key={note.id}
                    className="p-4 masonry-item border border-stone-950 rounded-2xl"
                    style={{
                      backgroundColor:
                        colors[Math.floor(Math.random() * colors.length)],
                    }}
                  >
                    {/* Inline Editable Title */}
                    {editNoteId === note.id && editingField === "title" ? (
                      <input
                        className="text-xl font-bold w-full p-2 mb-2 border rounded"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        onBlur={() =>
                          saveInlineEdit(note.id, "title", editTitle)
                        }
                        autoFocus
                      />
                    ) : (
                      <p
                        className="text-xl font-bold text-stone-900 cursor-pointer"
                        onClick={() =>
                          startInlineEdit(note.id, "title", note.title)
                        }
                      >
                        {note.title}
                      </p>
                    )}

                    {/* Inline Editable Content */}
                    {editNoteId === note.id && editingField === "content" ? (
                      <textarea
                        className="w-full p-2 mb-2 border rounded"
                        value={editContent}
                        onChange={(e) => setEditContent(e.target.value)}
                        onBlur={() =>
                          saveInlineEdit(note.id, "content", editContent)
                        }
                        autoFocus
                      />
                    ) : (
                      <p
                        className="text-base font-normal text-stone-900 py-2 cursor-pointer"
                        onClick={() =>
                          startInlineEdit(note.id, "content", note.content)
                        }
                      >
                        {note.content}
                      </p>
                    )}

                    <div className="flex justify-between transition ease-in duration-1000">
                      <p className="text-xs text-right">{note.date}</p>
                      <div>
                        <button
                          className="px-2"
                          onClick={() => handleDelete(note.id)}
                        >
                          <FontAwesomeIcon icon={faTrash} size="xs" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="relative bg-white p-8 rounded-lg shadow-lg w-1/3">
                <button
                  onClick={toggleModal}
                  className="absolute top-2 right-2 text-gray-500 hover:text-black"
                >
                  ✕
                </button>
                <NoteForm onSave={saveNote} />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default HomePage;
