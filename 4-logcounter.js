const mongo = require('./mongo')
const logcountSchema = require('./schemas/2-logcountschema')
const logCache = {}

module.exports = (client) => {}

module.exports.addLog = async (UserID, timeLog) => {
    return await mongo().then(async (mongoose) => {
      try {
        console.log('Running findOneAndUpdate()')
  
        const result = await logcountSchema.findOneAndUpdate(
          {
            UserID,
          },
          {
            UserID,
            $inc: {
              timeLog,
            },
          },
          {
            upsert: true,
            new: true,
          }
        )
  
        logCache[`${UserID}`] = result.timeLog
  
        return result.timeLog
      } finally {
        mongoose.connection.close()
      }
    })
  
}

module.exports.getLog = async (UserID) => {
    const cachedValue = logCache[`${UserID}`]
        if (cachedValue) {
        return cachedValue}
    
    return await mongo().then(async (mongoose) =>{
        try {
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
                }) .save()
            }
            logCache [`${UserID}`] = timeLog
        return timeLog
        }finally{
        mongoose.connection.close()
    }
})
}