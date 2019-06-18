'use strict';
namespace AstroLib {
  export class Time {
    convertRightAscensionToDecimal = (raHours, raMinutes, raSeconds) => {

        var seconds = raSeconds / 60;
        var minutes = (raMinutes + seconds) / 60;
        var result = raHours + minutes;

        return parseFloat(result.toFixed(5));
    };
  }

}