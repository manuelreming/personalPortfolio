function initializeDarkModeToggle() {
    const darkModeToggle = document.getElementById('darkmode-toggle');

    const toggleDarkMode = () => {
      const isDarkMode = document.body.classList.contains('dark-mode');
      if (isDarkMode) {
        document.body.classList.remove('dark-mode');
      } else {
        document.body.classList.add('dark-mode');
      }
    };
  
    darkModeToggle.addEventListener('change', toggleDarkMode);
  }
  
  export default initializeDarkModeToggle;