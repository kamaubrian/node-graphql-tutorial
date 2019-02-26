[![Build Status](https://travis-ci.org/mtotodev05/node-graphql-tutorial.svg?branch=master)](https://travis-ci.org/mtotodev05/node-graphql-tutorial)
# node-graphql-tutorial
A Simple graphql tutorial on node js with grapqhl and firebase

## Installation
1. Clone the repo
2. `under api, create config/ then put your service-account.json, ` 
3. Run `npm install`
4. Run `npm run start`
5. `http://localhost:3000/api/v1/graphql`
6. Use the provided graphiql interface provided to test the below requests.

### Sample Requests
```
 /api/v1/graphql
 
 Fetching posts: 
 
    query{
      posts {
        description
        title
        author
      }
    }
    
 Creating Posts: 
 
     mutation {
       createPost(postInput:{author:"Brian Kamau",title:"Out with you",description:"It has been real",date:"24th Nov 2018"}){
         title
         description
       }
     }
   
    
    
   
```

For a detailed tutorial, checkout this [wiki](https://github.com/mtotodev05/node-graphql-tutorial/wiki/node-graphql-firestore-api-tutorial).


