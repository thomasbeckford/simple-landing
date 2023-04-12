import Image from "next/image";
import Link from "next/link";
import Text from "../Atoms/Text";

type HeroItemProps = {
  item: {
    title: string;
    description: string;
    href: string;
    image: string;
  };
};

export default function HeroItem(props: HeroItemProps) {
  const { item } = props;

  return (
    <div className="w-full text-center space-y-5 md:w-3/5">
      <div className="w-50 h-56 relative">
        <Image src={item.image} alt={item.title} className="object-contain" fill unoptimized />
      </div>

      <Text size="xl" className="text-gray-800">
        {item.title}
      </Text>

      <Text size="lg" className="text-gray-500">
        {item.description}
      </Text>
      <div className="">
        <Link href={item.href} className="text-indigo-600 hover:text-indigo-900">
          Read more
        </Link>
      </div>
    </div>
  );
}
