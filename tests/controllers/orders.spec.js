import request from "supertest";
import supertest from "supertest";
import app from "../../app.js";
import { jest } from "@jest/globals";
import { connect, clear, close } from "../db.js";

// Setup connection to the database
beforeAll(async () => await connect());
beforeEach(async () => await clear());
afterAll(async () => await close());

// Testing all get requests.
describe("GET /orders", () => {
    
    describe("No parameters , checking for response", () => {
        //return all entries

        test("getting 200 response", async () => {
            const response = await request(app).get("/orders");
            expect(response.statusCode).toBe(200);
        })

    })

    describe("from paremeter, stating the date from", () => {
        //parse the date, check if its valid.
        //send a request to the database.
        //return all entries from given date.
        test("getting 200 response", async () => {
            const response = await request(app).get("/orders?from=2022-05-19");
            expect(response.statusCode).toBe(200);
        })

        //different date format.
        test("getting 200 response", async () => {
            const response = await request(app).get("/orders?from=2022-09-19T09:48:46.267Z");
            expect(response.statusCode).toBe(200);
        })
    })
})

let mockObject = {
        "customerName": "James Bond",
        "amount": "96 NIS",
        "address": "Oranim 3, Givaat-shmuel",
        "paymentType": "CREDIT",
        "items": [
            {
                "itemID": 1,
                "itemName": "Large Pizza",
                "Quantity": 5
            }
        ],
}

// Testing all post requests.
describe("POST /orders", () => {
    
    describe("Checking normal post request", () => {
        
        //post request with mock data.
        test("getting 200 response", (done) => {
            const response = request(app).post("/orders")
            .send(mockObject)
            .expect(200)
            .then(res => {
                expect(res.body._id).toBeTruthy();
                done();
            });
        })

    })
})