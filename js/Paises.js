const main = document.querySelector('main')
const template = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', () => {
	fetchDatos()
})

const fetchDatos = async () => {
	try {
		const res = await fetch('https://api.restcountries.com/countries/v5',
  { headers: { 'Authorization': 'Bearer rc_live_f9366bebb26745eba419fbb2fe39c41e' } })
		const datos = await res.json()
		const paises = await datos.data.objects
		console.log(paises)
		pintarCards(paises)
		busqueda(paises)
		filtrado(paises)
	} catch (error) {
		console.log(error)
	}
}

const pintarCards = datos => {
	main.textContent = ''
	datos.forEach(pais => {
		const clon = template.cloneNode(true)

		clon.querySelector('.details').setAttribute('href', `Pais.html?name=${pais.codes.ccn3}`)
		clon.querySelector('.card-img').setAttribute('src', pais.flag.url_png)
		clon.querySelector('h2').textContent = pais.names.common
		clon.querySelectorAll('p')[0].innerHTML = `<b>Population: </b>${pais.population}`
		clon.querySelectorAll('p')[1].innerHTML = `<b>Region: </b>${pais.region}`
		clon.querySelectorAll('p')[2].innerHTML = `<b>Capital: </b>${pais.capitals[0].name}`

		fragment.appendChild(clon)
	})
	main.appendChild(fragment)
}