import Text from "../Atoms/Text";
import Image from "next/image";

const partnerItems = [
  {
    title: "Partner 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum, nisl ut aliquam aliquam, nisl nisl aliquet nisl, eget aliquet nisl nisl sit amet lorem.",
    href: "/",
    image: "https://winclap.com/wp-content/uploads/2023/02/Partner_GOOGLE_premiere2023.png",
  },
  {
    title: "Partner 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum, nisl ut aliquam aliquam, nisl nisl aliquet nisl, eget aliquet nisl nisl sit amet lorem.",
    href: "/",
    image: "https://winclap.com/wp-content/uploads/2023/01/logo-01.svg",
  },
  {
    title: "Partner 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum, nisl ut aliquam aliquam, nisl nisl aliquet nisl, eget aliquet nisl nisl sit amet lorem.",
    href: "/",
    image: "https://winclap.com/wp-content/uploads/2023/01/logo-05.svg",
  },
];

export default function Partners() {
  return (
    <div id="partners" className="container mx-auto p-16 space-y-10">
      <Text className="text-center" size="title">
        Partners
      </Text>

      <div className="grid gap-4 grid-cols-1  justify-items-center md:grid-cols-3">
        {partnerItems.map((item) => (
          <div key={item.title} className="w-full text-center space-y-5 md:w-3/5">
            <div className="w-40 h-40 bg-gray-200 rounded-full relative mx-auto ">
              <Image src={item.image} alt="Partner 1" fill unoptimized className="object-contain" />
            </div>

            <Text size="xl">{item.title}</Text>

            <Text size="md">{item.description}</Text>
          </div>
        ))}
      </div>
    </div>
  );
}
