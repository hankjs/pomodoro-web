import type { Task } from "@/types/task";
import mitt from "mitt";

export enum EVENT {
  //#region Clock
  CLOCK_START = "CLOCK:START",
  CLOCK_DONE = "CLOCK:DONE",
  //#endregion

  //#region Task
  TASK_SETUP = "TASK:SETUP",
  TASK_ADD = "TASK:ADD",
  //#endregion

  //#region Pomodoro
  POMODORO_ADD = "POMODORO:ADD",
  //#endregion
}

type Events = {
  [EVENT.CLOCK_START]: void;
  [EVENT.CLOCK_DONE]: { startTime: number, elapsedTime: number }
  [EVENT.TASK_SETUP]: Task[];
  [EVENT.TASK_ADD]: Task;
};

export const emitter = mitt<Events>();
