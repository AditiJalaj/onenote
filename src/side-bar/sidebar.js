import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../side-bar-item/sidebaritem';

const Sidebar = ({notes,classes,selectedNoteIndex,selectNote:selNote,newNote:newN}) => {

    const [addingNote,setAddingNote]=useState(false)
    const [title,setTitle]=useState(null)

    const newNoteBtnClick=()=>{
        setAddingNote(!addingNote)
        setTitle(null)
    }
    const updateTitle =(txt)=>{
        setTitle(txt)
    }
    const newNote=()=>{
        newN(title)
        setTitle(null)
        setAddingNote(false)
        console.log(`Adding note is ${addingNote}, title is ${title}`)
        console.log("notes is ",notes)
    }
    const selectNote=(n,i)=>{
       selNote(n,i)
    }
    const deleteNote=()=>{
        console.log("Delete Note")
    }

    
        return ( 
            <div>
            
            { notes ? 
            (
            <div className={classes.sidebar}>
            <Button 
            onClick={newNoteBtnClick} 
            className={classes.newNoteBtn}>
            {addingNote?'Cancel':'New Note'}
           </Button>
            { addingNote ? <div><input type="text" 
            className={classes.newNoteInput}
            placeholder='Enter note title'
            onKeyUp={(e)=>{updateTitle(e.target.value)}}
            ></input>
            <Button className={classes.newNoteSubmitBtn}
            onClick={newNote}>Submit Note
            </Button>
            </div> : 
            null
            }
            <List>
            {
                notes.map((note,index)=>{
                    return (
                        <div key={index}>
                        <SidebarItemComponent 
                        note={note}
                        index={index}
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