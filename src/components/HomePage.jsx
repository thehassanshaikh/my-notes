import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import NoteForm from "./NoteForm";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notes, setNotes] = useState([]);

  const colors = ["#fe9b72", "#fec971", "#ae8df3", "#e2ee8e", "#00caf2"];

  // Fetch notes from local storage on component mount
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
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

  return (
    <>
      <section>
        <div className="flex relative h-screen">
          <div className="w-1/12 border-r p-4 text-center border-grey-200 h-full">
            <p className="text-2xl font-bold text-stone-900">My Notes</p>
            <div
              className="flex items-center justify-center w-16 h-16 bg-blue-900 rounded-full text-white cursor-pointer"
              onClick={toggleModal}
            >
              <FontAwesomeIcon icon={faPlus} size="2x" inverse />
            </div>
          </div>
          <div className="w-11/12 p-4 ">
            <div>
              <p className="text-3xl font-bold text-stone-900">All Notes</p>
            </div>
            <div className="grid grid-cols-5 gap-4 pt-8">
              {notes.map((note, index) => (
                <div key={index} className="">
                  <div
                    className="p-2 border border-stone-950 rounded-2xl"
                    style={{
                      backgroundColor: colors[index % colors.length], // Assign colours cyclically
                    }}
                  >
                    <p className="text-xl font-bold text-stone-900">
                      {note.title}
                    </p>
                    <p className="text-base font-normal text-stone-900 py-2">
                      {note.content}
                    </p>
                    <p className="text-xs text-right">{note.date}</p>
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
