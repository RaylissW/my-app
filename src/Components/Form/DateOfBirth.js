import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from "@material-ui/pickers";
import "date-fns";
import {useStyles} from '../useStyles';
import {handleInputChange} from "../../helpers";


export default function DateOfBirth(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Дата рождения:"
                        value={props.personDate}
                        onChange={(pickedDate)=>{
                            const event={
                                target: {
                                    value: pickedDate,
                                    name: "date"
                                }
                            };
                            props.handleInputChange(event)
                        }}
                        name="date"
                        KeyboardButtonProps={{
                            "aria-label": "change date"
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
        </div>
    );
}