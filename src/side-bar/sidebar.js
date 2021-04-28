import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../side-bar-item/sidebaritem';

const Sidebar = ({notes,classes,selectedNoteIndex}) => {

    const [addingNote,setAddingNote]=useState(false)
    const [title,setTitle]=useState(null)


    const newNoteBtnClick=()=>{
        setAddingNote(!addingNote)
    }

    const updateTitle =(txt)=>{
        console.log('HERE IT IS : ',txt)
    }
    return ( 
        <div className={classes.sidebar}>
        <Button 
        onClick={newNoteBtnClick} 
        className={classes.newNoteBtn}>
        New Note
        { addingNote?<div><input type="text" 
        className={classes.newNoteInput}
        placeholder='Enter note title'
        onKeyUp={(e)=>{updateTitle(e.target.value)}}
        ></input></div> : 
        null
        }
        </Button>
        </div>
     );
}
 
export default withStyles(styles)(Sidebar);