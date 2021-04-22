const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

describe("Initialization", () =>{
    it("Should create an object type of Employee", () =>{
        const employee = new Employee();
        expect(employee instanceof Employee).toEqual(true);
    })

    it("Verify data from constructor", () =>{
        const employee = new Employee("Tom", 1, "email@gmail.com");
        expect(employee.getName()).toEqual("Tom");
        expect(employee.getId()).toEqual(1);
        expect(employee.getEmail()).toEqual("email@gmail.com");
        expect(employee.getRole()).toEqual("Employee");
    });
});