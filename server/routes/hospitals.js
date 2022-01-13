const express = require("express");
const router = express.Router();
const { ReadFromFile } = require("../functions/DataManipulation");
const insuranceFile = "./assets/data/insurances.json";
const hospitalsFile = "./assets/data/hospitals.json";
const profilesFile = "./assets/data/profiles.json";

router
    .route("/")
    .get((req, res) => {
        const hospitals = ReadFromFile(hospitalsFile);
        res.status(200).json(hospitals);
    })

router
    .route("/:hospitalId")
    .get((req, res) => {
        const hospital = ReadFromFile(hospitalsFile).find(hospital => hospital.id === req.params.hospitalId);
        if (!hospital) {
            return res.status(404).send("Hospital not found.");
        }

        res.status(200).json(hospital);
    })

module.exports = router;