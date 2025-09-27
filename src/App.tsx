import Box from './components/Box';
import './global_styles';

function App() {
  return (
    <div className="App">
      <h1>Hello Sir, Good morning</h1>

      <Box
        width="100%"
        maxWidth={1200}
        padding="1rem" // Use string or number only
        className="bg-surface-1 shadow-md"
        backgroundColor="green"
        color="red"
      >
        Fully responsive container
      </Box>

      <Box
        padding="clamp(1rem, 5vw, 2rem)" // Responsive padding with CSS
        margin="2rem auto"
        backgroundColor="red"
        color="green"
      >
        Responsive with CSS functions
      </Box>


    </div>
  );
}

export default App;
