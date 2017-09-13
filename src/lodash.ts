import lodash = require('lodash')

export default {
  get ary(): typeof lodash.ary { return fetch('lodash/ary') },
  get compact(): typeof lodash.compact { return fetch('lodash/compact') },
  get get(): typeof lodash.get { return fetch('lodash/get') },
  get identity(): typeof lodash.identity { return fetch('lodash/identity') },
  get mapValues(): typeof lodash.mapValues { return fetch('lodash/mapValues') },
  get maxBy(): typeof lodash.maxBy { return fetch('lodash/maxBy') },
  get padEnd(): typeof lodash.padEnd { return fetch('lodash/padEnd') },
  get partial(): typeof lodash.partial { return fetch('lodash/partial') },
  get pick(): typeof lodash.pick { return fetch('lodash/pick') },
  get property(): typeof lodash.property { return fetch('lodash/property') },
  get result(): typeof lodash.result { return fetch('lodash/result') },
  get set(): typeof lodash.set { return fetch('lodash/set') },
  get sortBy(): typeof lodash.sortBy { return fetch('lodash/sortBy') },
  get sortedUniqBy(): typeof lodash.sortedUniqBy { return fetch('lodash/sortedUniqBy') },
  get uniq(): typeof lodash.uniq { return fetch('lodash/uniq') },
  get zipObject(): typeof lodash.zipObject { return fetch('lodash/zipObject') },
}

const cache: any = {}

function fetch(s: string) {
  if (!cache[s]) {
    cache[s] = require(s)
  }
  return cache[s]
}
