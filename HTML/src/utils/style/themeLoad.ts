export const themeLoadStrScript = `(function() {
try {
  const theme = document.cookie
    .split('; ')
    .find((row) => row.startsWith('.theme='))
    ?.split('=')[1]

  if (theme && (theme === 'd' || theme === 'l')) {
    document.documentElement.setAttribute('data-theme', theme)
  } else {
    const systemTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'l' : 'd'
    document.documentElement.setAttribute('data-theme', systemTheme)
  }
} catch (e) {
  console.error('Error with theme:', e)
}
})();`
