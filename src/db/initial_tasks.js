import { v4 as uuidv4 } from "uuid";

const createInitialTask = (name, completed) => ({
  id: uuidv4(),
  name,
  createdAt: Date.now(),
  completed,
});

const INITIAL_TASKS = [
  createInitialTask("Completed task", false),
  createInitialTask("Editing task", false),
  createInitialTask("Active task", false),
];

export default INITIAL_TASKS;
