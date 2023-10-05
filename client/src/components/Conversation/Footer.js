import React, { useState } from 'react';
import { styled, useTheme } from "@mui/material/styles";
import { Box, Fab, IconButton, InputAdornment, Stack, TextField, Tooltip } from '@mui/material';
import { Camera, File, Image, LinkSimple, PaperPlaneTilt, Smiley, User } from 'phosphor-react';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react';

const StyledInput = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-input": {
        paddingTop: "12px",
        paddingBottom: "12px",
    },
}));


const actions = [
    {
        color: "#4da5fe",
        icon: <Image size={24} />,
        y: 100,
        title: "Photo/Video",
    },
    {
        color: "#0172e4",
        icon: <Camera size={24} />,
        y: 170,
        title: "Image",
    },
    {
        color: "#0159b2",
        icon: <File size={24} />,
        y: 240,
        title: "Document",
    },
    {
        color: "#013f7f",
        icon: <User size={24} />,
        y: 310,
        title: "Contact",
    },
];

const ChatInput = ({ setOpenPicker }) => {
    const [openAction, setOpenAction] = useState(false);
    return (
        <StyledInput fullWidth placeholder='Write a message...' variant='filled' InputProps={{
            disableUnderline: true,
            startAdornment: (<Stack sx={{ width: "max-content" }}>
                <Stack sx={{ position: 'relative', display: openAction ? "inline-block" : "none"}}>
                    {actions.map((el) => (
                        <Tooltip title={el.title} placement='right'>
                            <Fab sx={{ position: "absolute", top: -el.y, backgroundColor: el.color }}>
                                {el.icon}
                            </Fab>
                        </Tooltip>
                    ))}
                </Stack>
                <InputAdornment>
                    <IconButton>
                        <LinkSimple onClick={() => {
                            setOpenAction((prev) => !prev)
                        }}/>
                    </IconButton>
                </InputAdornment>
            </Stack>),
            endAdornment: (<InputAdornment>
                <IconButton >
                    <Smiley onClick={() => {
                        setOpenPicker((prev) => !prev);
                    }} />
                </IconButton>
            </InputAdornment>),
        }} />
    )
}

const Footer = () => {
    const theme = useTheme();
    const [openPicker, setOpenPicker] = useState(false);

    return (
        <>
            {/* Chat Footer */}
            <Box p={2} sx={{ width: "100%", backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.default, boxShadow: "0px 0px 3px rgba(0,0,0, 0.25)" }}>
                <Stack direction={"row"} alignItems={"center"} spacing={3}>
                    <Stack sx={{ width: "100%" }}>
                        {/* Chat Input */}
                        <Box sx={{ display: openPicker ? "inline" : "none", zIndex: 10, position: 'fixed', bottom: 81, right: 100 }}>
                            <Picker theme={theme.palette.mode} data={data} onEmojiSeclect={console.log} />
                        </Box>
                        <ChatInput setOpenPicker={setOpenPicker} />
                    </Stack>
                    <Box sx={{ height: 50, width: 50, backgroundColor: theme.palette.primary.main, borderRadius: 50 }}>
                        <Stack sx={{ height: "100%", width: "100%" }} alignItems={"center"} justifyContent={"center"}>
                            <IconButton>
                                <PaperPlaneTilt color='#fff' />
                            </IconButton>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </>
    )
}

export default Footer