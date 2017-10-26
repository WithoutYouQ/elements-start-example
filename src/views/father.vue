
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


		<!-- 当v-bind:style 使用需要添加浏览器引擎前缀的css属性时，如transform，Vue.js会自动侦测并添加相应的前缀 -->
		<!-- 从2.3.0起你可以为 style 绑定中的属性添加一个包含多个值的数组，常用于提供多个带前缀的值，如下： -->
		<!-- 这样写只会渲染数组中最后一个被浏览器支持的值。在下例中，如果浏览器支持不带浏览器前缀的 flexbox ，那么就只会渲染display:flex -->
		<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">123</div>

		<div v-if="Math.random() > 0.5">
			Now you see me
		</div>
		<div v-else>
			Now you don't
		</div>


		<!-- 用key管理可复用的元素 -->
		<template v-if="loginState === 'username'">
			<label>Username</label>
			<input type="" name="" placeholder="Enter your username" key="username-input">
		</template>
		<template v-else>
			<label>Email</label>
			<input type="" placeholder="Enter your email address"  key="email-input">
		</template>
		<br>
		<button @click="changeStateFn">toggle login type</button>

		<!-- 可以用of替代in作为分隔符，因为它是最接近javaScript迭代器的语法 -->
		<ul>
			<li v-for="(item, index) in items">
				{{ index }} - {{ item.message }}
			</li>
		</ul>
		<ul>
			<li v-for="(item, index) of items">
				{{ index }} - {{ item.message }}
			</li>
		</ul>

		<ul>
			<li v-for="value of object">
				{{ value }}
			</li>
		</ul>

		<ul>
			<li v-for="(value, key) in object">
				{{ key }} : {{ value }}
			</li>
		</ul>

		<ul>
			<li v-for="(value, key, index) in object">
				{{ index }}. {{ key }} : {{ value }}
			</li>
		</ul>

		<ul>
			<li v-for="n in evenNumbers">{{ n }}</li>
			<li v-for="n in even(numbers)">{{ n }}</li>
		</ul>


		<ul>
			<template v-for="item in items">
				<li>{{ item.message }}</li>
				<li>hahah</li>
			</template>
		</ul>

	</div>
</template>
<script type="text/javascript">
	import Vue from "vue"
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
				loginState: 'username',
				loginMsg: '',
				items: [
			      { message: 'Foo' },
			      { message: 'Bar' }
			    ],

			    object: {
			      firstName: 'John',
			      lastName: 'Doe',
			      age: 30
			    },
			    numbers: [1, 2, 3, 4, 5]
			}
		},
		watch: {
			loginMsg(value) {
				console.log(value)
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

			},

			evenNumbers: function() {
				return this.numbers.filter(function(number) {
					return number % 2 === 0
				})
			}

		},
		methods: {
			changeStateFn() {
				this.loginState = this.loginState === "username" ? "email" : "username"
			},
			changeArrayFn() {
				// this.items.forEach((item) => {
				//   item.filter(function(item) {
				//   	return item.message.match(/Foo/)
				//   })
				// })

				// Vue.set(this.items, 0, {message: 'father'})
				this.$set(this.items, 0, {message: 'father'})

				// 为已有对象赋予多个新属性
				this.object = Object.assign({}, this.object, {
					hobby: "basketball",
					favatorColor: "green"
				})

			},

			even: function(numbers) {
				return numbers.filter(function(number) {
					return number % 2 === 0
				})
			}
		},
		mounted() {
			this.changeArrayFn()
		}
	}
</script>