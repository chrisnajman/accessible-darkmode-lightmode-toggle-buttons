function themeSwitcherLightModeDefault() {
  const LOCAL_STORAGE_PREFIX = "LIGHTMODE-DEFAULT"
  const MODE_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-switcher`

  const btnThemeToggle = document.getElementById("btn-theme-toggle")
  const themeLightMode = document.getElementById("theme-lightmode")
  const themeDarkMode = document.getElementById("theme-darkmode")
  const root = document.querySelector("html")
  const mode = document.getElementById("mode")

  btnThemeToggle.addEventListener("click", (e) => {
    root.classList.toggle("dark-theme")

    const isDarkMode = root.classList.contains("dark-theme")

    e.target.setAttribute("aria-pressed", String(isDarkMode))

    if (isDarkMode) {
      darkModeStyle()
    } else {
      lightModeStyle()
    }

    const lightClass = themeLightMode.classList.contains("hide") ? "hide" : ""
    const darkClass = themeDarkMode.classList.contains("hide") ? "hide" : ""

    const themeItems = [isDarkMode, lightClass, darkClass]
    localStorage.setItem(MODE_STORAGE_KEY, JSON.stringify(themeItems))
  })

  function setTheme() {
    const activeTheme = JSON.parse(localStorage.getItem(MODE_STORAGE_KEY)) || [
      false,
      "",
      "",
    ]

    const isDarkMode = activeTheme[0]

    if (isDarkMode) {
      root.classList.add("dark-theme")
      darkModeStyle()
    } else {
      root.classList.remove("dark-theme")
      lightModeStyle()
    }

    btnThemeToggle.setAttribute("aria-pressed", String(isDarkMode))
  }

  function lightModeStyle() {
    themeDarkMode.classList.add("hide")
    themeLightMode.classList.remove("hide")
    mode.textContent = "off"
  }

  function darkModeStyle() {
    themeLightMode.classList.add("hide")
    themeDarkMode.classList.remove("hide")
    mode.textContent = "on"
  }

  setTheme()
}

themeSwitcherLightModeDefault()
