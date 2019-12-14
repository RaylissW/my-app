import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainBody from "./Components/MainBody";
import MakeForm from './Components/Form/MakeForm';

const handleInputChange = require('./helpers').handleInputChange;


class App extends React.Component {
    constructor (props){
        super(props);
        this.state={
            persons: [
                {name:"Олег",job:"Frontender",date: new Date ("1989.02.12"),gender: "Male",employed:"Yes",mates:["Maxim", "Kristina"]},
                {name:"Максим",job:"Support",date:new Date ("2000.11.26"),gender: "Male", employed:"No", mates:["Liam","Derek"]} ,
                {name:"Лиам",job:"Analyst",date:new Date ("1999.08.1"),gender: "Male", employed:"No",mates:["Derek"]},
                {name:"Дерек",job:"BackEnder",date:new Date ("1994.07.30"),gender: "Male",employed:"Yes",mates:[]},
                {name:"Алиса",job:"Frontender",date:new Date ("2000.06.14"),gender: "Female",employed:"No",mates:[]},
            ],
            selectedIndex:undefined,
            newPerson:{name:"",job: "",date:new Date ("1989.02.12"),gender: "",employed:"",mates:[]}
        }

    }
    handleInputChange(event) {
        this.setState(handleInputChange(this.state, event));
        /*const target = event.target;
        const value = target.type === 'select' ? target.checked : target.value;
        const componentName = target.name;
        const persons = this.state.persons.slice();
        persons[this.state.selectedIndex][componentName]= value;
        this.setState({...this.state, persons});*/
    }
    changeSelectedIndex (index){
        this.setState({...this.state, selectedIndex: index});
    }
    //@todo при удалении ставить селектед индекс в андефаинд
    deletePerson () {
        if (undefined!==this.state.selectedIndex) {
            const persons = this.state.persons.slice();
            persons.splice(this.state.selectedIndex, 1);
            const selectedIndex=this.state.selectedIndex;
            this.setState({...this.state, persons,selectedIndex: undefined});
        }
    }
    addPerson (){
        if (undefined==this.state.selectedIndex) {
            const persons = this.state.persons.slice();
            const newPerson=this.state.newPerson;
            persons.push(newPerson);
            this.setState({...this.state, persons,newPerson:{name:"",job: "",date:new Date ("1989.02.12"),gender: "",employed:"",mates:[]},selectedIndex:persons.length-1});
        }
    }
    render () {

        return (
            <div className="App">
                <MainBody
                    {...this.state}
                    deletePerson={()=>this.deletePerson()}
                    changeSelectedIndex={(index)=>this.changeSelectedIndex(index)}
                    handleInputChange={(event)=>this.handleInputChange(event)}
                    addPerson={()=>this.addPerson()}
                />
            </div>
        );
    }
}

export default App;
