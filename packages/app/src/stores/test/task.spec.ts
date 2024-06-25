import { beforeEach, describe, expect, it } from "vitest";
import { useTaskStore } from "../task";
import { createPinia, setActivePinia } from "pinia";

describe("Task Store", ()   => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it("should add a task", async () => {
    const store = useTaskStore()

    await store.addTask({
      title: "New Task"
    })

    expect(store.tasks).toHaveLength(1)
  })

  it("should mark task finish a pomodoro", async () => {


  })
})