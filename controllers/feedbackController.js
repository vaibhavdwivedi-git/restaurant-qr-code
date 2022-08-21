const Feedback = require('../models/feedback');

const create_feedback = (req, res) => {
    const id = req.params.id;
    const feedback = new Feedback({
        name: req.body.name,
        phone: req.body.phone,
        student: req.body.student,
        restaurant: id,
        budget: req.body.budget,
        taste: req.body.taste,
        service: req.body.service,
        worth: req.body.worth,
        recommend: req.body.recommend,
        review: req.body.review,
    });
    feedback.save()
        .then((result) => {
            res.redirect('/thankyou/'+id);
        })
        .catch((err) => {
            console.log(err);
        });
} 

module.exports = {create_feedback}