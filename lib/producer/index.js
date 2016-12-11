'use strict'

const config = require('./config')
const streamProducer = require('./streamProducer')
const aws = require('aws-sdk')
const kinesis = new aws.Kinesis({
  region: config.kinesis.region,
  endpoint: config.kinesis.endpoint,
  accessKeyId: config.kinesis.accessKeyId,
  secretAccessKey: config.kinesis.secretAccessKey
})

module.exports = {
  fabricate: function() {
    streamProducer(kinesis, config.kinesis).run()
  }
}
