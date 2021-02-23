import { Card, CardContent, Typography } from '@material-ui/core';
import React, {forwardRef} from 'react';
import './Message.css';

const Message = forwardRef(({text,name,user}, ref) => {
    const isUser = user == name;
    return (
        <div ref={ref} className={isUser? "message" : "message__user"}>
            <Card className={isUser? "userCard" : "guestCard"}>
                <CardContent className="card__content">
                    <Typography
                        className="message__text"
                        color="white"
                        variant="h6"
                        component="h1"
                    >
                        <h2>{!isUser ? `${name} :` : ""} {text}</h2>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message;