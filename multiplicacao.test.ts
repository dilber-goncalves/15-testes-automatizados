import multiplicacao from "./multiplicacao";

describe('teste de multiplicacao', () => {
    test('deve multiplicar dois numeros', () => {
        expect(multiplicacao(6.5, 2)).toBeCloseTo(13);
        })
    });

    test('verificar multiplicacao incorreta', () => {
        expect(multiplicacao(6, 2)).not.toBeCloseTo(5);
    }); 