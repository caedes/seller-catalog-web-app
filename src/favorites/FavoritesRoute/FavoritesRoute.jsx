import { Page } from "../../ds/pages";
import { DataGrid } from "@mui/x-data-grid";
import { productColumns } from "../../products/productColumns";
import { FavoritesContext } from "../../contexts";
import { useProductsByIds } from "../../hooks";
import { LinearProgress } from "@mui/material";

export default function FavoritesRoute() {
  const { favoriteIds } = FavoritesContext.useContext();
  const { isLoading, data: products } = useProductsByIds({ ids: favoriteIds });

  if (isLoading) return <LinearProgress />;

  return (
    <Page title="Favoris">
      <DataGrid
        columns={productColumns}
        rows={products}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 15,
            },
          },
        }}
        pageSizeOptions={[15]}
        disableRowSelectionOnClick
        autoHeight
      />
    </Page>
  );
}
