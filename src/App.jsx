import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Layout/Homepage";
import Home from "./Pages/Home";
import StudentsProjects from "./Pages/StudentsProjects";
import StartUps from "./Pages/StartUps";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route index element={<Home />} />
          <Route path="start_ups" element={<StartUps />} />
          <Route path="students_projects" element={<StudentsProjects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
