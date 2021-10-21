/* >>> MODULO 4 - HOOK DE EFEITOS <<< */

import React, {useState, useEffect} from 'react';

export default function App(){ 
  const [nome,setNome] = useState (undefined);

  useEffect(
    ()=> {
      if(nome === undefined){
        setNome(sessionStorage.getItem('nome') || '');
      }

      else{
        sessionStorage.setItem('nome', nome);
      }
    }, [nome]
  );
  
  return (
    <>
      Nome: <input type="text" value={nome} onChange={(event)=>setNome(event.target.value)}></input>
      <br />
      Ola {nome}
    </>
  );
}



/* >>> MODULO 4 - HOOK DE ESTADO <<<

import React, {useState} from 'react';

export default function App(){
  const [nome, setNome] = useState ();
  
  return (
    <>
      Nome: <input type="text" value={nome} onChange={(event)=>setNome(event.target.value)}></input>
      <br />
      Ola {nome}
    </>
  );
}*/



/* >>> MODULO INICIAL <<<

class App extends React.Component{
  render() {
    return (
      <div>
        <p>
          MEU PRIMEIRO PARAGRAFO
        </p>
          <p>
            SEGUNDO PARAGRAFO
          </p>
            <p>
              {new Date().toLocaleDateString('pt-BR')}
            </p>
      </div>
    )
    }
}

export default App;*/
