import React from 'react';

class App5 extends React.Component{
  constructor(props){
    super(props);
    this.state = { nome: undefined, txtNome: ''};
  }
  changetxtNome = (evt) => {
    this.setState({ txtNome : evt.target.value});
  }

  componentDidMount = () => {
    const nome = sessionStorage.getItem('nome');
    if (nome) this.setState({nome});
  }

  persistName = ()=>{
    this.setState({nome: this.state.txtNome});
    sessionStorage.setItem('nome', this.state.txtNome);
  }

  render(){

    const renderForm = ()=>{
      return (
        <>
        Nome: <input type='text' onChange={this.changetxtNome}/>
        <button onClick={this.persistName}> Salvar </button>
        </>
      );
    } 

    const renderTxt = () =>{
      return(
        <>
          <p> Olá {this.state.nome} </p>
        </>
      );
    } 

    return !this.state.nome ? renderForm() : renderTxt();

  }
}

export default App5;