import './App.css';
import NavBar from './components/Navbar';
import Divider from './components/Divider';
import Footer from './components/Footer';
import Eboard from './components/Eboard';

function App() {
    return (
        <div>
            <NavBar />
            <Divider />

            <div style={{ height: '30px' }}></div>

            <div style={{ height: '75px' }}></div>

            <Eboard />
            <div style={{ height: '75px' }}></div>


            <Footer />
        </div>
    );
}

export default App;