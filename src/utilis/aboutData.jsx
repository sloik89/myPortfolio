import { DiCss3Full, DiHtml5, DiReact } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { RiJavascriptFill } from "react-icons/ri";
export const aboutData = [
  {
    id: 0,
    title: "Skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <DiCss3Full />,
          <DiHtml5 />,
          <RiJavascriptFill />,
          <DiReact />,
          <SiNextdotjs />,
        ],
      },
      {
        title: "UI/UX Designs",
        icons: [<FiFigma />],
      },
    ],
  },
  {
    id: 1,
    title: "Awards",
    info: [
      {
        title: "Webby Awards - Honoree",
      },
      {
        title: "Adobe Design Achievement Awards - finalist",
      },
    ],
  },
  {
    id: 2,
    title: "Experience",
    info: [
      {
        title: "Web Developer - ABC Agency",
      },
      {
        title: "Intern -DEF Corporation",
      },
      {
        title: "UX/UI Designer -XYX Company",
      },
    ],
  },
  {
    id: 3,
    title: "Credentials",
    info: [
      {
        title: "Web Development -University of Rzeszow, LA, CA",
      },
      {
        title: "Computer Science Diploma - AV Technical Insitute",
      },
      {
        title: "Cerfifited Grafhic Designer -ABC Institute, Los Angesles, CA",
      },
    ],
  },
];
