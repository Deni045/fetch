import { useEffect, useState } from "react";
import './index.css';





function App() {

  const [data, setData] = useState ([])

  useEffect( () => {
    fetch ('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
     return response.json()
    })
    .then((json) => {
      setData(json)
    })

  }, [])

  return (
    <div>

      <div>
              Todos:
      </div>

      {data.map(item =>{
        return (

          <div className="todo">

            <div className="user">
            {item.userId}
            </div>

            <div className="id">
              {item.id}
            </div>

            <div className="title">
              {item.title}
            </div>

            <div className="comp">
              {item.completed}
            </div>

          </div>
        )
      })}
    </div>
  );
}

export default App;
