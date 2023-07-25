import { useParams } from "react-router-dom";

export default function ProductRoute() {
  const { id } = useParams();

  return `ProductRoute: ${id}`;
}
