'use strict';
var AstroLib;
(function (AstroLib) {
    var TimeConverter = /** @class */ (function () {
        function TimeConverter() {
            this.calculateMeanSiderealTime = function (now, lon) {
                var year = now.getUTCFullYear();
                var month = now.getUTCMonth() + 1;
                var day = now.getUTCDate();
                var hour = now.getUTCHours();
                var minute = now.getUTCMinutes();
                var second = now.getUTCSeconds();
                if ((month == 1) || (month == 2)) {
                    year = year - 1;
                    month = month + 12;
                }
                var a = Math.floor(year / 100);
                var b = 2 - a + Math.floor(a / 4);
                var c = Math.floor(365.25 * year);
                var d = Math.floor(30.6001 * (month + 1));
                // days since J2000.0
                var jd = b + c + d - 730550.5 + day + (hour + minute / 60.0 + second / 3600.0) / 24.0;
                // julian centuries since J2000.0
                var jt = jd / 36525.0;
                // the mean sidereal time in degrees
                var mst = 280.46061837 + 360.98564736629 * jd + 0.000387933 * jt * jt - jt * jt * jt / 38710000 + lon;
                // in degrees modulo 360.0
                if (mst > 0.0)
                    while (mst > 360.0)
                        mst = mst - 360.0;
                else
                    while (mst < 0.0)
                        mst = mst + 360.0;
                return mst;
            };
            this.convertHoursMinutesSecondsToDecimal = function (hours, minutes, seconds) {
                var test1 = seconds / 60;
                var test2 = (minutes + test1) / 60;
                var test3 = hours + test2;
                return parseFloat(test3.toFixed(5));
            };
            this.calculateLstRise = function (rightAscension, h) {
                var lstRise = 24 + parseFloat(rightAscension) - parseFloat(h);
                if (lstRise > 24) {
                    lstRise = lstRise - 24;
                }
                return parseFloat(lstRise.toFixed(6));
            };
            this.calculateLstSet = function (rightAscension, h) {
                var lstSet = parseFloat(rightAscension) + parseFloat(h);
                if (lstSet > 24) {
                    lstSet = lstSet - 24;
                }
                return parseFloat(lstSet.toFixed(6));
            };
        }
        return TimeConverter;
    }());
    AstroLib.TimeConverter = TimeConverter;
})(AstroLib || (AstroLib = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsSUFBVSxRQUFRLENBMEVqQjtBQTFFRCxXQUFVLFFBQVE7SUFDaEI7UUFBQTtZQUNFLDhCQUF5QixHQUFHLFVBQUMsR0FBRyxFQUFFLEdBQUc7Z0JBRW5DLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDaEMsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDbEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUMzQixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQzdCLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDakMsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUVqQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxFQUFFO29CQUM5QixJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQztvQkFDaEIsS0FBSyxHQUFHLEtBQUssR0FBRyxFQUFFLENBQUM7aUJBQ3RCO2dCQUVELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxP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