URL_CENTROS = "centros.json";

async function get(url)
{
    const datos = await fetch(url);
    const respuesta = await datos.json();
    console.log(respuesta);
    return (respuesta);
}

async function loadCenters()
{
	const datos = await get(URL_CENTROS);
	const centros = datos.centros;
	const listaCentros = document.getElementById("lista-centros");

	for (let i = 0; i < centros.length; i++)
	{
		const centroMedico = createCard(centros[i]);
		listaCentros.appendChild(centroMedico);
	}
}

function createCard(centro)
{
	const card = document.createElement("div");
	card.classList.add("centro");

	const name = document.createElement("h2");
	name.textContent = centro.nombre;
	card.appendChild(name);

	const address = document.createElement("p");
	address.textContent = centro.direccion + " - " + centro.municipio;
	card.appendChild(address);

	const specialty = document.createElement("p");
	specialty.textContent = centro.especialidades.join(", ");
	card.appendChild(specialty);

	if (centro.urgencias == true)
	{
		const emergency = document.createElement("p");
		specialty.textContent = "Urgencias 24 h";
		specialty.classList.add("centro-urgencias");
		card.appendChild(emergency);
	}

	return (card);
}

loadCenters();