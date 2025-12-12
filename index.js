const RPC = require('discord-rpc');
const activeWin = require('active-win');

const clientId = 'DISCORD BOT APPLICATION ID HERE';
const rpc = new RPC.Client({ transport: 'ipc' });

rpc.on('ready', () => {
    console.log('RPC connected');

    setInterval(async () => {
        let win;

        try {
            win = await activeWin();
        } catch (err) {
            console.error("Error getting active window:", err);
        }

        if (win && win.owner && win.owner.name) {
            rpc.setActivity({
                details: 'Active on Windows 11',
                state: `Using: ${win.owner.name}`,
                instance: false
            });
        } else {
            rpc.setActivity({
                details: 'Active on Windows 11',
                state: 'Idle',
                instance: false
            });
        }
    }, 5000); // updates every 5 seconds for faster testing
});

rpc.login({ clientId }).catch(console.error);

