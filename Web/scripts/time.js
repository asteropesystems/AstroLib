'use strict';
var AstroLib;
(function (AstroLib) {
    var TimeConverter = /** @class */ (function () {
        function TimeConverter() {
            this.siderealTime = function (d, lw) {
                var pi = Math.PI;
                var rad = pi / 180;
                var result = rad * (280.16 + 360.9856235 * d) - lw;
                return result;
            };
        }
        return TimeConverter;
    }());
    AstroLib.TimeConverter = TimeConverter;
})(AstroLib || (AstroLib = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsSUFBVSxRQUFRLENBYWpCO0FBYkQsV0FBVSxRQUFRO0lBQ2hCO1FBQUE7WUFDRSxpQkFBWSxHQUFHLFVBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQ2pCLElBQUksR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7Z0JBRW5CLElBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUVuRCxPQUFPLE1BQU0sQ0FBQztZQUNsQixDQUFDLENBQUM7UUFFSixDQUFDO1FBQUQsb0JBQUM7SUFBRCxDQUFDLEFBVkQsSUFVQztJQVZZLHNCQUFhLGdCQVV6QixDQUFBO0FBRUgsQ0FBQyxFQWJTLFFBQVEsS0FBUixRQUFRLFFBYWpCIn0=