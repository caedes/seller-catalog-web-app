import { useParams } from "react-router-dom";
import { Page } from "../../ds/pages";
import { useProduct } from "../../hooks";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { Edit, Favorite, FavoriteBorder } from "@mui/icons-material";
import { Price } from "../../ds/atoms";
import ProductCondition from "../ProductCondition";
import { FavoritesContext } from "../../contexts";

const defaultRenderCell = ({ value }) => value;

export default function ProductRoute() {
  const { id } = useParams();
  const { isLoading, data: product } = useProduct({ id });
  const { favoriteIds, toggleFavorite } = FavoritesContext.useContext();

  const isFavorite = favoriteIds.includes(id);

  if (isLoading) return <LinearProgress />;

  const productProperties = [
    { name: "Nom", value: product.name },
    { name: "Prix", value: product.price, type: "number", renderCell: Price },
    { name: "Stock", value: product.stock, type: "number" },
    {
      name: "Condition",
      value: product.condition,
      renderCell: ProductCondition,
    },
  ];

  return (
    <Page title={product.name}>
      <Alert severity="success">
        <AlertTitle>Votre fiche produit a été enrichie avec succès</AlertTitle>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste delectus
        temporibus deserunt adipisci nemo deleniti earum veritatis rem, dolores
        asperiores velit facere eum dolore esse voluptates laudantium odit
        commodi id!
      </Alert>

      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1, my: 2 }}>
        <Button
          variant="outlined"
          startIcon={isFavorite ? <FavoriteBorder /> : <Favorite />}
          onClick={() => toggleFavorite({ id })}
        >
          {isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
        </Button>
        <Button startIcon={<Edit />}>Éditer</Button>
      </Box>

      <Box component="article" sx={{ display: "flex", gap: 2 }}>
        <img
          src={product.imageUrl}
          alt={product.name}
          width={300}
          height={300}
        />
        <TableContainer>
          <Typography variant="h6">Propriétés</Typography>
          <Table aria-label="Fiche produit">
            <TableBody>
              {productProperties.map(
                ({ name, value, type, renderCell = defaultRenderCell }) => (
                  <TableRow key={name}>
                    <TableCell component="th" scope="row">
                      {name}
                    </TableCell>
                    <TableCell
                      align={type === "number" ? "right" : "left"}
                      sx={{ fontWeight: "bold" }}
                    >
                      {renderCell({ value })}
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Page>
  );
}
