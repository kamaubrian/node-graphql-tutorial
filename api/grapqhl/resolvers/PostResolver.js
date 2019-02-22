const messagesCollections = require('../../model/database');

module.exports = {
    createPost: async (args) => {
        try {
            const post = {
                title: args.postInput.title,
                description: args.postInput.description,
                author: args.postInput.author,
                date: args.postInput.date
            };
            const savedPost = await messagesCollections.add(post);
            return{
                title: post.title,
                description: post.description,
                author: post.author,
                date: post.date
            }
        } catch (err) {
            throw err;
        }
    }
};