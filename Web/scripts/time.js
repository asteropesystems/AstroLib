'use strict';
var AstroLib;
(function (AstroLib) {
    var Time = /** @class */ (function () {
        function Time(hours, minutes, seconds) {
            this.hours = hours;
            this.minutes = minutes;
            this.seconds = seconds;
        }
        return Time;
    }());
    AstroLib.Time = Time;
    var TimeConverter = /** @class */ (function () {
        function TimeConverter() {
            var _this = this;
            this.calculateUtRiseTime = function (latitude, longitude, rightAscension, declination, cardinal, julianDate) {
                var h = _this.calculateH(declination, latitude);
                var lstRise = _this.calculateLstRise(rightAscension, h);
                var gstRise = _this.convertLsttoGstDecimal(lstRise, longitude, cardinal);
                var gst = _this.convertDecimalToHoursMinutesSeconds(gstRise);
                var ut = _this.convertGsttoUt(gst.hours, gst.minutes, gst.seconds, julianDate);
                var result = _this.convertDecimalToHoursMinutesSeconds(ut);
                return result;
            };
            this.calculateUtSetTime = function (latitude, longitude, rightAscension, declination, cardinal, julianDate) {
                var h = _this.calculateH(declination, latitude);
                var lstSet = _this.calculateLstSet(rightAscension, h);
                var gstSet = _this.convertLsttoGstDecimal(lstSet, longitude, cardinal);
                var gst = _this.convertDecimalToHoursMinutesSeconds(gstSet);
                var ut = _this.convertGsttoUt(gst.hours, gst.minutes, gst.seconds, julianDate);
                var result = _this.convertDecimalToHoursMinutesSeconds(ut);
                return result;
            };
            this.calculateLstRise = function (rightAscension, h) {
                var result = 24 + parseFloat(rightAscension) - parseFloat(h);
                if (result > 24) {
                    result = result - 24;
                }
                return parseFloat(result.toFixed(6));
            };
            this.calculateLstSet = function (rightAscension, h) {
                var result = parseFloat(rightAscension) + parseFloat(h);
                if (result > 24) {
                    result = result - 24;
                }
                return parseFloat(result.toFixed(6));
            };
            this.calculateH = function (declination, latitude) {
                var latitudeRad = _this.toRadians(latitude);
                var declinationRad = _this.toRadians(declination);
                var angle = Math.acos(-Math.tan(latitudeRad) * Math.tan(declinationRad));
                var result = (1 / 15) * _this.toDegrees(angle);
                return parseFloat(result.toFixed(6));
            };
            this.convertLsttoGstDecimal = function (lst, longitude, cardinal) {
                var x;
                if (cardinal === "W") {
                    x = lst + (longitude / 15);
                }
                else {
                    x = lst - (longitude / 15);
                }
                var result;
                if (x > 24) {
                    result = x - 24;
                }
                if (x < 0) {
                    result = x + 24;
                }
                else {
                    result = x;
                }
                return parseFloat(result.toFixed(5));
            };
            this.convertDecimalToHoursMinutesSeconds = function (decimalHours) {
                var hours = Math.floor(decimalHours);
                var minutes = Math.floor((decimalHours - hours) * 60);
                var seconds = Math.floor(((decimalHours - hours) * 60 - minutes) * 60);
                var result = new Time(hours, minutes, seconds);
                return result;
            };
            this.convertGsttoUt = function (hours, minutes, seconds, julianDate) {
                var t0 = _this.calculateT0(julianDate);
                var gstDecimal = _this.convertHoursMinutesSecondsToDecimal(hours, minutes, seconds);
                var result = _this.convertGstDecimaltoUt(gstDecimal, t0);
                return parseFloat(result.toFixed(6));
            };
            this.toRadians = function (angle) {
                return angle * (Math.PI / 180);
            };
            this.toDegrees = function (angle) {
                return angle * (180 / Math.PI);
            };
            this.calculateT0 = function (julianDate) {
                var s = julianDate - 2451545.0;
                var t = s / 36525.0;
                var result = 6.697374558 + (2400.051336 * t) + (0.000025862 * Math.pow(t, 2));
                if (result < 0) {
                    while (result < 0 && result < 24) {
                        result = result + 24;
                    }
                }
                else {
                    while (result < 24 && result > 0) {
                        result = result - 24;
                    }
                }
                return result;
            };
            this.convertHoursMinutesSecondsToDecimal = function (hours, minutes, seconds) {
                var decimalSeconds = seconds / 60;
                var decimalMinutes = (minutes + decimalSeconds) / 60;
                var result = hours + decimalMinutes;
                return parseFloat(result.toFixed(5));
            };
            this.convertGstDecimaltoUt = function (gstDecimal, t0) {
                var t1 = gstDecimal - t0;
                if (t1 < 0) {
                    while (t1 < 0 && t1 < 24) {
                        t1 = t1 + 24;
                    }
                }
                else {
                    while (t1 < 24 && t1 > 0) {
                        t1 = t1 - 24;
                    }
                }
                var result = t1 * 0.9972695663;
                if (result < 0) {
                    result = result + 24.00;
                }
                return result;
            };
            this.calculateMeanSiderealTime = function (date, lon) {
                var year = date.getUTCFullYear();
                var month = date.getUTCMonth() + 1;
                var day = date.getUTCDate();
                var hour = date.getUTCHours();
                var minute = date.getUTCMinutes();
                var second = date.getUTCSeconds();
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
                console.log('jd: ', jd);
                // julian centuries since J2000.0
                var jt = jd / 36525.0;
                // the mean sidereal time in degrees
                var result = 280.46061837 + 360.98564736629 * jd + 0.000387933 * jt * jt - jt * jt * jt / 38710000 + lon;
                // in degrees modulo 360.0
                if (result > 0.0)
                    while (result > 360.0)
                        result = result - 360.0;
                else
                    while (result < 0.0)
                        result = result + 360.0;
                return result;
            };
        }
        return TimeConverter;
    }());
    AstroLib.TimeConverter = TimeConverter;
})(AstroLib || (AstroLib = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsSUFBVSxRQUFRLENBb09qQjtBQXBPRCxXQUFVLFFBQVE7SUFFZDtRQUlJLGNBQVksS0FBYSxFQUFFLE9BQWUsRUFBRSxPQUFlO1lBQ3ZELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzNCLENBQUM7UUFDTCxXQUFDO0lBQUQsQ0FBQyxBQVRELElBU0M7SUFUWSxhQUFJLE9BU2hCLENBQUE7SUFFRDtRQUFBO1lBQUEsaUJBcU5DO1lBcE5HLHdCQUFtQixHQUFHLFVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxVQUFVO2dCQUV6RixJQUFJLENBQUMsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFFL0MsSUFBSSxPQUFPLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFFdkQsSUFBSSxPQUFPLEdBQUcsS0FBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQ3hFLElBQUksR0FBRyxHQUFHLEtBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFFNUQsSUFBSSxFQUFFLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFDOUUsSUFBSSxNQUFNLEdBQUcsS0FBSSxDQUFDLG1DQUFtQyxDQUFDLEVBQUUsQ0FBQyxD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