import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {useStyles} from './useStyles';


export default function MakeAppBar(props) {
    const classes = useStyles();

    return (
                <AppBar position={"absolute"} className={classes.appBar}>
                    <Toolbar>
                        {(props.selectedIndex == undefined) ?
                            <Button className={classes.commandButton} className="Add" onClick={() => props.addPerson()}
                                    color="inherit">
                                Добавить
                            </Button>
                            :
                            <Button disabled className={classes.commandButton} className="Add" onClick={() => props.addPerson()}
                                    color="inherit">
                                Добавить
                            </Button>
                        }
                        {(props.selectedIndex == undefined) ?
                            <Button disabled  className={classes.commandButton} className="Delete"
                                    color="inherit" onClick={() => props.deletePerson()}>
                                Удалить
                            </Button>
                            : <Button  className={classes.commandButton} className="Delete" color="inherit"
                                      onClick={() => props.deletePerson()}>
                                Удалить
                            </Button>
                        }
                    </Toolbar>
                </AppBar>
    );
}
