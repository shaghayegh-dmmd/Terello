
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SignupPage from "../pages/SignupPage";
import DashboardPage from '../pages/DashboardPage';
import AssignPage from '../pages/Assign';
import BoardPage from "../pages/BoardPage";

function App() {


  return (
    <>

      {/* <LoginPage/> */}
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}>
          </Route>
          <Route path="/Signup" element={<SignupPage />}>
          </Route>
          <Route path="/Dashboard" element={<DashboardPage />}>
          </Route>
          <Route path="/Assign" element={<AssignPage />}>
          </Route>
          <Route path="/Board" element={<BoardPage />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
