const express = require('express');
const mongodb = require('mongodb');


const router = express.Router();

//get posts
router.get('/',async (req, res) =>{
    const Events = await loadEventsCollection();
    res.json(await Events.find({}).toArray());

});



//add events
router.post('/', async (req,res) => {
    const Events = await loadEventsCollection();
    await Events.insertOne({
        eventName: req.body.eventName,
        createdAt: new Date(),

    });
    res.status(201).send();
});

// Delete Events
router.delete('/:id', async (req, res) => {
    const Events = await loadEventsCollection();
    await Events.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});




async function loadEventsCollection(){
    const client = await mongodb.MongoClient.connect('mongodb+srv://eventapp:event123@cluster0-y2ze7.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });

    return client.db('eventapp').collection('events');
}

module.exports = router;