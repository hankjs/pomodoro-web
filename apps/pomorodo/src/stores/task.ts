import { defineStore } from "pinia";
import { ref } from "vue";
import { nanoid } from "nanoid"

class Pomodoro {
  id: string;

  constructor() {
    this.id = nanoid()
  }
}

class Task {
  id: string;
  pomodoros: Pomodoro[] = []

  constructor(
    public title: string
  ) {
    this.id = nanoid()
    this.pomodoros.push(new Pomodoro())
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

  return {
    tasks,

    setupTasks,
    addTask,
    findTask
  };
})