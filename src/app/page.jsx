import estilo from "./Inicio.module.css";
import FiltroInicio from "@/components/generales/FiltroInicio";
import Tarjeta from "@/components/generales/Tarjeta";
import departamento from "@/json/departamento.json";

function Inicio() {
  return (
    <main className={estilo.inicio}>
      <FiltroInicio />

      <div className={estilo.inicio_grid}>
        {departamento.map((e) => (
          <Tarjeta key={e.id} datos={e} />
        ))}
      </div>
    </main>
  );
}

export default Inicio;
