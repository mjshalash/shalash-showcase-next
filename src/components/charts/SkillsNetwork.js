import { ResponsiveNetwork } from "@nivo/network";

const data = {
  nodes: [
    {
      id: "0",
      radius: 8,
      depth: 1,
      color: "rgb(97, 205, 187)",
    },
    {
      id: "1",
      radius: 8,
      depth: 1,
      color: "rgb(97, 205, 187)",
    },
    {
      id: "2",
      radius: 8,
      depth: 1,
      color: "rgb(97, 205, 187)",
    },
  ],
  links: [
    {
      source: "0",
      target: "1",
      distance: 1,
    },
    {
      source: "1",
      target: "2",
      distance: 1,
    },
  ],
};

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const SkillsNetwork = () => (
  <div className="css-skills-network-container">
    <ResponsiveNetwork nodes={data.nodes} links={data.links} />
  </div>
);

export default SkillsNetwork;
