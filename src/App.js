import './App.css';
import SimpleForm from './components/SimpleForm';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <div className='main-form'>
          <h1 style={{fontFamily:'verdana',color:'#CF8'}}>Form With Formik</h1>
          <SimpleForm/>
        </div>
      </div>
    </div>
  );
}

export default App;
