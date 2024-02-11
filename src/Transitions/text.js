import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Select the right match for you 💃for each and everyday!', 'Yay! Stay Tuned for more updates ', 'Styling you in the most dashing way possible', 'Endless fashion and trends only for YOU!'];

const Text = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1 style={{fontSize:"4rem", marginTop:"2px"}}>
      <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
    </h1>
  );
};

export default Text;