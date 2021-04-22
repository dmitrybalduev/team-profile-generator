const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Initialization", () =>{
    it("Should create an object type of Employee", () =>{
        const engineer = new Engineer();
        expect(engineer instanceof Engineer).toEqual(true);
        expect(engineer instanceof Employee).toEqual(true);
    })

    it("Verify data from constructor", () =>{
        const engineer = new Engineer("Tom", 1, "email@gmail.com", "gitname");
        expect(engineer.getName()).toEqual("Tom");
        expect(engineer.getId()).toEqual(1);
        expect(engineer.getEmail()).toEqual("email@gmail.com");
        expect(engineer.getGithub()).toEqual("gitname");
        expect(engineer.getRole()).toEqual("Engineer");
    });
});