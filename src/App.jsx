import { useEffect, useState } from "react";
// import './titulo.module.css'


export default function App(){
  
  const [tarefas, setTarefas] = useState([])

  useEffect(() => {

    async function buscarDados() {
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(res => setTarefas(res))
    }

    buscarDados()
  }, [])

  return(
    <div>
      <h1>Deploy na vercel</h1>
      <div>
        {tarefas.map((tarefa) => {
          return(
            <div className="task-item" key={tarefa.id}>
              <p> {tarefa.id} - {tarefa.title} </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}