const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

fs
    .readdirSync(__dirname)
    .forEach(file => {
        if(file!=basename){
            const route = require(`./${file}/${file}.controller`);
            console.log(route.baseUrl,route.controller)
            router.use(route.baseUrl,route.controller)
        }
    })

module.exports = router;