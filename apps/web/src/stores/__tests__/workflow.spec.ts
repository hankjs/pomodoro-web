import { vi, beforeEach, describe, expect, it } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { useTaskStore } from "../task";
import { useClockStore } from "../clock";
import { Task } from "@/types/task";
import { useWorkflowStore } from "../workflow";

describe("Workflow Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe("Workflow", () => {
    it("should start clock link task", () => {
      vi.useFakeTimers()
      const workflowStore = useWorkflowStore()

      const task = new Task("1")
      const taskStore = useTaskStore()
      taskStore.setupTasks([task])
      const clockStore = useClockStore()

      workflowStore.start()

      expect(clockStore.isRunning).toBeTruthy()
      expect(clockStore.elapsedTime).toEqual(0)

      expect(workflowStore.currentTaks).toStrictEqual(task)
      expect(workflowStore.isRunning).toBeTruthy()

      workflowStore.finish()

      expect(workflowStore.currentTaks).toBe(null)
      expect(workflowStore.isRunning).toBeFalsy()
      expect(workflowStore.isFinish).toBeTruthy()
    })

    it.skip("should finish workflow by clock finish", () => {
      vi.useFakeTimers()
      const workflowStore = useWorkflowStore()

      const task = new Task("1")
      const taskStore = useTaskStore()
      taskStore.setupTasks([task])
      const clockStore = useClockStore()

      workflowStore.start()

      expect(clockStore.isRunning).toBeTruthy()
      expect(clockStore.elapsedTime).toEqual(0)

      expect(workflowStore.currentTaks).toStrictEqual(task)
      expect(workflowStore.isRunning).toBeTruthy()

      vi.advanceTimersByTime(1000)

      expect(workflowStore.currentTaks).toStrictEqual(task)
      expect(workflowStore.isRunning).toBeTruthy()

      vi.advanceTimersByTime(1000)

      expect(workflowStore.currentTaks).toStrictEqual(task)
      expect(workflowStore.isRunning).toBeFalsy()
      expect(workflowStore.isFinish).toBeTruthy()
    })
  })
})