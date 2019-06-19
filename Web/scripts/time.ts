'use strict';
namespace AstroLib {
  export class TimeConverter {
    siderealTime = (d, lw) => {
        var pi = Math.PI;
        var rad = pi / 180;

        var result = rad * (280.16 + 360.9856235 * d) - lw;

        return result;
    };

  }

}