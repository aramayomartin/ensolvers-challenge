import { Box, Button, Typography } from "@mui/material";
import Chips from "../../../components/Chips";
import { Category } from "../../../types/types";
import { useState } from "react";
import AddButton from "../../../components/AddButton";
import ModalComponent from "../../../components/Modal";
import { AddCategoryForm } from "../forms/forms";

const Header = ({
  categories,
  refresh,
  logout,
}: {
  categories: Category[];
  refresh: () => void;
  logout: () => void;
}) => {
  const [addCategoryModal, setAddCategoryModal] = useState<boolean>(false);
  const openModal = () => setAddCategoryModal(true);
  const closeModal = () => setAddCategoryModal(false);
  const closeAndRefresh = () => {
    closeModal();
    refresh();
  };
  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        gap={2}
        justifyContent="space-between"
      >
        <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
          {<AddButton action={openModal} tooltip="Add category" />}
          <Typography>Categories availables:</Typography>
        </Box>
        <Button onClick={logout} variant="outlined">
          Log out
        </Button>
      </Box>
      <Chips categories={categories} />
      {addCategoryModal && (
        <ModalComponent
          open={addCategoryModal}
          close={closeModal}
          children={<AddCategoryForm close={closeAndRefresh} />}
        />
      )}
    </>
  );
};
export default Header;
