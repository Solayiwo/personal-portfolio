// import "@fortawesome/fontawesome-free/css/all.min.css"; // Import FontAwesome CSS

export default function Skills() {
  return (
    <div className="flex justify-center mt-24">
      <div className="flex justify-between">
        <div className="w-[20vw] mr-8">
          <h6 className="uppercase">Expertise</h6>

          <h4 className="text-6xl ">
            Ski
            <span className="text-purple-700">lls</span>
          </h4>
        </div>
        <div className="w-[55vw] ml-8">
          <div className="grid grid-cols-2 gap-y-0 gap-x-6 ">
            <div className="mb-6 border rounded-xl bg-zinc-700 p-7 hover-opac">
              <div className="font-bold text-2xl">
                <h4>Frontend Development</h4>
              </div>

              <div className="capitalize pb-4">
                <h6>intermediate</h6>
              </div>

              <div className="text-justify">
                <p>HTML, CSS, Tailwind CSS, JavaScript, React.js, Next.js</p>
              </div>
            </div>

            <div className="border mb-6  rounded-xl bg-zinc-700 p-7 hover-opac">
              <div className="font-bold text-2xl">
                <h4>Tools & Technologies</h4>
              </div>
              <div className="capitalize pb-4">
                <h6>intermediate</h6>
              </div>
              <div className="text-justify">
                <p>
                  VS Code, Git, GitHub, Discord, Slack, Trello, Linux Command
                </p>
              </div>
            </div>

            <div className="mb-6 border rounded-xl bg-zinc-700 p-7 hover-opac">
              <div className="font-bold text-2xl">
                <h4>Special Skills</h4>
              </div>

              <div className="capitalize pb-4">
                <h6>intermediate</h6>
              </div>

              <div className="text-justify">
                <p>Prompt Engineering using ChatGPT, Googling </p>
              </div>
            </div>

            <div className="mb-6 border rounded-xl bg-zinc-700 p-7 hover-opac">
              <div className="font-bold text-2xl">
                <h4>Backend Knowledge</h4>
              </div>

              <div className="capitalize pb-4">
                <h6>intermediate</h6>
              </div>

              <div className="text-justify">
                <p>SQL (MySQL), Nodejs, Python, Django, Postgres</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
