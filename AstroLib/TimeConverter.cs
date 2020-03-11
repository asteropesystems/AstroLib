using System;

namespace AstroLib
{
    public class TimeConverter
    {
        public Time CalculateUtRiseTime(double latitude, double longitude, double rightAscension, double declination, string cardinal, double julianDate)
        {
            var h = this.CalculateH(declination, latitude);

            var lstRise = this.CalculateLstRise(rightAscension, h);

            var gstRise = this.ConvertLsttoGstDecimal(lstRise, longitude, cardinal);
            var gst = this.ConvertDecimalToHoursMinutesSeconds(gstRise);

            var ut = this.ConvertGsttoUt(gst.hours, gst.minutes, gst.seconds, julianDate);
            var result = this.ConvertDecimalToHoursMinutesSeconds(ut);

            return result;
        }

        public Time CalculateUtSetTime(double latitude, double longitude, double rightAscension, double declination, string cardinal, double julianDate)
        {
            var h = this.CalculateH(declination, latitude);

            var lstSet = this.CalculateLstSet(rightAscension, h);

            var gstSet = this.ConvertLsttoGstDecimal(lstSet, longitude, cardinal);
            var gst = this.ConvertDecimalToHoursMinutesSeconds(gstSet);

            var ut = this.ConvertGsttoUt(gst.hours, gst.minutes, gst.seconds, julianDate);
            var result = this.ConvertDecimalToHoursMinutesSeconds(ut);

            return result;
        }

        public double CalculateLstRise(double rightAscension, double h)
        {
            var result = 24 + rightAscension - h;
            if (result > 24)
            {
                result = result - 24;
            }

            return Math.Round(result, 6);
        }

        public double CalculateLstSet(double rightAscension, double h)
        {
            var result = 24 + rightAscension + h;
            if (result > 24)
            {
                result = result - 24;
            }

            return Math.Round(result, 6);
        }

        public double CalculateH(double declination, double latitude)
        {
            var latitudeRad = this.ToRadians(latitude);
            var declinationRad = this.ToRadians(declination);

            var angle = Math.Acos(-Math.Tan(latitudeRad) * Math.Tan(declinationRad));

            double result = (1.0 / 15.0) * this.ToDegrees(angle);

            return Math.Round(result, 6);
        }

        public double ConvertLsttoGstDecimal(double lst, double longitude, string cardinal)
        {
            double x;

            if (cardinal == "W")
            {
                x = lst + (longitude / 15);

            }
            else
            {
                x = lst - (longitude / 15);
            }

            double result;
            if (x > 24)
            {
                result = x - 24;
            }

            if (x < 0)
            {
                result = x + 24;

            }
            else
            {
                result = x;
            }

            return Math.Round(result, 5);
        }

        public Time ConvertDecimalToHoursMinutesSeconds(double decimalHours)
        {
            var hours = Math.Floor(decimalHours);
            var minutes = Math.Floor((decimalHours - hours) * 60);
            var seconds = Math.Floor(((decimalHours - hours) * 60 - minutes) * 60);

            var result = new Time(hours, minutes, seconds);

            return result;
        }

        public double ConvertGsttoUt(double hours, double minutes, double seconds, double julianDate)
        {
            var t0 = this.CalculateT0(julianDate);

            var gstDecimal = this.ConvertHoursMinutesSecondsToDecimal(hours, minutes, seconds);

            var result = this.ConvertGstDecimaltoUt(gstDecimal, t0);

            return Math.Round(result, 6);
        }

        public double ToRadians(double angle)
        {
            return angle * (Math.PI / 180);
        }

        public double ToDegrees(double angle)
        {
            return angle * (180 / Math.PI);
        }

        public double CalculateT0(double julianDate)
        {
            var s = julianDate - 2451545.0;
            var t = s / 36525.0;

            var result = 6.697374558 + (2400.051336 * t) + (0.000025862 * Math.Pow(t, 2));

            if (result < 0)
            {
                while (result < 0 && result < 24)
                {
                    result = result + 24;
                }
            }
            else
            {
                while (result < 24 && result > 0)
                {
                    result = result - 24;
                }
            }

            return result;
        }

        public double ConvertHoursMinutesSecondsToDecimal(double hours, double minutes, double seconds)
        {
            var decimalSeconds = seconds / 60;
            var decimalMinutes = (minutes + decimalSeconds) / 60;
            var result = hours + decimalMinutes;

            return Math.Round(result, 5);
        }

        public double ConvertGstDecimaltoUt(double gstDecimal, double t0)
        {
            var t1 = gstDecimal - t0;

            if (t1 < 0)
            {
                while (t1 < 0 && t1 < 24)
                {
                    t1 = t1 + 24;
                }
            }
            else
            {
                while (t1 < 24 && t1 > 0)
                {
                    t1 = t1 - 24;
                }
            }

            var result = t1 * 0.9972695663;

            if (result < 0)
            {
                result = result + 24.00;
            }

            return result;
        }

        public double CalculateMeanSiderealTime(DateTime date, double lon)
        {
            var year = Convert.ToDouble(date.ToUniversalTime().Year);
            var month = Convert.ToDouble(date.ToUniversalTime().Month);
            var day = Convert.ToDouble(date.ToUniversalTime().Day);
            var hour = date.ToUniversalTime().Hour;
            var minute = date.ToUniversalTime().Minute;
            var second = date.ToUniversalTime().Second;

            if ((month == 1) || (month == 2))
            {
                year = year - 1;
                month = month + 12;
            }

            double a = Math.Floor(year / 100);
            double b = 2 - a + Math.Floor(a / 4);
            double c = Math.Floor(365.25 * year);
            double d = Math.Floor(30.6001 * (month + 1));

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
        }

    }
}
