import { Page } from "../../ds/pages";
import { DataGrid } from "@mui/x-data-grid";
import { productColumns } from "../../products/productColumns";
import { FavoritesContext } from "../../contexts";

export default function FavoritesRoute() {
  const products = FavoritesContext.useContext();

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
