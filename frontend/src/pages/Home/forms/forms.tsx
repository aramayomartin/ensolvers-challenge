//@ts-ignore
import * as Yup from "yup";
//@ts-ignore
import { useFormik } from "formik";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  TextField,
  Typography,
} from "@mui/material";
import { Category, Note } from "../../../types/types";
import axios from "axios";
import { useEffect } from "react";

export const AddCategoryForm = ({ close }: { close: () => void }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Service name required"),
  });
  const initialValues: { name: string } = {
    name: "",
  };
  const formik = useFormik({
    initialErrors: {
      name: "Required",
    },
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      await axios.post("http://localhost:3000/categories", values);
      close();
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <Typography fontSize="0.875rem" fontWeight="600">
        Category name
      </Typography>
      <TextField
        placeholder="Category name"
        name="name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        variant="outlined"
      />
      <Typography color="red" fontSize="12px">
        {formik.errors.name && formik.touched.name && formik.errors.name}
      </Typography>
      <Button type="submit" disabled={!formik.isValid} variant="contained">
        Create
      </Button>
    </form>
  );
};

export const AddNoteForm = ({
  close,
  categories,
}: {
  close: () => void;
  categories: Category[];
}) => {
  const validationSchema = Yup.object({
    title: Yup.string().required("Title required"),
    content: Yup.string().required("Content required"),
  });
  const initialValues: {
    title: string;
    content: string;
    categoriesIds: number[];
  } = {
    title: "",
    content: "",
    categoriesIds: [],
  };
  const formik = useFormik({
    initialErrors: {
      title: "Required",
    },
    initialValues,
    validationSchema,
    onSubmit: async (values: {
      title: string;
      content: string;
      categoriesIds: number[];
    }) => {
      await axios.post("http://localhost:3000/notes", values);
      close();
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "20px", width:"500px" }}
    >
      <Typography fontSize="0.875rem" fontWeight="600">
        Title
      </Typography>
      <TextField
        placeholder="Title"
        name="title"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
        variant="outlined"
      />
      <Typography color="red" fontSize="12px">
        {formik.errors.title && formik.touched.title && formik.errors.title}
      </Typography>
      <Typography fontSize="0.875rem" fontWeight="600">
        Content
      </Typography>
      <TextField
        placeholder="Content"
        name="content"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.content}
        variant="outlined"
      />
      <Typography color="red" fontSize="12px">
        {formik.errors.content &&
          formik.touched.content &&
          formik.errors.content}
      </Typography>

      <Autocomplete
        fullWidth
        id="categoriesIds"
        options={categories}
        multiple
        disableCloseOnSelect
        autoHighlight
        getOptionLabel={(option) => option.name}
        //@ts-ignore
        onChange={(event, selectedOptions) => {
          formik.setFieldValue(
            "categoriesIds",
            selectedOptions.map((s) => s.id)
          );
        }}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <Checkbox
              checked={(formik.values.categoriesIds as number[]).includes(
                option.id
              )}
            />
            {option.name}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Category"
            inputProps={{
              ...params.inputProps,
              autoComplete: "",
            }}
          />
        )}
      />

      <Button type="submit" disabled={!formik.isValid} variant="contained">
        Create
      </Button>
    </form>
  );
};

export const EditNoteForm = ({
  close,
  categories,
  note,
}: {
  close: () => void;
  categories: Category[];
  note: Note;
}) => {
  const validationSchema = Yup.object({
    title: Yup.string().required("Title required"),
    content: Yup.string().required("Content required"),
  });
  const initialValues: {
    title: string;
    content: string;
    categoriesIds: number[];
  } = {
    title: note.title,
    content: note.content,
    categoriesIds: note.categories.map((c) => c.id),
  };
  const formik = useFormik({
    initialErrors: {
      title: "Required",
    },
    initialValues,
    validationSchema,
    onSubmit: async (values: {
      title: string;
      content: string;
      categoriesIds: number[];
    }) => {
      await axios.patch(`http://localhost:3000/notes/${note.id}`, values);
      close();
    },
  });

  useEffect(() => {
    console.log(note.categories.map((c) => c.id));
    formik.setFieldValue(
      "categoriesIds",
      note.categories.map((c) => c.id)
    );
  }, []);

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "500px",
      }}
    >
      <Typography fontSize="0.875rem" fontWeight="600">
        Title
      </Typography>
      <TextField
        placeholder="Title"
        name="title"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
        variant="outlined"
      />
      <Typography color="red" fontSize="12px">
        {formik.errors.title && formik.touched.title && formik.errors.title}
      </Typography>
      <Typography fontSize="0.875rem" fontWeight="600">
        Content
      </Typography>
      <TextField
        placeholder="Content"
        name="content"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.content}
        variant="outlined"
      />
      <Typography color="red" fontSize="12px">
        {formik.errors.content &&
          formik.touched.content &&
          formik.errors.content}
      </Typography>

      <Autocomplete
        fullWidth
        id="categoriesIds"
        options={categories}
        multiple
        disableCloseOnSelect
        autoHighlight
        getOptionLabel={(option) => option.name}
        value={categories.filter((category) =>
          formik.values.categoriesIds.includes(category.id)
        )}
        //@ts-ignore
        onChange={(event, selectedOptions) => {
          formik.setFieldValue(
            "categoriesIds",
            selectedOptions.map((s) => s.id)
          );
        }}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <Checkbox
              checked={(formik.values.categoriesIds as number[]).includes(
                option.id
              )}
            />
            {option.name}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Category"
            inputProps={{
              ...params.inputProps,
              autoComplete: "",
            }}
          />
        )}
      />

      <Button type="submit" disabled={!formik.isValid} variant="contained">
        Save
      </Button>
    </form>
  );
};
