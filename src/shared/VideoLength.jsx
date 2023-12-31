import React from "react";
import moment from "moment/moment";

const VideoLength = ({ time }) => {
  const vdoLngthInSec = moment().startOf("day").seconds(time).format("H:mm:ss");
  return (
    <div className="absolute bottom-1 right-2 bg-black py-1 px-2 text-white text-xs rounded-md">
      {vdoLngthInSec}
    </div>
  );
};

export default VideoLength;
