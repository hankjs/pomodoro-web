import type { Task } from "@/types/task";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useTaskStore = defineStore("task", () => {
  const tasks = ref<Task[]>([]);

  function addTask(task: Task) {
    tasks.value.push(task);
  }

  return { tasks, addTask };
})