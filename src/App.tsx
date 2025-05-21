import { TaskProvider } from './context/TaskContext';
import { Home } from './pages/home';

import './styles/global.css';

export function App() {
  return (
    <TaskProvider>
      <Home />
    </TaskProvider>
  );
}
