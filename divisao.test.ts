import divisao from "./divisao";

describe('teste de divisao', () => {
    test('deve dividir dois numeros', () => {
        expect(divisao(6.6, 2)).toBeCloseTo(3.3);
        })
    });

    test('verificar subtracao incorreta', () => {
        expect(divisao(6, 2)).not.toBeCloseTo(10);
    }); 