const logcountSchema = require('@schemas/2-logcountschema')
const totalstudytimeSchema = require('@schemas/10-totalstudytimeschema')
const logCache = {}

module.exports = (client) => { }

module.exports.addLog = async (UserID, timeLog) => {

  console.log('Running findOneAndUpdate()')

  const result = await logcountSchema.findOneAndUpdate(
    {
      UserID,
    },
    {
      UserID,
      barcode: 101,
      $inc: {
        timeLog,
      },
    },
    {
      upsert: true,
      new: true,
    }
  )

  const total = await totalstudytimeSchema.findOneAndUpdate(
    {
      UserID: 'anon'
    },
    {
      UserID: 'anon',
      barcode: 101,
      $inc: {
        timeLog,
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