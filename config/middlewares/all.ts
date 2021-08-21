import bodyParser = require("body-parser");
import {IRequest,IResponse,NextFn}  from '@appolo/route';
import {App}  from '@appolo/core';

function CorsMiddleware (req:IRequest, res: IResponse, next: NextFn) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
}

export = function (app: App) {
    app.route.use(CorsMiddleware)
}
