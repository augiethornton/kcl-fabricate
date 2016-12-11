'use strict'

const chai = require('chai')
const expect = chai.expect
const streamGenerator = require('../lib/producer/streamGenerator')


describe('Stream Generator', function() {

  var totalShards
  var data

  before(function () {
    totalShards = 2
    data = streamGenerator(totalShards).getRandomStreamData()
  })

  it('generates a stream item', function () {
    let streamItem = data.streamItem

    expect(streamItem).to.not.be.empty
    expect(streamItem).to.contain.all.keys('attributes', 'body')
  })

  it('generates a partition from total given shards', function () {
    let shard = data.shard

    expect(shard).to.not.be.empty
    expect(shard).to.have.length.above(10)
  })

})
