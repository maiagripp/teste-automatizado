const media = require('../src/media.js')

describe('media', () => {
    it('calcula a média de um único número', () => {
      const r =  media ([ 10 ]);
      expect (r).toBe(10)
    })

    it('calcula a média de dois números', () => {
      const r =  media ([ 10, 20 ]);
      expect (r).toBe(15)
    })

    it('não passar argumento gera um erro', () => {
     expect(() => {
         media();
     }).not.toThrow(TypeError);

     expect(() => {
         media();
     }).toThrow(/números/);
    })

    it('passar array vazio gerar um erro', () => {
        expect(() => {
            media([])
        }).toThrow(/vazio/)
    })
})