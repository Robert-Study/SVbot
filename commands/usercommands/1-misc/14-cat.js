module.exports = {
    commands: ['cat'],
    minArgs: 0,
    maxArgs: 0,
    callback: async (message, arguments, text) => {
        //requiring and calling axios.npm
        const axios = require('axios')
        axios
        //getting the image from the API
            .get('https://api.thecatapi.com/v1/images/search')
            .then((res) => {
                console.log('RES:', res.data[0].url)
                message.reply(res.data[0].url)
            })
            .catch((err) => {
                console.error('ERR:', err)
            })
    }
}