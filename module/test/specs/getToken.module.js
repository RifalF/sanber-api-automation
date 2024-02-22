//this example of api automation using ES module js
import request from "supertest";
import { expect } from "chai";
import { createToken } from "../function/createToken.spec.js";

const baseUrl = "https://restful-booker.herokuapp.com";

describe("Get Token Scenario", () => {
    let token;
    let bookingId;
    let payload;
    it("Positive - Success Get Token", async () => {
        const payload =  {
            "username" : "admin",
            "password" : "password123"
        }
        //send request
        const response = await request (baseUrl)
            .post("/auth") //endpoint
            .send(payload) //request body
            .set("Content-Type", "application/json") //header

        expect((await response).status).to.equal(200)
        token = (await response).body.token
        //console.log(await token)
    }).timeout(5000)
    
    it("Positive - Success implement Token", async () => {
        //PUT Method
        const response = await request (baseUrl)
            .post("/booking"+bookingId) //endpoint
            .send(payload) //request body
            .set("Cookie",token) //header
    })

    it("Import token", async () => {
        const token = await createToken ()
        console.log(await token)
    }).timeout(5000)
})