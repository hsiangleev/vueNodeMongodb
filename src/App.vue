<template>
	<div id="app">
		<img src="./assets/logo.png">
		<input type="text" v-model="val">
		<button @click="send">提交</button>
		<router-view/>
	</div>
</template>

<script>
import {post} from "./util/util.js";
export default {
	name: 'App',
	data: function() {
		return {
			val: ""
		}
	},
	mounted () {
		
	},
	methods: {
		send() {
			post("/select",{},(res)=>{
				console.log(res.data);
			})
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
