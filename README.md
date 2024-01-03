# Quick Start

1. **Install Dependencies:**
    ```bash
    npm install
    ```

2. **Start the Application:**
    ```bash
    npm start
    ```

## API Endpoints

### Get All Notes

- **Method:** GET
- **Endpoint:** `http://localhost:3000/notes`

   Retrieve all notes from the server.

### Add Note

- **Method:** POST
- **Endpoint:** `http://localhost:3000/notes`

   Add a new note to the server. Send the note data in the request body.

### Update Note

- **Method:** PATCH
- **Endpoint:** `http://localhost:3000/notes/<id>`

   Update an existing note specified by the ID parameter. Send the updated note data in the request body.

### Delete Note

- **Method:** DELETE
- **Endpoint:** `http://localhost:3000/notes/<id>`

   Delete a note specified by the ID parameter.

### Get Single Note

- **Method:** GET
- **Endpoint:** `http://localhost:3000/notes/<id>`

   Retrieve details of a single note specified by the ID parameter.

Replace `<id>` in the URLs with the actual ID of the note.
