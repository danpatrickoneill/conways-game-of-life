import React, { createRef } from 'react';

// The plan; use Cells made up of a single canvas element to respond to props being passed down from the grid;
class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (this.props.alive) {
      ctx.fillStyle = '#008000';
    } else {
      ctx.fillStyle = '#A9A9A9';
    }
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  componentDidUpdate(prevProps) {
    if (this.props.alive !== prevProps.alive) {
      const canvas = this.canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (this.props.alive) {
        ctx.fillStyle = '#008000';
      } else {
        ctx.fillStyle = '#A9A9A9';
      }
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  }

  toggleLife = (e) => {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  render() {
    return (
      <canvas
        ref={this.canvasRef}
        width='10'
        height='10'
        onClick={() => window.alert(this.props.alive)}
      ></canvas>
    );
  }
}

export default Cell;
