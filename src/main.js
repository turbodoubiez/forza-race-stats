import 'bootstrap';
import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import RecordedRaceList from './components/RecordedRaceList';
import RecordedRaceDetails from './components/RecordedRaceDetails';
import './styles/main.scss';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            name: 'recordedRaceList',
            path: '/recorded-races',
            component: RecordedRaceList,
            meta: {
                isMain: true,
                title: 'Recorded Races'
            }
        },
        {
            name: 'recordedRaceDetails',
            path: '/recorded-races/:raceId',
            component: RecordedRaceDetails,
            props: true,
            meta: {
                title() {
                    return `Race ${this.params.raceId} Details`;
                }
            }
        },
        {
            path: '/',
            redirect: '/recorded-races'
        }
    ]
});

createApp(App).use(router).mount('#app');
