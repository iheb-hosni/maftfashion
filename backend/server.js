const express = require("express");
const { MongoClient, ObjectID } = require("mongodb");
const cors = require('cors')

const bodyParser = require("body-parser");
const assert = require("assert");
const app = express();

app.use(cors());
app.use(bodyParser.json());

const MongoUrl = "mongodb://localhost:27017";
const dataBase = "MaftFashion";

MongoClient.connect(
    MongoUrl, { useNewUrlParser: true },
    (err, client) => {
        assert.equal(err, null, "dataBase connection failed");
        const db = client.db(dataBase);

        app.post("/add-post", (req, res) => {
            let newPost = req.body;
            db.collection("posts").insertOne(newPost, (err, data) => {
                if (err) res.send("cant not add new post");
                else res.send("new post added")
            })
        })

        app.post("/add-mafter", (req, res) => {
            let newMafter = req.body;
            db.collection("mafters").insertOne(newMafter, (err, data) => {
                if (err) res.send("cant not add new mafter");
                else res.send("new mafter added")
            })
        })

        app.get("/get-post", (req, res) => {
            db.collection("posts")
                .find()
                .toArray((err, data) => {
                    if (err) res.send("cant not get posts list");
                    else res.send(data)
                })
        })

        app.get("/get-mafter", (req, res) => {
            db.collection("mafters")
                .find()
                .toArray((err, data) => {
                    if (err) res.send("cant not get mafters list");
                    else res.send(data)
                })
        })

        app.get("/getonepost/:id", (req, res) => {
            let postId = ObjectID(req.params.id)
            db.collection("posts").findOne({ _id: postId }, (err, data) => {
                if (err) res.send('cant fetch post')
                else res.send(data)
            })
        })

        app.delete('/deleteonepost/:id', function (req, res) {
            db.collection('posts').findOneAndDelete({ _id: ObjectID(req.params.id) }, (err, results) => {
                if (err) res.send('erreur')
                else res.send(results)
            });
        });

        app.put('/modifyonepost/:id', (req, res) => {
            db.collection('posts').findOneAndUpdate({ _id: ObjectID(req.params.id) }, { $set: req.body }, (err, data) => {
                if (err) res.send(err);
                else res.send("post modifided")
            })
        })

        app.delete("/delete-mafter/:id", (req, res) => {
            let mafterToRemoveId = ObjectID(req.params.id)
            db.collection('mafters').findOneAndDelete({ _id: req.params.id }, (err, data) => {
                if (err) res.send('cant delete mafter')
                else res.send('mafter was delete')
            })
        })
    }
);

app.listen(3003, err => {
    if (err) console.log('server erreur');
    else console.log('server is runing on port 3003');
});

