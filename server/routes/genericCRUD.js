const express = require('express');
const _ = require('lodash');
const User = require('../models/User')
const Deal = require('../models/Deal')

const simpleCrud = (Model, extensionFn) => {
    let router  = express.Router();

    // Detect paths from model
    let notUsedPaths = ['_id','updated_at','created_at','__v'];
    let paths = Object.keys(Model.schema.paths).filter(e => !notUsedPaths.includes(e));
    
    if(extensionFn){
        router = extensionFn(router);
    }
    // CRUD: RETRIEVE
    router.get('/',(req,res,next) => {
        Model.find()
            .sort('-updated_at')
            .then( objList => res.status(200).json(objList))
            .catch(e => next(e))
    })

    router.get('/transaction/:id', (req, res, next) => {
        const {id} = req.params
        Model.findOne({'_id': id}).populate('seller', 'name')
        .then(transaction => {
            console.log(transaction)
            res.status(200).json(transaction);
        })
        .catch(e => next(e))
    })

    router.get('/:id', (req, res, next) => {
        const {id} = req.params
        Model.find({_id: id})
        .then( obj => {
            res.status(200).json(obj)})
        .catch(e => next(e))
    })
    

    router.get('/profile/:id', (req, res, next) => {
        const {id} = req.params
        Model.find({_id: id}).populate({path: 'operations', populate: { path: 'seller', select:{'_id': 0,'name': 1} , model: 'User'}})
        .then( obj => {
            res.status(200).json(obj)})
        .catch(e => next(e))
    });
    
    // CRUD: CREATE
    router.post('/',(req,res,next) => {
        console.log(req.body)
        let object = _.pickBy(req.body, (e,k) => paths.includes(k));
        Model.create(object)
            .then( obj => res.status(200).json(obj))
            .catch(e => next(e))
    })

    router.post('/createtransaction/',(req,res,next) => {
        let object = _.pickBy(req.body, (e,k) => paths.includes(k));
        d = new Deal({...object})
        d.save()
        .then( () => 
                User.findByIdAndUpdate(d.seller,
                {$push: {operations: d.id}},
                {safe: true, upsert: true}))
        .then( obj => {
            res.status(200).json({status:'updated',obj});
        })
        .catch(e => next(e))
    })
    
    // CRUD: UPDATE

    router.post('/addOper/:buyer',(req,res,next) => {
        const {buyer} = req.params;
        Model.findByIdAndUpdate(buyer,
            {$push: {operations: req.body.operations}},
            {safe: true, upsert: true})
            .then( obj => {
                res.status(200).json({status:'updated',obj});
            })
            .catch(e => next(e))
    });

    router.patch('/:id',(req,res,next) => {
        const {id} = req.params;
        const object = _.pickBy(req.body, (e,k) => paths.includes(k));
        const updates = _.pickBy(object, _.identity);

        Model.findByIdAndUpdate(id, updates ,{new:true})
            .then( obj => {
                res.status(200).json({status:'updated',obj});
            })
            .catch(e => next(e))
    })

    router.patch('/transaction/:id',(req,res,next) => {
        const {id} = req.params;
        const object = _.pickBy(req.body, (e,k) => paths.includes(k));
        const updates = _.pickBy(object, _.identity);
        Model.findByIdAndUpdate(id, updates ,{new:true})
            .then( obj => {
                res.status(200).json({status:'updated',obj});
            })
            .catch(e => next(e))
    })
    
    // CRUD: DELETE
    router.delete('/:id',(req,res,next) => {
        const {id} = req.params;
        Model.findByIdAndRemove(id)
            .then( obj => {
                if(obj){
                    res.status(200).json({status:`Removed from db`});
                }else{
                    throw new Error("Not existing ID");
                }
            })
            .catch(e => next(e))
    })
    
    router.use((err,req,res,next) => {
        res.status(500).json({error:true, message:err.message});
    })

    return router;
}


module.exports = simpleCrud;


