import MercurioImg from '../images/Mercurio.png';
import VenusImg from '../images/Venus.png';
import TerraImg from '../images/Terra.png';
import MarteImg from '../images/Marte.png';
import JupiterImg from '../images/Jupiter.png';
import SaturnoImg from '../images/Saturno.png';
import Uranoimg from '../images/Urano.png';
import Netunoimg from '../images/Netuno.png';

const Planets = [
  {
    name: 'Mercúrio',
    image: MercurioImg,
    description: 'O menor planeta do Sistema Solar',
    details: 'Temperatura: 167°C (máx) | Distância: 57,9 M km | Gravidade: 3,7 m/s²',
  },
  {
    name: 'Vênus',
    image: VenusImg,
    description: 'O planeta mais quente do Sistema Solar',
    details: 'Temperatura: 464°C | Distância: 108,2 M km | Sem luas conhecidas',
  },
  {
    name: 'Terra',
    image: TerraImg,
    description: 'Nosso planeta, o único com vida conhecida',
    details: 'Temperatura: 15°C (média) | Distância: 149,6 M km | 1 lua natural',
  },
  {
    name: 'Marte',
    image: MarteImg,
    description: 'O planeta vermelho, alvo futuro de exploração',
    details: 'Temperatura: -65°C (média) | Distância: 227,9 M km | 2 pequenas luas',
  },
  {
    name: 'Júpiter',
    image: JupiterImg,
    description: 'O maior planeta do Sistema Solar',
    details: 'Temperatura: -110°C | Distância: 778,5 M km | 95 luas conhecidas',
  },
  {
    name: 'Saturno',
    image: SaturnoImg,
    description: 'Famoso por seus anéis de gelo e rocha',
    details: 'Temperatura: -140°C | Distância: 1.434 M km | 146 luas conhecidas',
  },
  {
    name: 'Urano',
    image: Uranoimg,
    description: 'Planeta de gelo que gira de lado',
    details: 'Temperatura: -200°C | Distância: 2.871 M km | 28 luas conhecidas',
  },
  {
    name: 'Netuno',
    image: Netunoimg,
    description: 'O planeta mais distante do Sol',
    details: 'Temperatura: -200°C | Distância: 4.495 M km | 16 luas conhecidas',
  },
];

export default Planets;
