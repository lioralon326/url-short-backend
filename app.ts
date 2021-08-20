import {createApp} from '@appolo/core';

(async function(){
    try {
        await createApp().launch();
    } catch (err) {
        console.error("failed to launch ", err.stack);
        process.exit(1);
    }
})()
