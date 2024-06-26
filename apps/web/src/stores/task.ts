import { defineStore } from "pinia";
import { ref } from "vue";
import { Task } from "@/types/task";
import { EVENT, emitter } from "@/utils/events";

export const useTaskStore = defineStore("task", () => {
  const tasks = ref<Task[]>([]);

  function setupTasks(list: Task[]) {
    tasks.value = list;
    emitter.emit(EVENT.TASK_SETUP, list)
  }

  function getHeadTaks(): Task | undefined {
    return tasks.value[0];
  }

  async function addTask(title: string) {
    const task = new Task(title);

    tasks.value.push(task);

    emitter.emit(EVENT.TASK_ADD, task)
    return task
  }

  function findTask(id: string) {
    return tasks.value.find((task) => task.id === id);
  }

  function addPomodoros(id: string, count: number) {
    const task = findTask(id);

    if (task) {
      const pomodoro = task.addPomodoros(count);
    }
  }

  return {
    tasks,

    setupTasks,
    getHeadTaks,
    addTask,
    findTask,
    addPomodoros,
  };
})