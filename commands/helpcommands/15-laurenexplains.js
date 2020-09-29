module.exports = {
    commands: ['lauren', 'laui', 'lauiexplains'],
    minArgs: 0,
    maxArgs: 1,
    callback: (message, arguments, text) => {


        message.channel.send("We have the study hall, classrooms, and private rooms for you to study in. You can stream your face like some of us or you can choose to not.\nWe plant trees on this app called forest which allows you two plant them together and create study sessions - but you don’t need to use it if you don’t want to -\nWe can create timers on here for ourselves or each other for study sessions. You can also set goals and todos on those pages,And we have many other pages dedicated to many other things.\nWhen studying, you can focus yourself to not get distracted and lock yourself in focus for deep concentration, you can also join a study team if one is running by typing !start\nby - Lauren")
    }
}