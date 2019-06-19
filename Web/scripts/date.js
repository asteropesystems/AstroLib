'use strict';
var AstroLib;
(function (AstroLib) {
    var DateConverter = /** @class */ (function () {
        function DateConverter() {
            var _this = this;
            this.convertDateToJulianDate = function (date) {
                var dayMs = 1000 * 60 * 60 * 24;
                var j1970 = 2440588;
                var result = date.valueOf() / dayMs - 0.5 + j1970;
                return result;
            };
            this.convertJulianDateToDate = function (julianDate) {
                var dayMs = 1000 * 60 * 60 * 24;
                var j1970 = 2440588;
                var result = new Date((julianDate + 0.5 - j1970) * dayMs);
                return result;
            };
            this.convertToDays = function (date) {
                var j2000 = 2451545;
                var result = _this.convertDateToJulianDate(date) - j2000;
                return result;
            };
        }
        return DateConverter;
    }());
    AstroLib.DateConverter = DateConverter;
})(AstroLib || (AstroLib = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsSUFBVSxRQUFRLENBOEJqQjtBQTlCRCxXQUFVLFFBQVE7SUFDaEI7UUFBQTtZQUFBLGlCQTJCQztZQTFCQyw0QkFBdUIsR0FBRyxVQUFDLElBQUk7Z0JBQzNCLElBQUksS0FBSyxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztnQkFDaEMsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDO2dCQUVwQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUM7Z0JBRWxELE9BQU8sTUFBTSxDQUFDO1lBQ2xCLENBQUMsQ0FBQztZQUVGLDRCQUF1QixHQUFHLFVBQUMsVUFBVTtnQkFDbkMsSUFBSSxLQUFLLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO2dCQUNoQyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUM7Z0JBRXBCLElBQUksTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztnQkFFMUQsT0FBTyxNQUFNLENBQUM7WUFDaEIsQ0FBQyxDQUFDO1lBRUYsa0JBQWEsR0FBRyxVQUFDLElBQUk7Z0JBQ25CLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQztnQkFFcEIsSUFBSSxNQUFNLEdBQUcsS0FBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFFeEQsT0FBTyxNQUFNLENBQUM7WUFDaEIsQ0FBQyxDQUFDO1FBRUosQ0FBQztRQUFELG9CQUFDO0lBQUQsQ0FBQyxBQTNCRCxJQTJCQztJQTNCWSxzQkFBYSxnQkEyQnpCLENBQUE7QUFFSCxDQUFDLEVBOUJTLFFBQVEsS0FBUixRQUFRLFFBOEJqQiJ9