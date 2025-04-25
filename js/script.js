// ===== Theme Initialization =====
const savedTheme = localStorage.getItem('theme');

// Default to dark mode if no preference
if (!savedTheme) {
  document.body.classList.add('dark-mode');
  localStorage.setItem('theme', 'dark');
} else {
  document.body.classList.add(savedTheme + '-mode');
}

// ===== Dark Mode Toggle =====
const toggleButton = document.getElementById('darkModeToggle');

toggleButton.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark-mode');
  document.body.classList.toggle('dark-mode', !isDark);
  document.body.classList.toggle('light-mode', isDark);
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
});

// ===== Sidebar Navigation =====
const navLinks = document.querySelectorAll('.sidebar nav a');
const sections = document.querySelectorAll('.content-section');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('data-section');

    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(target).classList.add('active');
  });
});

// ===== Resume Request Form Handling =====
const form = document.getElementById('resumeForm');
const successMsg = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = form.action;

    fetch(action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        form.reset();
        form.style.display = 'none';
        successMsg.style.display = 'block';
      } else {
        alert("Something went wrong. Please try again.");
      }
    }).catch(() => {
      alert("There was a problem submitting the form.");
    });
  });
}
