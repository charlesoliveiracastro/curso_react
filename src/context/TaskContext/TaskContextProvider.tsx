import { useEffect, useState } from 'react';
import { TaskStateModel } from '../../models/TaskStateModel';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<TaskStateModel>(initialTaskState);

  useEffect(() => {}, [state]);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  );
}
