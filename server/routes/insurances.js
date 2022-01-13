const express = require("express");
const router = express.Router();
const { ReadFromFile } = require("../functions/DataManipulation");
const insuranceFile = "./assets/data/insurances.json";
const hospitalsFile = "./assets/data/hospitals.json";
const profilesFile = "./assets/data/profiles.json";

router
    .route("/")
    .get((req, res) => {
        const insurancePolicies = ReadFromFile(insuranceFile);
        res.status(200).json(insurancePolicies);
    })

router
    .route("/:policyId")
    .get((req, res) => {
        const policy = ReadFromFile(insuranceFile).find(policy => policy.id === req.params.policyId);
        if (!policy) {
            return res.status(404).send("Policy not found.");
        }

        res.status(200).json(policy);
    })

module.exports = router;