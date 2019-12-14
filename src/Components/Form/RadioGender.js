import React from "react";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import {useStyles} from '../useStyles';


export default function RadioGender(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <FormControl component="fieldset">
                <FormLabel component="legend">Пол сотрудника</FormLabel>
                <RadioGroup
                    aria-label="position"
                    name="gender"
                    value={props.personGender}
                    onChange={props.handleInputChange}
                    row

                >
                    <FormControlLabel
                        value="Male"
                        control={<Radio color="primary" />}
                        label="Мужской"
                        labelPlacement="start"
                    />
                    <FormControlLabel
                        value="Female"
                        control={<Radio color="primary" />}
                        label="Женский"
                        labelPlacement="start"
                    />
                </RadioGroup>
            </FormControl>
        </div>
    );
}