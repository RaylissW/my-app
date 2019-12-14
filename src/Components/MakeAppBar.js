import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {useStyles} from './useStyles';


export default function MakeAppBar(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <Typography>Список Сотрудников</Typography>
                        <Button className={classes.commandButton} className="Add" onClick={()=>props.addPerson()} color="inherit">
                            Добавить
                        </Button>
                        <Button className={classes.commandButton} className="Delete" color="inherit" onClick={()=>props.deletePerson()}>
                            Удалить
                        </Button>
                    </Toolbar>
                </AppBar>
        </div>
    );
}
