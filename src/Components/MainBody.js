import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import React from "react";
import MakeAppBar from './MakeAppBar';
import MakeList from './MakeList';
import MakeForm from './Form/MakeForm';
import {useStyles} from './useStyles';
import Grid from "@material-ui/core/Grid";

const drawerWidth = 400;



export default function MainBody(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <MakeAppBar deletePerson={props.deletePerson} addPerson={props.addPerson} selectedIndex={props.selectedIndex}/>
            <Grid container className="grid-container">
                <Grid
                    item
                    xs={4}
                    className={"grid-column"}
                >
                <div className={classes.toolbar} />
             <MakeList persons={props.persons} selectedIndex={props.selectedIndex} changeSelectedIndex={props.changeSelectedIndex}/>
                </Grid>

                <Grid
                    item
                    xs={8}
                    className={"grid-column"}
                >
            <main className={classes.content}>
                <div className={classes.toolbar} />
                 <MakeForm persons={props.persons} selectedIndex={props.selectedIndex} newPerson={props.newPerson} handleInputChange={props.handleInputChange} error={props.error}/>
            </main>
                </Grid>
            </Grid>
        </div>
    );
}
