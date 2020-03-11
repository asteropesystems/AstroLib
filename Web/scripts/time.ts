'use strict';
namespace AstroLib {

    export class Time {
        hours: number;
        minutes: number;
        seconds: number;
        constructor(hours: number, minutes: number, seconds: number) {
            this.hours = hours;
            this.minutes = minutes;
            this.seconds = seconds;
        }
    }

    export class TimeConverter {
        calculateUtRiseTime = (latitude, longitude, rightAscension, declination, cardinal, julianDate) => {

            var h = this.calculateH(declination, latitude);

            var lstRise = this.calculateLstRise(rightAscension, h);

            var gstRise = this.convertLsttoGstDecimal(lstRise, longitude, cardinal);
            var gst = this.convertDecimalToHoursMinutesSeconds(gstRise);

            var ut = this.convertGsttoUt(gst.hours, gst.minutes, gst.seconds, julianDate);
            var result = this.convertDecimalToHoursMinutesSeconds(ut);

            return result;

        };

        calculateUtSetTime = (latitude, longitude, rightAscension, declination, cardinal, julianDate) => {

            var h = this.calculateH(declination, latitude);

            var lstSet = this.calculateLstSet(rightAscension, h);

            var gstSet = this.convertLsttoGstDecimal(lstSet, longitude, cardinal);
            var gst = this.convertDecimalToHoursMinutesSeconds(gstSet);

            var ut = this.convertGsttoUt(gst.hours, gst.minutes, gst.seconds, julianDate);
            var result = this.convertDecimalToHoursMinutesSeconds(ut);

            return result;

        };

        calculateLstRise = (rightAscension, h) => {

          var result = 24 + parseFloat(rightAscension) - parseFloat(h);
          if (result > 24) {
              result = result - 24;
          }

          return parseFloat(result.toFixed(6));
        };

        calculateLstSet = (rightAscension, h) => {

            var result = parseFloat(rightAscension) + parseFloat(h);

            if (result > 24) {
                result = result - 24;
            }

            return parseFloat(result.toFixed(6));
        };

        calculateH = (declination, latitude) => {

            var latitudeRad = this.toRadians(latitude);
            var declinationRad = this.toRadians(declination);

            var angle = Math.acos(-Math.tan(latitudeRad) * Math.tan(declinationRad));
            var result = (1 / 15) * this.toDegrees(angle);

            return parseFloat(result.toFixed(6));
        }

        convertLsttoGstDecimal = (lst, longitude, cardinal) => {

            var x;

            if (cardinal === "W") {
                x = lst + (longitude / 15);

            } else {
                x = lst - (longitude / 15);
            }

            var result;
            if (x > 24) {
                result = x - 24;
            }

            if (x < 0) {
                result = x + 24;

            } else {
                result = x;
            }

            return parseFloat(result.toFixed(5));
        };

        convertDecimalToHoursMinutesSeconds = (decimalHours) => {

            var hours = Math.floor(decimalHours);
            var minutes = Math.floor((decimalHours - hours) * 60);
            var seconds = Math.floor(((decimalHours - hours) * 60 - minutes) * 60);

            var result = new Time(hours, minutes, seconds);

            return result;
        };

        convertGsttoUt = (hours, minutes, seconds, julianDate) => {

            var t0 = this.calculateT0(julianDate);

            var gstDecimal = this.convertHoursMinutesSecondsToDecimal(hours, minutes, seconds);

            var result = this.convertGstDecimaltoUt(gstDecimal, t0);

            return parseFloat(result.toFixed(6));
        };

        toRadians = (angle) => {

            return angle * (Math.PI / 180);
        };

        toDegrees = (angle) => {

            return angle * (180 / Math.PI);
        };

        calculateT0 = (julianDate) => {

            var s = julianDate - 2451545.0;
            var t = s / 36525.0;

            var result = 6.697374558 + (2400.051336 * t) + (0.000025862 * Math.pow(t, 2));

            if (result < 0) {
                while (result < 0 && result < 24) {
                    result = result + 24;
                }
            } else {
                while (result < 24 && result > 0) {
                    result = result - 24;
                }
            }

            return result;
        };

        convertHoursMinutesSecondsToDecimal = (hours, minutes, seconds) => {

            var decimalSeconds = seconds / 60;
            var decimalMinutes = (minutes + decimalSeconds) / 60;
            var result = hours + decimalMinutes;

            return parseFloat(result.toFixed(5));
        };

        convertGstDecimaltoUt = (gstDecimal, t0) => {
            var t1 = gstDecimal - t0;

            if (t1 < 0) {
                while (t1 < 0 && t1 < 24) {
                    t1 = t1 + 24;
                }
            } else {
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

        calculateMeanSiderealTime = (date, lon) => {

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

            // julian centuries since J2000.0
            var jt = jd / 36525.0;

            // the mean sidereal time in degrees
            var result = 280.46061837 + 360.98564736629 * jd + 0.000387933 * jt * jt - jt * jt * jt / 38710000 + lon;

            // in degrees modulo 360.0
            if (result > 0.0)
                while (result > 360.0) result = result - 360.0;
            else
                while (result < 0.0) result = result + 360.0;

            return result;

        };

    }

}