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
        date = new Date("2019-06-19");
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
        it('should be equal to 263.9349363367073', function () {
            expect(sut.calculateMeanSiderealTime(date, longitude)).toEqual(263.9349363367073);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZVNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0aW1lU3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnREFBZ0Q7QUFDaEQsNkNBQTZDO0FBRTdDLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRTtJQUM1QixJQUFJLEdBQTJCLENBQUM7SUFFaEMsSUFBSSxJQUFJLENBQUM7SUFDVCxJQUFJLFVBQVUsQ0FBQztJQUNmLElBQUksU0FBUyxDQUFDO0lBQ2QsSUFBSSxLQUFLLENBQUM7SUFDVixJQUFJLE9BQU8sQ0FBQztJQUNaLElBQUksT0FBTyxDQUFDO0lBQ1osSUFBSSxjQUFjLENBQUM7SUFDbkIsSUFBSSxDQUFDLENBQUM7SUFDTixJQUFJLFdBQVcsQ0FBQztJQUNoQixJQUFJLFFBQVEsQ0FBQztJQUNiLElBQUksUUFBUSxDQUFDO0lBQ2IsSUFBSSxJQUFtQixDQUFDO0lBQ3hCLElBQUksT0FBTyxDQUFDO0lBQ1osSUFBSSxTQUFTLENBQUM7SUFDZCxJQUFJLFNBQVMsQ0FBQztJQUVkLFVBQVUsQ0FBQztRQUNQLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM5QixVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNmLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNOLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ2YsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRXhELEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QyxDQUFDLENBQUMsQ0FBQTtJQUVGLFFBQVEsQ0FBQywyQkFBMkIsRUFBRTtRQUNsQyxFQUFFLENBQUMsc0NBQXNDLEVBQUU7WUFDdkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN0RixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0lBRUYsUUFBUSxDQUFDLHFDQUFxQyxFQUFFO1FBQzVDLEVBQUUsQ0FBQyw2QkFBNkIsRUFBRTtZQUM5QixNQUFNLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0YsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtJQUVGLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtRQUN6QixFQUFFLENBQUMsMEJBQTBCLEVBQUU7WUFDM0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkUsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtJQUVGLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRTtRQUN4QixFQUFFLENBQUMsMEJBQTBCLEVBQUU7WUFDM0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xFLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7SUFFRixRQUFRLENBQUMsWUFBWSxFQUFFO1FBQ25CLEVBQUUsQ0FBQyw2QkFBNkIsRUFBRTtZQUM5QixNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEUsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtJQUVGLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRTtRQUM1QixFQUFFLENBQUMsNkJBQTZCLEVBQUU7WUFDOUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFILENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7QUFFTixDQUFDLENBQUMsQ0FBQyJ9