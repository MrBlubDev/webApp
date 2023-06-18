import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar-left">
      <div>
        <h1 className="relative top-8 left-11">LOGO</h1>
      </div>
      <div className="nav-1">
        <Link href="/">
          <div className="navb-1">
            <div className="button-text">Inbox</div>
          </div>
        </Link>
        <Link href="/today">
          <div className="navb-1">
            <div className="button-text">Today</div>
          </div>
        </Link>
        <Link href="/upcoming">
          <div className="navb-1">
            <div className="button-text">Upcoming</div>
          </div>
        </Link>
        <Link href="/filters-labels">
          <div className="navb-1">
            <div className="button-text">Filters & Labels</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
