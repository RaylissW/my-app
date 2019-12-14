export function handleInputChange(state, event) {
//function handleInputChange(state, event) {
    const target = event.target;
    //const value = target.type === 'select' ? target.checked : target.value;
    //debugger;
    const value = (target.name=="name")? target.value.trim(): target.value;
    const field = target.name;
    const persons = state.persons.slice();
    const newPerson=state.newPerson;
    const error=state.error;
    error.fillError = (field=="name" && value=="");
    if(undefined==state.selectedIndex)
        newPerson [field]= value;
    else
        persons[state.selectedIndex][field] = value;
        console.log(error.fillError);
    return ({...state, persons, newPerson, error});
}

// module.exports={handleInputChange};
