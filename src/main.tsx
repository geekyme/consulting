import { ViteReactSSG } from "vite-react-ssg";
import "./index.css";
import App from "./App";

export const createRoot = ViteReactSSG({
  routes: [{ path: "/", element: <App /> }],
  basename: import.meta.env.BASE_URL,
});
