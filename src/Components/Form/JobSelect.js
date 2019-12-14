import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import {useStyles} from '../useStyles';

const jobs = [
    {
        value: "Frontender",
        label: "Frontend-разработчик"
    },
    {
        value: "Analyst",
        label: "Аналитик"
    },
    {
        value: "BackEnder",
        label: "BackEnd-разработчик"
    },
    {
        value: "Support",
        label: "Тех. поддержкa"
    }
];

export default function JobSelect(props) {
    const classes = useStyles();
    let personJob=props.personJob;
    console.log(personJob);
    const handleChange = event => {
        console.log(event.target.value);
    };
    return (
        <div className={classes.root}>
            <TextField
                required
                id="standard-select-job"
                select
                label="Обязательно к заполнению"
                value={props.personJob}
                onChange={props.handleInputChange}
                helperText="Должность, занимаемая сотрудником"
                name="job"
            >
                {jobs.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </div>
    );
}