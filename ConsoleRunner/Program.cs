using System;
using AstroLib;

namespace ConsoleRunner
{
    class Program
    {
        static void Main(string[] args)
        {
            var time = new Time();

            double jdNow = time.JulianDate(DateTime.Now);

            Console.Write(jdNow);
        }
    }
}
