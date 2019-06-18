'use strict';
var AstroLib;
(function (AstroLib) {
    var Time = /** @class */ (function () {
        function Time() {
            this.convertRightAscensionToDecimal = function (raHours, raMinutes, raSeconds) {
                var seconds = raSeconds / 60;
                var minutes = (raMinutes + seconds) / 60;
                var result = raHours + minutes;
                return parseFloat(result.toFixed(5));
            };
        }
        return Time;
    }());
    AstroLib.Time = Time;
})(AstroLib || (AstroLib = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsSUFBVSxRQUFRLENBWWpCO0FBWkQsV0FBVSxRQUFRO0lBQ2hCO1FBQUE7WUFDRSxtQ0FBOEIsR0FBRyxVQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUztnQkFFM0QsSUFBSSxPQUFPLEdBQUcsU0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFDN0IsSUFBSSxPQUFPLEdBQUcsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUN6QyxJQUFJLE1BQU0sR0FBRyxPQUFPLEdBQUcsT0FBTyxDQUFDO2dCQUUvQixPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekMsQ0FBQyxDQUFDO1FBQ0osQ0FBQztRQUFELFdBQUM7SUFBRCxDQUFDLEFBVEQsSUFTQztJQVRZLGFBQUksT0FTaEIsQ0FBQTtBQUVILENBQUMsRUFaUyxRQUFRLEtBQVIsUUFBUSxRQVlqQiJ9