import { atom } from "jotai";

type chosePeriodType = {
  start: Date | null;
  end: Date | null;
};

function diffInDays(a: Date, b: Date): number {
  const msDiff = b.getTime() - a.getTime();
  return Math.round(msDiff / (1000 * 60 * 60 * 24) + 1);
}

export const chosePeriod = atom<chosePeriodType>({ start: null, end: null });

export const setPeriod = atom(null, (get, set, day: Date) => {
  const oldPeriod = get(chosePeriod);
  const hasStartPeriod = oldPeriod.start !== null;
  const hasEndPeriod = oldPeriod.end !== null;
  const newPeriod =
    hasStartPeriod && !hasEndPeriod
      ? { start: oldPeriod.start, end: day }
      : { start: day, end: null };
  set(chosePeriod, newPeriod);
  console.log(newPeriod);
  if (newPeriod.start !== null && newPeriod.end !== null) {
    console.log(diffInDays(newPeriod.start, newPeriod.end))
  }
});
