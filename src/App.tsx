import { TaskProvider } from './context/TaskContext/TaskContextProvider';
import { Home } from './pages/home';

import './styles/global.css';

export function App() {
  return (
    <TaskProvider>
      <Home />
    </TaskProvider>
  );
}
