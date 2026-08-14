import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isToday,
  getDay,
} from "date-fns";
import "./calendar-page.css";
import { useState } from "react";
import { ru } from "date-fns/locale";
import "./calendar.css";
import Button from "../../../shared/ui/button/Button";
import { sortedCalendarData } from "./calendar-data";

const CalendarPage = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const startDayOfWeek = getDay(monthStart);
  const emptyDaysCount = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1;

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  return (
    <div className="calendar-page-main-box">
      <div className="calendar-mouth-title-box">
        <span className="capitalize calendar-mouth-title">
          {format(currentMonth, "LLLL yyyy", { locale: ru })}
        </span>
        <div className="calendar-mouth-button-box">
          <Button
            type="button"
            style="secondary"
            size="large"
            click={prevMonth}
          >
            <span className="calendar-arrow">🠜</span>
          </Button>
          <Button
            type="button"
            style="secondary"
            size="large"
            click={nextMonth}
          >
            <span className="calendar-arrow">🠞</span>
          </Button>
        </div>
      </div>
      <div className="calendar-week-block">
        {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((d) => (
          <div className="calendar-week-title" key={d}>
            {d}
          </div>
        ))}
      </div>
      <div className="calendar-mouth-box">
        {Array.from({ length: emptyDaysCount }).map((_, index) => (
          <div key={`empty-${index}`} className="mini-calendar-day-empty" />
        ))}
        {daysInMonth.map((day) => (
          <div className="cost-events-box">
            {sortedCalendarData.map((item, index) => {
              const calendarDay = format(day, "yyyy-MM-dd");
              const startEvent = format(item.start, "yyyy-MM-dd");
              const endEvent = format(item.end, "yyyy-MM-dd");
              return (
                calendarDay >= startEvent &&
                calendarDay <= endEvent && (
                  <>
                    <div
                      id={`${calendarDay}`}
                      key={`${item.title}-${index}`}
                      className={`cost-event-${startEvent === endEvent ? "one-day" : calendarDay === startEvent ? "start" : calendarDay === endEvent ? "end" : "middle"}`}
                      style={
                        {
                          "--color-category-fill": item.fill,
                        } as React.CSSProperties
                      }
                    ></div>
                    <div className="cost-event-hover-day-data-true">
                      {calendarDay >= startEvent && calendarDay <= endEvent && (
                        <div>{item.title}</div>
                      )}
                    </div>
                  </>
                )
              );
            })}
            <div className="cost-event-hover-day-data-false">
              <div>соси хуй 67 монстр</div>
            </div>
          </div>
        ))}
        <div className="event-grid">
          {Array.from({ length: emptyDaysCount }).map((_, index) => (
            <div key={`empty-${index}`} className="mini-calendar-day-empty" />
          ))}
          {daysInMonth.map((day) => {
            return (
              <button key={day.toString()} className="calendar-day-box">
                <span
                  id={day.toISOString()}
                  className={`calendar-day-number ${isToday(day) && "calendar-today-number"}`}
                >
                  {format(day, "d")}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
