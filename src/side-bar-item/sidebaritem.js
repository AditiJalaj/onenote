
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeHTMLTags } from '../helpers';


const SideBarItem = ({note,index,selectedNoteIndex,classes,selectNote:selNote, deleteNote:delNote}) => {
    
    const selectNote=(n,i)=>{ 
        selNote(n,i)
    }
    const deleteNote=(n)=>{
        if(window.confirm(`Are you sure yo u want to delete : ${n.title}`))
        delNote(n)
    }
    return ( 
        <div key={index}>
        <ListItem className={classes.ListItem}
        selected={selectedNoteIndex===index}
        alignItems='flex-start'>
        <div className={classes.textSection}
        onClick={()=>{
            selectNote(note,index)}}>
            <ListItemText
            primary={note.title}
            secondary={removeHTMLTags(note.body.substring(0,30))+'...'}>
            </ListItemText>
        </div>
        <DeleteIcon onClick={()=>deleteNote(note)} 
        className={classes.deleteIcon}>
        </DeleteIcon>
        </ListItem>
        </div> 
        );
}
 
export default withStyles(styles)(SideBarItem);