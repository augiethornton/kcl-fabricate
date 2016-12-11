'use strict'

const chai = require('chai')
const expect = chai.expect
const config = require('../lib/producer/config')
const streamProducer = require('../lib/producer/streamProducer')
const aws = require('aws-sdk')
const kinesis = new aws.Kinesis({
  region: config.kinesis.region,
  endpoint: config.kinesis.endpoint,
  accessKeyId: config.kinesis.accessKeyId,
  secretAccessKey: config.kinesis.secretAccessKey
})


describe('Stream Producer', function() {

  before(function () {
    // stub
  })

  it('creates a kinesis stream', function () {
    // stubb

  })

  it('writes to a kinesis stream', function () {
    // stubb
  })

})
