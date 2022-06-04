//const media = require('../src/media.js')
import {media} from '../src/media.js'

describe('media', () => {

    it.each([
        [[10], 10],
        [[10, 20], 15]
    ])('fornecendo %s da %s', (entrada, saida) => {
        const r = media(entrada);
        expect(r).toBe(saida);
    })

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

    it('passar um número gera um erro', () => {
        expect(() => {
            media(5)
        }).toThrow(/array/)
    })

    it.todo('passar um array com erros gera erro')
})