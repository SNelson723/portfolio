import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastProvider } from "./components/toast/ToastProvider.tsx";

// Pages
import Home from "./pages/home/Home.tsx";
import YoutubeHome from "./pages/youtube/YoutubeHome.tsx";
import TodoHome from "./pages/todo/TodoHome.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ToastProvider autoClose={true} duration={3000}>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="youtube" element={<YoutubeHome />} />
              <Route path="todos" element={<TodoHome />} />
            </Route>
          </Routes>
        </ToastProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
