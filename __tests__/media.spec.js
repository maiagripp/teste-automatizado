const media = require('../src/media.js')

describe('media', () => {
    it('calcula a média de un único número', () => {
      const r =  media ([ 10 ]);
      expect (r).toBe(10)
    })
})