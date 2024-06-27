import { defineStore } from "pinia";
import { ref } from "vue";

let timer: number | null = null

export const useClockStore = defineStore("clock", () => {
  const isRunning = ref(false)
  const duration = ref(0)
  const startTime = ref(0)
  const isFinish = ref(false)
  const elapsedTime = ref(0)

  function start(ms: number) {
    isRunning.value = true
    duration.value = ms

    reset()
    updateTimer()
  }

  function updateTimer() {
    if (!isRunning.value) {
      stopTimer()
      return
    }
    let currentTime = Date.now();
    elapsedTime.value = currentTime - startTime.value;
    let remainingTime = Math.max(duration.value - elapsedTime.value, 0);

    if (remainingTime > 0) {
      timer = requestAnimationFrame(updateTimer);
    } else {
      finish()
    }
  }

  function stopTimer() {
    if (timer) {
      cancelAnimationFrame(timer)
      timer = null
    }
  }

  function stop() {
    isRunning.value = false
    stopTimer()
  }

  function reset() {
    startTime.value = Date.now()
    elapsedTime.value = 0
    isFinish.value = false
  }

  function finish() {
    isRunning.value = false
    isFinish.value = true
  }

  return {
    isRunning,
    isFinish,
    elapsedTime,
    duration,

    start,
    stop,
    reset,
    finish,
  }

})