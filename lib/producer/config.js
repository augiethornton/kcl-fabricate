'use strict'

module.exports = {
  kinesis : {
    // The region to send service requests to
    region : 'us-east-1',
    // The endpoint URI to send requests to
    endpoint : 'http://kinesis.docker/',
    // Your AWS access key ID
    accessKeyId : 'key',
    // Your AWS secret access key
    secretAccessKey : 'secret',
    // The name of the stream to be used during creation
    stream : 'mystream',
    // How many partitions you would like the stream created with
    shards : 2,
    // How many records to write to your Kinesis stream
    recordsToWrite : 10
  }
}
