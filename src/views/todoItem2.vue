<template>
	<li>
		{{ title }}
		<button v-on:click="$emit('remove')">x</button>
	</li>
</template>
<script type="text/javascript">
	export default {
		props: ['title']
	}
</script>