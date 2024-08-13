import estilo from "./Propiedad.module.css";
import Mapa from "@/components/especificos/Mapa";
import departamento from "../../../json/departamento.json";
import CarrouselFotos from "@/components/especificos/CarrouselFotos";
import iconos from "@/utils/iconos";

function getPropiedad(id) {
  const datosFiltrados = departamento.find((f) => f.id === Number(id));

  if (datosFiltrados) {
    return datosFiltrados;
  }

  return null;
}

function Propiedad({ params }) {
  const { id } = params;
  const idPropiedad = id.split("-")[0];

  const datos = getPropiedad(idPropiedad);

  return (
    <main className={estilo.propiedad}>
      <div className={estilo.propiedad_informacion}>
        <CarrouselFotos datos={datos} />

        <div>
          <h2>{datos.nombre}</h2>

          <p>
            {datos.departamento} - {datos.provincia} - {datos.distrito}
          </p>
        </div>

        <div className={estilo.propiedad_informacion_detalles}>
          <div className={estilo.propiedad_informacion_detalles_iconos}>
            <div className={estilo.icono}>{iconos.habitaciones}</div>
            <span>{datos.detalles.habitaciones}</span>
          </div>

          <div className={estilo.propiedad_informacion_detalles_iconos}>
            <div className={estilo.icono}>{iconos.baño}</div>
            <span>{datos.detalles.baño}</span>
          </div>

          {datos.detalles.sala && (
            <div className={estilo.propiedad_informacion_detalles_iconos}>
              <div className={estilo.icono}>{iconos.sala}</div>
              <span>Sala</span>
            </div>
          )}

          {datos.detalles.cocina && (
            <div className={estilo.propiedad_informacion_detalles_iconos}>
              <div className={estilo.icono}>{iconos.cocina}</div>
              <span>Cocina</span>
            </div>
          )}

          {datos.detalles.piscina && (
            <div className={estilo.propiedad_informacion_detalles_iconos}>
              <div className={estilo.icono}>{iconos.piscina}</div>
              <span>Piscina</span>
            </div>
          )}

          {datos.detalles.telefono && (
            <div className={estilo.propiedad_informacion_detalles_iconos}>
              <div className={estilo.icono}>{iconos.telefono}</div>
              <span>Telefono</span>
            </div>
          )}

          {datos.detalles.cable && (
            <div className={estilo.propiedad_informacion_detalles_iconos}>
              <div className={estilo.icono}>{iconos.cable}</div>
              <span>Cable</span>
            </div>
          )}

          {datos.detalles.wifi && (
            <div className={estilo.propiedad_informacion_detalles_iconos}>
              <div className={estilo.icono}>{iconos.wifi}</div>
              <span>Wifi</span>
            </div>
          )}

          {datos.detalles.seguridad && (
            <div className={estilo.propiedad_informacion_detalles_iconos}>
              <div className={estilo.icono}>{iconos.seguridad}</div>
              <span>Seguridad</span>
            </div>
          )}

          {datos.detalles.gym && (
            <div className={estilo.propiedad_informacion_detalles_iconos}>
              <div className={estilo.icono}>{iconos.gym}</div>
              <span>Gym</span>
            </div>
          )}
        </div>

        <div>
          <p>{datos.descripcion}</p>
        </div>

        <Mapa
          latitud={datos.ubicacion.latitud}
          longitud={datos.ubicacion.longitud}
        />
      </div>

      <div className={estilo.propiedad_contacto}>
        <p>Contacta por Whatsapp</p>
      </div>
    </main>
  );
}

export default Propiedad;
