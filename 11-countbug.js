module.exports = (client) => {
    client.on('message', async (message) => {
        const { member, content, guild } = message
        if (message.author.bot) return;
        if (message.channel.id === "730029372697870347"){
            console.log("channel detected")
            const number = content.toLowerCase() 
            const fs = require('fs');
            const counter = require('./counter.json')

            let rawdata = fs.readFileSync('./counter.json');
            let data = JSON.parse(rawdata);
            if ((data.result.messagecount +1) != number ){
                message.reply('that is the wrong number, I will start with 1, you can start counting at 2.')
                data.result.splice(1,1);
                let result = {
                    name : "counter",
                    messagecount : 1
                }
                let newdata = JSON.stringify(result, null, 2);
                fs.writeFile('student-3.json', newdata, (err) => {
                    if (err) throw err;
                console.log('Data written to file');
                console.log(`${newdata}`)
                });
            console.log('This is after the write call');
            }
            else { 
                let correctnumber = (data.result.messagecount +1)
                let correctresult = {
                    name : "counter",
                    messagecount : correctnumber
                }
                data.result.splice(1,1)
                let newcorrect = JSON.stringify(correctresult, null, 2);
                fs.writeFile('counter.json', correctresult, (err) => {
                    if (err) throw err;
                    console.log('something went wrong');
                });
            console.log(`New number correctly added (${newcorrect})`)
            }

        }}
    )}