const Note = require('../models/noteModel');

const createNote = async (req,res)=>{
    try{
        const note = new Note(req.body);
        await note.save();
        res.status(201).send(note);
    }
    catch(error){
        res.status(400).send(error);
    }
};

const getNotes = async (req,res)=>{
    try{
        const notes = await Note.find();
        res.status(200).send(notes);
    }
    catch(error){
        res.status(500).send(error);
    }
};

const getSingleNote = async (req,res)=>{
    try{
        const note = await Note.findById(req.params.id);
        if(!note){
            return res.status(404).send({error:`Note id ${req.params.id} is invalid`});
        }
        res.status(200).send(note);
    }
    catch(error){
        res.status(500).send(error);
    }
};

const updateNote = async(req,res)=>{
    try{
        const updatedNote = await Note.findByIdAndUpdate(req.params.id,
            {...req.body,updatedAt:Date.now()},
            {new:true,runValidators:true}
            );
            if(!updatedNote){
                res.status(404).send({error:`Note id ${req.params.id} is invalid title content has to be non empty`});
            }
            res.status(202).send(updatedNote);
    }catch(error){
        res.status(400).send(error);
    }
};

const deleteNote = async(req,res)=>{
    try{
        const note = await Note.findByIdAndDelete(req.params.id);
        if(!note){
            return res.status(404).send({error:`Note id ${req.params.id} is invalid`});
        }
        res.status(200).send({message:`successfully deleted ${note.title}`});
    }catch(error){
        res.status(400).send(error);
    }
};

module.exports = {
    createNote,
    getNotes,
    getSingleNote,
    updateNote,
    deleteNote,
};
