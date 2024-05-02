const List = require("../models/List");

const getAllLists = async (req, res) => {

    try{
        const tasksList = await List.find();
        return res.render("index", { tasksList });
    }catch(err) { res.status(500).send({error: err.message})}

}

const createList = async (req, res) =>{
    const list = req.body;

    if(!list.list) {
        return res.redirect("/");
    }


    try {
        await List.create(list);
        return res.redirect("/");
    } catch (err) {
        res.status(500).send({error: err.message})
    }
}


const getById = async (req, res) => {
    const list = await List.findOne({ _id: req.params.id });
    const tasksList = await List.find();

    res.render("index", {list, tasksList})
}


module.exports = {
     getAllLists,createList,
     getById,
};