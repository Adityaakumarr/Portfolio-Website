document.addEventListener("DOMContentLoaded", () => {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector(".hamburger")
    const navLinks = document.querySelector(".nav-links")
  
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active")
      hamburger.classList.toggle("active")
    })
  
    // Close mobile menu when clicking on a nav link
    const navItems = document.querySelectorAll(".nav-links a")
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        if (navLinks.classList.contains("active")) {
          navLinks.classList.remove("active")
          hamburger.classList.remove("active")
        }
      })
    })
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          // Calculate header height for offset
          const headerHeight = document.querySelector("header").offsetHeight
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight
  
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })
        }
      })
    })
  
    // Form validation
    const contactForm = document.getElementById("contact-form")
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Reset previous error messages
        document.querySelectorAll(".error-message").forEach((error) => {
          error.style.display = "none"
        })
  
        let isValid = true
  
        // Validate name
        const nameInput = document.getElementById("name")
        if (!nameInput.value.trim()) {
          showError(nameInput, "Name is required")
          isValid = false
        }
  
        // Validate email
        const emailInput = document.getElementById("email")
        if (!emailInput.value.trim()) {
          showError(emailInput, "Email is required")
          isValid = false
        } else if (!isValidEmail(emailInput.value)) {
          showError(emailInput, "Please enter a valid email address")
          isValid = false
        }
  
        // Validate subject
        const subjectInput = document.getElementById("subject")
        if (!subjectInput.value.trim()) {
          showError(subjectInput, "Subject is required")
          isValid = false
        }
  
        // Validate message
        const messageInput = document.getElementById("message")
        if (!messageInput.value.trim()) {
          showError(messageInput, "Message is required")
          isValid = false
        }
  
        // If form is valid, submit it (in a real application, you would send the data to a server)
        if (isValid) {
          // Simulate form submission
          const submitBtn = contactForm.querySelector('button[type="submit"]')
          const originalText = submitBtn.textContent
  
          submitBtn.disabled = true
          submitBtn.textContent = "Sending..."
  
          // Simulate API call with timeout
          setTimeout(() => {
            // Reset form
            contactForm.reset()
  
            // Show success message
            const formContainer = document.querySelector(".contact-form-container")
            const successMessage = document.createElement("div")
            successMessage.className = "success-message"
            successMessage.innerHTML = `
              <div style="text-align: center; padding: 20px;">
                <i class="fas fa-check-circle" style="color: #28a745; font-size: 3rem; margin-bottom: 15px;"></i>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            `
  
            formContainer.innerHTML = ""
            formContainer.appendChild(successMessage)
          }, 1500)
        }
      })
    }
  
    // Helper function to show error messages
    function showError(input, message) {
      const errorElement = input.nextElementSibling
      errorElement.textContent = message
      errorElement.style.display = "block"
    }
  
    // Helper function to validate email format
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    }
  
    // Add active class to nav links based on scroll position
    window.addEventListener("scroll", () => {
      const sections = document.querySelectorAll("section")
      const navLinks = document.querySelectorAll(".nav-links a")
  
      let currentSection = ""
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
  
        if (pageYOffset >= sectionTop - 200) {
          currentSection = section.getAttribute("id")
        }
      })
  
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active")
        }
      })
    })
  })
  
  