//this example of api automation using common js
const request = require("supertest");
const { expect } = require("chai");

const baseUrl = "https://restful-booker.herokuapp.com";

//Describe the test suite
describe("Get All Booking", () => {
    it('Positive - success get all booking', () => {
        const response = request(baseUrl) //base Url
            .get("/booking") //endpoint

        //Assertion with chai
        expect(response.status).to.equal(200)
    })
})