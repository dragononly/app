export default {
	myVar1: [],
	myVar2: {},
	myFun1:async () => {
 let a=await		login.run()
 if(a.length>0){
	 storeValue("user",a[0].user)
	 navigateTo("首页",{})
	 return 	 appsmith.store.user
 }else{
	 showAlert("帐号或密码错误")
 }


	},
	myFun2: async () => {
		
	}
}