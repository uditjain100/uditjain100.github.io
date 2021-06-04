// *********************** Common Section

$(function () {
	$(document).scroll(function () {
		$("#navbar").toggleClass("scrolled", $(this).scrollTop() > $nav.height());
	});
});

$(function () {
	$(document).scroll(function () {
		$("#scrollbtn").toggleClass("see", $(this).scrollTop() > $nav.height());
	});
});

// *********************** About Section

const intro = document.querySelector("#intro");
const education = document.querySelector("#education");
const activities = document.querySelector("#activities");

const introBasket = document.querySelector("#introBasket");
const educationBasket = document.querySelector("#educationBasket");
const activitiesBasket = document.querySelector("#activitiesBasket");

const removeDisplayAbout = () => {
	introBasket.style.display = "none";
	educationBasket.style.display = "none";
	activitiesBasket.style.display = "none";
};

intro.addEventListener("click", () => {
	removeDisplayAbout();
	introBasket.style.display = "block";
	intro.style.backgroundColor = "rgb(0,0,255)";
	intro.style.borderColor = "rgb(255,255,255)";
	intro.style.color = "rgb(255,255,255)";
	education.style.backgroundColor = "rgb(255,255,255)";
	education.style.borderColor = "rgb(0,0,255)";
	education.style.color = "rgb(0,0,255)";
	activities.style.backgroundColor = "rgb(255,255,255)";
	activities.style.borderColor = "rgb(0,0,255)";
	activities.style.color = "rgb(0,0,255)";
});

education.addEventListener("click", () => {
	removeDisplayAbout();
	intro.style.backgroundColor = "rgb(255,255,255)";
	intro.style.borderColor = "rgb(0,0,255)";
	intro.style.color = "rgb(0,0,255)";
	educationBasket.style.display = "block";
	education.style.backgroundColor = "rgb(0,0,255)";
	education.style.borderColor = "rgb(255,255,255)";
	education.style.color = "rgb(255,255,255)";
	activities.style.backgroundColor = "rgb(255,255,255)";
	activities.style.borderColor = "rgb(0,0,255)";
	activities.style.color = "rgb(0,0,255)";
});

activities.addEventListener("click", () => {
	removeDisplayAbout();
	activitiesBasket.style.display = "block";
	intro.style.backgroundColor = "rgb(255,255,255)";
	intro.style.borderColor = "rgb(0,0,255)";
	intro.style.color = "rgb(0,0,255)";
	education.style.backgroundColor = "rgb(255,255,255)";
	education.style.borderColor = "rgb(0,0,255)";
	education.style.color = "rgb(0,0,255)";
	activities.style.backgroundColor = "rgb(0,0,255)";
	activities.style.borderColor = "rgb(255,255,255)";
	activities.style.color = "rgb(255,255,255)";
});

var typed = new Typed(".typing", {
	strings: ["Student", "Programmer", "Developer", "Engineer"],
	typeSpeed: 100,
	backSpeed: 60,
	loop: true,
});

var typed = new Typed("#typing", {
	strings: ["Student", "Programmer", "Developer", "Engineer"],
	typeSpeed: 100,
	backSpeed: 60,
	loop: true,
});

// *********************** Services Section

// *********************** Skills Section

const languages = document.querySelector("#languages");
const ides = document.querySelector("#ides");
const dbs = document.querySelector("#dbs");
const other = document.querySelector("#other");

const languagesBasket = document.querySelector("#languagesBasket");
const idesBasket = document.querySelector("#idesBasket");
const dbsBasket = document.querySelector("#dbsBasket");
const otherBasket = document.querySelector("#otherBasket");

const removeDisplaySkills = () => {
	languagesBasket.style.display = "none";
	idesBasket.style.display = "none";
	dbsBasket.style.display = "none";
	otherBasket.style.display = "none";
};

languages.addEventListener("click", () => {
	removeDisplaySkills();
	languagesBasket.style.display = "block";
});

ides.addEventListener("click", () => {
	removeDisplaySkills();
	idesBasket.style.display = "block";
});

dbs.addEventListener("click", () => {
	removeDisplaySkills();
	dbsBasket.style.display = "block";
});

other.addEventListener("click", () => {
	removeDisplaySkills();
	otherBasket.style.display = "block";
});

// *********************** Links Section

const tech = document.querySelector("#techHeading");
const social = document.querySelector("#socialHeading");

const techBasket = document.querySelector("#techBasket");
const socialBasket = document.querySelector("#socialBasket");

const removeDisplayLinks = () => {
	techBasket.style.display = "none";
	socialBasket.style.display = "none";
};

tech.addEventListener("click", () => {
	removeDisplayLinks();
	techBasket.style.display = "block";
});

social.addEventListener("click", () => {
	removeDisplayLinks();
	socialBasket.style.display = "block";
});

// *********************** Contact Section

(function () {
	"use-strict";
	var forms = document.querySelectorAll(".validated-form");
	Array.from(forms).forEach(function (form) {
		form.addEventListener(
			"submit",
			function (event) {
				if (!form.checkValidity()) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add("was-validated");
			},
			false
		);
	});
})();

const msgForm = document.querySelector("#submitform");
const msgBtn = document.querySelector("#msgsendbtn");

const myemail = "jain30udit@gmail.com";

const sendEmail = () => {
	const name = document.querySelector("#name");
	const mail = document.querySelector("#email");
	const phone = document.querySelector("#phone");
	const message = document.querySelector("#message");
	const subject = document.querySelector("#subject");

	console.log(mail.value);
	console.log(message.value);
	console.log(phone.value);
	console.log(name.value);
	console.log(subject.value);
	// Email.send({
	//   Host: "smtp.gmail.com",
	//   Username: myemail,
	//   Password: "cfcbczdvdvxlalst",
	//   To: myemail,
	//   From: mail.value,
	//   Subject: subject.value,
	//   Body: message.value + "  :  " + phone.value + "    by    " + name.value,
	// }).then((msg) => {
	//   alert("Message sent Successfully 😀");
	// });
};

msgBtn.addEventListener("click", sendEmail());

// $(document).ready(function () {
//   $("#msgsendbtn").click(function () {
//     $("#submitform").attr(
//       "action",
//       "mailto:jain30udit@gmail.com?subject=" +
//         $("#subject").val() +
//         "&body=" +
//         $("#message").val() +
//         $("#email").val() +
//         $("#phone").val()
//     );
//     $("#submitform").submit();
//   });
// });
