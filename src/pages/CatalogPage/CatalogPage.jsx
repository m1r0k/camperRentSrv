import css from "./CatalogPage.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCatalog } from "../../redux/campers/operations";
import Layout from "../../components/Layout/Layout";
import Catalog from "../../components/Catalog/Catalog";
import SideBar from "../../components/SideBar/SideBar";

export default function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);

  return (
    <Layout>
      <div className={css.container}>
        <SideBar className={css.sidebar} />
        <div className={css.catalog}>
          <Catalog />
        </div>
      </div>
    </Layout>
  );
}
