const express = require('express')
const app = express()

const got = require('got')

app.get('/weather', async (_, res) => {
  await got('https://www.metaweather.com/api/location/8775/').then(
    (response) => {
      res.send(response.body)
    }
  )
})

app.use(express.static('public'))

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
