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
    console.log(teamArr);
    let cards = getHtmlStarter();
    for(let i = 0; i < teamArr.length; i++){
       cards += generateCardText(teamArr[i]);
    }
    cards += ` </div>   </body>
    </html>`
    fs.writeFile('./src/index.html', `${cards}\n`, (err) =>
        err ? console.error(err) : console.log('Successfully created file!'));
}

function generateCardText(member){
    let cardText = `<div class="col">
    <div class="card h-100 bg-info mb-3">
    <div class="card-header bg-transparent">
    
    
    `

    if(member instanceof Manager){
        console.log(member + " is type of Manager");
        cardText += `<h5 class="card-title">${member.name}</h5>
        <div style="display: inline-flex;">
        <i class="far fa-angry"></i>
        <h5 class="card-title" style="margin-left: 5px;">Manager</h5>
        </div>
        </div>
        <div class="card-body" style="background-color: white;">
        <p class="card-text">ID: ${member.id}</p>
        <p>Email: <a href = "mailto: ${member.email}" class="card-text">${member.email}</a></p>
        <p class="card-text">Office Number: ${member.officeNumber}</p>`
    } else if(member instanceof Intern){
        console.log(member + " is type of Intern");
        cardText += `<h5 class="card-title">${member.name}</h5>
        <div style="display: inline-flex;">
        <i class="fas fa-book-open"></i><h5 class="card-title" style="margin-left: 5px";>Intern</h5>
        </div>
        </div>
        <div class="card-body" style="background-color: white;">
        <p class="card-text">ID: ${member.id}</p>
        <p>Email: <a href = "mailto: ${member.email}" class="card-text">${member.email}</a></p>
        <p class="card-text">School: ${member.school}</p>`
    } else{
        console.log(member + " is type of Engineer");
        cardText += `<h5 class="card-title">${member.name}</h5>
        <div style="display: inline-flex;">
        <i class="fas fa-bomb"></i><h5 class="card-title" style="margin-left: 5px";>Engineer</h5>
        </div>
        </div>
        <div class="card-body" style="background-color: white;">
        <p class="card-text">ID: ${member.id}</p>
        <p>Email: <a href = "mailto: ${member.email}" class="card-text">${member.email}</a></p>
        <p>Github: <a href="github.com/${member.github}" class="card-text">${member.github}</a></p>`
    }

    cardText += `</div>
    </div>
    </div>`;

    return cardText;
}

function getHtmlStarter(){
    return `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8" />
            <title>Team Profile</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
            <link rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
            crossorigin="anonymous"> 
            <style>
                .bg-secondary {align-items: center;
                    width: 100%;
                    height: 25vh;
                    display: flex;
                    justify-content: center;}
                
            </style>
        </head>
        <body>
            <h1 class="justify-content-center"> <span class="badge bg-secondary">Team Profile</span></h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">`
}