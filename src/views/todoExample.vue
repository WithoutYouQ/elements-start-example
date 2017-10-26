<template>
	<div>
		<input
			v-model="newTodoText"
			@keyup.enter="addNewTodo"
			placeholder="Add a todo"
		>

		<ul>
			<li
				is="todo-item"
				v-for="(todo, index) in todos"
				:key="todo.id"
				:title="todo.title"
				@remove="todos.splice(index, 1)"
			>

			</li>
		</ul>

	</div>
</template>
<script type="text/javascript">
	import todoItem from "./todoItem2.vue"
	export default {
		components: {
			todoItem
		},

		data() {
			return {
				newTodoText: '',
				todos: [
					{
						id: 1,
						title: 'Do the dishes',
					},
					{
						id: 2,
						title: 'Take out the trash',
					},
					{
						id: 3,
						title: 'Now the lawn'
					}
				],
				newtTodoId: 4
			}
		},

		methods: {
			addNewTodo: function() {
				this.todos.push({
					id:this.newtTodoId++,
					title: this.newTodoText
				})

				this.newTodoText = ""
			}
		}
	}
</script>