const template = `<div>
<h1>{{ name }}</h1>
</div>`;

const data = function data() {
    return {
        title: "Vue3 Tutorial",
        name: "Jiant",
    };
};
Vue.createApp({ data, template }).mount("#vue-app");