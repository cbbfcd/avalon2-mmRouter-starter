/*
* @Author: 28906
* @Date:   2017-09-13 14:47:55
* @Last Modified by:   28906
* @Last Modified time: 2017-09-14 11:32:40
* @Description: 首页登陆组件
*/
import login from './login.html';
import avalon from "avalon2";

avalon.component('ms-login',{
	template: login,
	defaults:{
		username: 'use1',
		password: 'pwd1',
		isLog: false,
		login: function(){
			console.log('run....')
			if(this.username === 'admin' && this.password === 'admin'){
				this.isLog = true;
				alert('login successfully!')
			}
		}
	}
})
