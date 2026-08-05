
export type calculationData = {
  totalBudget: { value: number; lastValue: number };
  totalSaved: number;
  canExpenses: number;
  saveMoney: { value: number; lastValue: number };
};


export type saveHistory = {
  id: string;
  date: string;
  value: number;
};

export const historySave: saveHistory[] = [
  { id: "1", date: "08-06-2025", value: 10000 },
  { id: "2", date: "08-07-2025", value: 30000 },
  { id: "3", date: "08-08-2025", value: 10000 },
  { id: "4", date: "08-09-2025", value: 50000 },
  { id: "5", date: "08-10-2025", value: 10000 },
  { id: "6", date: "08-11-2025", value: 100000 },
  { id: "1", date: "08-12-2025", value: 10000 },
  { id: "2", date: "08-01-2026", value: 30000 },
  { id: "3", date: "08-02-2026", value: 10000 },
  { id: "4", date: "08-03-2026", value: 50000 },
  { id: "5", date: "08-04-2026", value: 10000 },
  { id: "6", date: "08-05-2026", value: 100000 },
  { id: "1", date: "08-06-2026", value: 10000 },
  { id: "2", date: "08-07-2026", value: 30000 },
  { id: "3", date: "08-08-2026", value: 10000 },
  { id: "4", date: "08-09-2026", value: 50000 },
  { id: "5", date: "08-10-2026", value: 10000 },
  { id: "6", date: "08-11-2026", value: 100000 },
  { id: "1", date: "08-12-2026", value: 10000 },
  { id: "2", date: "08-01-2027", value: 30000 },
  { id: "3", date: "08-02-2027", value: 10000 },
  { id: "4", date: "08-03-2027", value: 50000 },
  { id: "5", date: "08-04-2027", value: 10000 },
  { id: "6", date: "08-05-2027", value: 100000 },
];
