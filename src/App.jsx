import dayjs from "dayjs";
import weekYear from "dayjs/plugin/weekYear";
import weekOfYear from "dayjs/plugin/weekOfYear";
import isoWeek from "dayjs/plugin/isoWeek";
import dayOfYear from "dayjs/plugin/dayOfYear";
import isLeapYear from "dayjs/plugin/isLeapYear";

dayjs.extend(weekOfYear);
dayjs.extend(weekYear);
dayjs.extend(isoWeek);
dayjs.extend(dayOfYear);
dayjs.extend(isLeapYear);

// get the current date like Satuday, March 20th, 2021
const date = dayjs().format("dddd, MMMM D");
const year = dayjs().format("YYYY");

// get the current date like 2021-03-20
const currentDate = dayjs().format("YYYY-MM-DD");

// get the week of the year
const week = dayjs().isoWeek();

// good morning, afternoon, evening, night based on the current time
// if the current time is between 5am and 12pm, it will say good morning
// if the current time is between 12pm and 5pm, it will say good afternoon
// if the current time is between 5pm and 8pm, it will say good evening
// if the current time is between 8pm and 5am, it will say good night
const time = dayjs().format("H");
let greeting = "";
if (time >= 5 && time < 12) {
  greeting = "Good morning";
} else if (time >= 12 && time < 17) {
  greeting = "Good afternoon";
} else if (time >= 17 && time < 20) {
  greeting = "Good evening";
} else {
  greeting = "Good night";
}

// get the progress of the year in percentage
const startOfYear = dayjs().startOf("year");
const endOfYear = dayjs().endOf("year");
const progress =
  (dayjs().diff(startOfYear, "day") / endOfYear.diff(startOfYear, "day")) * 100;

// get the progress of the month in percentage
const startOfMonth = dayjs().startOf("month");
const endOfMonth = dayjs().endOf("month");
const progressMonth =
  (dayjs().diff(startOfMonth, "day") / endOfMonth.diff(startOfMonth, "day")) *
  100;

// get the progress of the week in percentage
const startOfWeek = dayjs().startOf("week");
const endOfWeek = dayjs().endOf("week");
const progressWeek =
  (dayjs().diff(startOfWeek, "day") / endOfWeek.diff(startOfWeek, "day")) * 100;

// get the total number of days in the current year
const daysInYear = dayjs().dayOfYear();
// is the current date a leap year?
const leapYear = dayjs().isLeapYear();
// if it is a leap year, the total number of days in the year is 366 days else 365 days
const numberOfdays = leapYear ? 366 : 365;

function App() {
  return (
    <>
      <header className=" text-rose-900 standalone:h-10"></header>
      <main className="text-rose-900">
        <span className="font-bold text-md md:text-xl  opacity-50">
          {date}th, {year}
        </span>
        <h1 className="font-bold text-4xl md:text-6xl">{greeting}</h1>
        <div className="mt-4 font-bold">
          <span className="opacity-50">Week number:</span>
          <span className=""> {week}</span>
        </div>
        <div className="mt-4">
          <span className="font-bold opacity-50">Week Progress</span>
          <div className="h-8 bg-rose-50 rounded-xl border-4 border-rose-800 overflow-hidden">
            <div
              className="bg-rose-500 h-full"
              style={{ width: `${progressWeek}%` }}
              id="progress-bar"
            ></div>
          </div>
        </div>

        <div className="mt-4">
          <span className="font-bold opacity-50">Month Progress</span>
          <div className="h-8 bg-rose-50 rounded-xl border-4 border-rose-800 overflow-hidden">
            <div
              className="bg-rose-500 h-full"
              style={{ width: `${progressMonth}%` }}
              id="progress-bar"
            ></div>
          </div>
        </div>
        <div className="mt-4">
          <span className="font-bold opacity-50">Year Progress</span>
          <div className="h-8 bg-rose-50 rounded-xl border-4 border-rose-800 overflow-hidden">
            <div
              className="bg-rose-500 h-full"
              style={{ width: `${progress}%` }}
              id="progress-bar"
            ></div>
          </div>
          <span className="font-bold opacity-50">
            {daysInYear} / {numberOfdays}
          </span>
        </div>
      </main>
    </>
  );
}

export default App;
