// from converter
'use strict';
var AstroLib;
(function (AstroLib) {
    var Coordinate = /** @class */ (function () {
        function Coordinate() {
            this.convertRightAscensionToDecimal = function (raHours, raMinutes, raSeconds) {
                var seconds = raSeconds / 60;
                var minutes = (raMinutes + seconds) / 60;
                var result = raHours + minutes;
                return parseFloat(result.toFixed(5));
            };
            this.convertHoursMinutesSecondsToDegrees = function (hours, minutes, seconds) {
                // seconds in 24 hours = 86400
                // rah + ram + ras
                var test1 = hours * 3600;
                var test2 = minutes * 60;
                var test3 = test1 + test2 + seconds;
                var result = test3 * 0.0041666;
                return parseFloat(result.toFixed(5));
            };
            this.convertDegreesMinutesSecondsToDecimal = function (degrees, minutes, seconds) {
                var test1 = (seconds / 60) / 60;
                var test2 = minutes / 60;
                var test4;
                if (degrees < 0) {
                    test4 = Math.floor(Math.abs(degrees));
                    test4 = test4 + test2 + test1;
                    test4 = test4 * -1;
                }
                else {
                    test4 = Math.floor(Math.abs(degrees));
                    test4 = test4 + test2 + test1;
                }
                return parseFloat(test4.toFixed(5));
            };
        }
        return Coordinate;
    }());
    AstroLib.Coordinate = Coordinate;
})(AstroLib || (AstroLib = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29vcmRpbmF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvb3JkaW5hdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCO0FBRWpCLFlBQVksQ0FBQztBQUNiLElBQVUsUUFBUSxDQTRDakI7QUE1Q0QsV0FBVSxRQUFRO0lBQ2hCO1FBQUE7WUFDRSxtQ0FBOEIsR0FBRyxVQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUztnQkFFM0QsSUFBSSxPQUFPLEdBQUcsU0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFDN0IsSUFBSSxPQUFPLEdBQUcsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUN6QyxJQUFJLE1BQU0sR0FBRyxPQUFPLEdBQUcsT0FBTyxDQUFDO2dCQUUvQixPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekMsQ0FBQyxDQUFDO1lBRUYsd0NBQW1DLEdBQUcsVUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU87Z0JBRTVELDhCQUE4QjtnQkFDOUIsa0JBQWtCO2dCQUNsQixJQUFJLEtBQUssR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixJQUFJLEtBQUssR0FBRyxPQUFPLEdBQUcsRUFBRSxDQUFDO2dCQUN6QixJQUFJLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLE9BQU8sQ0FBQztnQkFFcEMsSUFBSSxNQUFNLEdBQUcsS0FBSyxHQUFHLFNBQVMsQ0FBQztnQkFFL0IsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQztZQUVGLDBDQUFxQyxHQUFHLFVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPO2dCQUVoRSxJQUFJLEtBQUssR0FBRyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBRWhDLElBQUksS0FBSyxHQUFHLE9BQU8sR0FBRyxFQUFFLENBQUM7Z0JBQ3pCLElBQUksS0FBSyxDQUFDO2dCQUVWLElBQUksT0FBTyxHQUFHLENBQUMsRUFBRTtvQkFDYixLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ3RDLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDOUIsS0FBSyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDdEI7cUJBQU07b0JBQ0gsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUN0QyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUM7aUJBQ2pDO2dCQUVELE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QyxDQUFDLENBQUM7UUFDSixDQUFDO1FBQUQsaUJBQUM7SUFBRCxDQUFDLEFBekNELElBeUNDO0lBekNZLG1CQUFVLGFBeUN0QixDQUFBO0FBRUgsQ0FBQyxFQTVDUyxRQUFRLEtBQVIsUUFBUSxRQTRDakIifQ==