const boton = document.querySelector('.mode')
const localStor = localStorage.getItem('theme')
const prefers = window.matchMedia('(prefers-color-scheme: dark)')

if (prefers.matches) {
	document.body.classList.add('dark-theme')
} else {
	document.body.classList.remove('dark-theme')
}

if (localStor === 'dark') {
	document.body.classList.add('dark-theme')
} else if (localStor === 'light') {
	document.body.classList.remove('dark-theme')
}


boton.addEventListener('click', () => {
	let theme
	document.body.classList.toggle('dark-theme')
	innerBoton()
	theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light'
	localStorage.setItem('theme', theme)
})

const innerBoton = () => {
	if (document.body.classList.contains('dark-theme')) {
		boton.innerHTML = `
		<i class="fa-regular fa-sun"></i>
		Light Mode
		`
	} else {
		boton.innerHTML = `
		<i class="fa-regular fa-moon"></i>
		Dark Mode
		`
	}
}

innerBoton()