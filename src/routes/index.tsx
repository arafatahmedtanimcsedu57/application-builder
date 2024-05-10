import React from "react"
import PathConstants from "./../const/pathConstants"

// import RenderOnAnonymous from "./RenderOnAnonymous.js";
import RenderOnAuthenticated from "./RenderOnAuthenticated.js";

// const Home = React.lazy(() => import("../pages/Home"))
const Builder = React.lazy(() => import("../pages/Builder"))
// const Example = React.lazy(()=>import("../pages/Example"))

const routes = [
    { 
        path: PathConstants.HOME, 
        element: <RenderOnAuthenticated>
            <Builder />
        </RenderOnAuthenticated> 
    },
    // { 
    //     path: PathConstants.BUILDER, 
    //     element: <RenderOnAuthenticated>
    //         <Builder />
    //     </RenderOnAuthenticated> 
    // },
    // { 
    //     path: PathConstants.EXAMPLE, 
    //     element: <RenderOnAuthenticated>
    //         <Example/>
    //     </RenderOnAuthenticated> 
    // }
]
export default routes
