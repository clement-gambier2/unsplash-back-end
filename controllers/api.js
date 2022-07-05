const Picture = require('../models/picture');
module.exports = class API{
    //get all pictures
    static async getAllPictures(req,res){
        try{
            const pictures = await Picture.find();
            res.status(200).json(pictures);
        }
        catch(err){
            res.status(404).json({message:err.message});
        }
    }

    //create a picture
    static async createPicture(req,res){
        const picture = req.body;
        console.log(picture);

        try{
            await Picture.create(picture);
            //res.status(201).json({message:"Picture created successfully"});
            res.status(201).json({message: `${picture.name} created successfully`});
        }
        catch(err){
            res.status(400).json({message:err.message});
        }
    }
}