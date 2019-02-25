# node-graphql-tutorial
A Simple graphql tutorial on node js with grapqhl and firebase

## Installation
1. Clone the repo
2. `under api, create config/ then put your service-account.json, ` 
3. Run `npm install`
4. Run `npm run start`

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

```

For a detailed tutorial, checkout this [wiki](https://github.com/mtotodev05/node-graphql-tutorial/wiki/node-graphql-firestore-api-tutorial).


