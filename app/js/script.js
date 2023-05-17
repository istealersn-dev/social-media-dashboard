
// set the background color to the toggle
const toggleSwitch = document.getElementById('toggle__switch');
const toggleBg = document.querySelector('.toggle__input');

toggleSwitch.addEventListener('change', (event) => {
    const theme = event.target.checked ? 'dark' : 'light';
    toggleBg.style.background = event.target.checked ? 'var(--toggle-bg': '';

    toggleTheme(theme)
})

// switch between dark vs light theme
function toggleTheme(theme) {

    // Setting the data attribuet on the root element
    document.documentElement.setAttribute('data-theme', theme);

    //Check if the theme is dark
    const isDarkTheme = theme === 'dark';

    // Updating the styles based on the theme
    document.documentElement.style.setProperty('--page-bg', isDarkTheme ? 'var(--dark-blue-bg)': 'var(--light-bg)');
    document.documentElement.style.setProperty('--header-bg', isDarkTheme ? 'var(--dark-blue-top-bg)': 'var(--light-blue-top-bg)');
    document.documentElement.style.setProperty('--heading-color', isDarkTheme ? 'var(--light-bg)' : 'var(--dark-blue-bg)');
    document.documentElement.style.setProperty('--card-bg', isDarkTheme ? 'var(--dark-card-bg)' : 'var(--light-card-bg)');
    document.documentElement.style.setProperty('--card-text-color', isDarkTheme ? 'var(--dark-card-text)': 'var(--light-card-text)');
    document.documentElement.style.setProperty('--card-num-color', isDarkTheme ? 'var(--dark-text)' : 'var(--light-text)');
}