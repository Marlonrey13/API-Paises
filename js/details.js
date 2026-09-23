const main = document.querySelector('main')
const templateDetails = document.getElementById('template-details').content
const fragment = document.createDocumentFragment()
const param = new URLSearchParams(window.location.search).get('name')

document.addEventListener('DOMContentLoaded', () => {
	fetchDatos()
})

const fetchDatos = async() => {
	try {
		const res = await fetch(
  `https://api.restcountries.com/countries/v5/codes.alpha_2/${param}`,
  {
    headers: {
      Authorization: 'Bearer rc_live_f9366bebb26745eba419fbb2fe39c41e'
    }
  })
		const data = await res.json()
		console.log(data)
		pintarDetalles(data)
	} catch (error) {
		console.log(error)
	}
}

const pintarDetalles = datos => {
	const arrayNatives = Object.values(datos[0].names.native)
	const native = arrayNatives[arrayNatives.length - 1].official
	const currencies = Object.values(datos[0].currencies)
	const languages = Object.entries(datos[0].languages)
	const arrayBorders = datos[0].borders
	let monedas = []
	let arrayLang = []

	currencies.forEach(item => {
		monedas.push(' '+item.name)
	})

	languages.forEach(item => {
		arrayLang.push(' '+item[1])
	})

	templateDetails.querySelector('img').setAttribute('src', datos[0].flag.url_svg)
	templateDetails.querySelector('h2').textContent = datos[0].names.common
	templateDetails.querySelectorAll('p')[0].innerHTML = `<b>Native Name: </b>${native}`
	templateDetails.querySelectorAll('p')[1].innerHTML = `<b>Population: </b>${datos[0].population}`
	templateDetails.querySelectorAll('p')[2].innerHTML = `<b>Region: </b>${datos[0].region}`
	templateDetails.querySelectorAll('p')[3].innerHTML = `<b>Sub Region: </b>${datos[0].subregion}`
	templateDetails.querySelectorAll('p')[4].innerHTML = `<b>Capital: </b>${datos[0].capitals[0].name}`
	templateDetails.querySelectorAll('p')[5].innerHTML = `<b>Top Level Domain: </b>${datos[0].tlds[0]}`
	templateDetails.querySelectorAll('p')[6].innerHTML = `<b>Currencies: </b>${monedas}`
	templateDetails.querySelectorAll('p')[7].innerHTML = `<b>Languages: </b>${arrayLang}`
	
	let inner = ''
	if (arrayBorders !== undefined) {
		arrayBorders.forEach(item => {
			inner += `<a href="Pais.html?name=${item}" class="border-button box">${item}</a>`
		})
		templateDetails.querySelector('.borders').innerHTML = `<b>Border Countries: </b>${inner}`
	} else {
		templateDetails.querySelector('.borders').innerHTML = '<b>No Border Countries</b>'
	}

	fragment.appendChild(templateDetails)
	main.appendChild(fragment)
}