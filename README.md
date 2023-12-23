# Accessible Dark Mode / Light Mode Toggle Buttons

This is an updated and improved version of [Accessible Dark Mode Toggle Button](https://chrisnajman.github.io/accessible-dark-mode-toggle-button).

## Description

Two pages, one featuring a dark mode default theme toggle button, the other a light mode default theme toggle button.

## Accessibility

- The `ARIA-pressed` attribute indicates the button state to screen readers.
- The `ARIA-hidden` attribute hides the SVG icon and CSS `content` text from screenreaders.
- Keyboard navigation via the `Tab` key focuses the button.
- Visual cues (icons, on/off text) are provided for sighted users.

## CSS

- CSS variables are used for the dark and light themes.
- CSS nesting is used to structure the styles.

## SVG

- The icons are referenced via an SVG sprite.

## Javascript

- ES6 (no transpilation to ES5)

- Button state is saved to local storage, so the chosen theme persists.

### Local Storage

Once you've clicked the 'Dark Mode' link and switched it to **off** or **on**, the theme option is saved
to local storage. The theme will persist after you refresh the page or close it down and reopen it. Each time
you click the button the theme option is saved.

#### Clearing local storage

During development, you might want to clear local storage to check that the default state is working.
To do so:

- Right-click on the page, then click 'Inspect'.
- Click on 'Applications'.
- Right-click on "**DARKMODE-DEFAULT-switcher**" or "**LIGHTMODE-DEFAULT-switcher**"
- Click 'delete'.
- Force refresh the page (Control+F5).

The default page theme will now be restored.

**Note**: the above instructions are for Chrome on Windows 10. However, most browsers follow a
similar pattern.

## Sources

- [`ARIA-pressed` information (and more) from Inclusive Components/Toggle Buttons](https://inclusive-components.design/toggle-button/)
- [Sun and Moon icons from Free Box Icons (click SVG tab for code))](https://boxicons.com/?query=Moon)

## Testing

- Tested on:
  - Windows 10
    - Chrome
    - Firefox
    - Microsoft Edge
