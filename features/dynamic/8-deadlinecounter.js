
const deadlineschema = require('@schemas/3-deadlineschema')
const logCache = {}

module.exports = (client) => { }

module.exports.addLog = async (UserID, date, dltext) => {

  console.log('Running findOneAndUpdate()')

  const result = await deadlineschema.findOneAndUpdate(
    {
      UserID,
      date,
      dltext,
    }
  )

  return


}

module.exports.getLog = async (UserID) => {
  const cachedValue = logCache[`${UserID}`]
  if (cachedValue) {
    return cachedValue
  }


  console.log('running logsearch')

  const result = await deadlineschema.findOne({
    UserID
  })
  console.log('Result:', result)

  let date = {}
  let dltext = {}
  if (result) {
    date = result.date
    dltext = result.dltext

    return (result.date, result.dltext)
  }


}