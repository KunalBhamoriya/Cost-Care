const transectionModel = require('../models/transectionModel')
const moment = require('moment')


const getALLTransection = async (req,res) => {
    try{
        const {frequency, selectedDate, type } = req.body;
        const transections = await transectionModel.find({
            ...(frequency !== "custom" ? {
                date:{
                    $gt : moment().subtract(Number(frequency), 'd').toDate()
                },
            }:{
                date:{
                    $gte: selectedDate[0],
                    $lte: selectedDate[1],
                }
            }),
            userid: req.body.userid,
            ...(type !== 'all' && {type})
        });
        res.status(200).json(transections);
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}


//edit controller
const editTransection = async (req,res) => {
    try{
        await transectionModel.findOneAndUpdate({_id:req.body.transectionId}, 
            req.body.payload
        );
    res.status(200).send("Edit Successfully");
    } catch(error){
        console.log(error);
        res.status(500).json(error)
    }
}


//Delete Contoller
const deleteTransection = async (req,res) => {
    try{
        await transectionModel.findOneAndDelete({_id:req.body.transectionId})
        res.status(200).send('Transection Deleted');
    } catch(error){
        console.log(error)
        res.status(500).json(error);
    }
}

//add controller
const addTransection = async (req,res) => {
    try{
        const newTransection = new transectionModel(req.body);
        await newTransection.save();
        res.status(201).send("transection Created")

    } catch (error){
        console.log(error)
        res.status(500).json(error);
    }
}

module.exports = {getALLTransection, addTransection, editTransection, deleteTransection};
