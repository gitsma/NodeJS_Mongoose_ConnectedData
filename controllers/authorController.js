const Author = require('../models/Author');


const createAuthor = async(req, res) => {
    if(!req.body.name) res.status(404).send('Not Found');

    const author  = new Author({    
        name: req.body.name,
        bio: req.body.bio,
        website: req.body.website
    });
    const result = await author.save();
    res.status(200).send(result);
    console.log(result);
};

    const getAllAuthors = async (req, res) => {
        const result = await Author.find();
        res.send(result);
};

const getAuthorById = async(req, res) => {
    const result = await Author.find({_id: req.params.id});
    if(result.length === 0 ) res.status(400).send('Author Not Found');
    res.status(200).send(result);
}


module.exports = {
    createAuthor,
    getAllAuthors,
    getAuthorById
}
