import { vi, beforeEach, describe, expect, it } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { useClockStore } from "../clock";

describe("Clock Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe("Clock", () => {

    it("should start clock", () => {
      vi.useFakeTimers()
      const store = useClockStore()
      store.startClock()

      expect(store.isRunning).toBeTruthy()
      expect(store.elapsedTime).toEqual(0)

      vi.advanceTimersByTime(1000)

      expect(store.elapsedTime).toBeGreaterThan(0)
    })

    it("should stop clock", () => {
      vi.useFakeTimers()
      const store = useClockStore()
      store.startClock()
      expect(store.isRunning).toBeTruthy()

      store.stopClock()
      const elapsedTime = store.elapsedTime
      expect(store.isRunning).toBeFalsy()

      vi.advanceTimersByTime(1000)

      expect(store.elapsedTime).toEqual(elapsedTime)
    })

    it("should reset clock", () => {
      vi.useFakeTimers()

      const store = useClockStore()
      store.startClock()
      vi.advanceTimersByTime(1000)
      expect(store.isRunning).toBeTruthy()
      expect(store.elapsedTime).toBeGreaterThan(0)

      store.resetClock()
      expect(store.isRunning).toBeTruthy()
      expect(store.elapsedTime).toEqual(0)
    })

    it("should finish clock", () => {
      const store = useClockStore()
      vi.useFakeTimers()
      store.startClock(2000)

      vi.advanceTimersByTime(2060)

      expect(store.elapsedTime).toBeGreaterThan(2000)
      expect(store.isRunning).toBeFalsy()
      expect(store.isFinish).toBeTruthy()
    })
  })
})

