const College = require("../models/College");

async function handleGetAllUndergrad(req, res) {

    try {

        let unique = [];
        let colleges = await College.find({ level: "Under Graduate" })
        colleges.map((c) => {
            if (!unique.includes(c.programme)) {
                unique.push(c.programme)

            }
        })
            

        res.json(unique).status(200)
    }
    catch (err) {
        res.json(err).status(500)
    }
};

async function handleGetUndergrad(req, res) {

    let { programme } = req.params;
    let query = { ...req.query };

    try {
        let colleges = await College.find({ level: "Under Graduate", programme: programme, ...query })
        res.json(colleges).status(200)
    }
    catch (err) {
        res.json(err).status(500)
    }
};

async function handleGetAllPostgrad(req, res) {

    try {

        let unique = [];
        let colleges = await College.find({ level: { $ne: "Under Graduate" } })

        colleges.map((c) => {

            if (!unique.includes(c.programme)) {
                unique.push(c.programme)

            }

        })

        res.json(unique).status(200)
    }
    catch (err) {
        res.json(err).status(500)
    }
}

async function handleGetPostgrad(req, res) {
    let { programme } = req.params;
    let query = { ...req.query };

    try {

        let colleges = await College.find({ level: { $ne: "Under Graduate" }, programme: programme, ...query })

        res.json(colleges).status(200);


    }
    catch (err) {
        res.json(err).status(500)
    }
}

module.exports = { handleGetAllUndergrad, handleGetUndergrad, handleGetAllPostgrad, handleGetPostgrad };