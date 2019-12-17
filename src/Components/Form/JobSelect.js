import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const jobs = [
    {
        value: "Frontend-разработчик",
        label: "Frontend-разработчик"
    },
    {
        value: "Аналитик",
        label: "Аналитик"
    },
    {
        value: "BackEnd-разработчик",
        label: "BackEnd-разработчик"
    },
    {
        value: "Тех. поддержкa",
        label: "Тех. поддержкa"
    }
];

export default function JobSelect(props) {
    return (
        <div style={{display:"block"}}>
            <TextField
                required
                id="standard-select-job"
                select
                value={(props.selectedIndex==undefined) ? "Frontend-разработчик" : props.personJob}
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