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
import { withRow } from "../../hoc";
import ProductActions from "../ProductActions";
import ProductCondition from "../ProductCondition";
import ProductDescription from "../ProductDescription";
import ProductImage from "../ProductImage";
import ProductPrice from "../ProductPrice";

const columns = [
  {
    field: "image",
    headerName: "Image",
    renderCell: withRow(ProductImage),
  },
  {
    field: "productDescription",
    headerName: "Produit",
    flex: 1,
    renderCell: withRow(ProductDescription),
  },
  {
    field: "condition",
    headerName: "Condition",
    renderCell: withRow(ProductCondition),
  },
  {
    field: "price",
    headerName: "Prix",
    type: "number",
    renderCell: withRow(ProductPrice),
  },
  {
    field: "stock",
    headerName: "Stock",
    type: "number",
  },
  {
    field: "actions",
    headerName: "Actions",
    sortable: false,
    renderCell: withRow(ProductActions),
  },
];

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
      <Box sx={{ height: "100%", width: "100%" }}>
        <DataGrid
          columns={columns}
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
        />
      </Box>
    </Page>
  );
}
