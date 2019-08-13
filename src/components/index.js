import Vue from 'vue';
import MyBadge from './Badge/Badge.vue';
import MyBreadcrumb from './Breadcrumb/Breadcrumb.vue';

const Components = {
	MyBadge,
	MyBreadcrumb
};

Object.keys(Components).forEach(name => {
	Vue.component(name, Components[name]);
});

export default Components;
