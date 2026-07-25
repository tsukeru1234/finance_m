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
import { ru } from "date-fns/locale";
import { useState } from "react";
import "./style/mini-calendar.css";
import Button from "../../shared/ui/button/Button";

export type MiniCalendarProps = {
  dates: Record<string, { label: string; action: () => void }>;
};

const MiniCalendar = ({ dates }: MiniCalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const startDayOfWeek = getDay(monthStart);
  const emptyDaysCount = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1;

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const handleDayClick = (day: Date) => {
    const dateStr = format(day, "yyyy-MM-dd");
    if (dates[dateStr]) {
      console.log(`Кликнули на special: ${dateStr}`);
      dates[dateStr].action();
    } else {
      console.log(`Кликнули на обычный день: ${dateStr}`);
    }
  };

  return (
    <div className="mini-calendar-main-box">
      <div className="mini-calendar-next-prev-buttons-block">
        <Button type="button" style="secondary" size="small" click={prevMonth}>
          🠜
        </Button>
        <span className="mouth-block capitalize">
          {format(currentMonth, "LLLL yyyy", { locale: ru })}
        </span>
        <Button type="button" style="secondary" size="small" click={nextMonth}>
          🠞
        </Button>
      </div>
      <div>
        <div className="mini-calendar-week-box">
          {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>
  
        {/* СЕТКА ДНЕЙ МЕСЯЦА */}
        <div className="mini-calendar-days-box">
          {Array.from({ length: emptyDaysCount }).map((_, index) => (
            <div key={`empty-${index}`} className="mini-calendar-day-empty" />
          ))}
          {daysInMonth.map((day) => {
            const dateStr = format(day, "yyyy-MM-dd");
            const hasEvent = !!dates[dateStr];
  
            return (
              <button
                key={day.toString()}
                onClick={() => handleDayClick(day)}
                className={`
                  mini-calendar-day
                  ${isToday(day) ? "mini-calendar-today" : "mini-calendar-not-today"}
                `}
              >
                {format(day, "d")}
  
                {/* Маленькая точка снизу, если на дату назначена функция */}
                {hasEvent && <div className="mini-calendar-event"></div>}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MiniCalendar;
