import Link from "next/link";
import estilo from "./styles/Tarjeta.module.css";

function Tarjeta({ datos }) {
  const nombreLink = datos.nombre.replaceAll(" ", "-");

  return (
    <Link href={`/propiedades/${datos.id}-${nombreLink}`}>
      <div className={estilo.tarjeta}>
        <picture>
          <img
            src={datos.fotos[Math.floor(Math.random() * 3)].url}
            alt={datos.nombre}
            width={240}
            height={240}
            loading="lazy"
          />
          <div className={estilo.adicionales}>
            <span>
              {datos.departamento} - {datos.provincia} - {datos.distrito}
            </span>
          </div>
        </picture>

        <div className={estilo.detalles}>
          <h3>{datos.nombre}</h3>
          <p>{datos.descripcion}</p>
        </div>

        <div className={estilo.extras}>
          <span>
            <b>
              S/
              {datos.precio}
            </b>{" "}
            - {datos.tipo}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default Tarjeta;
