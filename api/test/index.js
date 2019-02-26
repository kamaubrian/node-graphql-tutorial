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
    let timeStamp = new Date().toString();
    let requestBody = {
        // language=GraphQL Schema
        query: `
           mutation {
                createPost(postInput:{author:"This is a test",title:"A Test",description:"It has been real",date:"${timeStamp}"}){
                    title
                    description
                }
           } 
        
        `
    };

    it('it should create a new Post', (done) => {
        request(server)
            .post('/api/v1/graphql')
            .send(requestBody)
            .expect(200, done);
    })

});

describe('Testing Invalid Request Body', () => {
    let requestBody = {
        author: 'Kamau Brian',
        title: 'This is an Invalid Request Body',
        date: new Date().toString(),
        description: 'This is very invalid'
    };

    it('it should throw an error on invalid request body',(done)=>{
        request(server)
            .post('/api/v1/graphql')
            .send(requestBody)
            .expect(400,done);
    })
});