export default function Awards() {
  return (
    <div className="flex justify-center mt-24">
      <div className="flex justify-between">
        <div className="w-[20vw] mr-8">
          <h6 className="uppercase">Achievements</h6>

          <h4 className="text-6xl ">
            Awa<span className="text-purple-700">rds</span>
          </h4>
        </div>

        {/* <div className="flex justify-center"> */}
        <div className="w-[55vw] ml-8">
          <div className="grid grid-cols-2 gap-y-0 gap-x-6">
            <div className="mb-6 border rounded-xl bg-zinc-700 p-7 hover-opac">
              <div className="font-bold text-2xl">
                <h4>Certificate of Participation in PLP Hackathon</h4>
              </div>

              <div className="capitalize pb-4">
                <h6>2024</h6>
              </div>

              <div className="text-justify">
                <p>
                  Recognized for developing a dynamic, personal, portfolio
                  website.
                </p>
              </div>
            </div>

            <div className="mb-6 border rounded-xl bg-zinc-700 p-7 hover-opac">
              <div className="font-bold text-2xl">
                {/* <h4>HTA Outstanding Achievement Award</h4> */}
                <h4>Certificate of Software Career Building (Xaltius)</h4>
              </div>

              <div className="capitalize pb-4">
                <h6>2025</h6>
              </div>

              <div className="text-justify">
                <p>
                  Learn about building a successful career in software
                  development.
                </p>
                {/* <p>
                  Anticipated for consistent performance and excellence in
                  learning web development and software engineering concepts.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
