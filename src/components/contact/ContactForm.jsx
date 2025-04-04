export default function ContactForm() {
  return (
    <div className="flex justify-center mt-24">
      <div className="w-[22vw]">
        <h6 className="uppercase">Contact</h6>
        <h4 className="text-6xl capitalize">
          Let's <span className="text-purple-700">talk</span>
        </h4>
      </div>

      <div className="w-[56vw]">
        <form>
          <div className=" flex justify-between mb-8 w-[40vw] font-bold">
            <div>
              <h6 className="text-sm">Email:</h6>
              <p className="text-2xl">shinar930@gmail.com</p>
            </div>

            <div>
              <h6 className="text-sm">Call:</h6>
              <p className="text-2xl">+234 816 476 4571</p>
            </div>
          </div>

          <div>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="outline-none rounded-md w-[49%] h-[6vh] p-4 mr-2 bg-zinc-700"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
                className="outline-none rounded-md w-[49%] h-[6vh] p-4 ml-2 bg-zinc-700"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                className="outline-none rounded-md w-full h-[6vh] p-4 bg-zinc-700"
              />
            </div>

            <div className="mb-4">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                className="outline-none bg-zinc-700 resize-none rounded-md h-[20vh] w-full p-4"
              ></textarea>
            </div>

            <div className="text-right">
              <input
                type="submit"
                value="SEND MESSAGE &nbsp;&bull;&nbsp;"
                className=" bg-gray-500 px-6 py-3 rounded-3xl"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
