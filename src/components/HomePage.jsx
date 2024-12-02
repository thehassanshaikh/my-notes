import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import NoteForm from "./NoteForm";
import { useState } from "react";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <section>
        <div className="flex relative h-screen">
          <div className="w-1/12 border-r p-4 text-center border-indigo-500 h-full">
            <p className="text-2xl font-bold text-stone-900">My Notes</p>
            <div
              className="flex items-center justify-center w-16 h-16 bg-blue-900 rounded-full text-white "
              onClick={toggleModal}
            >
              <FontAwesomeIcon icon={faPlus} size="2x" inverse />
            </div>
          </div>
          <div className="w-11/12 p-4 bg-orange-200">
            <div>
              <p className="text-3xl font-bold text-stone-900">All Notes</p>
            </div>
            <div className="grid grid-cols-5 gap-4 pt-8">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="">
                  <div className="p-2 border border-stone-950 rounded-2xl">
                    <div>
                      <p className="text-xl font-bold text-stone-900">
                        Here is the title of notes
                      </p>
                      <p className="text-base font-normal text-stone-900 py-2">
                        Text content area here of all the notes which is
                        available to read write and delete
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-xs">7 November 2024</p>
                      <div className="bg-blue-900 px-2 py-1 rounded-full">
                        <FontAwesomeIcon icon={faPen} inverse />
                      </div>
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
                <NoteForm />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default HomePage;
