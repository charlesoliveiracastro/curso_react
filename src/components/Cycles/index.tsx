import { useTaskContext } from '../../context/TaskContext/useTaskContext';
import { getNextCycle, getWorkTimeType } from '../../utils/cycleUtils';

export function Cycles() {
  const { state } = useTaskContext();

  const cycleSteps = Array.from({ length: state.currentCycle });

  const styleCycle = {
    workTime: 'h-4 w-4 bg-green-600 rounded-2xl',
    shortBreakTime: 'h-4 w-4 bg-yellow-600 rounded-2xl',
    longBreakTime: 'h-4 w-4 bg-blue-600 rounded-2xl',
  };

  const descriptionMap = {
    workTime: 'Trabalho',
    shortBreakTime: 'Pausa Curta',
    longBreakTime: 'Pausa Longa',
  };

  return (
    <div className='flex flex-col gap-2 items-center justify-center pt-2'>
      <span>Ciclos:</span>
      <div className='flex gap-3'>
        {cycleSteps.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getWorkTimeType(nextCycle);
          const style = styleCycle[nextCycleType as keyof typeof styleCycle];
          return (
            <span
              key={`${nextCycleType}-${nextCycle}`}
              className={style}
              aria-label={`Indicador de ciclo de ${descriptionMap[nextCycleType]}`}
              title={`Indicador de ciclo de ${descriptionMap[nextCycleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
