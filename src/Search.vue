<template>
    <div class="field m-t">
        <div class="control has-icons-left has-icons-right">
            <input class="input is-danger" type="text" placeholder="Pokemon name" value=""
                v-model="searchValue">
            <span class="icon is-small is-left">
                <i class="fa fa-search"></i>
            </span>
            {{ searchValue }}
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                searchValue: ''
            }
        }
    }
</script>
