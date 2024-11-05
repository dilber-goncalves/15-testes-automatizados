import subtracao from "./subtracao";

describe('teste de subtracao', () => {
    test('deve subtrair dois numeros', () => {
        expect(subtracao(6, 2)).toBeCloseTo(4);
        })
    });

    test('verificar subtracao incorreta', () => {
        expect(subtracao(6, 2)).not.toBeCloseTo(5);
    }); 