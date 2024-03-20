import { Box, Typography } from "@mui/material";
import { Category, Note } from "../types/types";
import CardComponent from "./Card";

const NotesCards = ({
  notes,
  refresh,
  categories,
}: {
  notes: Note[];
  refresh: () => void;
  categories: Category[];
}) => {
  return (
    <Box
      sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}
      gap={3}
    >
      {notes.length === 0 ? (
        <Typography>There are not notes yet</Typography>
      ) : (
        notes.map((n) => (
          <CardComponent
            key={n.id}
            note={n}
            categories={categories}
            refresh={refresh}
          />
        ))
      )}
    </Box>
  );
};

export default NotesCards;
