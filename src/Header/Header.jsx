import "./header.css";

export default function Header() {
  return (
    <header>
      <h1 className="logo">Seller Catalog</h1>
      <nav>
        <ol className="navList">
          <li className="navListItem">
            <a href="/page1" className="navLink">
              Page 1
            </a>
          </li>
          <li>
            <a href="/page2" className="navLink">
              Page 2
            </a>
          </li>
        </ol>
      </nav>
      <button onClick={() => {}}>Mode Dark</button>
    </header>
  );
}
