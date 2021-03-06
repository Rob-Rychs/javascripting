import React, { Component } from 'react';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';

class Notes extends Component {

  state = {
    notes: [],
    editNoteId: null
  }
  
  componentDidMount() {
    this.fetchNotes();
  }

  fetchNotes() {
    var request = new Request('http://localhost:3001/notes', {
      method: 'GET',
    });

    fetch(request)
      .then((response) => response.json())
      .then((json) => {
        this.setState({notes: json});
      })
      .catch((err) => console.warn("Error! ", err));
  }
  
  addNote() {
    var request = new Request('http://localhost:3001/notes', {
      method: 'POST',
      body: {}
    });

    fetch(request)
      .then((response) => this.fetchNotes())
      .catch((err) => console.warn("Error! ", err));
  }

  updateNote(note) {
    var request = new Request('http://localhost:3001/notes/'+note.id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    });

    fetch(request)
      .then((response) => this.fetchNotes())
      .catch((err) => console.warn("Error! ", err));
  }

  editNote(noteId) {
    this.setState({editNoteId: noteId});
  }

  render() {
    return (
      <div className="notes-container">
        <NoteList 
          notes={this.state.notes} 
          editNote={this.editNote.bind(this)} 
          addNote={this.addNote.bind(this)} />
        <NoteEditor 
          key={this.state.editNoteId} 
          note={this.state.notes.find(note => note.id === this.state.editNoteId)} 
          updateNote={this.updateNote.bind(this)} />
      </div>
    )
  }

}

export default Notes;
