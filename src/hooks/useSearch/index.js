import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function useSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearch] = useState(searchParams.get("q") || "");

  const onSearchChange = (event) => setSearch(event.currentTarget.value);

  const searchSubmit = (refetch) => (event) => {
    event.preventDefault();
    setSearchParams({ q: searchTerm });
    refetch();
  };

  return [searchTerm, { onSearchChange, searchSubmit }];
}
