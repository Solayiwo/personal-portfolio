import Logo from "./Logo";
import CallToAction from "./CallToAction";
import Menu from "./Menu";

export default function Header() {
  return (
    <div className="flex justify-between items-center mx-8 h-[9vh] sticky top-0 left-0 right-0 z-10">
      <Logo />
      <div className="flex justify-between">
        <CallToAction />
        <Menu />
      </div>
    </div>
  );
}
