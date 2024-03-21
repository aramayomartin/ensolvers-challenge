import { useEffect, useState } from "react";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import Header from "./sections/Header";
import { Category, Note, UserSession } from "../../types/types";
import Notes from "./sections/Notes";
import { useNavigate } from "react-router-dom";
import { get } from "../../api";

const Home = ({
  userSession,
  setUserSession,
}: {
  userSession: UserSession | null;
  setUserSession: (userSession: UserSession | null) => void;
}) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [notes, setNotes] = useState<Note[]>([]);
  const [reload, setReload] = useState<boolean>(false);
  const navigate = useNavigate();

  const refresh = () => setReload((prev) => !prev);
  const getCategories = async () => {
    const { data } = await get("categories");
    data && setCategories(data);
  };

  const getNotes = async () => {
    if (userSession) {
      const { data } = await get(`notes/${userSession.user.id}`);
      data && setNotes(data);
    }
  };

  const logOut = () => {
    setUserSession(null);
    window.localStorage.removeItem("userSession");
    navigate("/");
  };

  useEffect(() => {
    getCategories();
    getNotes();
  }, [reload]);

  useEffect(() => {
    if (!userSession) {
      navigate("/login");
    }
  }, []);

  return (
    <Box>
      <Paper
        elevation={3}
        sx={{ padding: 3, gap: 2, display: "flex", flexDirection: "column" }}
      >
        <Header categories={categories} refresh={refresh} logout={logOut} />
        <Notes
          notes={notes}
          refresh={refresh}
          categories={categories}
          userSession={userSession}
        />
      </Paper>
    </Box>
  );
};

export default Home;
