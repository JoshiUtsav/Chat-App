import React from 'react'
import { Box, Stack } from '@mui/material';
import Header from './header';
import Footer from './Footer';
import Message from './message';


const Conversation = () => {
    return (
        <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
            {/* Chat Header  */}
            <Header />
            {/* Message */}
            <Box width={"100%"} sx={{ flexGrow: 1, height: "100%", overflowY: "scroll" }}>
                <Message menu={true} />
            </Box>
            {/* Footer */}
            <Footer />
        </Stack>
    )
}

export default Conversation;