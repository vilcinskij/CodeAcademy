import './App.css';
import CustomButton from './components/CustomButton/CustomButton';
import SectionHeader from './components/SectionHeader/SectionHeader';



function App() {
  const personName = 'Johnn'

  return (


    <div className='Container'>
      <SectionHeader personName ='Johnn'></SectionHeader>
      <CustomButton text='mano textas'></CustomButton>
      <CustomButton text='mano Labas'></CustomButton>
      <CustomButton text='mano Ne labas'></CustomButton>
    </div>
  );
}

export default App;
