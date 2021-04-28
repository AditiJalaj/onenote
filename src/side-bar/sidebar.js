import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../side-bar-item/sidebaritem';

const Sidebar = () => {
    return ( 
        <div>HEllo from sidebar</div>
     );
}
 
export default withStyles(styles)(Sidebar);