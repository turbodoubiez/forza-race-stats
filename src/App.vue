<template>
    <div class="container container-fluid" data-bs-theme="dark">
        <RecordedRaceList msg="This is gonna be great!" />
    </div>
</template>

<script>
import RecordedRaceList from './components/RecordedRaceList.vue';

export default {
    name: 'App',
    components: {
        RecordedRaceList
    }
};
</script>

<style lang="scss">
.container {
    --bs-gutter-y: 1.5rem;
    padding-top: calc(var(--bs-gutter-y) * 0.5);
    padding-bottom: calc(var(--bs-gutter-y) * 0.5);
}
</style>
