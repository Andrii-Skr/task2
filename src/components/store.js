import { parseDate } from "./parseDate";

let count = 0;
export const getNext = () => count++;
const list = [
  {
    id: getNext(),
    name: "shop list",
    created: new Date().toLocaleDateString(),
    category: "Task",
    content: "bred,shugar",
    dates: "",
    archive: false,
  },
  {
    id: getNext(),
    name: "Books",
    created: new Date().toLocaleDateString(),
    category: "Task",
    content: "buy 'how to learn js for a 5 min'",
    dates: "",
    archive: false,
  },
  {
    id: getNext(),
    name: "New bla bla",
    created: new Date().toLocaleDateString(),
    category: "Idea",
    content: "some text",
    dates: "",
    archive: true,
  },
  {
    id: getNext(),
    name: "New bla bla",
    created: new Date().toLocaleDateString(),
    category: "Random Thought",
    content: "some text 23.01.22",
    dates: "",
    archive: false,
  },
  {
    id: getNext(),
    name: "New bla bla",
    created: new Date().toLocaleDateString(),
    category: "Task",
    content: "some text 22",
    dates: "",
    archive: false,
  },
  {
    id: getNext(),
    name: "New bla bla",
    created: new Date().toLocaleDateString(),
    category: "Task",
    content: "some text 123",
    dates: "",
    archive: false,
  },
  {
    id: getNext(),
    name: "New bla bla",
    created: new Date().toLocaleDateString(),
    category: "Random Thought",
    content: "some text 1.2.22",
    dates: "",
    archive: false,
  },
  {
    id: getNext(),
    name: "New bla bla",
    created: new Date().toLocaleDateString(),
    category: "Task",
    content: "some text 10.01.2020",
    dates: "",
    archive: false,
  },
].map((el) => {
  return { ...el, dates: parseDate(el.content) };
});
export const store = { list };
