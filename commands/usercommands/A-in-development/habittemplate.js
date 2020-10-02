module.exports = {
    commands: ['habitadd', 'addhabit'],
    minArgs: 1,
    expectedArgs: '<!dladd 28/08/2020 Exam on...>',

    callback: async (message, arguments, text) => {
        return
        const habitschema = require('@schemas/20-habittracker')
        let guild = '703937875720273972'
        const mention = message.author
        const User = mention.id


        habits = await habitschema.find({
            GuildID: guild,
            UserID: User
        })

        if (habits) {
            for (habit of habits) {
                let days = habit.days
                let streak = habit.streak
                let task = habit.task
                let mon = habit.mon
                let tue = habit.tue
                let wed = habit.wed
                let thu = habit.thu
                let fri = habit.fri
                let sat = habit.sat
                let sun = habit.sun

                if (mon = 'yes') { let m1 = '✅' }
                if (tue = 'yes') { let tu1 = '✅' }
                if (wed = 'yes') { let w1 = '✅' }
                if (thu = 'yes') { let th1 = '✅' }
                if (fri = 'yes') { let f1 = '✅' }
                if (sat = 'yes') { let sa1 = '✅' }
                if (sun = 'yes') { let su1 = '✅' }


                let reply = `**Habits** -  ${mention}\n`

                    `mon tue wed thu fri sat sun\n---------------------------------------------\n||${m1}||${tu1}||${w1}||${th1}||${f1}||${sa1}||${su1}||${habitname}`
            }
        }
    }
}