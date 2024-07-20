// import css from "./CatalogPage.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCatalog } from "../../redux/campers/operations";
import Layout from "../../components/Layout/Layout";
import Catalog from "../../components/Catalog/Catalog";
import SideBar from "../../components/SideBar/SideBar";
// import { selectError, selectLoading } from "../../redux/campers/selectors";

export default function CatalogPage() {
  const dispatch = useDispatch();
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);

  return (
    <Layout>
      <SideBar />
      <Catalog />
    </Layout>
  );
}
