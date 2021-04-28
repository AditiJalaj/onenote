
import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import {useState} from 'react'

const Editor = ({classes}) => {
    const [text,setText]=useState('')
    const [title,setTitle]=useState('')
    const [id,setId]=useState('')

    const update=debounce(()=>{
        //not working
        console.log('updating database')
    },3000)
    
    const updateBody=async(val)=>{
        await setText(val)
        update()
    }

    return ( 
        <div className={classes.editorContainer}>
        <ReactQuill value={text} 
        onChange={updateBody}/>
        </div>
     );
}
 
export default withStyles(styles)(Editor);