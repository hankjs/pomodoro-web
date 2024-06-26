import { defineStore } from "pinia";
import { ref } from "vue";
import { nanoid } from "nanoid"

export class Pomodoro {
  id: string;

  constructor() {
    this.id = nanoid()
  }
}

export class Task {
  id: string;
  pomodoros: Pomodoro[] = []

  constructor(
    public title: string
  ) {
    this.id = nanoid()
    this.addPomodoros()
  }

  addPomodoros(count: number = 1) {
    for (let i = 0; i < count; i++) {
      this.pomodoros.push(new Pomodoro())
    }
  }
}

export const useTaskStore = defineStore("task", () => {
  const tasks = ref<Task[]>([]);

  function setupTasks(list: Task[]) {
    tasks.value = list;
  }

  async function addTask(title: string) {
    const task = new Task(title);

    tasks.value.push(task);

    return task
  }

  function findTask(id: string) {
    return tasks.value.find((task) => task.id === id);
  }

  function addPomodoros(id: string, count: number) {
    const task = findTask(id);

    if (task) {
      task.addPomodoros(count);
    }
  }

  return {
    tasks,

    setupTasks,
    addTask,
    findTask,
    addPomodoros,
  };
})