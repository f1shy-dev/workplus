import React from "react";

export default function Home() {
  return (
    <div
      className={"w-screen h-screen flex items-center justify-center flex-col"}
    >
      <img
        className={"mb-4 w-24"}
        src={
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/281/thinking-face_1f914.png"
        }
      ></img>
      <div className={"font-bold text-6xl text-center px-32 text-blue-600"}>
        Coming Soon!
      </div>
    </div>
  );
}
