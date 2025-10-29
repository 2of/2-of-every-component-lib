import { ComponentWikiRenderer } from "./WikiPage";
import { SamplePage } from "./SamplePage";
import usage from "./usage.json";

const routes = [
  {
    path: "/",
    label: "home",
    icon: "home",
    hideDesktop: true,
    bg: "shapes",
    element: <ComponentWikiRenderer componentDocs={usage} />,
    fullscreenDesktop: true,
    fullscreenMobile: true,
  },
  {
    path: "/sample",
    label: "sample",
    icon: "home",
    hideDesktop: true,
    bg: "shapes",
    element: <SamplePage />,
    fullscreenDesktop: true,
    fullscreenMobile: true,
  },
];

export default routes;
