import Home from '../views/HomeView.vue';
import Balabala from '../views/demo/BalabalaView.vue';

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/balabala', name: 'Balabala', component: Balabala},
];

export default routes;