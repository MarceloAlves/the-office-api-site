const fs = require('fs')
const path = require('path')
const { fileURLToPath } = require('url')

const API_URL = process.env.API_URL

fs.writeFileSync('.next/_redirects', `/api/* ${API_URL}/:splat 200`)
console.log('Created .next/_redirects')
