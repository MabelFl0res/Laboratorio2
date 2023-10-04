export interface RequestOptions {
    endpoint: string, // Define el punto final o URL al que se realizará la petición.
    method: string, // Especifica el verbo HTTP de la petición
    options?: object, // Un objeto opcional que podría contener opciones adicionales para la petición
    body?: any // Este es el cuerpo de la petición, que sería relevante para verbos como "POST" o "PUT" donde necesitas enviar datos al servidor.
    isFile?: boolean // Un indicador booleano opcional que, si está presente y es verdadero, podría sugerir que el cuerpo de la petición contiene un archivo. 
}
export interface Post { 
    userId: number,
    id: number,
    title: string,
    body: string
}