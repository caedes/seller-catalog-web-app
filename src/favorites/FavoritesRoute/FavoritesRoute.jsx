import { Page } from "../../ds/pages";
import { DataGrid } from "@mui/x-data-grid";
import { productColumns } from "../../products/productColumns";
import { useReducer } from "react";

export default function FavoritesRoute() {
  // TODO WTF! Store Global VS Redux VS useReducer/React.Context ?
  const [products] = useReducer(() => {}, []);

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
