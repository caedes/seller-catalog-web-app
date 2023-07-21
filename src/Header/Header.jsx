import clsx from "clsx";
import "./header.css";
import { useDarkLightMode } from "@/hooks";
import styled from "@emotion/styled";

const NavLink = styled.a`
  text-decoration: none;
  color: ${({ light }) => (light ? "#0d293f" : "white")};
`;

const mainMenu = [
  { name: "Produits", url: "/products" },
  { name: "Commandes", url: "/orders" },
  { name: "Finance", url: "/financial" },
  { name: "Rapports", url: "/reports" },
  { name: "Messages", url: "/messages" },
  { name: "Marketplaces", url: "/marketplaces" },
];

export default function Header() {
  const [currentMode, { toggleMode }] = useDarkLightMode();

  return (
    <header className={clsx({ light: !currentMode })}>
      <h1 className={clsx("logo", { light: !currentMode })}>Seller Catalog</h1>
      <nav>
        <ol className="navList">
          {mainMenu.map(({ name, url }) => (
            <li key={url} className="navListItem">
              <NavLink href={url} light={!currentMode}>
                {name}
              </NavLink>
            </li>
          ))}
        </ol>
      </nav>
      <button onClick={toggleMode}>
        Mode {currentMode ? "Dark" : "Light"}
      </button>
    </header>
  );
}
