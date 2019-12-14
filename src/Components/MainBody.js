import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import React from "react";
import MakeAppBar from './MakeAppBar';
import MakeList from './MakeList';
import MakeForm from './Form/MakeForm';
import {useStyles} from './useStyles';

const drawerWidth = 300;



export default function MainBody(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <MakeAppBar deletePerson={props.deletePerson} addPerson={props.addPerson}/>
            {props.persons[0].name
            }
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <div className={classes.toolbar} />
             <MakeList persons={props.persons} selectedIndex={props.selectedIndex} changeSelectedIndex={props.changeSelectedIndex}/>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                 <MakeForm persons={props.persons} selectedIndex={props.selectedIndex} newPerson={props.newPerson} handleInputChange={props.handleInputChange} error={props.error}/>
            </main>
        </div>
    );
}
