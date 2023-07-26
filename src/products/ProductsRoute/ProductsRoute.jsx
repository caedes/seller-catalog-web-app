import {
  Box,
  Button,
  InputAdornment,
  LinearProgress,
  TextField,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Page } from "../../ds/pages";
import { useProducts } from "../../hooks";
import { withRow } from "../../hoc";
import ProductCondition from "../ProductCondition";
import ProductDescription from "../ProductDescription";
import ProductImage from "../ProductImage";
import ProductPrice from "../ProductPrice";
import { Search } from "@mui/icons-material";

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
];

export default function ProductsRoute() {
  const { isLoading, data: products } = useProducts();

  if (isLoading) return <LinearProgress />;

  return (
    <Page title="Gestion du catalogue">
      <Box sx={{ ml: 21, pb: 8 }}>
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
        />
        <Button sx={{ ml: 1 }}>Rechercher</Button>
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