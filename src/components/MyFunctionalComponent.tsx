import { useState } from 'react'

interface MyFunctionalComponentProps {
  subTitle: string
  value: boolean
}

// come passo MyFunctionalComponentProps come interfaccia delle props a
// MyFunctionalComponent?

interface Pasta {
  name: string
  id: number
}

// ---------------------------
const oggetto = {
  ciro: 100,
}
console.log(oggetto.ciro)
// per accedere a ciro devo entrare dentro "oggetto"

const { ciro } = oggetto
console.log(ciro)
// per accedere a ciro posso semplicemente scrivere "ciro"
// ---------------------------

const MyFunctionalComponent = ({
  subTitle,
  value,
}: MyFunctionalComponentProps) => {
  const [name, setName] = useState('Flavio')
  // useState è abbastanza furbo da aver capito il tipo di name
  // l'ha capito dal valore iniziale 'Flavio', grazie alla
  // type inference!
  const [selectedPasta, setSelectedPasta] = useState<null | Pasta>(null)
  // useState accetta un type argument con <>, nel caso non volessimo che
  // il valore iniziale della variabile dichiari anche permanentemente
  // il suo tipo

  return (
    <div>
      <h1>Functional Component Test</h1>
      {value && <h3>{subTitle}</h3>}
      <p onClick={() => setName('Stefano')}>{name.toUpperCase()}</p>
      <button onClick={() => setSelectedPasta({ name: 'Amatriciana', id: 1 })}>
        CLICCAMI
      </button>
      {selectedPasta && <div>{selectedPasta.name}</div>}
    </div>
  )
}

export default MyFunctionalComponent
