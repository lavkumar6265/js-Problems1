function saveNoteToLocalStorage(note) {
    try {
      // Get existing notes from local storage or initialize an empty array
      const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
  
      // Add the new note to the array
      existingNotes.push(note);
  
      // Save the updated notes array back to local storage
      localStorage.setItem('notes', JSON.stringify(existingNotes));
  
      console.log('Note saved to local storage:', note);
    } catch (error) {
      console.error('Error saving note to local storage:', error);
    }
  }
  
  // Example usage
  const sampleNote = {
    id: 1,
    title: 'Meeting Notes',
    content: 'Discuss project updates and timelines.',
    timestamp: new Date().toISOString(),
  };
  
  saveNoteToLocalStorage(sampleNote);
  