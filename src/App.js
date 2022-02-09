import { Route, Routes } from "react-router-dom";

import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';

import Heading from "./components/Heading";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import { ContextProvider } from "./context/GlobalContext";

function App() {
  return (
    <div>
      <div className="h-screen text-white text-center p-10">
        <div className="container mx-auto h-full">
          <ContextProvider>
            <Heading />
            <Routes>
              <Route exact path="/" element={<TaskList />} />
              <Route path="/add" element={<TaskForm />} />
              <Route path="/edit/:taskId" element={<TaskForm />} />
            </Routes>
          </ContextProvider>
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
}

export default App;
