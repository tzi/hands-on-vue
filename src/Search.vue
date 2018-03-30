<template>
    <div class="field m-t">
        <div class="control has-icons-left has-icons-right">
            <input class="input is-danger" type="text" placeholder="Pokemon name" value=""
                v-model="searchValue" @input="onChange" >
            <span class="icon is-small is-left">
                <i class="fa fa-search"></i>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            onChange() {
                this.$emit('searchChange', this.searchValue);
            }
        },
        data() {
            return {
                searchValue: ''
            }
        }
    }
</script>
