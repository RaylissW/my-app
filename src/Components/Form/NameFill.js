import React from "react";
import TextField from "@material-ui/core/TextField";
import {useStyles} from '../useStyles';

export default function NameFill(props) {
    const classes = useStyles();
    return props.error.fillError ? (
        <div style={{display:"block"}}>
            <TextField
                error
                required
                id="standard-required"
                label= {props.error.fillError? 'Поле не заполнено!' : 'Обязательно к заполнению'}
                placeholder="ФИО"
                helperText="Фамилия Имя Отчество сотрудника"
                margin="normal"
                onChange={props.handleInputChange}
                value={props.personName}
                name="name"
            />
        </div>
    ) : (
        <div style={{display:"block"}}>
            <TextField
                required
                id="standard-required"
                label= {props.error.fillError? 'Поле не заполнено!' : 'Обязательно к заполнению'}
                placeholder="ФИО"
                helperText="Фамилия Имя Отчество сотрудника"
                margin="normal"
                onChange={props.handleInputChange}
                value={props.personName}
                name="name"
            />
        </div>
    );
}