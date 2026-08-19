type calendarDataType = {
  title: string;
  fill: string;
  cost: number;
  start: Date;
  end: Date;
};

export const calendarData: calendarDataType[] = [
  {
    title: "Sex",
    fill: "#d61f1f",
    cost: 600,
    start: new Date("2026-08-1"),
    end: new Date("2026-08-1"),
  },
  {
    title: "Food",
    fill: "#17b619",
    cost: 800,
    start: new Date("2026-08-1"),
    end: new Date("2026-08-5"),
  },
  {
    title: "Hex",
    cost: 7200,
    fill: "#1fd6c7",
    start: new Date("2026-08-15"),
    end: new Date("2026-08-16"),
  }
];

export const sortedCalendarData = [...calendarData].sort((a,b) => {
  const durationA = a.end.getTime() - a.start.getTime();
  const durationB = b.end.getTime() - b.start.getTime();
  return durationB - durationA
})
