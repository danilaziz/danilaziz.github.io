document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const sections = document.querySelectorAll("section");

  // Set "Home" as active by default
  document.querySelector('.nav-link[href="#"]').classList.add("active");

  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });

    // Set "Home" as active if no section is in view
    if (!current) {
      document.querySelector('.nav-link[href="#"]').classList.add("active");
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((link) => link.classList.remove("active"));
      this.classList.add("active");
    });
  });
});

// Hamburger menu functionality
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
      }
    });
  });
});

// swiper cube
document.addEventListener("DOMContentLoaded", function () {
  var swiperCube = new Swiper(".swiper-cube", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: false,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 3000, // 3 detik
      disableOnInteraction: false,
    },
  });
});

// panah atas
document.addEventListener("DOMContentLoaded", function () {
  var backToTopButton = document.getElementById("backToTop");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Close hamburger menu when clicking outside
document.addEventListener("click", function (event) {
  var navbar = document.getElementById("navbarSupportedContent");
  var isClickInside = navbar.contains(event.target);

  if (!isClickInside) {
    var navbarToggler = document.querySelector(".navbar-toggler");
    var isExpanded = navbarToggler.getAttribute("aria-expanded") === "true";
    if (isExpanded) {
      navbarToggler.click();
    }
  }
});

// Typed.js
var typed = new Typed("#typed-text", {
  strings: ["I'm Danil Aziz"],
  typeSpeed: 130,
  backSpeed: 50,
  showCursor: true,
  cursorChar: "|",
  loop: true,
});

// info device and location
function getDeviceInfoAndLocation() {
  var deviceInfo = navigator.userAgent;
  document.getElementById("device_info").value = deviceInfo;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var location =
        "Latitude: " +
        position.coords.latitude +
        ", Longitude: " +
        position.coords.longitude;
      document.getElementById("location").value = location;
    });
  } else {
    document.getElementById("location").value =
      "Geolocation is not supported by this browser.";
  }
}

// Clear form
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has("success")) {
  // Show a success message and clear the form
  document.getElementById("contactForm").reset();
  // Remove the success parameter from the URL
  window.history.replaceState({}, document.title, window.location.pathname);
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contactForm").style.display = "block";
});

// Nonaktifkan tombol submit jika ada input yang kosong
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const submitButton = form.querySelector("button[type='submit']");
  const inputs = form.querySelectorAll("input, textarea");

  // Fungsi untuk memeriksa apakah semua input sudah diisi
  function checkFormValidity() {
    let isValid = true;
    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        isValid = false;
      }
    });

    if (isValid) {
      submitButton.classList.remove("inactive");
      submitButton.disabled = false;
      submitButton.style.pointerEvents = "auto";
      submitButton.style.backgroundColor = ""; // reset warna
      submitButton.style.color = "";
    } else {
      submitButton.classList.add("inactive");
      submitButton.disabled = true;
      submitButton.style.pointerEvents = "none";
      submitButton.style.backgroundColor = "#ccc";
      submitButton.style.color = "#888";
    }
  }

  // Tambahkan event listener ke semua input
  inputs.forEach((input) => {
    input.addEventListener("input", checkFormValidity);
  });

  // Periksa validitas form saat halaman dimuat
  checkFormValidity();

  // Kirim data form ke WhatsApp
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    var phone = "6287728890135";
    var text =
      "Nama: " + name + "%0A" + "Email: " + email + "%0A" + "Pesan: " + message;

    var url = "https://wa.me/" + phone + "?text=" + text;
    window.open(url, "_blank");

    // Bersihkan form setelah submit dan kembalikan ke pengaturan awal
    form.reset();
    checkFormValidity();
  });
});
