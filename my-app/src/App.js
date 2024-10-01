import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Tytuł filmu</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Rodzaj</label><br></br>
          <select for="exampleSelect" className="form-control">
            <option value="0"></option>
            <option value="1">Komedia</option>
            <option value="2">Obyczajowy</option>
            <option value="3">Sensacyjny</option>
            <option value="4">Horror</option>
          </select>
        </div>
        
        <button type="submit" class="btn btn-primary">Dodaj</button>
      </form>
    </div>
  );
}

export default App;
