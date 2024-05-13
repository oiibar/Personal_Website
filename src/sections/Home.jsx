import pic from "../assests/pic.png";

function Home() {
  return (
    <main className="bg-slate-700">
      <div className="flex items-center justify-between px-20 py-40 pt-60 gap-20">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold">Hello, I'm Tolegenov Aibar</h1>
          <p className="text-xl">
            I'm a full stack web developer who is pationed to build modern &
            responsive web apps
          </p>
          <div>
            <button className="btn">Resume</button>
          </div>
        </div>

        <div>
          <img alt="me" src={pic} className="w-80" />
        </div>
      </div>
    </main>
  );
}

export default Home;
