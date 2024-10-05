import Button from "../../components/Button";
import MePict from "../../assets/images/me-pict.png";
import Frame from "../../assets/images/frame.png";
import Smile from "../../assets/svg/smile.svg";
import Arrow from "../../assets/svg/arrow.svg";
import Asterisk from "../../assets/images/asterisk.png";
import Splash from "../../assets/svg/splash.svg";
import BgPattern from "../../assets/images/bg-pattern.png";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import StripsLable from "../../components/StripsLable";

const socialMedia = [
  { icon: <FaGithub size={20} />, url: "https://github.com/mackeyaddict" },
  {
    icon: <FaLinkedinIn size={20} />,
    url: "https://www.linkedin.com/in/naufal-yusuf-20n/",
  },
  {
    icon: <FaInstagram size={20} />,
    url: "https://www.instagram.com/nopalyusuff/",
  },
];

export default function Home() {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 -z-20"
        style={{ backgroundImage: `url(${BgPattern})` }}
      ></div>
      <div className="container mx-auto px-4 py-48">
        <div className="grid grid-rows-1 md:grid-cols-2 items-center relative">
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl font-bold leading-loose">
              I compose{" "}
              <span>
                <div className="shadow-neo-2 rounded-2xl inline-block -rotate-6">
                  <div className="bg-yellow-400 text-black p-2 text-center rounded-2xl relative z-10 font-bold">
                    <p className="p-2 text-xl xl:text-3xl border-2 border-black rounded-2xl">
                      visual
                    </p>
                  </div>
                </div>
              </span>{" "}
              symphonies across{" "}
              <span className="text-yellow-400">multiple media</span>
            </h1>
            <div className="flex gap-2 py-4">
              {socialMedia.map((media, index) => (
                <a
                  key={index}
                  href={media.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="secondary"
                    isRounded={true}
                    lable={media.icon}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Free place elements */}
          <div className="flex justify-center items-center">
            <img src={MePict} alt="MePict" className="w-[300px] xl:w-[600px]" />
          </div>
          <div className="absolute right-24 top-0 -z-10">
            <img src={Frame} alt="frame" className="w-[600px]" />
          </div>
          <div className="absolute right-[90px] top-2 -z-20 opacity-30">
            <img src={Frame} alt="frame" className="w-[600px]" />
          </div>
          <div className="absolute right-[675px] -top-[90px] -z-10">
            <img src={Smile} alt="smile" className="w-[35px]" />
          </div>
          <div className="absolute right-[570px] -top-28 -z-10">
            <p className="-rotate-12 text-3xl font-semibold">Naufal</p>
          </div>
          <div className="absolute right-[300px] -top-56 -z-10">
            <img src={Arrow} alt="Arrow" className="w-[300px]" />
          </div>
          <div className="absolute left-[20px] -top-2 -z-10">
            <img src={Asterisk} alt="Asterisk" className="w-[100px]" />
          </div>
        </div>
      </div>
      <StripsLable/>
    </section>
  );
}
