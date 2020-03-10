'use strict';
namespace AstroLib {
  export class TimeConverter {
    calculateMeanSiderealTime = (now, lon) => {

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
          while (mst > 360.0) mst = mst - 360.0;
      else
          while (mst < 0.0) mst = mst + 360.0;

      return mst;

  }

  convertHoursMinutesSecondsToDecimal = (hours, minutes, seconds) => {

    var test1 = seconds / 60;
    var test2 = (minutes + test1) / 60;
    var test3 = hours + test2;

    return parseFloat(test3.toFixed(5));
};

calculateLstRise = (rightAscension, h) => {

  var lstRise = 24 + parseFloat(rightAscension) - parseFloat(h);
  if (lstRise > 24) {
      lstRise = lstRise - 24;
  }

  return parseFloat(lstRise.toFixed(6));
};

calculateLstSet = (rightAscension, h) => {

  var lstSet = parseFloat(rightAscension) + parseFloat(h);

  if (lstSet > 24) {
      lstSet = lstSet - 24;
  }

  return parseFloat(lstSet.toFixed(6));
};



  }

}