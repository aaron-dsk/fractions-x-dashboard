import { NavMenu } from "@/components/nav-menu";
import { Header } from "@/components/header";
import { Offerings } from "@/components/offerings";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      <NavMenu />
      <div className="flex flex-col flex-1 min-w-0">
        <Header className="bg-white" />
        <div className="flex-1 overflow-auto">
          <Offerings />
        </div>
      </div>
    </div>
  );
}
