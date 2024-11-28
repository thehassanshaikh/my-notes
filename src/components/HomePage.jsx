const HomePage = () => {
  return (
    <>
      <section>
        <div className="flex">
          <div className="w-1/12 border-r p-4  border-indigo-500 h-screen ">
            <p className=" text-2xl text-center font-bold text-stone-900">
              My Notes
            </p>
          </div>
          <div className="w-11/12 p-4  bg-orange-200 grid col-auto">
            <div>
              <p className="text-3xl font-bold text-stone-900">All Notes</p>
            </div>
            <div className="pt-6">
              <div className="p-2 border border-stone-950 w-1/6 rounded-xl">
                <div>
                  <div>
                    <p className="text-xl font-bold text-stone-900">Title</p>
                    <p className="text-base font-normal text-stone-900 py-2">
                      Text content area here of all the notes which is availbale
                      to read write and delete
                    </p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="text-xs">7 November 2024</p>
                  <button>Delete</button>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="p-2 border border-stone-950 w-1/6 rounded-xl">
                <div>
                  <div>
                    <p className="text-xl font-bold text-stone-900">
                      This title os 2
                    </p>
                    <p className="text-base font-normal text-stone-900 py-2">
                      Text content area here of all the notes which is availbale
                      to read write and delete
                    </p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="text-xs">7 November 2024</p>
                  <button>Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomePage;
