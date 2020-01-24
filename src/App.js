import React, {Component} from 'react';
import './App.css';
const NUM_BOXES = 32;

const Box = props => {
  const style = {width: '172px', height: '172px', backgroundColor: props.backgroundColor, border: 'solid black 1px'}
  return (
    <div style={style} />
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    const boxes = Array(NUM_BOXES).fill().map(this.getRandomColor, this);
    this.state = {boxes: boxes};

    setInterval(() => {
      const boxes = this.state.boxes.slice();
      const randIndex = Math.floor(Math.random() * NUM_BOXES);
      boxes[randIndex] = this.getRandomColor();
      this.setState({boxes});
    }, 300);
  }

  getRandomColor() {
    const randInd = Math.floor(Math.random() * this.props.allColors.length);
    return this.props.allColors[randInd];
  }

  static defaultProps = {
    allColors: ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
                "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
                "Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
                "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
                "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey",
                "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
                "FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod",
                "Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
                "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
                "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon",
                "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
                "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
                "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
                "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
                "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
                "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
                "Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
                "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
                "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
                "Yellow","YellowGreen"]
  }
  render() {
    const boxes = this.state.boxes.map((color, ind) => (
      <Box key={ind} backgroundColor={color}/>
    ))
    return (
      <div className="App">
        {boxes}
      </div>
    )
  }
}

export default App;
