import {App} from '@appolo/core';
import {RedisModule} from "@appolo/redis";

export = async function (app: App){
    if (process.env.LOCAL) {
        require('dotenv').config({path: `config/env/all.env`})
    }

    app.module.use(
        RedisModule.for({connection: process.env.redis}),
    )
}
