import Contact from "./views/Contact";
import AddConference from "./views/AddConference";
import ApprovedArticles from "./views/ApprovedArticles";
import Home from "./views/Home";
import Collaborators from "./views/Collaborators";
import NotFound from "./views/NotFound";

export const routes = Object.freeze([
    {
        path:"/",
        component: Home,
        name: "Home"
    },
    {
        path:"/Contact",
        component: Contact,
        name: "Contact"
    },
    {
        path:"/ApprovedArticles",
        component: ApprovedArticles,
        name: "ApprovedArticles"
    },
    {
        path:"*",
        component: NotFound,
        name: null
    },
    {
        path:"/AddConference/",
        component: AddConference,
        name: null
    },
    {
        path:"/Collaborators/:id",
        component: Collaborators,
        name: null
    }
]);