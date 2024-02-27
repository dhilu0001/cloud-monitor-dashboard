import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { DataGrid } from "@mui/x-data-grid";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import LinearProgress from "@mui/material/LinearProgress";

import { fetchCloudResources } from "../../api-mocks/mockApi";
import { columns } from "./columnDef";

import styles from "./style.module.css";
import { Typography } from "@mui/material";

const fetchCloudResourcesQuery = {
  queryKey: ["status"],
  queryFn: async () => await fetchCloudResources(),
};
const CloudResourcesGrid = () => {
  const { data, isLoading } = useQuery(fetchCloudResourcesQuery);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  if (isLoading) {
    return <LinearProgress />;
  }

  const filteredData = data?.filter((item) => {
    if (!searchTerm) return item;
    return Object.values(item)?.some(
      (value) =>
        typeof value === "string" &&
        value?.toLowerCase().includes(searchTerm?.toLowerCase())
    );
  });

  return (
    <div className={styles.resourceContainer}>
      <Typography>Resource Usage</Typography>
      <Paper component="form" className={styles.searchForm}>
        <InputBase
          placeholder="Filter by name, status, account and region"
          value={searchTerm}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
        {searchTerm && (
          <IconButton onClick={handleClearSearch}>
            <ClearIcon />
          </IconButton>
        )}
        <IconButton type="button" onClick={handleSearchChange}>
          <SearchIcon />
        </IconButton>
      </Paper>
      <DataGrid
        rows={filteredData || []}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
      />
    </div>
  );
};

export default CloudResourcesGrid;
