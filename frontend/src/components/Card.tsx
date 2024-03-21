import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Category, Note } from "../types/types";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import ModalComponent from "./Modal";
import { EditNoteForm } from "../pages/Home/forms/forms";
import { remove, patch } from "../api";

interface CardComponentInterface {
  note: Note;
  categories: Category[];
  refresh: () => void;
}

const CardComponent = ({
  note,
  categories,
  refresh,
}: CardComponentInterface) => {
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const openModal = () => setOpenEditModal(true);
  const closeModal = () => setOpenEditModal(false);
  const closeAndReload = () => {
    closeModal();
    refresh();
  };

  const deleteNote = async () => {
    const { data } = await remove(`notes/${note.id}`);
    data && refresh();
  };

  const updateState = async () => {
    const { data } = await patch(`notes/${note.id}`, {
      ...note,
      archived: !note.archived,
      categoriesIds: note.categories.map((c) => c.id),
    });
    data && refresh();
  };

  const getStyle = (archive: boolean) => {
    return archive
      ? { color: "green", borderColor: "green" }
      : { color: "#ffbe0b", borderColor: "#ffbe0b" };
  };

  return (
    <Box sx={{ minHeight: "150px" }}>
      <Card variant="outlined" sx={{ borderWidth: "2px", height: "100%" }}>
        <CardContent>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Tooltip title={note.title} arrow placement="top">
              <Typography
                variant="h6"
                component="div"
                style={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                {note.title}
              </Typography>
            </Tooltip>
            <Tooltip title="Edit" arrow placement="top">
              <IconButton onClick={openModal}>
                <EditIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Typography
            variant="caption"
            component="div"
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {note.content}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <Tooltip title="Delete" arrow placement="top">
            <Button
              onClick={deleteNote}
              startIcon={<DeleteIcon />}
              style={{ color: "red", borderColor: "red" }}
              variant="outlined"
            >
              Delete
            </Button>
          </Tooltip>
          <Button
            variant="outlined"
            style={{ ...getStyle(note.archived) }}
            onClick={updateState}
          >
            {note.archived ? "Unarchive" : "Archive"}
          </Button>
        </CardActions>
      </Card>
      {openEditModal && (
        <ModalComponent
          open={openEditModal}
          close={closeModal}
          children={
            <EditNoteForm
              close={closeAndReload}
              categories={categories}
              note={note}
            />
          }
        />
      )}
    </Box>
  );
};

export default CardComponent;
