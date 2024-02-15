function languageToggle (){
    var languageToggle = document.getElementById("language-toggle");
  
    languageToggle.addEventListener("change", function() {
      if (languageToggle.checked) {
        localStorage.setItem("language", "english");
        window.location.href = "/assets/indexEnglish.html";
      } else {
        localStorage.setItem("language", "spanish");
        window.location.href = "../index.html";
      }
    });
  
    // Restaurar el estado del toggle al cargar la página
    var savedLanguage = localStorage.getItem("language");
    if (savedLanguage === "english") {
      languageToggle.checked = true;
    } else {
      languageToggle.checked = false;
    }
  }
  
  export default languageToggle;

