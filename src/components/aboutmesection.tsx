import meimg from "../../public/me2.png";
import imagelinkedin from "../../public/linkedin-original.svg";
import discord from "../../public/discord-alt.svg";
import github from "../../public/github.svg";
import whatsapp from "../../public/whatsapp.svg";

function AboutMe() {
  return (
    <div className="h-screen flex flex-col lg:grid lg:grid-cols-2">
      {/* Left Section */}
      <div className="bg-gradient-to-r from-blue-400 to-purple-700 flex flex-col items-center justify-center text-white">
        <div className="bg-gray-900 p-10 rounded-t-lg text-center shadow-lg w-4/5">
          <div className="mx-auto rounded-full overflow-hidden w-52 h-50 mb-6">
            <img
              src={meimg}
              alt="about image"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold mb-2">
            Samukelo Worthwhile Makofane
          </h2>
          <h3 className="uppercase text-sm tracking-wider">
            FullStack Developer
          </h3>
        </div>
        <ul className="bg-gray-900 flex justify-center py-3 rounded-b-lg w-4/5 mt-[-1rem]">
          <li className="mx-2">
            <a
              href="https://www.linkedin.com/in/samukelo-makofane-35a157a6/"
              target="_blank">
              <img src={imagelinkedin} alt="LinkedIn" className="w-10 h-10" />
            </a>
          </li>
          <li className="mx-2">
            <a
              href="https://discord.com/user/635763521782546453"
              target="_blank">
              <img src={discord} alt="Discord" className="w-10 h-10" />
            </a>
          </li>
          <li className="mx-2">
            <a href="https://github.com/samukelo" target="_blank">
              <img src={github} alt="GitHub" className="w-10 h-10" />
            </a>
          </li>
          <li className="mx-2">
            <a href="https://wa.me/qr/R6TJA7ZIUEPHJ1" target="_blank">
              <img src={whatsapp} alt="WhatsApp" className="w-10 h-10" />
            </a>
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="bg-gray-900 text-white flex flex-col justify-center items-center p-10 text-center">
        <h1 className="text-5xl font-bold uppercase">
          Hello<span className="text-purple-500">!</span>
        </h1>
        <h2 className="font-semibold mt-4">Here's who I am & what I do</h2>
        <div className="flex space-x-4 mt-6">
          <button className="px-5 py-2 border-2 border-white rounded-full hover:bg-purple-500 hover:border-purple-500 transition">
            Resume / CV
          </button>
          <button className="px-5 py-2 border-2 border-white rounded-full bg-purple-500 hover:bg-transparent hover:border-white transition">
            GitHub
          </button>
        </div>
        <p className="mt-6 opacity-80">
          I am a skilled IT technician and software developer with a passion for
          solving complex technical challenges...
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
