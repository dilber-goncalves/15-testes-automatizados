import soma from "./soma";

describe ('teste de soma', () => {
    test('deve somar dois numeros', () => {
        expect(soma(3, 8)).toBe(11);
        })
    });

    test('verificar soma incorreta', () => {
        expect(soma(3, 8)).not.toBe(10);
    });

