import HeroItem from "../Molecules/HeroItem";

export default function HeroItems() {
  const heroItems = [
    {
      title: "Paid Media",
      description:
        "Launch campaigns on new platforms, convert new users, and use data to decide how and where to scale.",
      href: "/",
      image: "https://winclap.com/wp-content/uploads/2022/12/Group.png",
    },
    {
      title: "Growth Strategy",
      description:
        "Map your user journey, establish a growth framework, and Execute it. (the capital E in execution is by design) ",
      href: "/",
      image: "https://winclap.com/wp-content/uploads/2022/12/Group-1.png",
    },
    {
      title: "Creator Based Ads",
      description: "Description 3",
      href: "/",
      image: "https://winclap.com/wp-content/uploads/2022/12/Group-2.png",
    },
    {
      title: "Impact Measurement",
      description:
        "Launch campaigns on new platforms, convert new users, and use data to decide how and where to scale.",
      href: "/",
      image: "https://winclap.com/wp-content/uploads/2022/12/S.png",
    },
    {
      title: "Owned Media",
      description: "Description 2",
      href: "/",
      image: "https://winclap.com/wp-content/uploads/2022/12/Frame-1.png",
    },
    {
      title: "App Store Optimization",
      description: "Description 3",
      href: "/",
      image: "https://winclap.com/wp-content/uploads/2022/12/Frame-3.png",
    },
  ];

  return (
    <div className="grid gap-4 grid-cols-1 justify-items-center md:grid-cols-3">
      {heroItems.map((item, index) => (
        <HeroItem key={index} item={item} />
      ))}
    </div>
  );
}
