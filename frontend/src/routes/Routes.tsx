import {
  BrowserRouter as Router,
  Route,
  Routes as ImportedRoute,
} from "react-router-dom";
import { TodoList } from "../pages";

const RoutesComponent = () => {
  return (
    <Router>
      <ImportedRoute>
        <Route path="/" element={<TodoList />} />
      </ImportedRoute>
    </Router>
  );
};

export default RoutesComponent;
