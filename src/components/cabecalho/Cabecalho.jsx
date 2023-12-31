'use client'
import Link from "next/link";
import styles from '../../styles/Cabecalho.module.css'

export default function Cabecalho({ isHome1, isVistoria }) {
  const linkHref = isHome1 ? "/login" : "/dadosCliente";
  const linkText = isHome1 ? "LOGIN" : "VISTORIA";
  const sobreNosText = isVistoria ? "PORTO SEGURO" : "SOBRE NÓS";

  return (
    <header className={styles.cabecalho}>
      <div className={styles.logoCabecalho}>
        <Link href="/">
          <h1>CYCLE GUARD</h1>
          <p>A MELHOR FORMA DE ADQUIRIR SEU SEGURO</p>
        </Link>
      </div>
      <div className={styles.navLinks}>
        <nav>
          <ul>
            <li>
              <a href="#seguros">SEGUROS DISPONÍVEIS</a>
            </li>
            <span> | </span>
            <li>
              <a href={`#${isVistoria ? "porto-seguro" : "sobre-nos"}`}>{sobreNosText}</a>
            </li>
            <span> | </span>
            <li>
              <Link href={linkHref}>{linkText}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
