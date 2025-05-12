import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import App from "./components/App.jsx";
import "./style.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Header />
    <App />
		<Footer />
	</StrictMode>
);
