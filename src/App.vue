<template>
<img alt="Vue logo" src="./assets/logo.png">
<div>{{ data }}</div>
</template>

<script>
import {
    db
} from './firestore.js'

import {
    ref,
    onMounted
} from 'vue'

export default {
    name: 'App',
    components: {

    },
    setup() {

        onMounted(async () => {
            doc()
        })

        const data = ref(null)
        const doc = () => {
            db.collection("logs").doc("hVlLBgkXIgzXXjZjho7i").onSnapshot(function (doc) {
                console.log(`Logs`, doc.data());
                data.value = doc.data();
            });
        }

        return {
            data,
        }
    }

}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
