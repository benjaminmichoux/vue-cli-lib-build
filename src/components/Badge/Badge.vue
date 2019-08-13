<template lang="html">
	<div
		:id="idGen"
		:class="{
			'badge-left': positionX === 'left',
			'badge-right': positionX === 'right'
		}"
		class="badge"
	>
		<slot />
		<div class="badge-wrapper">
			{{ message }}
			<span 
				v-if="labelSr" 
				:id="`${idGen}SRLabel`" 
				class="sr-only"
			>
				{{ labelSr }}
			</span>
		</div>
	</div>
</template>

<script>
import idGen from '../../mixins/idGen';
export default {
	name: 'my-badge',
	mixins: [idGen],
	props: {
		message: {
			type: [String, Number],
			default: '0'
		},
		positionX: {
			type: String,
			default: 'right'
		},
		labelSr: String
	}
};
</script>
