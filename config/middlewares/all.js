"use strict";
function CorsMiddleware(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
}
module.exports = function (app) {
    app.route.use(CorsMiddleware);
};
//# sourceMappingURL=all.js.map