//this example of api automation using ES module js
import request from "supertest";
import { expect } from "chai";
import { getBooking } from "../function/getBooking.spec.js";

const baseUrl = "https://restful-booker.herokuapp.com";
const paramFirstName = "Sally"
const paramLastName = "Brown"
const bookingId = "78"

//Describe the test suite
describe("Get All Booking", () => {
    it('Positive - success get all booking', async () => {
        let response = await request(baseUrl) //base Url
            .get("/booking") //endpoint

        //Assertion with chai
        expect((await response).status).to.equal(200)
        onsole.log((await response).body)
    }).timeout(5000)
    it('Positive - success get all booking with param', async () => {
        let response = await request(baseUrl) //base Url
            .get(`/booking`+`?firstname=${paramFirstName}&lastname=${paramLastName}`) //endpoint with query param

        //Assertion with chai
        expect((await response).status).to.equal(200)
        console.log((await response).body)
    })
    it('Positive - success get booking id', async () => {
        let response = await request(baseUrl) //base Url
            .get(`/booking/${bookingId}`) //endpoint with query param

        //Assertion with chai
        expect((await response).status).to.equal(418)
        console.log((await response).body)
    })

})

describe("Get Booking Scenario by Function", () =>{
    it("Success get booking all", async () =>{
        const response = await getBooking.all();

        //assertion using chai
        expect((await response).status).to.equal(200)
        console.log((await response).body)
    })
})