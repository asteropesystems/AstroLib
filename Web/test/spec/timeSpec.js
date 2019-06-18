// <reference path="../../typings/index.d.ts" />
// <reference path="../../scripts/time.ts" />
describe('In the file time.ts', function () {
    var sut;
    var raHours;
    var raMinutes;
    var raSeconds;
    beforeEach(function () {
        raHours = 23.00;
        raMinutes = 2.00;
        raSeconds = 45.00;
        sut = new AstroLib.Time();
    });
    describe('convertRightAscensionToDecimal', function () {
        it('should be equal to 23.04583', function () {
            expect(sut.convertRightAscensionToDecimal(raHours, raMinutes, raSeconds)).toEqual(23.04583);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZVNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0aW1lU3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnREFBZ0Q7QUFDaEQsNkNBQTZDO0FBRTdDLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRTtJQUM1QixJQUFJLEdBQWtCLENBQUM7SUFFdkIsSUFBSSxPQUFPLENBQUM7SUFDWixJQUFJLFNBQVMsQ0FBQztJQUNkLElBQUksU0FBUyxDQUFDO0lBRWQsVUFBVSxDQUFDO1FBQ1AsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsR0FBRyxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzlCLENBQUMsQ0FBQyxDQUFBO0lBRUYsUUFBUSxDQUFDLGdDQUFnQyxFQUFFO1FBQ3ZDLEVBQUUsQ0FBQyw2QkFBNkIsRUFBRTtZQUM5QixNQUFNLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEcsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDIn0=