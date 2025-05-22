import { TaskModel } from '../models/TaskModel';

export function getNextCycle(currentCycle: number) {
  return currentCycle === 0 || currentCycle === 8 ? 1 : ++currentCycle;
}

export function getWorkTimeType(currentCycle: number): TaskModel['type'] {
  return currentCycle % 8 === 0
    ? 'longBreakTime'
    : currentCycle % 2 === 0
    ? 'shortBreakTime'
    : 'workTime';
}
