URL_CENTROS = "centros.json";

async function get(url)
{
    const datos = await fetch(url);
    const respuesta = await datos.json();
    console.log(respuesta);
    return (respuesta);
}

get(URL_CENTROS);