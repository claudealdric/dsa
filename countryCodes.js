async function getCountryName(code) {
  const https = require('https')
  const httpsRequest = new Promise((resolve, reject) => {
    const req = https.get(
      'https://jsonmock.hackerrank.com/api/countries?page=20',
      (res) => {
        res.setEncoding('utf8')
        let body = ''
        res.on('data', (chunk) => {
          body += chunk
        })
        res.on('end', () => {
          resolve(JSON.parse(body))
        })
      }
    )

    req.on('error', (err) => {
      reject(err)
    })

    req.end()
  })

  return await httpsRequest
}

async function testFunction() {
  return await getCountryName('LC')
}

console.log(testFunction())
