const NoteForm = ()=>{
    return(
        <>
        <section className="min-h-screen bg-red-200 flex justify-center items-center">
            <div>
                <form action="" className="flex flex-col bg-red-500 p-4 rounded">
                    <input type="text" placeholder="Title" className=" p-4"/>
                    <textarea rows={4} cols={40} placeholder="Take a Note" className="p-4" />
                </form>
            </div>
        </section>
        </>
    )
}

export default NoteForm;