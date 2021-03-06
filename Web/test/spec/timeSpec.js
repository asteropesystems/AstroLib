// <reference path="../../typings/index.d.ts" />
// <reference path="../../scripts/time.ts" />
describe('In the file time.ts', function () {
    var sut;
    var date;
    var julianDate;
    var longitude;
    var hours;
    var minutes;
    var seconds;
    var rightAscension;
    var h;
    var declination;
    var latitude;
    var cardinal;
    var time;
    var UThours;
    var UTminutes;
    var UTseconds;
    beforeEach(function () {
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
    });
    describe('calculateMeanSiderealTime', function () {
        it('should be equal to 44.44358588568866', function () {
            expect(sut.calculateMeanSiderealTime(date, longitude)).toEqual(44.44358588568866);
        });
    });
    describe('convertHoursMinutesSecondsToDecimal', function () {
        it('should be equal to 16.37083', function () {
            expect(sut.convertHoursMinutesSecondsToDecimal(hours, minutes, seconds)).toEqual(16.37083);
        });
    });
    describe('calculateLstRise', function () {
        it('should be equal to 12.45', function () {
            expect(sut.calculateLstRise(rightAscension, h)).toEqual(12.45);
        });
    });
    describe('calculateLstSet', function () {
        it('should be equal to 20.45', function () {
            expect(sut.calculateLstSet(rightAscension, h)).toEqual(20.45);
        });
    });
    describe('calculateH', function () {
        it('should be equal to 6.984643', function () {
            expect(sut.calculateH(declination, latitude)).toEqual(6.984643);
        });
    });
    describe('calculateUtRiseTime', function () {
        it('should be equal to 6.984643', function () {
            expect(sut.calculateUtRiseTime(latitude, longitude, rightAscension, declination, cardinal, julianDate)).toEqual(time);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZVNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0aW1lU3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnREFBZ0Q7QUFDaEQsNkNBQTZDO0FBRTdDLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRTtJQUM1QixJQUFJLEdBQTJCLENBQUM7SUFFaEMsSUFBSSxJQUFJLENBQUM7SUFDVCxJQUFJLFVBQVUsQ0FBQztJQUNmLElBQUksU0FBUyxDQUFDO0lBQ2QsSUFBSSxLQUFLLENBQUM7SUFDVixJQUFJLE9BQU8sQ0FBQztJQUNaLElBQUksT0FBTyxDQUFDO0lBQ1osSUFBSSxjQUFjLENBQUM7SUFDbkIsSUFBSSxDQUFDLENBQUM7SUFDTixJQUFJLFdBQVcsQ0FBQztJQUNoQixJQUFJLFFBQVEsQ0FBQztJQUNiLElBQUksUUFBUSxDQUFDO0lBQ2IsSUFBSSxJQUFtQixDQUFDO0lBQ3hCLElBQUksT0FBTyxDQUFDO0lBQ1osSUFBSSxTQUFTLENBQUM7SUFDZCxJQUFJLFNBQVMsQ0FBQztJQUVkLFVBQVUsQ0FBQztRQUNQLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDdkIsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2YsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDYixPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ04sV0FBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDZixPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFeEQsR0FBRyxHQUFHLElBQUksUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZDLENBQUMsQ0FBQyxDQUFBO0lBRUYsUUFBUSxDQUFDLDJCQUEyQixFQUFFO1FBQ2xDLEVBQUUsQ0FBQyxzQ0FBc0MsRUFBRTtZQUN2QyxNQUFNLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3RGLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7SUFFRixRQUFRLENBQUMscUNBQXFDLEVBQUU7UUFDNUMsRUFBRSxDQUFDLDZCQUE2QixFQUFFO1lBQzlCLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvRixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0lBRUYsUUFBUSxDQUFDLGtCQUFrQixFQUFFO1FBQ3pCLEVBQUUsQ0FBQywwQkFBMEIsRUFBRTtZQUMzQixNQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuRSxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0lBRUYsUUFBUSxDQUFDLGlCQUFpQixFQUFFO1FBQ3hCLEVBQUUsQ0FBQywwQkFBMEIsRUFBRTtZQUMzQixNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEUsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtJQUVGLFFBQVEsQ0FBQyxZQUFZLEVBQUU7UUFDbkIsRUFBRSxDQUFDLDZCQUE2QixFQUFFO1lBQzlCLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRSxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0lBRUYsUUFBUSxDQUFDLHFCQUFxQixFQUFFO1FBQzVCLEVBQUUsQ0FBQyw2QkFBNkIsRUFBRTtZQUM5QixNQUFNLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUgsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtBQUVOLENBQUMsQ0FBQyxDQUFDIn0=