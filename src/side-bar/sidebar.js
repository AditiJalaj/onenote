import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../side-bar-item/sidebaritem';

const Sidebar = ({notes,classes,selectedNoteIndex,selectNote,newNote,deleteNote}) => {

    const [addingNote,setAddingNote]=useState(false)
    const [title,setTitle]=useState(null)

const newNoteBtnClick = () => {
    setTitle(null)
    setAddingNote(!addingNote)
    
  }
const updateTitle = (txt) => {
    setTitle(txt)
  }


  //chanegd const to newNote here
  newNote = () => {
    if(title!==null){
     newNote(title)
     setTitle(null)
     setAddingNote(false)
    }
    else{alert("ENTER TITLE...")}
  }
  selectNote = (n, i) => selectNote(n, i);
  deleteNote = (note) => deleteNote(note);


     return ( 
        <div>
            { notes ? 
            (
            <div className={classes.sidebarContainer}>
            <Button 
            onClick={newNoteBtnClick} 
            className={classes.newNoteBtn}>
            {addingNote?'Cancel':'New Note'}
           </Button>
            { 
                addingNote ? <div><input type="text" 
            className={classes.newNoteInput}
            placeholder='Enter note title'
            onKeyUp={(e)=>updateTitle(e.target.value)}
            ></input>

            <Button className={classes.newNoteSubmitBtn}
            onClick={newNote}>Submit Note
            </Button>
            </div> : 
            null
            }
            <List>
            {
                notes.map((_note,_index)=>{
                    return (
                        <div key={_index}>
                        <SidebarItemComponent 
                        _note={_note}
                        _index={_index}
                        selectedNoteIndex={selectedNoteIndex}
                        selectNote={selectNote}
                        deleteNote={deleteNote}>
                        </SidebarItemComponent>
                        <Divider></Divider>
                        </div>
                    )
                })
            }
            </List>
            </div>
            ) :

            (
                <div></div>
            )
         
            }
            </div>
         );
    
}
 
export default withStyles(styles)(Sidebar);