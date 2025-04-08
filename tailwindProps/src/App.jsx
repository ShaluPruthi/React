import Card from "../components/Card";

function App() {
  let myObj={
    username:"chai",
    age: 22,
  }

  let myArr = [1,2,3,4,5,6,7,8,9,10]
  return (
    <>
    <div className="bg-blue-500 text-white p-4 mb-4">
      Tailwind is Working 🎉
    </div>
    <Card username="shal" btnText="visit me" someObj= {myObj}/>
    <Card username="chai aur code" someObj= {myArr}/>
  </>
  );
}

export default App;
