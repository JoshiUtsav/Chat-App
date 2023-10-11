import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import Chats from "./Chats";
import Conversation from "../../components/Conversation/Index";
import { useTheme } from "@mui/material/styles";
import Contact from "../../components/Contact";
import SharedMessage from "../../components/SharedMessage";
import StarredMessage from "../../components/StarredMessage";
import { useSelector } from "react-redux";

const GeneralApp = () => {
  const theme = useTheme();
  const { sidebar } = useSelector((store) => store.app);

  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      {/* Chats */}
      <Chats />
      <Box sx={{ height: "100%", width: sidebar.open ? "calc(100vw - 770px)" : "calc(100vw - 450px)", backgroundColor: theme.palette.mode === "light" ? "#F0F4FA" : theme.palette.background.paper }}>
        {/* Conversation */}
        <Conversation />
      </Box>
      {/* Contact */}
      {sidebar.open &&
        (function () {
          switch (sidebar.type) {
            case "CONTACT":
              return <Contact />;

            case "STAREED":
              return <StarredMessage />;

            case "SHARED":
              return <SharedMessage />;

            default:
              return (
                <Box>
                  <Typography variant="body2">
                    Unknown sidebar type: {sidebar.type}
                  </Typography>
                </Box>
              );
          }
        })()}

    </Stack>
  );
};

export default GeneralApp;
