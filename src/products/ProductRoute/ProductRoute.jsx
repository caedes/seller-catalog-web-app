import { useParams } from "react-router-dom";
import { Page } from "../../ds/pages";

export default function ProductRoute() {
  const { id } = useParams();

  return <Page title={`Product: ${id}`} />;
}
