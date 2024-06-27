import { defineStore } from "pinia";
import { ref } from "vue";
import { useTaskStore } from "./task";
import { useClockStore } from "./clock";
import type { Task } from "@/types/task";

export const useWorkflowStore = defineStore("workflow", () => {
  const taskStore = useTaskStore()
  const clockStore = useClockStore()

  const currentTaks = ref<Task | null>(null)
  const isRunning = ref(false)
  const isFinish = ref(false)

  function start() {
    isRunning.value = true
    clockStore.start()
    currentTaks.value = taskStore.getHeadTaks() ?? null
  }

  function finish() {
    isRunning.value = false
    isFinish.value = true
    currentTaks.value = null
  }

  return {
    currentTaks,
    isRunning,
    isFinish,
    start,
    finish,
  };
})