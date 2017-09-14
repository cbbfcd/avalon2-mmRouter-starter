import './assets/style/main.scss';
import 'babel-polyfill';
const avalon = require("avalon2");
require('mmRouter');
require('./components/login/login.js');
// debug
avalon.config({
    debug: true
})

// root vm
var root = avalon.define({
    $id: 'root',
    getRootFun: function () {
        avalon.log('Root|'+new Date());
    },
    currPath: '',
    currPage: ''
})


// router
avalon.router.add('/login', function(e){
	root.currPath = this.path;
	root.currPage = '<ms-login></ms-login>';
})


// history
avalon.history.start({
    root: "/"
});


// avalon接管页面
avalon.scan(document.body)
