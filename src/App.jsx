import Counter from "./Counter.jsx";

export default function App() {
  return (
    <>
      <Counter />
      <Counter initValue={100} step={10} />
      <Counter initValue={8} />
    </>
  );
}
