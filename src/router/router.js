import { createBrowserRouter } from "react-router";
import Homepage from "../views/homepage/Homepage";
import Layout from "../views/layouts/layout";
import ROUTES from "./routes";

const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        Component: Layout,
        children: [
            {
                index: true,
                Component: Homepage
            },
            {
                path: ROUTES.PRODOTTI,
                Component: Homepage,
            },
            {
                path: ROUTES.CONTATTI,
                Component: Homepage,
            },
        ],
    }


]);

export default router;