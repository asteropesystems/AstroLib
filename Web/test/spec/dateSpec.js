// <reference path="../../typings/index.d.ts" />
// <reference path="../../scripts/date.ts" />
describe('In the file date.ts', function () {
    var sut;
    var date;
    var julianDate;
    beforeEach(function () {
        date = new Date("2019-06-19");
        julianDate = 2458653.5;
        sut = new AstroLib.DateConverter();
    });
    describe('convertDateToJulianDate', function () {
        it('should be equal to 2458653.5', function () {
            expect(sut.convertDateToJulianDate(date)).toEqual(2458653.5);
        });
    });
    describe('convertJulianDateToDate', function () {
        it('should be equal to date for June 19 2019', function () {
            expect(sut.convertJulianDateToDate(julianDate)).toEqual(date);
        });
    });
    describe('convertToDays', function () {
        it('should be equal to 7108.5 for June 19 2019', function () {
            expect(sut.convertToDays(date)).toEqual(7108.5);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZVNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRlU3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnREFBZ0Q7QUFDaEQsNkNBQTZDO0FBRTdDLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRTtJQUM1QixJQUFJLEdBQTJCLENBQUM7SUFFaEMsSUFBSSxJQUFJLENBQUM7SUFDVCxJQUFJLFVBQVUsQ0FBQztJQUVmLFVBQVUsQ0FBQztRQUNQLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM5QixVQUFVLEdBQUcsU0FBUyxDQUFDO1FBRXZCLEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QyxDQUFDLENBQUMsQ0FBQTtJQUVGLFFBQVEsQ0FBQyx5QkFBeUIsRUFBRTtRQUNoQyxFQUFFLENBQUMsOEJBQThCLEVBQUU7WUFDL0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqRSxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0lBRUYsUUFBUSxDQUFDLHlCQUF5QixFQUFFO1FBQ2hDLEVBQUUsQ0FBQywwQ0FBMEMsRUFBRTtZQUMzQyxNQUFNLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xFLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7SUFFRixRQUFRLENBQUMsZUFBZSxFQUFFO1FBQ3RCLEVBQUUsQ0FBQyw0Q0FBNEMsRUFBRTtZQUM3QyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUMifQ==