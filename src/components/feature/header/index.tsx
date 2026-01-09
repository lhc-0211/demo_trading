import { Login } from "./components/login";
import { ModeLanguage } from "./components/mode-language";
import { ModeToggle } from "./components/mode-toggle";

export default function Header() {
  return (
    <div className="flex items-center justify-between py-2 px-2 md:px-6">
      {/* logo */}
      <div></div>

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
    </div>
  );
}
