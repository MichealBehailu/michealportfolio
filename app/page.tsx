"use client";
import NavBar from "./NavBar";

export default function Home() {
  const retroStyle = {
    backgroundImage:
      'url("https://unsplash.com/photos/mountain-covering-with-clouds-nN1HSDtKdlw")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    filter: "grayscale(100%)",
    color: "white",
  };
  return (
    <section
      className="flex justify-between flex-col p-10 m-5 w-[95%]"
      style={retroStyle}
    >
      <NavBar />
      <div className="flex flex-col text-center items-center justify-center h-[80vh] pt-50 pb-50">
        <h1 className="text-5xl ">Hi, I’m Micheal Behailu</h1>
        <h2 className="text-2xl text-[#00c4cc] w-[45%] pt-2">
          I am a senior software engineer student and I build responsive and
          user-friendly websites and desktop applications using modern tools and
          technologies.{" "}
        </h2>
      </div>
    </section>
  );
}
