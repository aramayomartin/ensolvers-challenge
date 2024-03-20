import { IconButton, Tooltip } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const AddButton = ({
  action,
  tooltip,
}: {
  action: () => void;
  tooltip: string;
}) => {
  return (
    <Tooltip title={tooltip} arrow placement="top">
      <IconButton onClick={action}>
        <AddCircleIcon />
      </IconButton>
    </Tooltip>
  );
};

export default AddButton;
