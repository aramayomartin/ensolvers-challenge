import { useEffect, useState } from "react";
import axios from "axios";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import Header from "./sections/Header";
import { Category, Note } from "../../types/types";
import Notes from "./sections/Notes";

const Home = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [notes, setNotes] = useState<Note[]>([]);
  const [reload, setReload] = useState<boolean>(false);

  const refresh = () => setReload((prev) => !prev);
  const getCategories = async () => {
    const { data } = await axios("http://localhost:3000/categories");
    data && setCategories(data);
  };

  const getNotes = async () => {
    const { data } = await axios("http://localhost:3000/notes");
    data && setNotes(data);
  };

  useEffect(() => {
    getCategories();
    getNotes();
  }, [reload]);

  return (
    <Box>
      <Paper
        elevation={3}
        sx={{ padding: 3, gap: 2, display: "flex", flexDirection: "column" }}
      >
        <Header categories={categories} refresh={refresh} />
        <Notes notes={notes} refresh={refresh} categories={categories} />
      </Paper>
    </Box>
  );
};

export default Home;
