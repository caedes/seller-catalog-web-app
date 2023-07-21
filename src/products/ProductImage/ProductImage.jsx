import { shape, string } from "prop-types";

export default function ProductImage({ row }) {
  return <img src={row.imageUrl} alt={row.name} />;
}

ProductImage.propTypes = {
  row: shape({
    imageUrl: string,
    name: string,
  }),
};
