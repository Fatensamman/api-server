'use strict';
require('dotenv').config();
const { app, start} = require('../src/server.js');
const supergoose = require('@code-fellows/supergoose'); 

const request = supergoose(app);

// heading of my test
describe('server', () => {
    //  place where we do the test 
    it('handle invalid routes', async () => {
        const response = await request.get('/hhhh');
        expect(response.status).toEqual(404);
    });

    it('handle server errors', async () => {
        const response = await request.get('/bad');
        expect(response.status).toEqual(500);
    });
    it('handle invalid method', async () => {
        const response = await request.put('/bad');
        expect(response.status).toEqual(404);
    });

});
describe('clothes api server', () => {
    let id ;
    it('should be able to create a clothes  on POST /clothes', async () => {
        const response = await request.post('/api/v1/clothes').send({
            item: 'jacket',
            size: '42',
        });
        expect(response.status).toEqual(201);
        expect(response.body.item).toEqual('jacket');
        id = response.body._id;
    });
    it('should get all the Clothes on GET /clothes', async () => {
		const response = await request.get('/api/v1/clothes');
		expect(response.status).toEqual(200);
	});
    it('should be able to update an item of clothes on PUT /clothes', async () => {
        const response = await request.put(`/api/v1/clothes/${id}`).send({
            item: 't-shirt',
            size: '42',
        });
        expect(response.status).toEqual(200);
        expect(response.body.item).toEqual('t-shirt');
    });
    it('should be able to get piece by its id on Get /clothes/:id', async () => {
        const response = await request.get(`/api/v1/clothes/${id}`);
        expect(response.status).toEqual(200);
        expect(response.body.size).toEqual('42');
    });
    it('should be able to delete piece by its id on DELETE /clothes/:id', async () => {
		const response = await request.delete(`/api/v1/clothes/${id}`);
		expect(response.status).toEqual(200);
	});
});
describe('food api server', () => {
    let id ;
    it('should be able to create a food record on POST /food', async () => {
        const response = await request.post('/api/v1/food').send({
            item: 'banana',
            cost:'1.5jd',
        });
        expect(response.status).toEqual(201);
        expect(response.body.item).toEqual('banana');
        id = response.body._id;
    });
    it('should get all the food data on GET /posts', async () => {
		const response = await request.get('/api/v1/food');
		expect(response.status).toEqual(200);
	});
    it('should be able to update an item of food on PUT /food', async () => {
        const response = await request.put(`/api/v1/food/${id}`).send({
            item: 'banana',
            cost:'1.5jd',
        });
        expect(response.status).toEqual(200);
        expect(response.body.item).toEqual('banana');
    });
    it('should be able to get one record on Get /food/:id', async () => {
        const response = await request.get(`/api/v1/food/${id}`);
        expect(response.status).toEqual(200);
        expect(response.body.item).toEqual('banana');
    });
    it('should be able to delete piece by its id on DELETE /food/:id', async () => {
		const response = await request.delete(`/api/v1/food/${id}`);
		expect(response.status).toEqual(200);
	});
});