import './App.css';
import ContactMap from './components/ContactMap/ContactMap';
import ShopsList from './components/ShopsList/ShopsList';
import ShopsWrapperTitle from './components/ShopsWrapperTitle/ShopsWrapperTitle';


function App() {
  return (
    <div className="App">
      <section className='content-wrapper'>
        <div className='shops-wrapper'>
          <ShopsWrapperTitle title="Find us"></ShopsWrapperTitle>
          <ShopsList></ShopsList>
        </div>
        <ContactMap></ContactMap>
      </section>
    </div>
  );
}

export default App;
