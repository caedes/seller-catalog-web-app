import {
  Box,
  Button,
  InputAdornment,
  LinearProgress,
  TextField,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Page } from "../../ds/pages";
import { Search } from "@mui/icons-material";
import { useProducts, useSearch } from "../../hooks";
import { productColumns } from "../productColumns";

export default function ProductsRoute() {
  const [searchTerm, { onSearchChange, searchSubmit }] = useSearch();
  const { isLoading, data: products, refetch } = useProducts({ searchTerm });

  if (isLoading) return <LinearProgress />;

  return (
    <Page title="Gestion du catalogue">
      <Box
        sx={{ ml: 21, pb: 8 }}
        component="form"
        onSubmit={searchSubmit(refetch)}
      >
        <TextField
          placeholder="Recherche par GTIN ou SKU"
          id="input-with-icon-textfield"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          sx={{ width: "630px" }}
          value={searchTerm}
          onChange={onSearchChange}
          autoComplete="off"
        />
        <Button sx={{ ml: 1 }} onClick={searchSubmit(refetch)}>
          Rechercher
        </Button>
      </Box>
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
