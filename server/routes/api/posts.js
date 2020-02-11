const express = require('express');
const mongodb = require('mongodb');


const router = express.Router();

//get posts
router.get('/',async (req, res) =>{
    const posts = await loadPostsCollection();
    res.json(await posts.find({}).toArray());

});



//add posts
router.post('/', async (req,res) => {
    const posts = await loadPostsCollection();
    console.log(req.body.text);
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date(),

    });
    res.status(201).send();
});

// Delete posts
router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});




async function loadPostsCollection(){
    const client = await mongodb.MongoClient.connect('mongodb+srv://eventapp:event123@cluster0-y2ze7.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });

    return client.db('eventapp').collection('posts');
}

module.exports = router;