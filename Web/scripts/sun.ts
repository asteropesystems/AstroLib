// <reference path="../../scripts/time.ts" />
// <reference path="../../scripts/date.ts" />

'use strict';
namespace AstroLib {
  export class Sun {
    getSunPosition = (date, lat, lng) => {
        var pi = Math.PI;
        var rad = pi / 180;
        var lw = rad * -lng;
        var phi = rad * lat;

        var dateConverter = new DateConverter();
        var days = dateConverter.convertToDays(date);

        var timeConverter = new TimeConverter();

        var c = this.sunCoords(days);
        var h = timeConverter.siderealTime(days, lw) - c.ra;

        //return true;

        return {
            azimuth: this.azimuth(h, phi, c.dec),
            altitude: this.altitude(h, phi, c.dec)
        };
        
    };

    azimuth = (h, phi, dec) =>{
        var pi = Math.PI;
        var sin = Math.sin;
        var cos = Math.cos;
        var tan = Math.tan;
        var atan = Math.atan2;

        return atan(sin(h), cos(h) * sin(phi) - tan(dec) * cos(phi));
    }

    altitude = (h, phi, dec) =>{
        var pi = Math.PI;
        var rad = pi / 180;
        var sin = Math.sin;
        var cos = Math.cos;
        var asin = Math.asin;

        return asin(sin(phi) * sin(dec) + cos(phi) * cos(dec) * cos(h));
    }

    sunCoords = (d) => {
        var m = this.solarMeanAnomaly(d);
        var l = this.eclipticLongitude(m);

        return {
            dec: this.declination(l, 0),
            ra: this.rightAscension(l, 0)
        };
    }

    solarMeanAnomaly = (d) =>{
        var pi = Math.PI;
        var rad = pi / 180;

        return rad * (357.5291 + 0.98560028 * d);
    }

    eclipticLongitude = (m) =>{
        var pi = Math.PI;
        var rad = pi / 180;
        var sin = Math.sin;

        var c = rad * (1.9148 * sin(m) + 0.02 * sin(2 * m) + 0.0003 * sin(3 * m));
        var p = rad * 102.9372;

        return m + c + p + pi;
    }

    declination = (l, b) =>{
        var pi = Math.PI;
        var rad = pi / 180;
        var sin = Math.sin;
        var cos = Math.cos;
        var tan = Math.tan;
        var atan = Math.atan2;

        var e = rad * 23.4397;

        return atan(sin(l) * cos(e) - tan(b) * sin(e), cos(l));
    }

    rightAscension = (l, b) =>{
        var pi = Math.PI;
        var rad = pi / 180;
        var sin = Math.sin;
        var cos = Math.cos;
        var tan = Math.tan;
        var atan = Math.atan2;

        var e = rad * 23.4397;

        return atan(sin(l) * cos(e) - tan(b) * sin(e), cos(l));
    }


  }

}