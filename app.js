let index = 0;
let mainProject = setInterval(projects, 30);

function projects() {
	index++;
	let project = document.getElementById('project-1').innerHTML = index;
	if (index == 168) {
		clearInterval(mainProject);
	}
};

let index1 = 0;
let mainProject1 = setInterval(projects1, 300);

function projects1() {
	index1++;
	let project1 = document.getElementById('project-2').innerHTML = index1;
	if (index1 == 16) {
		clearInterval(mainProject1);
	}
};
let index2 = 0;
let mainProject2 = setInterval(projects2, 100);

function projects2() {
	index2++;
	let project2 = document.getElementById('project-3').innerHTML = index2;
	if (index2 == 50) {
		clearInterval(mainProject2);
	}
};

let acc = document.getElementsByClassName('accordion');
for (var i = 0; i < acc.length; i++) {
	acc[i].addEventListener('click', function() {
		this.classList.toggle('active');
		var panel = this.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}

	})
}


let h = document.getElementById('h');
let navbar = document.getElementById('navbar');
h.addEventListener('click', function() {
	navbar.classList.toggle('show');
});


let image = ['6.png', '7.png', '8.png', '9.png'];

let img = document.getElementById('img');
let count = 0;

function next() {
	count++;

	if (count >= image.length) {
		count = 0;
		img.src = image[count];
	} else {
		img.src = image[count];
	}
};