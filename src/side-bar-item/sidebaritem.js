import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeHTMLTags } from "../helpers";

const SideBarItem = ({_index, _note, classes, selectedNoteIndex,
  selectNote,
  deleteNote
}) => {

  //cremoved const here
  selectNote = (n, i) => {
    selectNote(n, i);
  };

  //removed cosnt here
  deleteNote = (note) => {
    if (window.confirm(`Are you sure you want to delete : ${note.title}`))
      deleteNote(note);
  };

  return (
    <div key={_index}>
      <ListItem
        className={classes.listItem}
        selected={selectedNoteIndex === _index}
        alignItems="flex-start"
      >
        <div
          className={classes.textSection}
          onClick={() => selectNote(_note, _index)}>

          <ListItemText
            primary={_note.title}
            secondary={
              _note.body
                ? removeHTMLTags(_note.body.substring(0, 30)) + "..."
                : null
            }
          ></ListItemText>
        </div>
        <DeleteIcon  onClick={() => deleteNote(_note)}
          className={classes.deleteIcon}></DeleteIcon>
      </ListItem>
    </div>
  );
};

export default withStyles(styles)(SideBarItem);
