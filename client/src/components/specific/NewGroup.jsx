import { Dialog, Stack } from "@mui/material";
import React from "react";

const NewGroup = () => {
  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
        <DialogTitle>Notifications</DialogTitle>
        {sampleNotifications.length > 0 ? (
          sampleNotifications.map(({ sender, _id }) => (
            <NotificationItem
              sender={sender}
              _id={_id}
              handler={friendRequestHandler}
              key={_id}
            />
          ))
        ) : (
          <Typography>No Notifications</Typography>
        )}
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
