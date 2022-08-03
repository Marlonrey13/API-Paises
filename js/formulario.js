const formulario = document.querySelector('form')
const input = document.querySelector('input')

const busqueda = data => {
	formulario.addEventListener('keyup', e => {
		e.preventDefault()
		const letraBusqueda = input.value.toLowerCase()
		const buscar = data.filter(item => {
			const nombrePais = item.name.common.toLowerCase()
			if (nombrePais.indexOf(letraBusqueda) !== -1) {
				return item
			}
		})
		pintarCards(buscar)
		if (e.key === 'Enter') {
			input.blur()
			input.value = ''
		}
	})
}