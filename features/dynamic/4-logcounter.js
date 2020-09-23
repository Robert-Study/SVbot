const logcountSchema = require('@schemas/1-logcountuser')
const totalstudytimeSchema = require('@schemas/10-totalstudytimeschema')
const logCache = {}

module.exports = (client) => { }

module.exports.addLog = async (UserID, timeLog) => {
  const GuildID = "703937875720273972"
  console.log('Running findOneAndUpdate()')

  const result = await logcountSchema.findOneAndUpdate(
    {
      GuildID: GuildID,
      UserID
    },
    {
      UserID,

      $inc: {
        daily: timeLog,
        weekly: timeLog,
        monthly: timeLog,
        alltime: timeLog

      },
    },
    {
      upsert: true,
      new: true,
    }
  )
  console.log(result)

  const total = await logcountSchema.findOneAndUpdate(
    {
      GuildID: GuildID,
      UserID: 'anon'
    },
    {
      UserID: 'anon',

      $inc: {
        daily: timeLog,
        weekly: timeLog,
        monthly: timeLog,
        alltime: timeLog
      },
    },
    {
      upsert: true,
      new: true,
    }
  )

}

module.exports.getLog = async (UserID) => {
  const cachedValue = logCache[`${UserID}`]
  if (cachedValue) {
    return cachedValue
  }

  console.log('running logsearch')

  const result = await logcountSchema.findOne({
    UserID
  })
  console.log('Result:', result)

  let timeLog = 0
  if (result) {
    timeLog = result.timeLog
  } else {
    console.log('Insert document')
    await new logcountSchema({
      UserID,
      timeLog
    }).save()
  }
  logCache[`${UserID}`] = timeLog
  return timeLog
}