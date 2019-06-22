// <reference path="../../scripts/time.ts" />
// <reference path="../../scripts/date.ts" />

'use strict';
namespace AstroLib {
    export class Sun {

        rightAscension = (l, b) => {
            var pi = Math.PI;
            var sin = Math.sin;
            var cos = Math.cos;
            var tan = Math.tan;
            var atan = Math.atan2;
            var rad = pi / 180;
            var e = rad * 23.4397;

            return atan(sin(l) * cos(e) - tan(b) * sin(e), cos(l));
        };

        declination = (l, b) => {
            var pi = Math.PI;
            var sin = Math.sin;
            var cos = Math.cos;
            var asin = Math.asin;
            var rad = pi / 180;
            var e = rad * 23.4397;

            return asin(sin(b) * cos(e) + cos(b) * sin(e) * sin(l));
        };

        azimuth = (h, phi, dec) => {
            var pi = Math.PI;
            var sin = Math.sin;
            var cos = Math.cos;
            var tan = Math.tan;
            var atan = Math.atan2;

            return atan(sin(h), cos(h) * sin(phi) - tan(dec) * cos(phi));
        }
        altitude = (h, phi, dec) => {
            var pi = Math.PI;
            var sin = Math.sin;
            var cos = Math.cos;
            var asin = Math.asin;

            return asin(sin(phi) * sin(dec) + cos(phi) * cos(dec) * cos(h));
        }

        siderealTime = (d, lw) => {
            var pi = Math.PI;
            var rad = pi / 180;

            return rad * (280.16 + 360.9856235 * d) - lw;
        }

        solarMeanAnomaly = (d) => {
            var pi = Math.PI;
            var rad = pi / 180;

            return rad * (357.5291 + 0.98560028 * d);
        }

        eclipticLongitude = (m) => {
            var pi = Math.PI;
            var sin = Math.sin;
            var rad = pi / 180;
            var c = rad * (1.9148 * sin(m) + 0.02 * sin(2 * m) + 0.0003 * sin(3 * m));
            var p = rad * 102.9372;

            return m + c + p + pi;
        }

        sunCoords = (d) => {
            var m = this.solarMeanAnomaly(d);
            var l = this.eclipticLongitude(m);

            return {
                dec: this.declination(l, 0),
                ra: this.rightAscension(l, 0)
            };
        }

        getSunPosition = (date, lat, lng) => {
            var pi = Math.PI;
            var rad = pi / 180;
            var lw = rad * -lng;
            var phi = rad * lat;

            var dateConverter = new DateConverter();

            var d = dateConverter.convertToDays(date);

            var c = this.sunCoords(d);
            var h = this.siderealTime(d, lw) - c.ra;

            return {
                azimuth: this.azimuth(h, phi, c.dec),
                altitude: this.altitude(h, phi, c.dec)
            };
        };

        julianCycle = (d, lw) => {
            var pi = Math.PI;
            var j0 = 0.0009;

            return Math.round(d - j0 - lw / (2 * pi));
        };

        approxTransit = (ht, lw, n) => {
            var pi = Math.PI;
            var j0 = 0.0009;

            return j0 + (ht + lw) / (2 * pi) + n;
        };

        solarTransitJ = (ds, m, l) => {
            var sin = Math.sin;
            var j2000 = 2451545;

            return j2000 + ds + 0.0053 * sin(m) - 0.0069 * sin(2 * l);
        };

        hourAngle = (h, phi, d) => {
            var pi = Math.PI;
            var sin = Math.sin;
            var cos = Math.cos;
            var acos = Math.acos;

            return acos((sin(h) - sin(phi) * sin(d)) / (cos(phi) * cos(d)));
        };

        getSetJ = (h, lw, phi, dec, n, m, l) => {
            var w = this.hourAngle(h, phi, dec);
            var a = this.approxTransit(w, lw, n);

            return this.solarTransitJ(a, m, l);
        };

        getSunTimes = (date, lat, lng) => {
            var pi = Math.PI;
            var rad = pi / 180;
            var lw = rad * -lng;
            var phi = rad * lat;

            var dateConverter = new DateConverter();

            var d = dateConverter.convertToDays(date);
            var n = this.julianCycle(d, lw);
            var ds = this.approxTransit(0, lw, n);

            var m = this.solarMeanAnomaly(ds);
            var l = this.eclipticLongitude(m);
            var dec = this.declination(l, 0);
            var jnoon = this.solarTransitJ(ds, m, l);
            var i;
            var len;
            var time;
            var jset;
            var jrise;
            var dateConverter = new DateConverter();

            var result = {
                solarNoon: dateConverter.convertJulianDateToDate(jnoon),
                nadir: dateConverter.convertJulianDateToDate(jnoon - 0.5)
            };

            var times = times = [
                [-0.833, 'sunrise', 'sunset'],
                [-0.3, 'sunriseEnd', 'sunsetStart'],
                [-6, 'dawn', 'dusk'],
                [-12, 'nauticalDawn', 'nauticalDusk'],
                [-18, 'nightEnd', 'night'],
                [6, 'goldenHourEnd', 'goldenHour']
            ];

            for (i = 0, len = times.length; i < len; i += 1) {
                time = times[i];

                jset = this.getSetJ(time[0] * rad, lw, phi, dec, n, m, l);
                jrise = jnoon - (jset - jnoon);

                result[time[1]] = dateConverter.convertJulianDateToDate(jrise);
                result[time[2]] = dateConverter.convertJulianDateToDate(jset);
            }

            return result;
        };
    }
}