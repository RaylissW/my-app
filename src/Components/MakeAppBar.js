import React from "react";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";


export default function MakeAppBar(props) {

    return (
                <AppBar position={"absolute"}>
                    <Toolbar>
                        {(props.selectedIndex == undefined) ?
                            <Button  className="Add" onClick={() => props.addPerson()}
                                    color="inherit">
                                Добавить
                            </Button>
                            :
                            <Button disabled  className="Add" onClick={() => props.addPerson()}
                                    color="inherit">
                                Добавить
                            </Button>
                        }
                        {(props.selectedIndex == undefined) ?
                            <Button disabled  className="Delete"
                                    color="inherit" onClick={() => props.deletePerson()}>
                                Удалить
                            </Button>
                            : <Button   className="Delete" color="inherit"
                                      onClick={() => props.deletePerson()}>
                                Удалить
                            </Button>
                        }
                    </Toolbar>
                </AppBar>
    );
}
