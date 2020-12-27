const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    API_IMAGE_URL : 'https://image.tmdb.org/t/p/w500/',
    API_KEY: "df42ffb66765fffa7f68c3991e2c663e"
  }
}