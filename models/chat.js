const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema({
    studentName: {
        type: String
    },
    teacherName: {
        type: String
    },
    chatID: {
        type: String
    },
    subject: {
        type: String
    },
    date: {
        type: Date
    },
    question: {
        type: String
    },
    answer: {
        type: String
    }
    
})


const Chat = mongoose.model('Chat', chatSchema)

module.exports = Chat