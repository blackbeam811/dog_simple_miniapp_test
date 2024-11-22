import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

import Doghouse from "./components/doghouse";
import Quests from "./components/quests";
import Dogandcat from "./components/dogandcat";
import { useContext } from "react";
import { RefContext } from "./components/contexts/RefContextProvider";

function App() {
  const { themeID, setThemeID } = useContext(RefContext);
  const k = themeID;
  return (
    <div className="App h-full">
      <div
        className="fixed top-[30%] right-0 text-white w-10 h-10 rounded-[999px] bg-blue-600 p-2"
        onClick={() => setThemeID(k ? 0 : 1)}
      ></div>
      <BrowserRouter>
        <Header />
        <div
          className={
            "w-full mt-[56px] flex items-center flex-col space-y-20 h-[100vh] overflow-auto pb-[60px]" +
            (themeID ? " bg-[#1C1C1D]" : " bg-cs")
          }
        >
          <Routes>
            <Route path="/doghouse" element={<Doghouse />} />
            <Route path="/quests" element={<Quests />} />
            <Route path="/dogandcat" element={<Dogandcat />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
