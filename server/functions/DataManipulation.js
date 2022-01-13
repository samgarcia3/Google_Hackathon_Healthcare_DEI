const { writeFileSync, readFileSync } = require("fs");

const ReadFromFile = (filePath) => {
    return JSON.parse(readFileSync(filePath));
}

const WriteToFile = (filepath, obj) => {
    writeFileSync(filepath, JSON.stringify(obj), (e) => { console.log(e) })
}

module.exports = { ReadFromFile, WriteToFile };