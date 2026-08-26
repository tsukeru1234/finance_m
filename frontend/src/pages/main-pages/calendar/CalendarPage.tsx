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
import React from "react";

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
            <span className="calendar-arrow">{"<"}</span>
          </Button>
          <Button
            type="button"
            style="secondary"
            size="large"
            click={nextMonth}
          >
            <span className="calendar-arrow">{">"}</span>
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
        <div className="event-grid">
          {Array.from({ length: emptyDaysCount }).map((_, index) => (
            <div key={`empty-${index}`} className="mini-calendar-day-empty" />
          ))}
          {daysInMonth.map((day) => {
            const calendarYMD = format(day, "yyyy-MM-dd");
            const calendarDay = format(day, "d");

            const activeEvents = sortedCalendarData.filter((item) => {
              const startEvent = format(item.start, "yyyy-MM-dd");
              const endEvent = format(item.end, "yyyy-MM-dd");
              return calendarYMD >= startEvent && calendarYMD <= endEvent;
            });

            const hasEvents = activeEvents.length > 0;

            return (
              <button className="cost-events-box">
                {hasEvents &&
                  activeEvents.map((item, index) => {
                    const startEvent = format(item.start, "yyyy-MM-dd");
                    const endEvent = format(item.end, "yyyy-MM-dd");
                    return (
                      <div
                        key={`strip-${item.title}-${index}`}
                        id={calendarYMD}
                        className={`cost-event-${startEvent === endEvent ? "one-day" : calendarYMD === startEvent ? "start" : calendarYMD === endEvent ? "end" : "middle"}`}
                        style={
                          {
                            "--color-category-fill": item.fill,
                          } as React.CSSProperties
                        }
                      />
                    );
                  })}
                {hasEvents ? (
                  <div className="cost-event-hover-day-data">
                    {activeEvents.map((item, index) => (
                      <span
                        key={`hover-${item.title}-${index}`}
                        className="calendar-hover-event-name"
                      >
                        {item.title}
                      </span>
                    ))}
                    <span className="calendar-hover-day">{calendarDay}</span>
                  </div>
                ) : (
                  <div className="cost-event-hover-day-data">
                    <span className="calendar-hover-event-name">
                      Ordinary day
                    </span>
                    <span className="calendar-hover-day">{calendarDay}</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
        {Array.from({ length: emptyDaysCount }).map((_, index) => (
          <div key={`empty-${index}`} className="mini-calendar-day-empty" />
        ))}
        {daysInMonth.map((day) => {
          return (
            <div key={day.toString()} className="calendar-day-box">
              <span
                id={day.toISOString()}
                className={`calendar-day-number ${isToday(day) && "calendar-today-number"}`}
              >
                {format(day, "d")}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarPage;
