// <reference path="../../typings/index.d.ts" />
// <reference path="../../scripts/time.ts" />

describe('In the file time.ts', () =>{
    let sut: AstroLib.Time;

    let raHours;
    let raMinutes;
    let raSeconds;

    beforeEach(() =>{
        raHours = 23.00;
        raMinutes = 2.00;
        raSeconds = 45.00;

        sut = new AstroLib.Time();
    })

    describe('convertRightAscensionToDecimal', ()=>{
        it('should be equal to 23.04583', ()=>{
            expect(sut.convertRightAscensionToDecimal(raHours, raMinutes, raSeconds)).toEqual(23.04583);
        })
    })
});

