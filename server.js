/* Core Dependencies */
const express = require('express')
const app = express()

/* Package Dependencies */
const got = require('got')

/* Static Serve */
app.use(express.static('public'))

/* Route */
app.get('/weather', async (_, res) => {
  await got('https://www.metaweather.com/api/location/8775/').then(
    (response) => {
      res.send(response.body)
    }
  )
})

/* Start Server */
app.listen(3000, () => {
  console.log(
    'App listening on port 3000\n\u001b[1;34m➡ http://localhost:3000\u001b[0m'
  )
})
