const { expect } = require("@jest/globals");
const { italic } = require("ansi-styles");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Initialization", () =>{
    it("Should create an object type of Employee", () =>{
        const manager = new Manager();
        expect(manager instanceof Manager).toEqual(true);
        expect(manager instanceof Employee).toEqual(true);
    })

    it("Verify data from constructor", () =>{
        const manager = new Manager("Tom", 1, "email@gmail.com", 123);
        expect(manager.getName()).toEqual("Tom");
        expect(manager.getId()).toEqual(1);
        expect(manager.getEmail()).toEqual("email@gmail.com");
        expect(manager.getOfficeNumber()).toEqual(123);
        expect(manager.getRole()).toEqual("Manager");
    });
});