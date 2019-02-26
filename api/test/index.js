const request = require('supertest');
const expect = require('expect');
const server = require('../../server');

afterEach(() => {
    server.close();
});

describe('/Testing Correct Urls', () => {
    it('it should return 404 on invalid route', (done) => {
        request(server)
            .get('/api/v1/invalid')
            .expect(404, done);
    })
});

describe('/Testing Get Capabilities', () => {
    let requestBody = {
        // language=GraphQL Schema
        query: `
           query{
                posts{
                    description
                    author
                }
           }   
        `
    };
    it('it should fetch all posts', (done) => {
        request(server)
            .post('/api/v1/graphql')
            .send(requestBody)
            .expect(200, done);
    });
});

describe('/Testing Post Capabilities', () => {
    let requestBody = {
        // language=GraphQL Schema
        query:`
        
        
        `
    };

})