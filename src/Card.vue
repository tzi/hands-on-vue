<template>
    <div class="column is-2 has-text-centered">
        <div class="card">
            <div class="card-content">
                <img :src="`src/assets/sprites/${id}.png`"/>
                <p>
                    {{ name }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'id',
            'name'
        ]
    }
</script>