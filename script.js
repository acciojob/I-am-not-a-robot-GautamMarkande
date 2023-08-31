//your code here
const images = Array.from(document.getElementsByTagName("img"));
const main = document.getElementById("main");
const p = document.createElement("p");
p.id="para"
let count = 0;
let arr = [];
const reset = document.getElementById("reset");
reset.addEventListener("click",()=>{
	arr=[];
	reset.style.visibility = "hidden";
	verify.style.visibility = "hidden";
	images.forEach(img=>img.style.border="none");
	p.remove();
})
const verify = document.getElementById("verify");

verify.addEventListener("click",()=>{
	if(arr.length>=2 && arr[1]===arr[0]){
		
		p.innerText = "You are a human. Congratulations!"
		
	}else{
		p.innerText = "We can't verify you as a human. You selected the non-identical tiles."
	}
	main.appendChild(p);
	verify.style.visibility = "hidden";
})
images.forEach((img)=>{
	img.addEventListener(("click"),(e)=>{
		console.log(img);
		img.style.border = "2px solid blue"
		reset.style.visibility = "visible";
		count++;
		arr.push(img.className);
		console.log(arr);
		if(arr.length>=2){
			console.log(arr.length);
			verify.style.visibility = "visible";
		}
	})
})

