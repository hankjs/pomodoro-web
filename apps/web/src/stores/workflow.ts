import { defineStore } from "pinia";
import { ref } from "vue";
import { useTaskStore } from "./task";
import { useClockStore } from "./clock";
import type { Task } from "@/types/task";
const DEFAULT_DURATION = 25 * 60 * 1000

export const useWorkflowStore = defineStore("workflow", () => {
  const taskStore = useTaskStore()
  const clockStore = useClockStore()

  const currentTaks = ref<Task | null>(null)
  const isRunning = ref(false)
  const isFinish = ref(false)

  function start(ms: number = DEFAULT_DURATION) {
    isRunning.value = true
    clockStore.start(ms)
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