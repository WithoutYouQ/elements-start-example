<template>
	<button v-on:click="incrementCounter">{{ counter }}</button>
</template>
<script type="text/javascript">
export default {
	data() {
		return {
			counter: 0,
		}
	},

	methods: {
		incrementCounter() {
			this.counter += 1
			this.$emit("increament")
		}
	},


}
</script>