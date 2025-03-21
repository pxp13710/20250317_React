/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'

const todoStore = createSlice({
  name: 'todoStore',
  initialState: {
    todoList: [
      { id: 1, text: '첫번째 할 일', done: false },
    ],
    text: '',
  },
  reducers: {
    // action => { payload: 1 }
    updateTodoAction: (state, action) => {
      const idx = state.todoList.findIndex(todo => todo.id === action.payload);
      state.todoList[idx].done = !state.todoList[idx].done;
    },
    // action => { payload: 1 }
    deleteTodoAction: (state, action) => {
      const idx = state.todoList.findIndex(todo => todo.id === action.payload);
      state.todoList.splice(idx, 1)
    },
    // action => { payload: '두번째 할 일' }
    addTodoAction: (state, action) => {
      const cnt = state.todoList.at(-1) ? state.todoList.at(-1).id + 1 : 1;
      const todo = { id: cnt, text: action.payload, done: false }
      state.todoList.push(todo);
    },
    // action => { payload: '두번째 할 일' }
    changeTextAction: (state, action) => {
      state.text = action.payload;
    },
  },
  extraReducers: (builder) => {

  }
})
export default todoStore;
export const { updateTodoAction, deleteTodoAction, addTodoAction, changeTextAction } = todoStore.actions;
