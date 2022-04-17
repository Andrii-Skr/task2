import { parseDate } from "./parseDate";

export enum Category {
  Task = "Task",
  Idea = "Idea",
  Random_Thought = "Random Thought",
}

export type Note = {
  dates: string[];
  id: number;
  name: string;
  created: string;
  category: Category;
  content: string;
  archive: boolean;
};
let count = 0;
export const getNext = () => count++;
const list: Note[] = [
  {
    id: getNext(),
    name: "shop list",
    created: new Date().toLocaleDateString(),
    category: Category.Task,
    content: "bred,shugar",
    dates: "",
    archive: false,
  },
  {
    id: getNext(),
    name: "Books",
    created: new Date().toLocaleDateString(),
    category: Category.Task,
    content: "buy 'how to learn js for a 5 min'",
    dates: "",
    archive: false,
  },
  {
    id: getNext(),
    name: "New bla bla",
    created: new Date().toLocaleDateString(),
    category: Category.Idea,
    content: "some text",
    dates: "",
    archive: true,
  },
  {
    id: getNext(),
    name: "New bla bla",
    created: new Date().toLocaleDateString(),
    category: Category.Random_Thought,
    content: "some text 23.01.22",
    dates: "",
    archive: false,
  },
  {
    id: getNext(),
    name: "New bla bla",
    created: new Date().toLocaleDateString(),
    category: Category.Task,
    content: "some text 22",
    dates: "",
    archive: false,
  },
  {
    id: getNext(),
    name: "New bla bla",
    created: new Date().toLocaleDateString(),
    category: Category.Task,
    content: "some text 123",
    dates: "",
    archive: false,
  },
  {
    id: getNext(),
    name: "New bla bla",
    created: new Date().toLocaleDateString(),
    category: Category.Random_Thought,
    content: "some text 1.2.22",
    dates: "",
    archive: false,
  },
  {
    id: getNext(),
    name: "New bla bla",
    created: new Date().toLocaleDateString(),
    category: Category.Task,
    content: "some text 10.01.2020",
    dates: "",
    archive: false,
  },
].map((el) => {
  return { ...el, dates: parseDate(el.content) };
});
export const store = { list };
