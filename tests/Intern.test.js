const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Initialization", () =>{
    it("Should create an object type of Employee", () =>{
        const intern = new Intern();
        expect(intern instanceof Intern).toEqual(true);
        expect(intern instanceof Employee).toEqual(true);
    })

    it("Verify data from constructor", () =>{
        const intern = new Intern("Tom", 1, "email@gmail.com", "GW");
        expect(intern.getName()).toEqual("Tom");
        expect(intern.getId()).toEqual(1);
        expect(intern.getEmail()).toEqual("email@gmail.com");
        expect(intern.getSchool()).toEqual("GW");
        expect(intern.getRole()).toEqual("Intern");
    });
});