import { Button } from "@client/components";
import { User } from "@library/types";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState<User>();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api");
      const data = await response.json();
      console.log(data);
      setData(data);
    }
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Button />
      <p>Id: {data.id}</p>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
    </>
  );
}

export default App;
