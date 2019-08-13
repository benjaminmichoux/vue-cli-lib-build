<template lang="html">
	<ul 
		:id="idGen"
		class="breadcrumb"
	>
		<li
			v-for="(item, k) in items"
			:key="item.text + k"
			class="breadcrumb-item"
		>
			<component
				:is="item.link && item.link != '#' && !item.href ? 'router-link' : item.href ? 'a' : 'span'"
				:id="`${idGen}Item${k}`"
				:class="className(item.link)"
				:href="item.href"
				:to="item.link"
				v-html="item.text"
			/>
		</li>
	</ul>
</template>

<script>
import idGen from '../../mixins/idGen';
export default {
	name: 'my-breadcrumb',
	mixins: [idGen],
	props: {
		items: {
			type: Array,
			required: true
		}
	},
	methods: {
		className(link) {
			return link && link != '#' ? 'breadcrumb-link' : '';
		}
	}
};
</script>

