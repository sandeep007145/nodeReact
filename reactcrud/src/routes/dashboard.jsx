import dashboard from "../view/dashboard";
import Business from "../components/business";
import CreateVusiness from "../components/createVusiness";
var DashBoardRoutes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: dashboard
    },
    {
        path: '/business',
        name: 'Business Details',
        component: Business
    },
    {
        path: '/create-business',
        name: 'Create Business',
        component: CreateVusiness
    },
    { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
]

export default DashBoardRoutes;