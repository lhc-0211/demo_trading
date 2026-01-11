import logo from "../../../assets/imgs/logo/lhc_logo.png";
import { Login } from "./components/login";
import { ModeLanguage } from "./components/mode-language";
import { ModeToggle } from "./components/mode-toggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between pr-2 pl-2 md:pr-6">
      {/* logo */}
      <div
        className="bg-cover bg-center w-10 h-14"
        style={{
          backgroundImage: `url(${logo})`,
        }}
      ></div>

      {/* client setting */}
      <div className="flex flex-row gap-4 items-center">
        <div className="flex flex-row gap-3 items-center">
          {/* Ngôn ngữ */}
          <ModeLanguage />

          {/* Màu sắc */}
          <ModeToggle />
        </div>
        <div className="w-px h-7 bg-gray-600"></div>

        {/* Login */}
        <Login />
      </div>
    </header>
  );
}
