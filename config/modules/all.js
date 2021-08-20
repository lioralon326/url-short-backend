"use strict";
const redis_1 = require("@appolo/redis");
module.exports = async function (app) {
    if (process.env.LOCAL) {
        require('dotenv').config({ path: `config/env/all.env` });
    }
    app.module.use(redis_1.RedisModule.for({ connection: process.env.redis }));
};
//# sourceMappingURL=all.js.map