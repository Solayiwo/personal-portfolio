// import "@fortawesome/fontawesome-free/css/all.min.css"; // Import FontAwesome CSS

export default function Services() {
  return (
    <div className="flex justify-center mt-24">
      <div className="flex justify-between">
        <div className="w-[20vw] mr-8">
          <h6 className="uppercase">Services</h6>

          <h4 className="text-6xl ">
            What I <span className="text-purple-700 capitalize">d</span>
            <span className="text-purple-700">o</span>
          </h4>
        </div>

        {/* <div className="flex justify-center"> */}
        <div className="w-[55vw] ml-8">
          <div className="flex justify-between items-center mb-6 border rounded-xl bg-zinc-700 p-7 hover-opac">
            <div className="w-[20vw] font-bold text-2xl">
              <h6>01/</h6>
            </div>

            <div className="w-[30vw] capitalize">
              <i className="fa-light fa-paintbrush"></i>
              <h4 className="font-bold text-2xl">Frontend</h4>
            </div>

            <i className="fa-light fa-paintbrush"></i>

            <div className="w-[50vw] text-justify">
              <p>
                Craft responsive, visually appealing web interfaces using HTML,
                CSS, Tailwind CSS, and JavaScript.
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center border mb-6  rounded-xl bg-zinc-700 p-7 hover-opac">
            <div className="w-[20vw] font-bold text-2xl">
              <h6>02/</h6>
            </div>
            <div className="w-[30vw] capitalize">
              <h4 className="font-bold text-2xl">React & Next.js</h4>
            </div>
            <div className="w-[50vw] text-justify">
              <p>Build dynamic, and interactive web applications.</p>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6 border rounded-xl bg-zinc-700 p-7 hover-opac">
            <div className="w-[20vw] font-bold text-2xl">
              <h6>03/</h6>
            </div>

            <div className="w-[30vw] capitalize font-bold text-2xl">
              <h4 className="font-bold text-2xl">Version Control</h4>
            </div>

            <div className="w-[50vw] text-justify">
              <p>
                Utilize Git and GitHub for code collaboration and version
                management.
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6 border rounded-xl bg-zinc-700 p-7 hover-opac">
            <div className="w-[20vw] font-bold text-2xl">
              <h6>04/</h6>
            </div>

            <div className="w-[30vw] capitalize font-bold text-2xl">
              <h4 className="font-bold text-2xl">Prompt Engineering</h4>
            </div>

            <div className="w-[50vw] text-justify">
              <p>
                Effectively interact with AI tools like ChatGPT to streamline
                workflows and solve technical challenges
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
