import { defineStore } from "pinia";
import { ref } from "vue";

const DEFAULT_DURATION = 25 * 60 * 1000
let timer: number | null = null

export const useClockStore = defineStore("clock", () => {
  const isRunning = ref(false)
  const duration = ref(0)
  const startTime = ref(0)
  const isFinish = ref(false)
  const elapsedTime = ref(0)

  function startClock(_duration = DEFAULT_DURATION) {
    isRunning.value = true
    duration.value = _duration

    resetClock()
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
      finishClock()
    }
  }

  function stopTimer() {
    if (timer) {
      cancelAnimationFrame(timer)
      timer = null
    }
  }

  function stopClock() {
    isRunning.value = false
    stopTimer()
  }

  function resetClock() {
    startTime.value = Date.now()
    elapsedTime.value = 0
    isFinish.value = false
  }

  function finishClock() {
    isRunning.value = false
    isFinish.value = true
  }

  return {
    isRunning,
    isFinish,
    elapsedTime,
    duration,

    startClock,
    stopClock,
    resetClock,
    finishClock,
  }

})