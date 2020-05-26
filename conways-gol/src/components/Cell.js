import React, { createRef } from 'react';

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  toggleLife = (e) => {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    window.alert('Hey!');
  };

  render() {
    return (
      <canvas
        ref={this.canvasRef}
        width='200'
        height='200'
        onClick={this.toggleLife}
      ></canvas>
    );
  }
}

export default Cell;
