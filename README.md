# Notes App

A simple and elegant notes application built with React. The app allows users to create, view, and manage notes, with the ability to save them to local storage and display them in a visually appealing layout. The notes are displayed in a dynamic masonry grid layout that adjusts based on the content size.

## Features

- Add, edit, and delete notes.
- Notes are saved to local storage, ensuring data persistence across sessions.
- Notes are displayed in a dynamic masonry grid layout.
- Notes are ordered by the most recent first.
- Custom styling for each note with different background colours.

## Screenshots

*Include a screenshot or image here to show how the app looks (optional).*

## Technologies Used

- React
- CSS (Masonry Grid layout)
- Local Storage (for storing notes)
- FontAwesome (for icons)

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
git clone <your-repo-url>

css
Copy code

2. Navigate to the project directory:
cd notes-app

markdown
Copy code

3. Install dependencies:
npm install

markdown
Copy code

4. Run the app locally:
npm start

sql
Copy code

The app should be available at `http://localhost:3000`.

## Usage

1. **Create a Note**: Click the "Add Note" button (the plus icon) to open a form where you can add a title and content for your note.
2. **Edit a Note**: Click the pencil icon on any note to edit it.
3. **Delete a Note**: The notes can be deleted when no longer needed.
4. **View Notes**: All notes are displayed in a masonry grid layout and are automatically sorted from newest to oldest.

## How It Works

- Notes are stored in local storage as an array of objects. Each note contains:
- `title`: The title of the note.
- `content`: The content of the note.
- `date`: The timestamp of when the note was created.

- Notes are fetched from local storage on page load and displayed in a dynamic grid layout using CSS Grid.

## Local Storage

- The app uses local storage to store notes data so that even after you refresh or close the app, your notes persist. 
- The notes are stored in the following format:
[ { "title": "Note Title", "content": "Note Content", "date": "2024-12-03T10:30:00Z" }, ... ]

markdown
Copy code

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Make your changes and commit them.
4. Push to your forked repository.
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
