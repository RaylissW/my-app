import React from "react";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import {useStyles} from '../useStyles';

export default function RadioEmployed(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Уволен?</FormLabel>
                    <RadioGroup
                        aria-label="position"
                        name="employed"
                        value={props.personEmployed}
                        onChange={props.handleInputChange}
                        row
                    >
                        <FormControlLabel
                            value="Yes"
                            control={<Radio color="primary" />}
                            label="Да"
                            labelPlacement="start"
                        />
                        <FormControlLabel
                            value="No"
                            control={<Radio color="primary" />}
                            label="Нет"
                            labelPlacement="start"
                        />
                    </RadioGroup>
                </FormControl>
        </div>
    );
}