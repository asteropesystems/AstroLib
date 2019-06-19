// <reference path="../../typings/index.d.ts" />
// <reference path="../../scripts/time.ts" />
describe('In the file coordinate.ts', function () {
    var sut;
    var raHours;
    var raMinutes;
    var raSeconds;
    beforeEach(function () {
        raHours = 23.00;
        raMinutes = 2.00;
        raSeconds = 45.00;
        sut = new AstroLib.Coordinate();
    });
    describe('convertRightAscensionToDecimal', function () {
        it('should be equal to 23.04583', function () {
            expect(sut.convertRightAscensionToDecimal(raHours, raMinutes, raSeconds)).toEqual(23.04583);
        });
    });
    describe('convertHoursMinutesSecondsToDegrees', function () {
        it('should be equal to 345.68197', function () {
            expect(sut.convertHoursMinutesSecondsToDegrees(raHours, raMinutes, raSeconds)).toEqual(345.68197);
        });
    });
    describe('convertDegreesMinutesSecondsToDecimal', function () {
        it('should be equal to 23.04583', function () {
            expect(sut.convertDegreesMinutesSecondsToDecimal(raHours, raMinutes, raSeconds)).toEqual(23.04583);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29vcmRpbmF0ZVNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb29yZGluYXRlU3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnREFBZ0Q7QUFDaEQsNkNBQTZDO0FBRTdDLFFBQVEsQ0FBQywyQkFBMkIsRUFBRTtJQUNsQyxJQUFJLEdBQXdCLENBQUM7SUFFN0IsSUFBSSxPQUFPLENBQUM7SUFDWixJQUFJLFNBQVMsQ0FBQztJQUNkLElBQUksU0FBUyxDQUFDO0lBRWQsVUFBVSxDQUFDO1FBQ1AsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsR0FBRyxHQUFHLElBQUksUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BDLENBQUMsQ0FBQyxDQUFBO0lBRUYsUUFBUSxDQUFDLGdDQUFnQyxFQUFFO1FBQ3ZDLEVBQUUsQ0FBQyw2QkFBNkIsRUFBRTtZQUM5QixNQUFNLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEcsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtJQUVGLFFBQVEsQ0FBQyxxQ0FBcUMsRUFBRTtRQUM1QyxFQUFFLENBQUMsOEJBQThCLEVBQUU7WUFDL0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RHLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7SUFFRixRQUFRLENBQUMsdUNBQXVDLEVBQUU7UUFDOUMsRUFBRSxDQUFDLDZCQUE2QixFQUFFO1lBQzlCLE1BQU0sQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2RyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUMifQ==