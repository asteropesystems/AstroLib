// <reference path="../../typings/index.d.ts" />
// <reference path="../../scripts/time.ts" />
// <reference path="../../scripts/date.ts" />
// <reference path="../../scripts/sun.ts" />

describe('In the file sun.ts', () =>{
    let sut: AstroLib.Sun;

    let date;
    let lat;
    let long;
    let position;
    let sunTimes;

    beforeEach(() =>{
        date = new Date("2019-06-19");
        lat = 45.00;
        long = 2.67;
        position = { azimuth: -3.102702486267067, altitude: -0.37629863789588613 }

        sunTimes = {
            "solarNoon": "2019-06-19T11:51:52.202Z",
            "nadir": "2019-06-18T23:51:52.202Z",
            "sunrise": "2019-06-19T04:03:28.630Z",
            "sunset": "2019-06-19T19:40:15.773Z",
            "sunriseEnd": "2019-06-19T04:07:09.178Z",
            "sunsetStart": "2019-06-19T19:36:35.225Z",
            "dawn": "2019-06-19T03:26:02.738Z",
            "dusk": "2019-06-19T20:17:41.665Z",
            "nauticalDawn": "2019-06-19T02:36:16.761Z",
            "nauticalDusk": "2019-06-19T21:07:27.642Z",
            "nightEnd": "2019-06-19T01:30:12.240Z",
            "night": "2019-06-19T22:13:32.164Z",
            "goldenHourEnd": "2019-06-19T04:48:43.968Z",
            "goldenHour": "2019-06-19T18:55:00.435Z"
          }

        sut = new AstroLib.Sun();
    })

    describe('getSunPosition', ()=>{
        it('should have altitude= -0.37629863789588613 and azimuth= -3.102702486267067', ()=>{
            expect(sut.getSunPosition(date, lat, long)).toEqual(position);
        })
    })

    describe('getSunTimes', ()=>{
        it('should be equal to 2458653.5', ()=>{
            var solarNoon = '2019-06-19T11:51:52.202Z';
            var actual = sut.getSunTimes(date, lat, long);
            var actualSolarNoon = actual.solarNoon.toISOString();

            expect(actualSolarNoon).toEqual(solarNoon);
        })
    })

});

