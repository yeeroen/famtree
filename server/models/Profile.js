const mongoose = require('mongoose');
const { Schema } = mongoose;

const profileSchema = new Schema({
    name: String,
    birth: Number,
    death: Number
});

mongoose.model('profiles', profileSchema);