export interface ITask {
    _id: string;
    title: string;
    description: string;
    dueDate: string;
    isComplete: boolean;
    priority: "high" | "medium" | "low";
    assignedTo: string | null;
}

export interface IUser {
    id: string;
    name: string;
}
