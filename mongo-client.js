var MongoClient = require('mondodb').MongoClient;
var ObjectId=require('mongodb').ObjectId;
var async = require('async');
var assert = require('assert');

var url ='mongodb://localhost:27017/recipesapp';

var db;

