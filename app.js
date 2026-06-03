// *********************** Nav Active Highlight

const navSections = [
  { id: "home-section",     li: document.querySelector('#navlist a[href="#"]')?.closest("li") },
  { id: "about-section",    li: document.querySelector('#navlist a[href="#about-section"]')?.closest("li") },
  { id: "services-section", li: document.querySelector('#navlist a[href="#services-section"]')?.closest("li") },
  { id: "skills-section",   li: document.querySelector('#navlist a[href="#skills-section"]')?.closest("li") },
  { id: "links-section",    li: document.querySelector('#navlist a[href="#links-section"]')?.closest("li") },
  { id: "contact-section",  li: document.querySelector('#navlist a[href="#contact-section"]')?.closest("li") },
];

function setActiveNav() {
  const scrollY = window.scrollY + window.innerHeight * 0.35;
  let current = navSections[0];

  navSections.forEach(({ id }) => {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= scrollY) {
      current = navSections.find(s => s.id === id);
    }
  });

  navSections.forEach(({ li }) => {
    if (li) li.classList.remove("nav-active");
  });

  if (current && current.li) current.li.classList.add("nav-active");
}

window.addEventListener("scroll", setActiveNav);
setActiveNav();

// *********************** Common Section
// Debounce scroll event
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

$(document).scroll(
  debounce(function () {
    const $nav = $("#navbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  }, 100)
);

$(document).scroll(function () {
  var $nav = $("#scrollbtn");
  $nav.toggleClass("see", $(this).scrollTop() > $nav.height());
});

// *********************** Tab Helper

/**
 * Generic tab switcher.
 * @param {HTMLElement[]} tabs    - all tab button elements
 * @param {HTMLElement[]} panels  - matching content panels
 * @param {number}        index   - which tab to activate
 * @param {object}        colors  - { active, inactive } style sets
 */
function activateTab(tabs, panels, index, colors) {
  panels.forEach((p) => (p.style.display = "none"));
  tabs.forEach((t, i) => {
    const isActive = i === index;
    t.style.backgroundColor = isActive ? colors.active.bg   : colors.inactive.bg;
    t.style.borderColor     = isActive ? colors.active.border : colors.inactive.border;
    t.style.color           = isActive ? colors.active.color  : colors.inactive.color;
  });
  panels[index].style.display = "block";
}

// *********************** About Section

const aboutTabs = [
  document.querySelector("#intro"),
  document.querySelector("#experience"),
  document.querySelector("#education"),
  document.querySelector("#activities"),
];
const aboutPanels = [
  document.querySelector("#introBasket"),
  document.querySelector("#experienceBasket"),
  document.querySelector("#educationBasket"),
  document.querySelector("#activitiesBasket"),
];
const aboutColors = {
  active:   { bg: "rgb(0,0,255)",   border: "rgb(255,255,255)", color: "rgb(255,255,255)" },
  inactive: { bg: "rgb(255,255,255)", border: "rgb(0,0,255)",   color: "rgb(0,0,255)" },
};

aboutTabs.forEach((tab, i) => {
  tab.addEventListener("click", () => activateTab(aboutTabs, aboutPanels, i, aboutColors));
});

// Default: Introduction active
activateTab(aboutTabs, aboutPanels, 0, aboutColors);

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

const skillsTabs = [
  document.querySelector("#languages"),
  document.querySelector("#dbs"),
  document.querySelector("#ides"),
  document.querySelector("#other"),
];
const skillsPanels = [
  document.querySelector("#languagesBasket"),
  document.querySelector("#dbsBasket"),
  document.querySelector("#idesBasket"),
  document.querySelector("#otherBasket"),
];
const skillsColors = {
  active:   { bg: "rgb(0,0,255)",    border: "rgb(0,0,255)",   color: "rgb(255,255,255)" },
  inactive: { bg: "rgb(255,255,255)", border: "rgb(0,0,0)",    color: "rgb(0,0,0)" },
};

skillsTabs.forEach((tab, i) => {
  tab.addEventListener("click", () => activateTab(skillsTabs, skillsPanels, i, skillsColors));
});

// Default: Tech Stack active
activateTab(skillsTabs, skillsPanels, 0, skillsColors);

languagesIds = ['javalanguageProgress', 'springbootlanguageProgress', 'javascriptlanguageProgress', 'reactlanguageProgress', 'pythonlanguageProgress', 'mllanguageProgress', 'clanguageProgress']
document.addEventListener("DOMContentLoaded", function() {
  languagesIds.forEach(id => {
    const progressBar = document.getElementById(id);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          progressBar.classList.add('animate');
        }
      });
    }, { 
      threshold: 0.5, // Trigger when 50% visible
      rootMargin: '0px 0px -100px 0px' // Adjust based on your needs
    });

    observer.observe(progressBar);
  });
});

// *********************** Links Section

const linksTabs = [
  document.querySelector("#techHeading"),
  document.querySelector("#socialHeading"),
];
const linksPanels = [
  document.querySelector("#techBasket"),
  document.querySelector("#socialBasket"),
];
const linksColors = {
  active:   { bg: "rgb(0,0,255)", border: "rgb(0,0,255)",   color: "rgb(255,255,255)" },
  inactive: { bg: "rgb(0,0,0)",   border: "rgb(255,255,255)", color: "rgb(255,255,255)" },
};

linksTabs.forEach((tab, i) => {
  tab.addEventListener("click", () => activateTab(linksTabs, linksPanels, i, linksColors));
});

// Default: Tech Links active
activateTab(linksTabs, linksPanels, 0, linksColors);

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

// const sendEmail = () => {
// 	const name = document.querySelector("#name");
// 	const mail = document.querySelector("#email");
// 	const phone = document.querySelector("#phone");
// 	const message = document.querySelector("#message");
// 	const subject = document.querySelector("#subject");

// 	console.log(mail.value);
// 	console.log(message.value);
// 	console.log(phone.value);
// 	console.log(name.value);
// 	console.log(subject.value);
// 	Email.send({
// 	  Host: "smtp.gmail.com",
// 	  Username: myemail,
// 	  Password: "cfcbczdvdvxlalst",
// 	  To: myemail,
// 	  From: mail.value,
// 	  Subject: subject.value,
// 	  Body: message.value + "  :  " + phone.value + "    by    " + name.value,
// 	}).then((msg) => {
// 	  alert("Message sent Successfully 😀");
// 	});
// };

// msgBtn.addEventListener("click", sendEmail());

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

document
  .getElementById("submitform")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = {
      name: document.getElementById("title").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    // Send email using EmailJS
    emailjs
      .send("service_zd6r3nh", "template_awxvz6r", formData) // Replace with your Service ID and Template ID
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!"); // Notify the user
          document.getElementById("submitform").reset(); // Clear the form
        },
        function (error) {
          console.log("FAILED...", error);
          alert("Failed to send message. Please try again."); // Notify the user
        }
      );
  });
