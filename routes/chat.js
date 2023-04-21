var express = require('express');
var router = express.Router();
const Chat = require('../models/chat')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send("Testing")
});


// Create the student chat and insert it into database
router.post('/createChat', async (req, res) => {

    const chat = new Chat(req.body)
    console.log(chat)

    try {
        await chat.save()
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }

})

// Find the chat by chatID and then update the answer and teacher name
router.post('/updateReply/:ChatID', async (req, res) => {

    const reply = req.body

    try {
        const filter = { chtID: req.body.ChatID }
        await Chat.findOneAndUpdate(filter, { answer: reply.answer, teacherName: reply.teacherName }, {new: true, setDefaultsOnInsert: true})
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }

})

// To get all chats (every subject)
router.get('/getAllChats', async (req, res) => {

    const allChats = await Chat.find({})
    res.send(allChats)

})

// TO get subject wise chats
router.get('/getChats/:subject', async (req, res) => {

    const filter = {subject: req.params.subject}  
    const subjectChats = await Chat.find(filter)
    res.send(subjectChats)

})



module.exports = router;
