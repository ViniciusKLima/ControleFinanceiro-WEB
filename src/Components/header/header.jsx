import "./Header.css";

function Header() {
  return (
    <header className="header d-flex justify-content-between align-items-center">
      <div className="logo">
        <svg
          width="43"
          height="53"
          viewBox="0 0 43 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.1211 0C25.0223 2.0197e-05 25.7528 0.730638 25.7529 1.63184V5.29688C32.7848 6.82846 38.5144 11.8471 41.04 18.4502H31.9941C29.6101 15.0657 25.6714 12.8545 21.2168 12.8545C15.2802 12.8547 10.2622 16.7825 8.61621 22.1807H42.084C42.3125 23.4282 42.4336 24.7138 42.4336 26.0273L42.4268 26.5752C42.1751 36.5021 35.1048 44.7331 25.7246 46.7627V50.5977C25.7244 51.4988 24.9939 52.2304 24.0928 52.2305H18.4395C17.5387 52.2305 16.8079 51.4993 16.8076 50.5986V46.7842C9.67673 45.2767 3.86699 40.1884 1.34961 33.4883H10.3604C12.7356 36.938 16.7118 39.2001 21.2168 39.2002C27.1964 39.2002 32.2448 35.2163 33.8535 29.7578H0.328125C0.144244 28.7211 0.0342857 27.6581 0.00683594 26.5752L0 26.0273C0.000182869 15.8219 7.20636 7.3001 16.8076 5.27051V1.63184C16.8078 0.730625 17.5392 0 18.4404 0H24.1211ZM24.0928 51.4141L24.1758 51.4102C24.1821 51.4095 24.1881 51.407 24.1943 51.4062C24.161 51.4104 24.1272 51.4141 24.0928 51.4141ZM18.4404 0.816406H24.1211V0.81543H18.4404V0.816406Z"
            fill="#2976EB"
          />
        </svg>
      </div>
      <nav className="d-flex align-items-center">
        <ul className="navbar-nav d-flex flex-row justify-content-center align-items-center gap-4">
          <li className="nav-item">
            <button className="btn-nav" onClick={""}>Início</button>
          </li>
          <li className="nav-item"> 
            <button className="btn-nav" onClick={""}>Funcionalidades</button>
          </li>
          <li className="nav-item">
            <button className="btn-nav" onClick={""}>Benefícios</button>
          </li>
          <li className="nav-item">
            <button className="btn-nav" onClick={""}>Contato</button>
          </li>
        </ul>
      </nav>
      <button className="btn-download">Baixar<i class="bi bi-download"></i></button>
    </header>
  );
}

export default Header;
