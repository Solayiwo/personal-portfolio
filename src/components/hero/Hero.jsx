import Biography from "./Biography";
import Clients from "./Clients";
import MyImage from "./MyImage";
import Name from "./Name";
import Project from "./Project";
import SocialConnect from "./SocialConnect";
import XperienceYears from "./XperienceYears";

export default function Hero() {
  return (
    <div className="h-[90vh]">
      <div className="mb-12">
        <Name />
      </div>

      <div className="flex justify-center pt-28">
        <div className="flex justify-between">
          <div className="w-[26vw]">
            <Biography />
            <SocialConnect />
          </div>

          <div className="w-[44vw]">
            <MyImage />
          </div>

          <div className="text-right">
            <Project />
            <XperienceYears />
            {/* <Clients /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
