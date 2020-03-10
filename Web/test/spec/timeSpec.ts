// <reference path="../../typings/index.d.ts" />
// <reference path="../../scripts/time.ts" />

describe('In the file time.ts', () =>{
    let sut: AstroLib.TimeConverter;

    let date;
    let julianDate;
    let lon;
    let hours;
    let minutes;
    let seconds;
    let rightAscension;
    let h;

    beforeEach(() =>{
        date = new Date("2019-06-19");
        julianDate = 2458653.5;
        lon = -3;
        hours = 16;
        minutes = 22;
        seconds = 15;
        rightAscension = 16.45;
        h = 4;

        sut = new AstroLib.TimeConverter();
    })

    describe('calculateMeanSiderealTime', ()=>{
        it('should be equal to 263.9349363367073', ()=>{
            expect(sut.calculateMeanSiderealTime(date, lon)).toEqual(263.9349363367073);
        })
    })

    describe('convertHoursMinutesSecondsToDecimal', ()=>{
        it('should be equal to 16.37083', ()=>{
            expect(sut.convertHoursMinutesSecondsToDecimal(hours, minutes, seconds)).toEqual(16.37083);
        })
    })

    describe('calculateLstRise', ()=>{
        it('should be equal to 12.45', ()=>{
            expect(sut.calculateLstRise(rightAscension, h)).toEqual(12.45);
        })
    })

    describe('calculateLstSet', ()=>{
        it('should be equal to 20.45', ()=>{
            expect(sut.calculateLstSet(rightAscension, h)).toEqual(20.45);
        })
    })

});


