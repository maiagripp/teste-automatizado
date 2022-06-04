import {calcularImc, imcClasses} from '../src/imc'

describe('imc', () => {
    it('passar número 0 gerar erro', () => {
        expect(() => {
            calcularImc(10, 0);
        }).toThrow(/zero/);
       })

       it('classifica o IMC', () => {
        const r =  calcularImc(50, 1.90);
        expect (r).toBeCloseTo(13.85)
      })
    })
