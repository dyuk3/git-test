import './App.css';
import qrcode from './qrcode.png';

function App() {
  return (
    <div className='App'>
      <div className='qrCard'>
        <div className='qr'>
          <img className='qrImg' src={qrcode} alt='' />
        </div>
        <div className='cardInfo'>
          <h2>Improve your front-end skills by building projects</h2>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
