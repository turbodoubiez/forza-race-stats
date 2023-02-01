<template>
    <nav class="navbar">
        <div class="container-fluid justify-content-start">
            <router-link
                to="/recorded-races"
                id="navigate-back"
                class="navbar-brand btn btn-icon btn-primary"
                v-show="canNavigateBack">
                <i class="bi bi-arrow-left"></i>
            </router-link>
            <span class="navbar-text mb-0 h5 text-primary">
                {{ stateTitle }}
            </span>
            <span class="d-flex flex-fill"></span>
            <form class="d-flex" role="search">
                <button class="btn btn-icon btn-primary">
                    <i class="bi bi-gear-fill"></i>
                </button>
            </form>
        </div>
    </nav>
    <div id="mainContent" class="container-fluid">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    computed: {
        stateTitle() {
            const { title } = this.$route.meta;

            if (typeof title === 'function') {
                return title.call(this.$route);
            }

            return title;
        },
        canNavigateBack() {
            return !this.$route.meta.isMain;
        }
    }
};
</script>

<style lang="scss">
nav.navbar #navigate-back {
    margin-right: 5px;
}

#mainContent {
    padding: calc(1.5rem * 0.5);
}
</style>
