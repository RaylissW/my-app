import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {useStyles} from './useStyles';



export default function MakeList(props) {
    const classes = useStyles();
    const handleListItemClick = (event, index) => {
        props.changeSelectedIndex(index);
        //props.deletePerson.selectedIndex=index;
       // props.formChange.selectedIndex=(index);
    };
    const persons = props.persons;
    const listItems = persons.map((person,index) =>
            <ListItem key={index}
                      button
                      selected={props.selectedIndex === index}
                      onClick={event => handleListItemClick(event, index)}
                      onDoubleClick={event => handleListItemClick(event,undefined)}
                      >
                <ListItemText primary={person.name}/>
            </ListItem>
    );
    return (
        <div className={classes.toolbar}>
            <List >
                {listItems}
            </List>
        </div>
    );
}