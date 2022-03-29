/* Core Dependencies */
const e = require('express')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

/* Package Dependencies */
const got = require('got')

/* Static Serve */
app.use(express.static('public'))

/* Route */
app.get('/weather', async (req, res) => {
  const BASE_URL = 'https://www.metaweather.com/api/location'
  let location = req.query.location
  if (location.includes(' ')) location = location.replace(' ', '+')
  let data
  let errors
  try {
    const response = await got(`${BASE_URL}/search/?query=${location}`)
    data = JSON.parse(response.body)
    if (data === []) res.send('No results found')
    try {
      console.log(`${BASE_URL}/?query=${data[0]?.woeid}`)
      const response = await got(`${BASE_URL}/${data[0]?.woeid}`)
      data = JSON.parse(response.body)
      console.log(data)
    } catch (e) {
      errors += e
    } finally {
      errors ? res.status(400).send(errors) : res.send(data)
    }
  } catch (e) {
    errors += e
  }
})

/* Start Server */
app.listen(3000, () => {
  console.log(
    'App listening on port 3000\n\u001b[1;34m➡ http://localhost:3000\u001b[0m'
  )
})
