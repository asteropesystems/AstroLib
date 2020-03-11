// <reference path="../../typings/index.d.ts" />
// <reference path="../../scripts/time.ts" />

describe('In the file time.ts', () =>{
    let sut: AstroLib.TimeConverter;

    let date;
    let julianDate;
    let longitude;
    let hours;
    let minutes;
    let seconds;
    let rightAscension;
    let h;
    let declination;
    let latitude;
    let cardinal;
    let time: AstroLib.Time;
    let UThours;
    let UTminutes;
    let UTseconds;

    beforeEach(() =>{
        date = new Date(2019, 5, 19, 10, 20, 30);
        julianDate = 2458653.5;
        longitude = -3;
        hours = 16;
        minutes = 22;
        seconds = 15;
        rightAscension = 16.45;
        h = 4;
        declination = 10.00;
        latitude = 55.33;
        cardinal = 'W';
        UThours = 15;
        UTminutes = 25;
        UTseconds = 38;
        time = new AstroLib.Time(UThours, UTminutes, UTseconds);

        sut = new AstroLib.TimeConverter();
    })

    describe('calculateMeanSiderealTime', ()=>{
        it('should be equal to 44.44358588568866', ()=>{
            expect(sut.calculateMeanSiderealTime(date, longitude)).toEqual(44.44358588568866);
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

    describe('calculateH', ()=>{
        it('should be equal to 6.984643', ()=>{
            expect(sut.calculateH(declination, latitude)).toEqual(6.984643);
        })
    })

    describe('calculateUtRiseTime', ()=>{
        it('should be equal to 6.984643', ()=>{
            expect(sut.calculateUtRiseTime(latitude, longitude, rightAscension, declination, cardinal, julianDate)).toEqual(time);
        })
    })

});


