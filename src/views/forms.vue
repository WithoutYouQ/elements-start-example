<template>
	<div>
		<input type="checkbox" name="checkbox" id="checkbox" v-model="checked">
		<label>
			{{ checked }}
		</label>

		<div>
			<input type="checkbox" name="" id="Jack" value="Jack" v-model="checkedNames">
			<label for="Jack">Jack</label>

			<input type="checkbox" name="" id="John" value="John" v-model="checkedNames">
			<label for="John">John</label>

			<input type="checkbox" name="" id="Mike" value="Mike" v-model="checkedNames">
			<label for="Mike">Mike</label>
			<br>
			<span>Checked names: {{ checkedNames }}</span>
		</div>


		<div>
			<input type="radio" name="" id="one" value="One" v-model="picked">
			<label for="one">One</label>
			<br>

			<input type="radio" name="" id="Two" value="Two" v-model="picked">
			<label for="Two">Two</label>
			<br>

			<span>Picked: {{ picked }}</span>
		</div>

		<div>
			<select v-model="selected">
				<option disabled value="">请选择</option>
				<option>A</option>
				<option>B</option>
				<option>C</option>
			</select>

			<span>Selected: {{ selected }}</span>

		</div>

		<div>
			<input type="checkbox"
				v-model="toggle"
				:true-value="a"
				:false-value="b"
			 >
			 <span>{{ toggle }}</span>
		</div>

		<input v-model.lazy="msg">
		<span>{{ msg }}</span>

		<div>
			<input type="number" name="" v-model.number="age">
			<input type="text" pattern="[0-9]*">
		</div>


		<div class="block">
		    <span class="demonstration">带快捷选项</span>
		    <el-date-picker
		      v-model="value4"
		      type="datetimerange"
		      format="yyyy-MM-dd"
		      :picker-options="pickerOptions2"
		      placeholder="选择时间范围"
		      align="right"
		      @change="handleChange">
		   	</el-date-picker>
		</div>

		<div>
			<span>{{ total }}</span>
			<button-counter v-on:click.native="increamentTotal"></button-counter>
			<button-counter v-on:increament="increamentTotal"></button-counter>

		</div>

		<span style="color:red">{{ count }}</span>
	</div>
</template>
<script type="text/javascript">
	import buttonCounter from "./buttonCounter.vue"
	export default {
		components: {
			buttonCounter
		},
		data() {
			return {
				checked: true,
				checkedNames: [],
				picked:[],
				selected: "",
				a: "aaaaa",
				b: "bbbbbb",
				toggle: false,
				msg:"",
				age: "",
				pickerOptions2: {
		          shortcuts: [{
		            text: '最近一周',
		            onClick(picker) {
		              const end = new Date();
		              const start = new Date();
		              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
		              picker.$emit('pick', [start, end]);
		            }
		          }, {
		            text: '最近一个月',
		            onClick(picker) {
		              const end = new Date();
		              const start = new Date();
		              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
		              picker.$emit('pick', [start, end]);
		            }
		          }, {
		            text: '最近三个月',
		            onClick(picker) {
		              const end = new Date();
		              const start = new Date();
		              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);l
		              picker.$emit('pick', [start, end]);
		            }
		          }]
		        },
		        value3: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
		        value4: '',
		        total: 0
			}
		},

		methods: {
			handleChange(value) {
		        console.log(value);
		    },

		    increamentTotal() {
		    	this.total += 1
		    }
		},
		computed: {
			count() {
				return this.$store.state.count
			}
		}
	}
</script>