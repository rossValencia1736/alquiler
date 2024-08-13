import Link from "next/link";
import estilo from "./styles/Menu.module.css";

function Menu() {
  return (
    <header className={estilo.menu}>
      <Link href="/">
        <h1>MiCasa</h1>
      </Link>

      <ul>
        <li>Inicio</li>
        <li>Sobre mi</li>
        <li>Contacto</li>
      </ul>

      <button>Contacto</button>
    </header>
  );
}

export default Menu;
