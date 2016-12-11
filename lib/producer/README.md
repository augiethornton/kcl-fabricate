# Stream producer

* Reads configuration and creates an Amazon Kinesis stream if it doesn't exist in the
  specified region.

* Ensures the stream exists by calling Amazon Kinesis using the describeStream operation.

* Generates random stream item data records, batches them up to a value specified by
  config.streamProducer.recordsToWrite, and makes a [PutRecords][nodejs-kinesis-putrecords]
  call to write all records to the real fake Kinesis stream running as a docker service.
