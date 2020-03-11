using System;
using Xunit;

namespace AstroLib.Tests
{
    public class TimeTests
    {
        [Fact]
        public void CalculateUtRiseTime()
        {
            // arrange
            double latitude = 55.33;
            double longitude = -3;
            double rightAscension = 16.45;
            double declination = 10.00;
            string cardinal = "W";
            double julianDate = 2458653.5;

            double expectedUTHours = 15;
            double expectedUTMinutes = 25;
            double expectedUTSeconds = 38;

            var sut = new TimeConverter();

            // act
            Time actual = sut.CalculateUtRiseTime(latitude, longitude, rightAscension, declination, cardinal, julianDate);

            // assert
            Assert.Equal(expectedUTHours, actual.hours);
            Assert.Equal(expectedUTMinutes, actual.minutes);
            Assert.Equal(expectedUTSeconds, actual.seconds);

        }

        //[Fact]
        //public void CalculateUtSetTime()
        //{
        //    // arrange
        //    double expected = 16.37083;

        //    var sut = new TimeConverter();

        //    // act
        //    double actual = sut.CalculateUtSetTime();

        //    // assert
        //    Assert.Equal(expected, actual);
        //}

        [Fact]
        public void CalculateLstRise()
        {
            // arrange
            double rightAscension = 16.45;
            double h = 4;

            double expected = 12.45;

            var sut = new TimeConverter();

            // act
            double actual = sut.CalculateLstRise(rightAscension, h);

            // assert
            Assert.Equal(expected, actual);
        }

        [Fact]
        public void CalculateLstSet()
        {
            // arrange
            double rightAscension = 16.45;
            double h = 4;

            double expected = 20.45;

            var sut = new TimeConverter();

            // act
            double actual = sut.CalculateLstSet(rightAscension, h);

            // assert
            Assert.Equal(expected, actual);
        }

        [Fact]
        public void CalculateH()
        {
            // arrange
            double latitude = 55.33;
            double declination = 10.00;

            double expected = 6.984643;

            var sut = new TimeConverter();

            // act
            double actual = sut.CalculateH(declination, latitude);

            // assert
            Assert.Equal(expected, actual);
        }

        //[Fact]
        //public void ConvertLsttoGstDecimal()
        //{
        //    // arrange
        //    double expected = 16.37083;

        //    var sut = new TimeConverter();

        //    // act
        //    double actual = sut.ConvertLsttoGstDecimal(lst, longitude, cardinal);

        //    // assert
        //    Assert.Equal(expected, actual);
        //}

        //[Fact]
        //public void ConvertDecimalToHoursMinutesSeconds()
        //{
        //    // arrange
        //    double expected = 16.37083;

        //    var sut = new TimeConverter();

        //    // act
        //    double actual = sut.ConvertDecimalToHoursMinutesSeconds();

        //    // assert
        //    Assert.Equal(expected, actual);
        //}

        //[Fact]
        //public void ConvertGsttoUt()
        //{
        //    // arrange
        //    double expected = 16.37083;

        //    var sut = new TimeConverter();

        //    // act
        //    double actual = sut.ConvertGsttoUt();

        //    // assert
        //    Assert.Equal(expected, actual);
        //}

        //[Fact]
        //public void ToRadians()
        //{
        //    // arrange
        //    double expected = 16.37083;

        //    var sut = new TimeConverter();

        //    // act
        //    double actual = sut.ToRadians();

        //    // assert
        //    Assert.Equal(expected, actual);
        //}

        //[Fact]
        //public void ToDegrees()
        //{
        //    // arrange
        //    double expected = 16.37083;

        //    var sut = new TimeConverter();

        //    // act
        //    double actual = sut.ToDegrees();

        //    // assert
        //    Assert.Equal(expected, actual);
        //}

        //[Fact]
        //public void CalculateT0()
        //{
        //    // arrange
        //    double expected = 16.37083;

        //    var sut = new TimeConverter();

        //    // act
        //    double actual = sut.CalculateT0();

        //    // assert
        //    Assert.Equal(expected, actual);
        //}

        [Fact]
        public void ConvertHoursMinutesSecondsToDecimal()
        {
            // arrange
            double hours = 16;
            double minutes = 22;
            double seconds = 15;

            double expected = 16.37083;

            var sut = new TimeConverter();

            // act
            double actual = sut.ConvertHoursMinutesSecondsToDecimal(hours, minutes, seconds);

            // assert
            Assert.Equal(expected, actual);
        }

        //[Fact]
        //public void ConvertGstDecimaltoUt()
        //{
        //    // arrange
        //    double expected = 16.37083;

        //    var sut = new TimeConverter();

        //    // act
        //    double actual = sut.ConvertGstDecimaltoUt();

        //    // assert
        //    Assert.Equal(expected, actual);
        //}

        [Fact]
        public void CalculateMeanSiderealTime()
        {
            // arrange
            DateTime date = new DateTime(2019, 6, 19, 10, 20, 30);
            double longitude = -3;

            double expected = 44.44358588568866;

            var sut = new TimeConverter();

            // act
            double actual = sut.CalculateMeanSiderealTime(date, longitude);

            // assert
            Assert.Equal(expected, actual);
        }


    }
}
