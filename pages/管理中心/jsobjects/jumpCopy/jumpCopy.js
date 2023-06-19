export default {

	myFun1: () => {
	if(appsmith.store.user){
		navigateTo("个人中心",{})
	}else{
		navigateTo("登录",{})
	}
	}
}