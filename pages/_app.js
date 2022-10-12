import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { TemperatureUnitProvider } from '../context/TemperatureUnit';

function MyApp({ Component, pageProps }) {
  return (
    <TemperatureUnitProvider>
      <Component {...pageProps} />
    </TemperatureUnitProvider>
  );
}

export default MyApp;
