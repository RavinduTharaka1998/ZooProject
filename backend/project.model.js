const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Projects = new Schema({
    tittle: {
        type: String
    },
    owner: {
        type: String
    },
    amount: {
        type: String
    },
    description: {
        type: String
    },
    type: {
        type: String
    },
    duration: {
        type: String
    }
}, {
    collation: 'projects'
});

module.exports = mongoose.model('Projects',Projects);