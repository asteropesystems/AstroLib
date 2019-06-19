// from converter

'use strict';
namespace AstroLib {
  export class Coordinate {
    convertRightAscensionToDecimal = (raHours, raMinutes, raSeconds) => {

        var seconds = raSeconds / 60;
        var minutes = (raMinutes + seconds) / 60;
        var result = raHours + minutes;

        return parseFloat(result.toFixed(5));
    };

    convertHoursMinutesSecondsToDegrees = (hours, minutes, seconds) => {

      // seconds in 24 hours = 86400
      // rah + ram + ras
      var test1 = hours * 3600;
      var test2 = minutes * 60;
      var test3 = test1 + test2 + seconds;

      var result = test3 * 0.0041666;

      return parseFloat(result.toFixed(5));
    };

    convertDegreesMinutesSecondsToDecimal = (degrees, minutes, seconds) => {

      var test1 = (seconds / 60) / 60;

      var test2 = minutes / 60;
      var test4;

      if (degrees < 0) {
          test4 = Math.floor(Math.abs(degrees));
          test4 = test4 + test2 + test1;
          test4 = test4 * -1;
      } else {
          test4 = Math.floor(Math.abs(degrees));
          test4 = test4 + test2 + test1;
      }

      return parseFloat(test4.toFixed(5));
    };
  }

}