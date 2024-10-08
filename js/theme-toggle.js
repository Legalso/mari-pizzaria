// Função para aplicar o tema com base no estado salvo no localStorage
function applyTheme() {
  const isDarkTheme = localStorage.getItem("dark-theme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  const themeToggle = document.getElementById("theme");
  if (themeToggle) {
    themeToggle.checked = isDarkTheme;
  }
}

// Adiciona o evento de mudança ao checkbox
document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme");
  if (themeToggle) {
    themeToggle.addEventListener("change", function () {
      const isChecked = this.checked;
      document.body.classList.toggle("dark-theme", isChecked);
      localStorage.setItem("dark-theme", isChecked);
    });
  }
  // Aplica o tema ao carregar a página
  applyTheme();
});
