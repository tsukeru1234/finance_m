import { atom } from "jotai";

export type categoryDB = {
  id: string;
  user_id: string;
  title: string;
  cost: number;
  fill: string;
  priority: number;
  active_status: boolean;
  ratio: boolean;
};

export const categoryDB = atom<categoryDB[]>([
  {
    id: "1",
    user_id: "1",
    title: "food",
    cost: 500,
    fill: "#d61f1f",
    priority: 10,
    active_status: true,
    ratio: true,
  },
  {
    id: "2",
    user_id: "1",
    title: "sweet",
    cost: 400,
    fill: "#f804d0",
    priority: 12,
    active_status: true,
    ratio: true,
  },
  {
    id: "3",
    user_id: "1",
    title: "maybe",
    cost: 2000,
    fill: "#d2e9e9",
    priority: 1,
    active_status: true,
    ratio: true,
  },
  {
    id: "4",
    user_id: "1",
    title: "home",
    cost: 23000,
    fill: "#313131",
    priority: 1,
    active_status: true,
    ratio: false,
  },
]);
