//your code here
const images = Array.from(document.getElementByTagName("img"));
let count = 0;
let arr = [];
const reset = document.getElement1ById("reset");
const verify = document.getElement1ById("verify");
images.forEach((img)=>{
	img.addEventListener(("click"),(e)=>{
		reset.style.visiblity = "visible";
		count++;
		arr.push(img.ClassName);
		if(arr.length>=2 && e.ClassName!==arr[0]){
			verify.style.visiblity = "visible";
		}
	})
})

