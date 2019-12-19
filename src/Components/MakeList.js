import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";;



export default function MakeList(props) {
    const handleListItemClick = (event, index) => {
        props.changeSelectedIndex(index);
    };
    const persons = props.persons;
    const listItems = persons.map((person,index) =>
            <ListItem key={index}
                      button
                      selected={props.selectedIndex === index}
                      onClick={event => handleListItemClick(event, index)}
                      onDoubleClick={event => handleListItemClick(event,undefined)}
                      >
                <ListItemText primary={person.name + ", " + person.job + ", " + person.date.getDate()+"/"+ (person.date.getMonth()+1)+"/" + person.date.getFullYear()+ ", " + person.gender +", "  + person.employed}/>
            </ListItem>
    );
    return (
            <List >
                {listItems}
            </List>
    );
}