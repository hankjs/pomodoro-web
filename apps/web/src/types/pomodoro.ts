import { nanoid } from "nanoid"

export class Pomodoro {
  id: string;

  constructor() {
    this.id = nanoid()
  }
}