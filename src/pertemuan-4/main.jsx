import { createRoot } from "react-dom/client";
import './tailwind.css';
import FrameworkList from "./components/FrameworkList";
import ResponsiveText from "./ResponsiveDesign";
import FrameworkListSearchFilter from "./components/FrameworkListSearchFilter";


createRoot(document.getElementById("root"))
    .render(
        <div>
            <FrameworkListSearchFilter/>
            <ResponsiveText/>
        </div>
    )