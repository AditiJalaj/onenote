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
        console.log("NEW BTN CLICKED")
    }

    return ( 
        <div className={classes.sidebar}>
        <Button 
        onClick={newNoteBtnClick} 
        className={classes.newNoteBtn}>
        New Note
        </Button>
        </div>
     );
}
 
export default withStyles(styles)(Sidebar);