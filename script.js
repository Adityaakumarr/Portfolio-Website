// DOM Elements
const themeToggle = document.getElementById("theme-toggle")
const body = document.body
const navLinks = document.querySelectorAll("#navbar ul li a")
const backToTopButton = document.getElementById("back-to-top")
const contactForm = document.getElementById("contact-form")

// Theme Toggle
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode")
  updateThemeIcon()
})

function updateThemeIcon() {
  // Since we're always using a dark theme now, we'll just toggle between two moon emojis
  themeToggle.textContent = body.classList.contains("dark-mode") ? "🌕" : "🌑"
}

// Smooth Scrolling
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const targetId = link.getAttribute("href")
    const targetSection = document.querySelector(targetId)
    window.scrollTo({
      top: targetSection.offsetTop - 70,
      behavior: "smooth",
    })
  })
})

// Back to Top Button
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.style.display = "block"
  } else {
    backToTopButton.style.display = "none"
  }
})

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
})

// Form Validation
contactForm.addEventListener("submit", (e) => {
  e.preventDefault()
  if (validateForm()) {
    // Here you would typically send the form data to a server
    alert("Message sent successfully!")
    contactForm.reset()
  }
})

function validateForm() {
  const name = document.getElementById("name").value.trim()
  const email = document.getElementById("email").value.trim()
  const message = document.getElementById("message").value.trim()
  let isValid = true

  if (name === "") {
    alert("Please enter your name")
    isValid = false
  }

  if (email === "") {
    alert("Please enter your email")
    isValid = false
  } else if (!isValidEmail(email)) {
    alert("Please enter a valid email address")
    isValid = false
  }

  if (message === "") {
    alert("Please enter a message")
    isValid = false
  }

  return isValid
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Initialize theme
updateThemeIcon()

