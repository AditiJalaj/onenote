import {useState,useEffect} from 'react'
import './App.css';
import firebase from 'firebase'
import SideBar from './side-bar/sidebar'
import Editor from './editor/editor'



const  App= () => {

  const [selectedNoteIndex,setSelectedNoteIndex]=useState(null)
  const [selectedNote,setSelectedNote]=useState(null)
  const [notes,setNotes]=useState(null)
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
    <Editor/>
    <SideBar/>
    </div>
   );
}
 

export default App;
