import logoHeader from "../assets/img/logoHeader.svg";
import loginIcon from "../assets/img/login.svg";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-4 bg-black w-full">
      {/*Logo*/}
      <div className="flex items-center">
        <img src={logoHeader} alt="logoHeader" className="h-12 w-auto" />
      </div>

      {/*Navigation*/}
      <nav className="hidden md:flex items-center gap-10">
        <a
          href="#"
          className="text-white text-lg hover:text-[#D4AF37] transition-colors"
        >
          Inicio
        </a>
        <a
          href="#"
          className="text-white text-lg hover:text-[#D4AF37] transition-colors"
        >
          Servicios
        </a>
        <a
          href="#"
          className="text-white text-lg hover:text-[#D4AF37] transition-colors"
        >
          Sobre Nosotros
        </a>
        <a
          href="#"
          className="text-white text-lg hover:text-[#D4AF37] transition-colors"
        >
          Contacto
        </a>
      </nav>

      {/*Login button*/}
      <div className="flex items-center">
        <button type="button" className="hover:scale-110 transition-transform">
          <img src={loginIcon} alt="login" className="h-8 w-auto" />
        </button>
      </div>
    </header>
  );
}
