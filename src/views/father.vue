
<template>
	<div>
		<ol>
			<todo-item
				v-for="item in groceryList"
				:todo = "item"
				:key = "item.id"
				class="red"
			>

			</todo-item>
		</ol>
		<p>{{ now }}</p>


		<!-- <input type="" name="" v-model="firstName"> -->
		<!-- <input type="" name="" v-model="lastName"> -->
		<div id="demo">{{ fullName }}</div>

	</div>
</template>
<script type="text/javascript">
	import todoItem from "./todoItem.vue"
	export default {
		components: {
			todoItem
		},
		data() {
			return {
				groceryList: [
					{id: 0, text: '蔬菜'},
					{id: 1, text: '奶酪'},
					{id: 2, text: '随便其他什么人吃的东西'}
				],

				message: '',
				firstName: '',
				lastName: '',
			}
		},

		computed: {
			now: function() {
				return Date.now()
			},

			/*fullName: function() {
				return this.firstName + " " + this.lastName
			},*/

			fullName: {
				get: function() {
					return this.firstName + " " + this.lastName
				},

				set: function(newValue) {
					var names = newValue.split(" ")
					this.firstName = names[0]
					this.lastName = names[names.length - 1]
				}

			}

		}
	}
</script>