import React from 'react'
import { Box, Stack, Typography, IconButton, Grid } from '@mui/material';
import { useTheme } from "@mui/material/styles"
import { useDispatch } from 'react-redux';
import { updateSidebarType } from '../redux/slices/app';
import { ArrowLeft } from 'phosphor-react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { faker } from "@faker-js/faker"
import { SHARED_LINKS, SHARED_DOCS } from '../data';
import { DocMessage, LinkMessage } from './Conversation/MessageType';


const SharedMessage = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: 320, height: "100vh" }}>
            <Stack sx={{ height: "100%" }}>
                <Box sx={{
                    boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
                    width: "100%",
                    backgroundColor: theme.palette.mode === "light" ? "#f8FAff" : theme.palette.background
                }}>
                    <Stack sx={{ height: "100%", p: 2 }} direction={"row"} alignItems={"center"} spacing={2}>
                        <IconButton onClick={() => {
                            dispatch(updateSidebarType("CONTACT"))
                        }}>
                            <ArrowLeft />
                        </IconButton>
                        <Typography variant='subtitle2'>Shared Message</Typography>
                    </Stack>
                </Box>
                <Tabs sx={{ pt: 2, px: 2 }} value={value} onChange={handleChange} centered>
                    <Tab label="Media" />
                    <Tab label="Links" />
                    <Tab label="Docs" />
                </Tabs>
                <Stack sx={{ height: "100%", position: "relative", flexGrow: 1, overflowY: "scroll" }} p={value === 1 ? 0 : 3} spacing={value === 1 ? 0 : 2}>
                    {(() => {
                        switch (value) {
                            case 0:
                                // Image
                                return (
                                    <Grid container spacing={2}>
                                        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((el) => {
                                            return (
                                                <Grid item xs={4} key={el}>
                                                    <img src={faker.image.avatar()} alt={faker.name.fullName()} />
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                );

                            case 1:
                                // Links
                                return SHARED_LINKS.map((el) => <LinkMessage el={el} />);

                            case 2:
                                // Docs
                                return SHARED_DOCS.map((el) => <DocMessage el={el} />);

                            default:
                                return null;
                        }
                    })()}
                </Stack>

            </Stack>
        </Box>
    )
}

export default SharedMessage;