const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    LOCAL_SERVER: 'http://localhost:3000',
    API_IMAGE_URL : 'https://image.tmdb.org/t/p/w500/',
    API_KEY: "df42ffb66765fffa7f68c3991e2c663e",
    MONGO_URI: "mongodb+srv://movie_auth:movie_auth15@moviecluster.ihluh.mongodb.net/movie_auth?retryWrites=true&w=majority",
    JWT_SECRET: 'sdgdfhyesyhryujsedgdfghydfvgsedtrerfhgasr'
  }
}