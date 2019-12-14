import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import NameFill from './NameFill';
import JobSelect from './JobSelect';
import DateOfBirth from './DateOfBirth';
import RadioGender from './RadioGender';
import RadioEmployed from './RadioEmployed';
import {useStyles} from '../useStyles';


export default function MakeForm(props) {
    const classes = useStyles()
  //  const selectedIndex = props.formChange.selectedIndex;
    const person= (undefined==props.selectedIndex) ? props.newPerson : props.persons[props.selectedIndex];

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <Card className={classes.card}>
                    <CardContent>
                        <Typography>Карточка сотрудника:</Typography>
                        <Grid item>
                            <NameFill personName={person.name} handleInputChange={props.handleInputChange} error={props.error}/>
                        </Grid>
                        <Grid item>
                            <JobSelect personJob={person.job} handleInputChange={props.handleInputChange} selectedIndex={props.selectedIndex}/>
                        </Grid>
                        <Grid item>
                            <DateOfBirth  personDate={person.date} handleInputChange={props.handleInputChange}/>
                        </Grid>
                        <Grid item>
                            <RadioGender personGender={person.gender} handleInputChange={props.handleInputChange}/>
                        </Grid>
                        <Grid item>
                            <RadioEmployed personEmployed={person.employed} handleInputChange={props.handleInputChange}/>
                        </Grid>
                    </CardContent>
                </Card>

            </form>
        </div>
    );
}