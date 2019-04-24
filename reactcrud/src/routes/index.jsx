import dashboard from "../layouts/Dashboard/dashboard";
import Login from "../components/login";
const token = localStorage.getItem('access_token');

var homeROutes = [{
    path: '/',
    name: 'Home',
    component: dashboard,
    auth: token
},
{
    path: '/',
    name: 'Login',
    component: Login
}
]

const indexRoures = homeROutes.map(res => {
    if(res.auth !== null) {
        return res
    } else {
    return { path: "/", name: "Login", component: Login }
    }
});

export default indexRoures;