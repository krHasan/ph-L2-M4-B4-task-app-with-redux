import { RootState } from "@/redux/store";
import { ITask } from "@/type";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    tasks: ITask[];
}

const initialState: InitialState = {
    tasks: [
        {
            id: "",
            title: "Initial Task",
            description: "Create Home page and routing",
            dueDate: "2025-11",
            isComplete: false,
            priority: "High",
        },
        {
            id: "",
            title: "Initial Task",
            description: "Create Home page and routing",
            dueDate: "2025-11",
            isComplete: false,
            priority: "High",
        },
    ],
};

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {},
});

export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
};

export default taskSlice.reducer;
