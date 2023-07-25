import { Box, LinearProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useProducts } from "../../hooks";
import { withRow } from "../../hoc";
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
];

export default function ProductsRoute() {
  const { isLoading, data: products } = useProducts();

  if (isLoading) return <LinearProgress />;

  return (
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
  );
}
