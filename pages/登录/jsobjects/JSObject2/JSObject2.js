export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		if(appsmith.store.user){
			navigateTo('首页',{})
			return
		}
	},
	myFun2: async () => {
		//use async-await or promises
	}
}