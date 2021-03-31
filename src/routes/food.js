'use strict';
const express = require('express');
const validator = require('../middlewares/validator.js');
const Food = require('../models/data-collection-class');
const foodModel = require('../models/food.js')
const food = new Food(foodModel);
const route = express.Router();

route.post('/', addRecord);
route.get('/', getAll);
route.get('/:id', validator, getOneRecord);
route.put('/:id', validator, updateRecord);
route.delete('/:id', validator, deleteRecord);

async function addRecord(req, res,next) {
    const object = req.body;
    try{
      const resObj = await food.create(object);
      res.status(201).json(resObj);
    } catch (err){
      next('something wrong in add Record function!!')
    }
  }

async function getAll(req, res,next) {
  try{
    const Objs = await food.read();
    res.json(Objs);
  }catch (err){
    next('something wrong in getAll function!!')
 }
}

async function getOneRecord(req, res, next) {
  try{
    const resObj = await food.read(req.params.id);
    res.json(resObj[0]);
  } catch (err){
    next(err);
  }
}



async function updateRecord(req, res,next) {
  const object = req.body;
  try {
    const resObj = await food.update(req.params.id, object);
    res.json(resObj); 
  }catch (err){
    next(err);
  }
}

async function deleteRecord(req, res,next) {
  try{
    const resObj = await food.delete(req.params.id);
    res.json(resObj);
  }catch (err){
    next(err);
  }
}

module.exports = route;