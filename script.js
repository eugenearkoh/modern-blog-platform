// THE JOURNEY JOURNAL — category filters, mobile navigation and newsletter feedback

const filterButtons = document.querySelectorAll(".filter-btn");
const articleCards = document.querySelectorAll(".article-card");
const emptyState = document.getElementById("emptyState");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;
    let visibleCount = 0;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    articleCards.forEach((card) => {
      const matches = selectedCategory === "all" || card.dataset.category === selectedCategory;
      card.hidden = !matches;
      if (matches) visibleCount += 1;
    });

    emptyState.hidden = visibleCount !== 0;
  });
});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "×" : "☰";
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.textContent = "☰";
  });
});

const newsletterForm = document.getElementById("newsletterForm");
const emailInput = document.getElementById("emailInput");
const formMessage = document.getElementById("formMessage");

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!emailInput.checkValidity()) {
    emailInput.reportValidity();
    return;
  }

  formMessage.textContent = "Thank you for your interest! Newsletter sign-up is demonstrated on this front-end project.";
  formMessage.classList.add("success-message");
  newsletterForm.reset();
});
