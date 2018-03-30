<template>
    <div class="resultset">
        <div class="columns is-multiline">

            <Card :id="1" :name="'Bulbasaur'"></Card>

            <Card :id="2" :name="'Ivysaur'"></Card>

            <Card :id="3" :name="'Venusaur'"></Card>

        </div>
    </div>
</template>

<script>
    import Card from './Card';

    export default {
        components: {
            Card,
        }
    }
</script>
