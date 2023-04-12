import Text from "../Atoms/Text";
import HeroItems from "../Organisms/HeroItems";

export default function Solutions() {
  return (
    <div id="solutions" className="container mx-auto p-16 space-y-10">
      <Text className="text-center" size="title">
        Solutions that help you grow
      </Text>
      <HeroItems />
    </div>
  );
}
