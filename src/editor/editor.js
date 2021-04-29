import React, { useEffect } from 'react';
import ReactQuill from 'react-quill';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import {useState} from 'react'
// import debounce from '../helpers';


const Editor = ({classes,selectedNote,noteUpdate}) => {
    const [text,setText]=useState('')
    const [title,setTitle]=useState('')
    const [id,setId]=useState('')

  

    let timer 
    const updateBody=()=>{
            clearTimeout(timer);
            timer=setTimeout(()=>{
              noteUpdate(id,{
                  title:title,
                  body:text
              })
            },2000)
          }


    useEffect(()=>{
        setText(selectedNote.body)
        setTitle(selectedNote.title)
        setId(selectedNote.id)
    })
    
    return ( 
        <div className={classes.editorContainer}>
        <ReactQuill 
        value={text} 
        onChange={updateBody}/>
        </div>
     );
}
 
export default withStyles(styles)(Editor);