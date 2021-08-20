"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@appolo/core");
(async function () {
    try {
        await core_1.createApp().launch();
    }
    catch (err) {
        console.error("failed to launch ", err.stack);
        process.exit(1);
    }
})();
//# sourceMappingURL=app.js.map