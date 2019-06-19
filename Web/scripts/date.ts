'use strict';
namespace AstroLib {
  export class DateConverter {
    convertDateToJulianDate = (date) => {
        var dayMs = 1000 * 60 * 60 * 24;
        var j1970 = 2440588;

        var result = date.valueOf() / dayMs - 0.5 + j1970;

        return result;
    };

    convertJulianDateToDate = (julianDate) => {
      var dayMs = 1000 * 60 * 60 * 24;
      var j1970 = 2440588;

      var result = new Date((julianDate + 0.5 - j1970) * dayMs);

      return result;
    };

    convertToDays = (date) => {
      var j2000 = 2451545;

      var result = this.convertDateToJulianDate(date) - j2000;

      return result;
    };

  }

}