import initializeDarkModeToggle from "./helpers/dark_mode_toggle.js";
import parallax from "./components/parallax.js";
import activeMenu from "./components/selected_menu.js";
import updateCopyrightYear from "./helpers/date_updater.js";
import resetToHome from "./helpers/reload_page.js";
import sendEmail from "./helpers/send__form.js";
import languageToggle from "./helpers/language_mode_toggle.js";


languageToggle();

initializeDarkModeToggle();

parallax()

activeMenu()

resetToHome()

updateCopyrightYear()

sendEmail()