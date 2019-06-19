// <reference path="../../typings/index.d.ts" />
// <reference path="../../scripts/date.ts" />

describe('In the file date.ts', () =>{
    let sut: AstroLib.DateConverter;

    let date;
    let julianDate;

    beforeEach(() =>{
        date = new Date("2019-06-19");
        julianDate = 2458653.5;

        sut = new AstroLib.DateConverter();
    })

    describe('convertDateToJulianDate', ()=>{
        it('should be equal to 2458653.5', ()=>{
            expect(sut.convertDateToJulianDate(date)).toEqual(2458653.5);
        })
    })

    describe('convertJulianDateToDate', ()=>{
        it('should be equal to date for June 19 2019', ()=>{
            expect(sut.convertJulianDateToDate(julianDate)).toEqual(date);
        })
    })

    describe('convertToDays', ()=>{
        it('should be equal to 7108.5 for June 19 2019', ()=>{
            expect(sut.convertToDays(date)).toEqual(7108.5);
        })
    })
});

