import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import React from "react";
import MakeAppBar from './MakeAppBar';
import MakeList from './MakeList';
import MakeForm from './Form/MakeForm';
import {useStyles} from './useStyles';
import Grid from "@material-ui/core/Grid";
import './styles.css';
const drawerWidth = 400;



export default function MainBody(props) {
    const classes = useStyles();
    return (
        <div className="appscreen">
            <div className="appbar" >

                   <CssBaseline/>
                    < MakeAppBar deletePerson={props.deletePerson} addPerson={props.addPerson} selectedIndex={props.selectedIndex}/>
            </div>
            <div container className="grid-container">
                <div
                    container
                    className="grid-list"
                >
                    <br/><br/><br/>
             <MakeList persons={props.persons} selectedIndex={props.selectedIndex} changeSelectedIndex={props.changeSelectedIndex}/>
                </div>

                <div
                    container
                    className="grid-form"
                >
            <main className={classes.content}>
                <br/><br/><br/>
                 <MakeForm persons={props.persons} selectedIndex={props.selectedIndex} newPerson={props.newPerson} handleInputChange={props.handleInputChange} error={props.error}/>
            </main>
                </div>
            </div>
        </div>
    );
}
