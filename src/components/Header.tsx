import { Link } from "@yext/sites-components";
import { HexColor } from "@yext/studio";

export interface HeaderProps {
  logo?: string;
  company?: string;
  backgroundColor?: HexColor;
  textColor?: HexColor;
  link1?: string;
  label1?: string;
  link2?: string;
  label2: string;
  bigNumber?: number;
}

const Header = ({
  logo,
  company,
  backgroundColor,
  textColor,
  link1,
  label1,
  link2,
  label2,
  bigNumber,
}: HeaderProps) => {
  return (
    <div
      className="flex w-full items-center justify-between border-b px-8 py-4"
      style={{ backgroundColor, color: textColor }}
    >
      <div>
        <h2 className="text-2xl font-semibold">{bigNumber}</h2>
      </div>
      <Link href={"./index.html"} className="flex items-center gap-3">
        <img className="block h-14 w-auto" src={logo} alt={company} />
        <h1 className="text-2xl font-semibold">{company}</h1>
      </Link>
      <nav className="flex gap-6">
        <a href={link1}>{label1}</a>
        <a href={link2}>{label2}</a>
      </nav>
    </div>
  );
};

export default Header;
