import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <form>
        <div class="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Tytuł filmu</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" className="form-label">Rodzaj</label><br></br>
          <select for="exampleSelect" className="form-control">
            <option value="0"></option>
            <option value="1">Komedia</option>
            <option value="2">Obyczajowy</option>
            <option value="3">Sensacyjny</option>
            <option value="4">Horror</option>
          </select>
        </div>
        
        <button type="submit" className="btn btn-primary">Dodaj</button>
      </form>
    </div>
  );
}

export default App;
