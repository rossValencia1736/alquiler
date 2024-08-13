"use client";

import { useState } from "react";
import estilo from "./styles/FiltroInicio.module.css";
import { opciones } from "@/utils/lista";

function FiltroInicio() {
  const [opcionBuscador, setOpcionBuscador] = useState("Alquiler");
  const [opcionesForm, setOpcionesForm] = useState({
    tipo: "Departamento",
    departamento: "",
    provincia: "",
  });

  function cambiarOpcion(e) {
    setOpcionBuscador(e.target.dataset.value);
  }

  function capturarOpciones(e) {
    const nombre = e.target.name;
    const valor = e.target.value;

    setOpcionesForm({
      ...opcionesForm,
      [nombre]: valor,
    });
  }

  return (
    <div className={estilo.filtro_inicio}>
      <div className={estilo.filtro_inicio_contenido}>
        <h2>Encuentra tu hogar soñado</h2>

        <div className={estilo.filtro_inicio_buscador}>
          <div className={estilo.filtro_inicio_buscador_opciones}>
            <span
              onClick={cambiarOpcion}
              data-value="Alquiler"
              className={
                opcionBuscador === "Alquiler" ? estilo.opcion_activa : ""
              }
            >
              Alquiler
            </span>
            <span
              onClick={cambiarOpcion}
              data-value="Compra"
              className={
                opcionBuscador === "Compra" ? estilo.opcion_activa : ""
              }
            >
              Compra
            </span>
          </div>

          <div className={estilo.filtro_inicio_buscador_filtros}>
            <div className={estilo.filtro_inicio_buscador_filtros_contenido}>
              <label>Selecciona tipo</label>

              <select
                name="tipo"
                value={opcionesForm.tipo}
                onChange={capturarOpciones}
              >
                {opciones.map((e, i) => (
                  <option key={i} value={e.opcion}>
                    {e.opcion}
                  </option>
                ))}
              </select>
            </div>

            <div className={estilo.filtro_inicio_buscador_filtros_contenido}>
              <label>Selecciona Departamento</label>

              <select>
                <option>Lima</option>
              </select>
            </div>

            <div className={estilo.filtro_inicio_buscador_filtros_contenido}>
              <label>Selecciona Provincia</label>

              <select>
                <option>Lima</option>
              </select>
            </div>

            <button>Buscar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FiltroInicio;
