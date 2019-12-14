const expect = require('chai').expect;

const handleInputChange = require('./helpers').handleInputChange;



describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
        const state={
            persons: [
                {name:"Oleg",job:"Frontender",date: 19/2/1989,gender: "Male",employed:"yes",mates:["Maxim", "Kristina"]},
                {name:"Maxim",job:"Analyst",date:12/3/2000,gender: "Male", employed:"no", mates:["Liam","Derek"]} ,
                {name:"Liam",job:"developer",date: 25/9/1999,gender: "Male", employed:"no",mates:["Derek"]},
                {name:"Derek",job: "developer",date:30/12/1997,gender: "Male",employed:"yes",mates:[]},
            ],
            selectedIndex: 2,
            newPerson:{name:"",job: "",date: 19/2/1989,gender: "",employed:"",mates:[]}
        };
        const expectedNewState = {
            persons: [
                {name:"Oleg",job:"EUR",date: 19/2/1989,gender: "Male",employed:"yes",mates:["Maxim", "Kristina"]},
                {name:"Maxim",job:"developer",date:12/3/2000,gender: "Male", employed:"no", mates:["Liam","Derek"]} ,
                {name:"newPeter",job:"developer",date: 25/9/1999,gender: "Male", employed:"no",mates:["Derek"]},
                {name:"Derek",job: "developer",date:30/12/1997,gender: "Male",employed:"yes",mates:[]},
            ],
            selectedIndex:2,
            newPerson:{name:"",job: "",date: 19/2/1989,gender: "",employed:"",mates:[]}
        };
        const event = {
            target: {
                checked: false,
                value: 'newPeter',
                name: 'name',
                type: 'select'
            }
        };

        expect(handleInputChange(state, event)).to.deep.equal(expectedNewState);
    });
});
