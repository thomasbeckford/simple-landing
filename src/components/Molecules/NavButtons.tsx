import Button from "../Atoms/Button";

export default function NavButtons() {
  return (
    <div className="gap-2 hidden md:flex">
      <Button rounded>Join us</Button>
      <Button rounded>Get started!</Button>
    </div>
  );
}
