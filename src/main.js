const template = `<div>
<h1>{{ name }}</h1>
</div>`;

const app = Vue.createApp({
            data() {
                return {
                    title: "Vue3 Tutorial",
                    name: "Jiant",
                };
            },
        });
        app.mount("#vue-app");