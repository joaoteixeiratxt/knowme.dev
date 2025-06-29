import { Container, PrimaryButton, SecondaryButton } from "../components";

export default function Home() {
  return (
    <Container width={"500px"} height={"500px"}>
      <h1>Hello World!</h1>
      <PrimaryButton text={"Click me!"} />
      <SecondaryButton text={"Click me 2!"} />
    </Container>
  );
}
