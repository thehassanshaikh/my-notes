const NoteForm = () => {
  return (
    <form className="flex flex-col">
      <input
        type="text"
        placeholder="Title"
        className="p-4 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <textarea
        rows={5}
        placeholder="Take a Note"
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
