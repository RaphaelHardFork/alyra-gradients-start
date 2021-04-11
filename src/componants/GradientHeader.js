import React from 'react'
import Icon from './Icon'
import gradients from '../gradients'
import "bootstrap/dist/css/bootstrap.css"

const GradientsHeader = (props) => {
  const { children } = props;

  const [gradientIndex, setGradientIndex] = React.useState(
    Math.floor(Math.random() * gradients.length)
  );

  const handleReloadClick = () => {
    setGradientIndex(Math.floor(Math.random() * gradients.length));
  };

  const backgroundImage = `linear-gradient(to right, ${gradients[gradientIndex].start}, ${gradients[gradientIndex].end} )`;
  const style = {
    backgroundImage
  };
  return (
    <header className="text-center bg-dark text-white py-5 mb-5" style={style}>
      {children}
      <button
        type="button"
        className="btn btn-outline-light"
        aria-label="Changer le fond"
        onClick={handleReloadClick}
      >
        <Icon />
      </button>
    </header>
  )
}

export default GradientsHeader