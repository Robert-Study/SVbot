module.exports = {
    commands: ['habitadd', 'addhabit'],
    minArgs: 1,
    expectedArgs: '<!dladd 28/08/2020 Exam on...>',

    callback: async (message, arguments, text) => {
        let days = arguments[0]
        let habit = arguments.slice(1).join(" ")
        const mention = message.author
        const UserID = mention.id
        let server = guild.id

        

        let count = await annoncountschema.findOne({
            UserID
        })

        if (count) {
            for (items of count) {
                let counted = items.messageCount



                if (days = 1 || days === "mon") {
                    let day = monday
                    let savedate = 1
                }

                if (days = 2 || days === "tue") {
                    let day = tuesday
                    let savedate = 2
                }

                if (days = 3 || days === "wed") {
                    let day = wednesday
                    let savedate = 3
                }

                if (days = 4 || days === "thu") {
                    let day = thursday
                    let savedate = 4
                }

                if (days = 5 || days === "fri") {
                    let day = friday
                    let savedate = 5
                }

                if (days = 6 || days === "sat") {
                    let day = saturday
                    let savedate = 6
                }

                if (days = 7 || days === "sun") {
                    let day = sunday
                    let savedate = 7
                }

                if (days = 1 - 5 || days === "everyday") {
                    let day = weekdays
                    let savedate = 8
                }

                if (days = 1 - 7 || days === "weekday") {
                    let day = everyday
                    let savedate = 9
                }

                if (days = 6 - 7 || days === "weekend") {
                    let day = weekend
                    let savedate = 10
                }

            }
        }
    }
}
