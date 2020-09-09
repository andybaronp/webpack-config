import  '../css/estilo.css';

export const saludar = (nombre) => {

    
    const h1 = document.createElement('h1');
    h1.innerHTML = `Hola como estas ${nombre}`
    document.body.append(h1)

    
}
