import { createBrowserRouter } from "react-router";
import Homepage from "../views/Homepage";
import Layout from "../views/layouts/layout";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                Component: Homepage
            },
        ],
    }


]);

export default router;