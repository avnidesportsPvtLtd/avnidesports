import { div } from "three/examples/jsm/nodes/Nodes.js";
import NewNav from "@/components/NewNav";
import Services from "@/components/Services";

function page() {
  return (
    <div className="bg-white text-black">
      <NewNav />
      <Services />
    </div>
  );
}

export default page;
