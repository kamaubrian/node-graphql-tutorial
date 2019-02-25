const {messagesCollections,getAllPosts} = require('../../model/database');


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
            return {
                title: post.title,
                description: post.description,
                author: post.author,
                date: post.date
            }
        } catch (err) {
            throw err;
        }
    },

    posts: async () => {
        try {
            const fetchedPosts = await getAllPosts();

            return await fetchedPosts.docs.map(posts => {
                return {
                    title: posts._fieldsProto.title.stringValue,
                    description: posts._fieldsProto.description.stringValue,
                    author: posts._fieldsProto.author.stringValue,
                    date: posts._fieldsProto.date.stringValue
                }
            });

        } catch (err) {
            throw err;
        }
    }
};