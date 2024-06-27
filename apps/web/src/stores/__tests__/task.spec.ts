import { beforeEach, describe, expect, it } from "vitest";
import { useTaskStore } from "../task";
import { createPinia, setActivePinia } from "pinia";
import { Task } from "@/types/task";

describe("Task Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe("Task", () => {

    it("should setup tasks", () => {
      const store = useTaskStore()
      store.setupTasks([
        new Task("Task 1"),
        new Task("Task 2"),
      ])

      expect(store.tasks).toHaveLength(2)
    })

    it("should add a task", async () => {
      const store = useTaskStore()
      store.setupTasks([])

      const task = await store.addTask("New Task")

      expect(store.tasks.includes(task)).toBeTruthy()
    })

    it("should find a task", async () => {
      const store = useTaskStore()
      store.setupTasks([])

      const task = await store.addTask("New Task")

      expect(store.findTask(task.id)).toEqual(task)
    })

    it("should get head task", () => {
      const store = useTaskStore()
      const task = new Task("Task 1")
      store.setupTasks([ task ])

      expect(store.getHeadTaks()).toStrictEqual(task)
    })
  })

  describe("Pomodoro", () => {

    it("should add a task had pomodoro", async () => {
      const store = useTaskStore()
      store.setupTasks([])

      const task = await store.addTask("New Task")

      expect(task.pomodoros).toHaveLength(1)
    })

    it("should add pomodoros", () => {
      const store = useTaskStore()
      store.setupTasks([])

      const task = new Task("New Task")

      store.tasks.push(task)

      store.addPomodoros(task.id, 2)

      expect(task.pomodoros).toHaveLength(3)
    })
  })
})