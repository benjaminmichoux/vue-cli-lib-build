<template>
	<div id="app">
		<h1>My h1</h1>
		<h2>bla</h2>
		<my-badge>Yo</my-badge>
	</div>
</template>

<script>
import MyBadge from './components/Badge/Badge.vue';
export default {
	name: 'app',
	components: {
		MyBadge
	}
};
</script>
