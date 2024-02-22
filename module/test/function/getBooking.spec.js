import request from "supertest";
import { baseUrl } from "../../data/config.js";

async function getBookingAll(){
    let response = await request(baseUrl) 
        .get("/booking")
        
    return response
}

async function getBookingParams(paramFirstName, paramLastName){
    let response = await request(baseUrl) 
    .get(`/booking`+`?firstname=${paramFirstName}&lastname=${paramLastName}`)
        
    return response
}

async function getBookingId(bookingId){
    let response = await request(baseUrl) 
        .get(`/booking/${bookingId}`)
        
    return response
}

export const getBooking = {
    all : getBookingAll,
    params : getBookingParams,
    id : getBookingId,
}