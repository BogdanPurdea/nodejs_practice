module.exports = function (app) {

    //get data from db
    app.get('/api/person/:id', function (req, res) {
        res.json({ firstname: 'John', lastname: 'Doe' });
    });

    //save to the db
    app.post('/api/person', function (req, res) {
        res.send('Thank you for the JSON data!');
        console.log(req.body.firstname);
        console.log(req.body.lastname);
    });

    //delete from db
    app.delete('/api/person/:id', function (req, res) {

    });
}