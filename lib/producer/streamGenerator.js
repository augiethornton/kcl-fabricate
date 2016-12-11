'use strict'

const streamItems = require('./streamItems')


function streamGenerator(totalShards) {

  const shards = []

  for (let i = 0 ; i < totalShards ; i++) {
    shards.push('partition-' + i)
  }

  return {
    getRandomStreamData: function() {
      const streamItem = streamItems[Math.floor(Math.random() * streamItems.length)]
      const shard = shards[Math.floor(Math.random() * shards.length)]

      const data = {
        streamItem: streamItem,
        shard: shard
      }

      return data
    }
  }

}

module.exports = streamGenerator
