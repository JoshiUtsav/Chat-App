import React from 'react'
import { Box, Stack } from '@mui/material'
import { Chat_History } from '../../data'
import { DocMessage, ImageType, LinkMessage, ReplyMessage, TextMessage, Timeline } from './MessageType'

const Message = ({ menu }) => {
    return (
        <Box p={3}>
            <Stack spacing={3}>
                {Chat_History.map((el) => {
                    switch (el.type) {
                        case "divider":
                            // Timeline
                            return <Timeline el={el} />;
                        case "msg":
                            switch (el.subtype) {
                                case "img":
                                    // Image
                                    return <ImageType el={el} menu={menu} />
                                case "doc":
                                    // Document
                                    return <DocMessage el={el} menu={menu} />
                                case "link":
                                    // Link
                                    return <LinkMessage el={el} menu={menu} />
                                case "reply":
                                    // reply
                                    return <ReplyMessage el={el} menu={menu} />
                                default:
                                    // Text message
                                    return <TextMessage el={el} menu={menu} />;
                            }
                        default:
                            return <></>;
                    }
                })}
            </Stack>
        </Box>
    )
}

export default Message