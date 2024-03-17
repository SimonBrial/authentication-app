import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./app/login/LoginPage";
import HomePage from "./app/home/HomePage";
import EditFieldPage from "./app/edit/EditFieldPage";
import MainContainer from "./app/MainContainer";

function App() {
  return (
    <main className="bg-white w-screen h-screen bg-gradient-to-t from-violet-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/" element={<MainContainer />}>
            <Route index path="home" element={<HomePage />} />
            <Route path="edit" element={<EditFieldPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
