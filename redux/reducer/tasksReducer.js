import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    setTasks: (state, action) => {
      // return (state = action.payload);
    },

    addTask: (state, action) => {
      const newTask = {
        id: Math.random().toString(),
        name: action.payload,
        completed: false,
      };
      state.push(newTask);
    },

    taskCompleted: (state, action) => {
      const task = state.find((task) => task.id === action.payload.id);
      if (task) {
        task.completed = !task.completed;
      }
    },

    taskDeleted: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addTask, taskCompleted, taskDeleted, setTasks } =
  tasksSlice.actions;
export default tasksSlice.reducer;
