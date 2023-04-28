const { Nuxt } = require('nuxt')

const config = require('./nuxt.config.js')

const nuxt = new Nuxt({ ...config, dev: false })

module.exports = (req, res) =>
    nuxt.ready().then(() => nuxt.server.app(req, res))