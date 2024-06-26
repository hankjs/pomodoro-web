import { beforeEach, describe, expect, it } from "vitest";
import { useTaskStore } from "../task";
import { createPinia, setActivePinia } from "pinia";

describe("Task Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe("addTask", () => {
    it("should add a task", async () => {
      const store = useTaskStore()
      store.setupTasks([])

      const task = await store.addTask("New Task")

      expect(store.tasks.includes(task)).toBeTruthy()
    })

    it("should add a task has pomodoro", async () => {
      const store = useTaskStore()
      store.setupTasks([])

      const task = await store.addTask("New Task")

      expect(task.pomodoros).toHaveLength(1)
    })

  })

  it("should mark task finish a pomodoro", async () => {


  })
})