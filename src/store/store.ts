import { createStore, Reducer } from "@reduxjs/toolkit";
import { parseDate } from "../components/parseDate";
import { Category, Note } from "./types";
import { devToolsEnhancer } from "@redux-devtools/extension";

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

const defaultState = {
  notes: list,
};

type RootState = {
  notes: Note[];
};

export const selectNotes = (state: RootState) => state.notes;

const reducer: Reducer<RootState> = (state = defaultState, action: any) => {
  switch (action.type) {
    case "createNote":
      return { notes: [...state.notes, createNote(state.notes, action)] };
    case "removeNote":
      return { notes: [...remoteNote(state.notes, action)] };

    case "editNote":
      return { notes: editNote(state.notes, action) };

    case "archiveNote":
      return { notes: [...archiveNote(state.notes, action)] };

    default:
      return state;
  }
};
// const remoteNote = (list: Note[], id: number) => {
// const remoteNote = (list: Note[], note: Note) => {
const remoteNote = (state: Note[], { payload }: { payload: Note }) => {
  console.log("payload", payload);
  state = state.filter((n) => n.id !== payload.id);
  console.log("state", state);
  return state;
};

const createNote = (state: Note[], { payload }: { payload: Note }) => {
  return payload;
};

const archiveNote = (state: Note[], { payload }: { payload: Note }) => {
  const index = state.findIndex((n) => n.id === payload.id);
  state[index].archive = !state[index].archive;
  return state;
};

const editNote = (state: Note[], { payload }: { payload: Note }) => {
  const index = state.findIndex((n) => n.id === payload.id);
  state[index] = { ...payload };
  return state;
};

//export const store = createStore(reducer, undefined);

export const store = createStore(
  reducer,
  /* preloadedState, */ devToolsEnhancer()
  // Specify name here, actionsDenylist, actionsCreators and other options if needed
);

console.log(store);
