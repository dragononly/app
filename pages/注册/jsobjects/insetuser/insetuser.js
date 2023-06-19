export default {
	myVar1: [],
	myVar2: {},
	myFun1: async() => {
	let cab=await reg.run()
	if(cab.n=="0"){
		showAlert("用户名已存在","error")
		return false
	}else{
		showAlert("注册成功请登录","success")
		setTimeout(()=>{
			navigateTo("登录",{})
		},1500)
		return true
	}

	},
	myFun2: async () => {
		//use async-await or promises
	}
}