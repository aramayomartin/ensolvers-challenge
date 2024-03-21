import {
  Autocomplete,
  Box,
  Checkbox,
  TextField,
  Typography,
} from "@mui/material";
import { Category, Note, UserSession } from "../../../types/types";
import NotesCards from "../../../components/NotesCards";
import AddButton from "../../../components/AddButton";
import ModalComponent from "../../../components/Modal";
import { useState } from "react";
import { AddNoteForm } from "../forms/forms";

const Notes = ({
  notes,
  refresh,
  categories,
  userSession,
}: {
  notes: Note[];
  refresh: () => void;
  categories: Category[];
  userSession: UserSession | null;
}) => {
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const closeModal = () => setOpenAddModal(false);
  const openModal = () => setOpenAddModal(true);
  const closeAndRefresh = () => {
    closeModal();
    refresh();
  };
  const filteredNotes =
    selectedCategories.length === 0
      ? notes
      : notes.filter((n) =>
          n.categories.some((c) => selectedCategories.includes(c.id))
        );
  const unarchivedNotes = filteredNotes.filter((note) => !note.archived);
  const archivedNotes = filteredNotes.filter((note) => note.archived);
  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
          <AddButton action={openModal} tooltip="Add note" />
          <Typography>Notes:</Typography>
        </Box>
        <Autocomplete
          options={categories}
          sx={{ minWidth: "20%", width: "auto" }}
          multiple
          disableCloseOnSelect
          autoHighlight
          getOptionLabel={(option) => option.name}
          //@ts-ignore
          onChange={(event, selectedOptions) => {
            setSelectedCategories(selectedOptions.map((s) => s.id));
          }}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              <Checkbox checked={selectedCategories.includes(option.id)} />
              {option.name}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Filter by category"
              inputProps={{
                ...params.inputProps,
                autoComplete: "",
              }}
            />
          )}
        />
      </Box>
      <NotesCards
        notes={unarchivedNotes}
        refresh={refresh}
        categories={categories}
      />
      <Typography>Archived notes:</Typography>
      <NotesCards
        notes={archivedNotes}
        refresh={refresh}
        categories={categories}
      />
      {openAddModal && (
        <ModalComponent
          open={openAddModal}
          close={closeModal}
          children={
            <AddNoteForm
              categories={categories}
              close={closeAndRefresh}
              userId={
                userSession && userSession.user.id ? userSession.user.id : 0
              }
            />
          }
        />
      )}
    </>
  );
};
export default Notes;
