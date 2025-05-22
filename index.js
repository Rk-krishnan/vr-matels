
    document.addEventListener("DOMContentLoaded", () => {
      const navLinks = document.querySelectorAll(".nav-link");
      const sections = document.querySelectorAll("section");

      function showSection(id) {
        sections.forEach(section => {
          if (section.id === id) {
            section.classList.add('active-section');
          } else {
            section.classList.remove('active-section');
          }
        });
      }

      navLinks.forEach(link => {
        link.addEventListener("click", e => {
          e.preventDefault();
          const id = link.getAttribute("data-section");

          navLinks.forEach(l => l.classList.remove("active"));
          link.classList.add("active");

          showSection(id);
        });
      });

      showSection("home");
    });

    //contact//
      document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const enquiry = form.enquiry.value.trim();

    let valid = true;

    // Simple validation
    if (!name) {
      form.name.classList.add("is-invalid");
      valid = false;
    } else {
      form.name.classList.remove("is-invalid");
      form.name.classList.add("is-valid");
    }

    if (!email || !email.match(/^\S+@\S+\.\S+$/)) {
      form.email.classList.add("is-invalid");
      valid = false;
    } else {
      form.email.classList.remove("is-invalid");
      form.email.classList.add("is-valid");
    }

    if (!phone || !phone.match(/^\+?\d{7,15}$/)) {
      form.phone.classList.add("is-invalid");
      valid = false;
    } else {
      form.phone.classList.remove("is-invalid");
      form.phone.classList.add("is-valid");
    }

    if (!enquiry) {
      form.enquiry.classList.add("is-invalid");
      valid = false;
    } else {
      form.enquiry.classList.remove("is-invalid");
      form.enquiry.classList.add("is-valid");
    }

    if (!valid) {
      document.getElementById("formMessage").textContent = "Please fix errors before submitting.";
      return;
    }
    

    // Simulate sending form (you can integrate real backend here)
    document.getElementById("formMessage").textContent = "Sending message...";
    setTimeout(() => {
      document.getElementById("formMessage").textContent = "Thank you for contacting us! We will get back to you shortly.";
      form.reset();
      form.querySelectorAll(".is-valid").forEach(el => el.classList.remove("is-valid"));
    }, 1500);
  });
  //whatsup
  
  const whatsappBtn = document.getElementById('whatsappButton');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      whatsappBtn.style.display = 'block';
    } else {
      whatsappBtn.style.display = 'none';
    }
  });
