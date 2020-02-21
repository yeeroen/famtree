const mongoose = require('mongoose');

const Profile = mongoose.model('profiles');

module.exports = app => {
    app.post('/api/profile/create', async (req, res) => {
        const { name, birth, death } = req.body;
        await new Profile({ name, birth, death }).save();
        res.send(req.user);
    });

    app.post('/api/profile/search', async (req, res) => {
        let profile;
        if(req.body.search){
            profile = await Profile.find({ name: { $regex: req.body.search , $options: 'i' }}).exec();
        }else{
            profile = await Profile.find().exec();
        }
        res.send(profile);
    });
}