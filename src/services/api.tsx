import { RequestOptions } from './models/models'; // importacion

const request = async(requestOptions: RequestOptions) => { // definiicion de la funcion request
    const { endpoint, method, options, isFile } = requestOptions; // desetructuracion del argumrnto
    options === undefined ? requestOptions.options = {} : requestOptions.options = options; // establecimiento de 
    isFile === undefined ? requestOptions.isFile = false : requestOptions.isFile = isFile;  // valores predeterminados
    const headers = new Headers({ // configuracionde encabezados
        'Content-Type': 'application/json',
    });
    
    let config: any = {                 // configuracion 
        method,                         // inicial
        headers,                        // para 
        body: JSON.stringify(options),  // la  peticion
    };
    if (isFile) {               // manejo de archivos
        config.headers = {};    // 
        config.body = options;
    }
    try {
        const response = await fetch(endpoint, config);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (err: any) {
        throw Error(err.message());
    }
}

export default request; // exportacion