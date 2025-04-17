function saveNoteToLocalStorage (note) 
{
    localStorage.setItem("note", note);
}

document.body.querySelector("button").addEventListener("click", () => {
    let note = prompt("Enter your note");

    saveNoteToLocalStorage(note);
    document.body.append(note)
})

//overwrites the note in storage whenever button is clicked.