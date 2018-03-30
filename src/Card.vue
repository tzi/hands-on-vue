<template>
    <div class="column is-2 has-text-centered">
        <div class="card">
            <div class="card-content">
                <img :src="imageUrl"/>
                <p>
                    {{ name }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            imageUrl() {
                return `src/assets/sprites/${this.id}.png`;
            }
        },
        props: [
            'id',
            'name'
        ]
    }
</script>