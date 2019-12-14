export function handleInputChange(state, event) {
//function handleInputChange(state, event) {
    const target = event.target;
    //const value = target.type === 'select' ? target.checked : target.value;
    debugger;
    const value = target.value;
    const field = target.name;
    const persons = state.persons.slice();
    const newPerson=state.newPerson;
    if(undefined==state.selectedIndex)
        newPerson [field]= value;
    else
    persons[state.selectedIndex][field]= value;
    return ({...state, persons, newPerson});
}

// module.exports={handleInputChange};
