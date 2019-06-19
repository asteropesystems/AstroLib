// <reference path="../../typings/index.d.ts" />
// <reference path="../../scripts/time.ts" />
// <reference path="../../scripts/date.ts" />
// <reference path="../../scripts/sun.ts" />
describe('In the file sun.ts', function () {
    var sut;
    var date;
    var lat;
    var long;
    var position;
    beforeEach(function () {
        date = new Date("2019-06-19");
        lat = 45.00;
        long = 2.67;
        position = { azimuth: -3.138708999166892, altitude: 0.7309219114456494 };
        sut = new AstroLib.Sun();
    });
    describe('getSunPosition', function () {
        it('should be equal to 2458653.5', function () {
            expect(sut.getSunPosition(date, lat, long)).toEqual(position);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VuU3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1blNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0RBQWdEO0FBQ2hELDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0MsNENBQTRDO0FBRTVDLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtJQUMzQixJQUFJLEdBQWlCLENBQUM7SUFFdEIsSUFBSSxJQUFJLENBQUM7SUFDVCxJQUFJLEdBQUcsQ0FBQztJQUNSLElBQUksSUFBSSxDQUFDO0lBQ1QsSUFBSSxRQUFRLENBQUM7SUFFYixVQUFVLENBQUM7UUFDUCxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDOUIsR0FBRyxHQUFHLEtBQUssQ0FBQztRQUNaLElBQUksR0FBRyxJQUFJLENBQUM7UUFDWixRQUFRLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQTtRQUV4RSxHQUFHLEdBQUcsSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDN0IsQ0FBQyxDQUFDLENBQUE7SUFFRixRQUFRLENBQUMsZ0JBQWdCLEVBQUU7UUFDdkIsRUFBRSxDQUFDLDhCQUE4QixFQUFFO1lBQy9CLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEUsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtBQUVOLENBQUMsQ0FBQyxDQUFDIn0=