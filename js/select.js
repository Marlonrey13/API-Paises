const select = document.querySelector('select')

const filtrado = datos => {
	const cambiar = () => {
		var opcion = select.value

		if (opcion === '') {
			pintarCards(datos)
		} else {
			const filtrar = datos.filter(item => item.region === opcion)
			pintarCards(filtrar)
		}
	}
	select.onchange = cambiar
	cambiar()
}