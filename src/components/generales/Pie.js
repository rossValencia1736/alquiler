import estilo from "./styles/Pie.module.css";

function Pie() {
  return (
    <footer className={estilo.pie}>
      <div className={estilo.informacion}>
        <h6>Encuentra tu hogar soñado</h6>
        <p>
          Tenemos un amplio catálogo de hogares para ti, solo necesitas buscar
          segun tus necesidades y elegir el mejor lugar para ti
        </p>
      </div>

      <div className={estilo.contenido}>
        <div className={estilo.contenido_detalles}>
          <h4>MiCasa</h4>
          <p>
            Estamos construyendo nuestra plataforma de alquiler para que sea más
            fácil encontrar tu hogar, si tienes sugerencias puedes escribirnos
          </p>
        </div>

        <div className={estilo.contenido_opciones}>
          <ul>
            <li>Inicio</li>
            <li>Nosotros</li>
            <li>Anuncios</li>
          </ul>

          <ul>
            <li>Seguridad</li>
            <li>Politicas</li>
            <li>Preguntas Frecuentes</li>
          </ul>

          <ul>
            <li>Contacto</li>
            <li>soporte@micasa.com</li>
            <li>+51 950706848</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Pie;
