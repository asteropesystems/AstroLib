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

    beforeEach(() =>{
        date = new Date("2019-06-19");
        lat = 45.00;
        long = 2.67;
        position = { azimuth: -3.138708999166892, altitude: 0.7309219114456494 }

        sut = new AstroLib.Sun();
    })

    describe('getSunPosition', ()=>{
        it('should be equal to 2458653.5', ()=>{
            expect(sut.getSunPosition(date, lat, long)).toEqual(position);
        })
    })

});

