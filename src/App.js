import {useState,useEffect} from 'react'
import './App.css';
import firebase from 'firebase'
import SideBar from './side-bar/sidebar'
import Editor from './editor/editor'

const  App= () => {

  const [selectedNoteIndex,setSelectedNoteIndex]=useState(null)
  const [selectedNote,setSelectedNote]=useState(null)
  const [notes,setNotes]=useState(null)

  const selectNote=(note,index)=>{
    setSelectedNote(note)
    setSelectedNoteIndex(index)
    console.log(`notes index set to ${selectedNoteIndex} & 
    notes set to ${selectedNote}`)
  }

  let counter=0;
  useEffect(()=>{
    console.log(counter++)
    console.log('useEffect ran')
    firebase
    .firestore()
    .collection('notes')
    .onSnapshot(serverUpdate=>{
      const notes=serverUpdate.docs.map(doc=>{
        const data=doc.data()
        data['id']=doc.id
         return data
      })
      console.log(notes)
      setNotes(notes)
    });
  },[])

  return ( 
    <div className="app-container">
    <SideBar
     selectedNoteIndex={selectedNoteIndex}
     notes={notes}
    //  deleteNote={deleteNote}
     selectNote={selectNote}
    //  newNote={newNote}
     />
    {
      selectedNote ? (<Editor
    selectedNote={selectedNote}
    selectedNoteIndex={selectedNoteIndex}
    notes={notes}
    />):(
      null
    )
  }
    
    </div>
   );
}
 

export default App;
