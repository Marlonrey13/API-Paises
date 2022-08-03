const main = document.querySelector('main')
const template = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', () => {
	fetchDatos()
})

const fetchDatos = async () => {
	try {
		const res = await fetch('https://restcountries.com/v3.1/all')
		const data = await res.json()
		console.log(data)
		pintarCards(data)
		busqueda(data)
		filtrado(data)
	} catch (error) {
		console.log(error)
	}
}

const pintarCards = datos => {
	main.textContent = ''
	datos.forEach(pais => {
		const clon = template.cloneNode(true)

		clon.querySelector('.details').setAttribute('href', `Pais.html?name=${pais.cca3}`)
		clon.querySelector('.card-img').setAttribute('src', pais.flags.png)
		clon.querySelector('h2').textContent = pais.name.common
		clon.querySelectorAll('p')[0].innerHTML = `<b>Population: </b>${pais.population}`
		clon.querySelectorAll('p')[1].innerHTML = `<b>Region: </b>${pais.region}`
		clon.querySelectorAll('p')[2].innerHTML = `<b>Capital: </b>${pais.capital}`

		fragment.appendChild(clon)
	})
	main.appendChild(fragment)
}