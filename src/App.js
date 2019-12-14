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
                {name:"Олег",job:"Frontend-разработчик",date: new Date ("1989.02.12"),gender: "Мужчина",employed:"Трудоустроен"},
                {name:"Максим",job:"Тех. поддержкa",date:new Date ("2000.11.26"),gender: "Мужчина", employed:"Уволен"} ,
                {name:"Лиам",job:"Аналитик",date:new Date ("1999.08.1"),gender: "Мужчина", employed:"Уволен"},
                {name:"Дерек",job:"BackEnd-разработчик",date:new Date ("1994.07.30"),gender: "Мужчина",employed:"Трудоустроен"},
                {name:"Алиса",job:"Frontend-разработчик",date:new Date ("2000.06.14"),gender: "Женщина",employed:"Уволен"},
            ],
            selectedIndex:undefined,
            newPerson:{name:"",job: "",date:new Date ("1989.02.12"),gender: "",employed:""},
            error:{
                fillError:false,
            }
        }

    }
    handleInputChange(event) {
        this.setState(handleInputChange(this.state, event));
    }
    changeSelectedIndex (index) {
        if (!this.state.error.fillError)
            this.setState({...this.state, selectedIndex: index});
        else if (this.state.error.fillError && this.state.selectedIndex == undefined)
            this.setState({...this.state, selectedIndex: index,error:{fillError: false}});
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
            let newPerson=this.state.newPerson;
            let selectedIndex=this.state.selectedIndex;
            const error=this.state.error;
            if (!newPerson["name"]=="") {
                persons.push(newPerson);
                newPerson={name:"",job: "",date:new Date ("1989.02.12"),gender: "",employed:""};
                selectedIndex=persons.length-1;
            }
            else
                error.fillError=true;
            this.setState({...this.state, persons,newPerson,selectedIndex});
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
