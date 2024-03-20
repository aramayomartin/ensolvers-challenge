import { Chip, Typography } from "@mui/material";
import { Category } from "../types/types";

interface ChipProps {
  categories: Category[];
}

const Chips = ({ categories }: ChipProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        alignItems: "center",
      }}
    >
      {categories.length === 0 ? (
        <Typography>There are not categories yet</Typography>
      ) : (
        categories.map((c) => <Chip label={c.name} key={c.id}/>)
      )}
    </div>
  );
};

export default Chips;
