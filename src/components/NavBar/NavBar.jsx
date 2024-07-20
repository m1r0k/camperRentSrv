import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";
import css from "./NavBar.module.css";

export const Navigation = () => {
  return (
    <>
      <header className={css.header}>
        <nav>
          <ul className={css.list}>
            <li className={css.item}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? css.active : css.navlink
                }
              >
                Home
              </NavLink>
            </li>
            <li className={css.item}>
              <NavLink
                to="/catalog"
                className={({ isActive }) =>
                  isActive ? css.active : css.navlink
                }
              >
                Catalog
              </NavLink>
            </li>
            <li className={css.item}>
              <NavLink
                to="/favorites"
                className={({ isActive }) =>
                  isActive ? css.active : css.navlink
                }
              >
                Favorite
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
