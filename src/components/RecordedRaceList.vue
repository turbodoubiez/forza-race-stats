<template>
    <div class="list-group">
        <router-link :to="{ name: 'recordedRaceDetails', params: { raceId: 1 } }" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
                <h6 class="mb-1">#1 Ferrari 488 Pista</h6>
                <small>3 days ago</small>
            </div>
            <small>14 Laps</small>
        </router-link>
        <router-link :to="{ name: 'recordedRaceDetails', params: { raceId: 2 } }" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
                <h6 class="mb-1">#2 Renault 4L</h6>
                <small class="text-muted">5 days ago</small>
            </div>
            <small class="text-muted">11 Laps</small>
        </router-link>
    </div>
</template>

<script>
const storedTheme = localStorage.getItem('theme');

const setTheme = function (theme) {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.setAttribute('data-bs-theme', 'dark');
    } else {
        document.body.setAttribute('data-bs-theme', theme);
    }
};

const getPreferredTheme = () => {
    if (storedTheme) {
        return storedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export default {
    name: 'RecordedRaceList',
    props: {
        msg: String
    },
    data() {
        return {
            theme: getPreferredTheme()
        };
    },
    created() {
        setTheme(this.theme);
    },
    methods: {
        toggleDarkMode() {}
    }
};
</script>

<style scoped></style>
