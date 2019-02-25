const request = require('supertest');
const expect = require('expect');
const server = require('../../server');

afterEach(()=>{
    server.close();
})

describe('/Testing Correct Urls',()=>{
    it('it should return 404 on invalid route',(done)=>{
        request(server)
            .get('/api/v1/invalid')
            .expect(404,done);
    })
})