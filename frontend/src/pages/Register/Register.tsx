import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { UserSession } from "../../types/types";
import { useEffect } from "react";

const Register = ({ userSession }: { userSession: UserSession | null }) => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required("Email required"),
    email: Yup.string().email().required("Email required"),
    password: Yup.string().min(4).max(10).required("Password required"),
  });
  const initialValues: { email: string; password: string; name: string } = {
    name: "",
    email: "",
    password: "",
  };
  const formik = useFormik({
    initialErrors: {
      name: "Required",
    },
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const { data } = await axios.post("http://localhost:3000/auth/register", {
        ...values,
        email: values.email.toLowerCase(),
      });
      if (data) {
        navigate("/login");
      }
    },
  });

  useEffect(() => {
    if (userSession) {
      navigate("/home");
    }
  }, [userSession]);

  return (
    <Box
      sx={{
        marginX: "auto",
        marginY: "auto",
        width: "40%",
        minHeight: "95vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "100%",
        }}
      >
        <Typography fontSize="0.875rem" fontWeight="600">
          Name
        </Typography>
        <TextField
          placeholder="Name"
          name="name"
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          variant="outlined"
        />
        <Typography color="red" fontSize="12px">
          {formik.errors.name && formik.touched.name && formik.errors.name}
        </Typography>
        <Typography fontSize="0.875rem" fontWeight="600">
          Email
        </Typography>
        <TextField
          placeholder="Email"
          name="email"
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          variant="outlined"
        />
        <Typography color="red" fontSize="12px">
          {formik.errors.email && formik.touched.email && formik.errors.email}
        </Typography>
        <Typography fontSize="0.875rem" fontWeight="600">
          Password
        </Typography>
        <TextField
          placeholder="Password"
          name="password"
          type="password"
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          variant="outlined"
        />
        <Typography color="red" fontSize="12px">
          {formik.errors.password &&
            formik.touched.password &&
            formik.errors.password}
        </Typography>
        <Button type="submit" disabled={!formik.isValid} variant="contained">
          Register
        </Button>
        <Button variant="contained" onClick={() => navigate("/login")}>
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Register;
