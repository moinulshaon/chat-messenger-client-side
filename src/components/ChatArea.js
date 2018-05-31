import React from "react";
import { withStyles } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ChatAvatar from "./ChatAvatar";

function renderMessages(messages, classes) {
  return messages.map(message => {
    return (
        <ListItem>
            <div className={classes.drawerElement}>
                <ChatAvatar avatarName={message.senderId} subText={message}/>
            </div>
        </ListItem>
    );
  });
}

const chatArea = ({ classes, messages }) => {
  return <List>{renderMessages(messages, classes)}</List>;
};

const styles = {};

export default withStyles(styles)(chatArea);