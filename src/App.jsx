import { useState } from "react";
import ProductManager from "./ProductManager";

function App() {
  const [data, setData] = useState([]);
  return (
    <>
      <div>
        <ProductManager data={data} setData={setData} />
      </div>
    </>
  );
}

export default App;
