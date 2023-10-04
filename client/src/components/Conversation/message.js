import React from 'react'
import { Box, Stack } from '@mui/material'
import { Chat_History } from '../../data'
import { DocMessage, ImageType, LinkMessage, ReplyMessage, TextMessage, Timeline } from './MessageType'

const Message = () => {
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
                                    return <ImageType el={el} />
                                case "doc":
                                    // Document
                                    return <DocMessage el={el} />
                                case "link":
                                    // Link
                                    return <LinkMessage el={el} />
                                case "reply":
                                    // reply
                                    return <ReplyMessage el={el} />
                                default:
                                    // Text message
                                    return <TextMessage el={el} />;
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