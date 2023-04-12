import Text from "../Atoms/Text";

export default function Home() {
  return (
    <div className=" h-[40rem] mx-auto flex justify-center items-center border border-b-red-50 bg-indigo-400 ">
      <Text size="title" className="animate animate-bounce">
        TITLE
      </Text>
    </div>
  );
}
