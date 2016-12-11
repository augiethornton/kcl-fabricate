'use strict'

const streamGenerator = require('./streamGenerator')
const util = require('util')


function streamProducer(kinesis, config) {

  const streamData = streamGenerator(config.shards)

  function createKinesisStream(callback) {
    const params = {
      ShardCount: config.shards,
      StreamName: config.stream
    }

    kinesis.createStream(params, function(err, data) {
      if (err) {
        if (err.code !== 'ResourceInUseException') {
          callback(err)
          return
        }
        else {
          console.log(util.format('Re-using stream: %s', config.stream))
        }
      }
      else {
        console.log(util.format("%s doesn't exist. Creating a new stream with that name ..",
        config.stream))
      }

      describeKinesisStream(callback)
    })
  }

  function describeKinesisStream(callback) {

    const params = { StreamName: config.stream }

    kinesis.describeStream(params, function(err, data) {
      if (err) {
        console.log(err)
        return
      }
      else {
        console.log(data)
        callback(null)
      }
    })
  }

  function writeToKinesis() {

    const data = streamData.getRandomStreamData()

    const params = {
      Data: JSON.stringify(data),
      PartitionKey: data.shard,
      StreamName: config.stream
    }

    kinesis.putRecord(params, function(err, data) {
      if (err) {
        console.log(err, err.stack)
      }
      else {
        console.log(data)
      }
    })
  }

  return {
    run: function() {
      createKinesisStream(function(err) {
        if (err) {
          console.log(err)
          return
        }
        let count = 0
        while (count < config.recordsToWrite) {
          setTimeout(writeToKinesis, 1000)
          count++
        }
      })
    }
  }
}

module.exports = streamProducer
