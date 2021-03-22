import React from "react";

export default function Home() {
  return (
    <div
      className={"w-screen h-screen flex items-center justify-center flex-col"}
    >
      <h1 className={"text-6xl text-center mb-4"}>😎</h1>
      <div className={"font-bold text-4xl text-center px-32"}>
        This is a test to make sure the Vercel bot actually works (in Pull
        Requests)!
      </div>
    </div>
  );
}
