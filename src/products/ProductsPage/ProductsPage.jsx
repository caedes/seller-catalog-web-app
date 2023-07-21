import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import db from "../../db.json";
import ProductImage from "../ProductImage";
import ProductPrice from "../ProductPrice";
import ProductCondition from "../ProductCondition";

const columns = [
  {
    field: "image",
    headerName: "Image",
    renderCell: ProductImage,
  },
  {
    field: "productDescription",
    headerName: "Produit",
    valueGetter: ({ row }) => `${row.name} ${row.description}`,
  },
  {
    field: "condition",
    headerName: "Condition",
    renderCell: ProductCondition,
  },
  {
    field: "price",
    headerName: "Prix",
    type: "number",
    renderCell: ProductPrice,
  },
  {
    field: "stock",
    headerName: "Stock",
    type: "number",
  },
];

export default function ProductsPage() {
  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <DataGrid
        columns={columns}
        rows={db.products}
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
