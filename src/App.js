import React from 'react';
import MainBody from "./Components/MainBody";




class App extends React.Component {
    constructor (props){
        super(props);
        this.state={
            persons: [
                {name:"Олегов Олег Олегович",job:"Frontend-разработчик",date: new Date ("1989.02.12"),gender: "Мужчина",employed:"Трудоустроен"},
                {name:"Евсеенков Максим Дмитриевич",job:"Тех. поддержкa",date:new Date ("2000.11.26"),gender: "Мужчина", employed:"Трудоустроен"} ,
                {name:"Камски Лиам Арсеньевич",job:"Аналитик",date:new Date ("1999.08.1"),gender: "Мужчина", employed:"Уволен"},
                {name:"Хейл Дерек Олегович",job:"BackEnd-разработчик",date:new Date ("1994.07.30"),gender: "Мужчина",employed:"Трудоустроен"},
                {name:"Мощанская Алиса Евгеньевна",job:"Frontend-разработчик",date:new Date ("2000.06.14"),gender: "Женщина",employed:"Трудоустроен"},
                {name:"Олегов Олег Олегович",job:"Frontend-разработчик",date: new Date ("1989.02.12"),gender: "Мужчина",employed:"Трудоустроен"},
                {name:"Евсеенков Максим Дмитриевич",job:"Тех. поддержкa",date:new Date ("2000.11.26"),gender: "Мужчина", employed:"Уволен"} ,
                {name:"Камски Лиам Арсеньевич",job:"Аналитик",date:new Date ("1999.08.1"),gender: "Мужчина", employed:"Уволен"},
                {name:"Хейл Дерек Олегович",job:"BackEnd-разработчик",date:new Date ("1994.07.30"),gender: "Мужчина",employed:"Трудоустроен"},
                {name:"Мощанская Алиса Евгеньевна",job:"Frontend-разработчик",date:new Date ("2000.06.14"),gender: "Женщина",employed:"Уволен"},
                {name:"Олегов Олег Олегович",job:"Frontend-разработчик",date: new Date ("1989.02.12"),gender: "Мужчина",employed:"Трудоустроен"},
                {name:"Евсеенков Максим Дмитриевич",job:"Тех. поддержкa",date:new Date ("2000.11.26"),gender: "Мужчина", employed:"Уволен"} ,
                {name:"Камски Лиам Арсеньевич",job:"Аналитик",date:new Date ("1999.08.1"),gender: "Мужчина", employed:"Уволен"},
                {name:"Хейл Дерек Олегович",job:"BackEnd-разработчик",date:new Date ("1994.07.30"),gender: "Мужчина",employed:"Трудоустроен"},
                {name:"Мощанская Алиса Евгеньевна",job:"Frontend-разработчик",date:new Date ("2000.06.14"),gender: "Женщина",employed:"Уволен"},
                {name:"Олегов Олег Олегович",job:"Frontend-разработчик",date: new Date ("1989.02.12"),gender: "Мужчина",employed:"Трудоустроен"},
                {name:"Евсеенков Максим Дмитриевич",job:"Тех. поддержкa",date:new Date ("2000.11.26"),gender: "Мужчина", employed:"Уволен"} ,
                {name:"Камски Лиам Арсеньевич",job:"Аналитик",date:new Date ("1999.08.1"),gender: "Мужчина", employed:"Уволен"},
                {name:"Хейл Дерек Олегович",job:"BackEnd-разработчик",date:new Date ("1994.07.30"),gender: "Мужчина",employed:"Трудоустроен"},
                {name:"Мощанская Алиса Евгеньевна",job:"Frontend-разработчик",date:new Date ("2000.06.14"),gender: "Женщина",employed:"Уволен"},
            ],
            selectedIndex:undefined,
            newPerson:{name:"",job: "Frontend-разработчик",date:new Date ("1989.02.12"),gender: "",employed:""},
            error:{
                fillError:false,
            }
        }

    }
    handleInputChange(event) {
        const target = event.target;
        const value = (target.name=="name")? target.value.replace(/^\s+/g, ''): target.value;
        const field = target.name;
        const persons = this.state.persons.slice();
        const newPerson=this.state.newPerson;
        const error=this.state.error;
        error.fillError = (field=="name" && value=="");
        if(undefined==this.state.selectedIndex)
            newPerson [field]= value;
        else
            persons[this.state.selectedIndex][field] = value;

        this.setState ({...this.state, persons, newPerson, error});
    }
    changeSelectedIndex (index) {
        if (!this.state.error.fillError)
            this.setState({...this.state, selectedIndex: index});
        else if (this.state.error.fillError && this.state.selectedIndex == undefined)
            this.setState({...this.state, selectedIndex: index,error:{fillError: false}});
    }
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
