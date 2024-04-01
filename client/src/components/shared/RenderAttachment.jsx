import React from "react";
import { transformImage } from "../../lib/features";
import { FileOpen as FileOpenIcon } from "@mui/icons-material";

const RenderAttachment = (file, url) => {
  switch (file) {
    case "video":
      return (
        <video
          src={transformImage(url, 200)}
          preload="none"
          width={"20px"}
          controls
        />
      );
    //   break;
    case "image":
      return (
        <img
          src={url}
          alt="Attachment"
          width={"200px"}
          height={"150px"}
          style={{
            objectFit: "contain",
          }}
        />
      );
    //   break;
    case "audio":
      return <audio src={transformImage(url, 200)} preload="none" controls />;
    //   break;
    default:
      return <FileOpenIcon />;
    //   break;
  }
  //   return <div>RenderAttachment</div>;
};

export default RenderAttachment;
