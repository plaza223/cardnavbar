const menu = document.querySelector(".menu-btn");
const first = document.querySelector("#first");
const second = document.querySelector("#second");
const third = document.querySelector("#third");
const fourth = document.querySelector("#fourth");
const card = document.querySelectorAll(".card");


let showMenu = false;




menu.addEventListener("click", openMenu);

function openMenu() {
	if(!showMenu){
	menu.classList.add("close");
	showMenu = true;
	first.style.opacity = 1;
	second.style.opacity = 1;
	third.style.opacity = 1;
	fourth.style.opacity = 1;
	first.style.top = "40px";
	second.style.top = "80px";
	third.style.top = "120px";
	fourth.style.top = "160px";
	first.style.left = "40px";
	second.style.left = "80px";
	third.style.left = "120px";
	fourth.style.left = "160px";
	first.style.zIndex = 2;
	second.style.zIndex = 2;
	third.style.zIndex = 2;
	fourth.style.zIndex = 2;
	}else {
		menu.classList.remove("close");
		first.style.opacity = 0;
		second.style.opacity = 0;
		third.style.opacity = 0;
		fourth.style.opacity = 0;
		showMenu = false;
	}
}

first.addEventListener("click", expand);
second.addEventListener("click", expand);
third.addEventListener("click", expand);
fourth.addEventListener("click", expand);

function expand() {
	if(showMenu) {
		first.style.left = "3200px";
		second.style.left = "3200px";
		third.style.left = "3200px";
		fourth.style.left = "3200px";
		this.style.top = "0px";
		this.style.left = "0px";
		this.style.zIndex = 5;
		menu.classList.remove("close");
		showMenu = false;
	}
}

