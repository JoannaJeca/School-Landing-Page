import {createBrowserRouter } from "react-router-dom"
import SemiLayout from "./Block/SemiLayout"

export const   SemiRouter = createBrowserRouter([
    {
        path: "/",
        element:<SemiLayout/>
    }
])
