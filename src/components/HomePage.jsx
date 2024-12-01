import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import NoteForm from "./NoteForm";

const HomePage = () => {
  return (
    <>
      <section>
        <div className="flex">
          <div className="w-1/12 border-r p-4 text-center border-indigo-500 h-screen ">
            <p className=" text-2xl font-bold text-stone-900">My Notes</p>
            <div className="flex items-center justify-center w-16 h-16 bg-blue-900 rounded-full text-white">
            <FontAwesomeIcon
              icon={faPlus}
              size="2x"
              inverse
            />
            </div>
            
          </div>
          <div className="w-11/12 p-4  bg-orange-200">
            <div>
              <p className="text-3xl font-bold text-stone-900">All Notes</p>
            </div>
            <div className="grid grid-cols-5 gap-4 pt-8">
              <div className="">
                <div className="p-2 border border-stone-950 rounded-2xl">
                  <div>
                    <div>
                      <p className="text-xl font-bold text-stone-900">
                        Here is the title of notes
                      </p>
                      <p className="text-base font-normal text-stone-900 py-2">
                        Text content area here of all the notes which is
                        availbale to read write and delete Text content area
                        here of all the notes which is availbale to read write
                        and delete
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-xs">7 November 2024</p>
                    <div className="bg-blue-900 px-2  py-1 rounded-full">
                      <FontAwesomeIcon icon={faPen} inverse />
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="p-2 border border-stone-950 rounded-2xl">
                  <div>
                    <div>
                      <p className="text-xl font-bold text-stone-900">
                        Here is the title of notes
                      </p>
                      <p className="text-base font-normal text-stone-900 py-2">
                        Text content area here of all the notes which is
                        availbale to read write and delete Text content area
                        here of all the notes which is availbale to read write
                        and delete
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-xs">7 November 2024</p>
                    <div className="bg-blue-900 px-2  py-1 rounded-full">
                      <FontAwesomeIcon icon={faPen} inverse />
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="p-2 border border-stone-950 rounded-2xl">
                  <div>
                    <div>
                      <p className="text-xl font-bold text-stone-900">
                        Here is the title of notes
                      </p>
                      <p className="text-base font-normal text-stone-900 py-2">
                        Text content area here of all the notes which is
                        availbale to read write and delete Text content area
                        here of all the notes which is availbale to read write
                        and delete
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-xs">7 November 2024</p>
                    <div className="bg-blue-900 px-2  py-1 rounded-full">
                      <FontAwesomeIcon icon={faPen} inverse />
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="p-2 border border-stone-950 rounded-2xl">
                  <div>
                    <div>
                      <p className="text-xl font-bold text-stone-900">
                        Here is the title of notes
                      </p>
                      <p className="text-base font-normal text-stone-900 py-2">
                        Text content area here of all the notes which is
                        availbale to read write and delete Text content area
                        here of all the notes which is availbale to read write
                        and delete
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-xs">7 November 2024</p>
                    <div className="bg-blue-900 px-2  py-1 rounded-full">
                      <FontAwesomeIcon icon={faPen} inverse />
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="p-2 border border-stone-950 rounded-2xl">
                  <div>
                    <div>
                      <p className="text-xl font-bold text-stone-900">
                        Here is the title of notes
                      </p>
                      <p className="text-base font-normal text-stone-900 py-2">
                        Text content area here of all the notes which is
                        availbale to read write and delete Text content area
                        here of all the notes which is availbale to read write
                        and delete
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-xs">7 November 2024</p>
                    <div className="bg-blue-900 px-2  py-1 rounded-full">
                      <FontAwesomeIcon icon={faPen} inverse />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <NoteForm />
    </>
  );
};
export default HomePage;
