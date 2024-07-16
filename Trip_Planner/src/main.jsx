import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateTripe from "./create-trip/index.jsx";

const route = createBrowserRouter(
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/create_tripe",
		element: <CreateTripe />,
	}
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={route} />
	</React.StrictMode>
);
