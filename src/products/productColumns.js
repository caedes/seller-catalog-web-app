import { withRow } from "../hoc";
import ProductActions from "./ProductActions";
import ProductCondition from "./ProductCondition";
import ProductDescription from "./ProductDescription";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";

export const productColumns = [
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
