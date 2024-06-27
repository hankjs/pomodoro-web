import { nanoid } from "nanoid"
import { Pomodoro } from "./pomodoro";

export class Task {
  id: string;
  pomodoros: Pomodoro[] = []

  constructor(
    public title: string
  ) {
    this.id = nanoid()
    this.addPomodoros()
  }

  addPomodoros(count: number = 1) {
    for (let i = 0; i < count; i++) {
      this.pomodoros.push(new Pomodoro())
    }
  }
}

