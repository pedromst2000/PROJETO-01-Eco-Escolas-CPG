const values = {
  battery: {
    image: [
      "../../../assets/lixos/PilhaoBateria.png",
      "../../../assets/lixos/PilhaoPilha.png",
      "../../../assets/lixos/PilhaoPilhaQ.png",
    ],
    color: "red",
  },
  paper: {
    image: [
      "../../../assets/lixos/PapelCaixa.png",
      "../../../assets/lixos/PapelJornal.png",
      "../../../assets/lixos/PapelSaco.png",
    ],
    color: "blue",
  },
  glass: {
    image: [
      "../../../assets/lixos/VidroGarrafa.png",
      "../../../assets/lixos/VidroJarro.png",
      "../../../assets/lixos/VidroSumo.png",
    ],
    color: "green",
  },
  plastic: {
    image: [
      "../../../assets/lixos/PlasticoDetergente.png",
      "../../../assets/lixos/PlasticoGarrafa.png",
      "../../../assets/lixos/PlasticoGarrafao.png",
    ],
    color: "yellow",
  },
};

function loadImage(source) {
  const image = new Image();
  image.src = source;
  return image;
}

export class Junk {
  constructor(color, type, xPosition, yPosition, speed) {
    this.color = color;
    this.type = type;
    this.position = { x: xPosition, y: yPosition };
    this.speed = speed;
    this.image = loadImage(
      values[type].image[Math.floor(Math.random() * 3)]
    );
  }

  moveY() {
    this.position.y += this.speed;
  }

  moveX(newXPosition) {
    this.position.x = newXPosition;
  }
}
