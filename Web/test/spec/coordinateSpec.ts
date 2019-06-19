// <reference path="../../typings/index.d.ts" />
// <reference path="../../scripts/time.ts" />

describe('In the file coordinate.ts', () =>{
    let sut: AstroLib.Coordinate;

    let raHours;
    let raMinutes;
    let raSeconds;

    beforeEach(() =>{
        raHours = 23.00;
        raMinutes = 2.00;
        raSeconds = 45.00;

        sut = new AstroLib.Coordinate();
    })

    describe('convertRightAscensionToDecimal', ()=>{
        it('should be equal to 23.04583', ()=>{
            expect(sut.convertRightAscensionToDecimal(raHours, raMinutes, raSeconds)).toEqual(23.04583);
        })
    })

    describe('convertHoursMinutesSecondsToDegrees', ()=>{
        it('should be equal to 345.68197', ()=>{
            expect(sut.convertHoursMinutesSecondsToDegrees(raHours, raMinutes, raSeconds)).toEqual(345.68197);
        })
    })

    describe('convertDegreesMinutesSecondsToDecimal', ()=>{
        it('should be equal to 23.04583', ()=>{
            expect(sut.convertDegreesMinutesSecondsToDecimal(raHours, raMinutes, raSeconds)).toEqual(23.04583);
        })
    })
});

