import React from 'react';
import './App.css';


class App extends React.Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
      <div >
         <Notes/>
      </div>
      </header>
    </div>
  )
  }
}
class Notes extends React.Component{
  constructor(props){
    super(props);

    this.state={
      text: '', // Текст с input
      notes:[], // все данные с input
    };
  }

  HandlerText = (event) =>{ // событие, в котором считывается текст с поля input
    let text = event.target.value; // считывание текста с формы
    this.setState({text: text}); // изменение состояния поля text
  }
  HandlerButton = () =>{ // событие нажатия кнопки Добавить
    let notes = this.state.notes; // копирование данных из state в массив
    if(this.state.text !== ""){ // проверка на пустоту поля input
    notes.push(this.state.text); // добавления текста нового input в массив данных со всех input-ов
  }
    this.setState({text: ''}); // отчистка поля после события
    this.setState({notes: notes}); // изменение состояния поля notes
    //console.log(notes);
  }
  HandlerDeleteNotes = (index) =>{ //событие нажатия кнопки Удалить
   let notes= this.state.notes; // копирование данных из state в массив
   notes.splice(index,1); // удаления данных заметки из массива
   this.setState({notes:notes}) // изменение состояния поля notes
  }
  renderNotes = () =>{ // функция рендеринга всех заметок
    return this.state.notes.map((note,index) =>{
      return(
      <p key={note.toString() + Math.random(10).toString()}><input className="inputNotes" type="text" readOnly defaultValue={note}/><button onClick={this.HandlerDeleteNotes.bind(undefined, index)}>Удалить</button></p>
      )
    })
  }
  render(){
  return<div>
    <input placeholder="Данные заметки" value={this.state.text}onChange={this.HandlerText}/>
    <button onClick={this.HandlerButton}>Добавить</button>
    <div>
      {this.renderNotes()}
    </div>
  </div>
  }
}

export default App;
