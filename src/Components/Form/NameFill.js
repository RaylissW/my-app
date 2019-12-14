import React from "react";
import TextField from "@material-ui/core/TextField";
import {useStyles} from '../useStyles';

export default function NameFill(props) {
    const classes = useStyles();
    /*
    let labeltext;
    if (props.error.fillError===true)
        labeltext = props.error.errorText;
        else  labeltext= "Обязательно к заполнению";
        */
    console.log(props.error.fillError? 'Поле не заполнено!' : 'Обязательно к заполнению');

    return props.error.fillError ? (
        <div className={classes.root}>
            <TextField
                error
                required
                id="standard-required"
                label= {props.error.fillError? 'Поле не заполнено!' : 'Обязательно к заполнению'}
                placeholder="ФИО"
                helperText="Фамилия Имя Отчество сотрудника"
                fullWidth
                margin="normal"
                onChange={props.handleInputChange}
                value={props.personName}
                name="name"
            />
        </div>
    ) : (
        <div className={classes.root}>
            <TextField
                required
                id="standard-required"
                label= {props.error.fillError? 'Поле не заполнено!' : 'Обязательно к заполнению'}
                placeholder="ФИО"
                helperText="Фамилия Имя Отчество сотрудника"
                fullWidth
                margin="normal"
                onChange={props.handleInputChange}
                value={props.personName}
                name="name"
            />
        </div>
    );
}