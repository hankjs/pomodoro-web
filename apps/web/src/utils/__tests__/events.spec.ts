import { vi, beforeEach, describe, expect, it } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { useClockStore } from "@/stores/clock";
import { emitter, EVENT } from "../events"
import { Task } from "@/types/task";
import { useTaskStore } from "@/stores/task";

describe("Events", () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe("Clock", () => {
    it("should start clock", () => {
      const store = useClockStore()
      const handler = vi.fn()

      emitter.on(EVENT.CLOCK_START, handler)

      store.start(1)

      expect(handler).toHaveBeenCalledTimes(1)
    })

    it("should done clock", () => {
      vi.useFakeTimers()
      const store = useClockStore()
      const handler = vi.fn()


      emitter.on(EVENT.CLOCK_DONE, handler)

      store.start(1)
      vi.advanceTimersByTime(1000)

      expect(handler).toHaveBeenCalledTimes(1)
    })
  })

  describe("Task", () => {
    it("should setup task", () => {
      const handler = vi.fn()
      emitter.on(EVENT.TASK_SETUP, handler)
      const store = useTaskStore()

      store.setupTasks([])
      expect(handler).toHaveBeenCalledTimes(1)
    })

    it("should add task", () => {
      const handler = vi.fn()
      emitter.on(EVENT.TASK_ADD, handler)
      const store = useTaskStore()

      store.setupTasks([])
      store.addTask("1")
      expect(handler).toHaveBeenCalledTimes(1)
    })

  })
})