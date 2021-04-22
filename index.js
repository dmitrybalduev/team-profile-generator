const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

let teamArr = [];

addManager();

function addManager() {
    inquirer.prompt([
        {
            message: "Please enter manager's name",
            name: "name"
        },
        {
            message: "Please enter manager's id",
            name: "id"
        },
        {
            message: "Please enter manager's email",
            name: "email"
        },
        // {
        //     message: "Please enter manager's office number",
        //     name: "officeNumber"
        // }
        {
            type: "number",
            message: "Please enter manager's office number",
            name: "officeNumber"
        }
    ]).then(function (data) {
            const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
            teamArr.push(manager);
            addMembers();
        });
}

function addMembers() {
    inquirer.prompt([
        {
            type: "list",
            message: "Add more team members?",
            choices: ["Add engineer", "Add intern", "No"],
            name: "answer"
        }
    ]).then(function (data) {
        switch (data.answer) {
            case "Add engineer":
                addEngineer();
                break;
            case "Add intern":
                addIntern();
                break;
            case "No":
                renderTeam();
        }
    });
}

function addEngineer() {
    inquirer.prompt([
        {
            message: "Please enter engineer's name",
            name: "name"
        },
        {
            message: "Please enter engineer's id",
            name: "id"
        },
        {
            message: "Please engineer's email",
            name: "email"
        },
        {
            message: "Please enter engineer's Github username?",
            name: "github"
        }

    ]).then(function (data) {
        let engineer = new Engineer(data.name, data.id, data.email, data.github);
        teamArr.push(engineer);
        addMembers();
    });
};

function addIntern() {
    inquirer.prompt([
        {
            message: "Please enter intern's name",
            name: "name"
        },
        {
            message: "Please enter inter's id",
            name: "id"
        },
        {
            message: "Please enter intern's email",
            name: "email"
        },
        {
            message: "Please enter intern's school",
            name: "school"
        }
    ]).then(function (data) {
        let intern = new Intern(data.name, data.id, data.email, data.school);
        teamArr.push(intern);
        addMembers();
    });
};

function renderTeam (){
    console.log(teamArr) ;
    for(let i = 0; i < teamArr.length; i++){
        let cardText = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>`;
        if(teamArr[i] instanceof Manager){
            console.log(teamArr[i] + " is type of Manager");
            cardText += `<h5 class="card-title">${teamArr[i].name}</h5>
            <h5 class="card-title">Manager</h5>
            <p class="card-text">ID: ${teamArr[i].id}</p>
            <p class="card-text">Email: ${teamArr[i].email}</p>
            <p class="card-text">Office Number: ${teamArr[i].officeNumber}</p>`
        } else if(teamArr[i] instanceof Intern){
            console.log(teamArr[i] + " is type of Intern");
        } else{
            console.log(teamArr[i] + " is type of Engineer");
        }
    }
}
