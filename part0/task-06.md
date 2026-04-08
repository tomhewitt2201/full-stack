sequenceDiagram
    participant browser
    participant server

    Note right of browser: User types a note and clicks Save

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note right of browser: Callback fires, creates JSON object from form input and updates the DOM immediately — no page reload

    activate server
    server-->>browser: 201 Created
    deactivate server

    Note right of browser: Server appends the new note to its data. Browser has already re-rendered the note list.