export const ActiveIconColor = '#08C5D1'        //couleur des boutons actifs
export const InactiveIconColor = 'grey'     //couleur des boutons inactifs
export const iconSize = 30                  //taille des incons

//couleurs light
export const backLight = 'white'


//On règle la taille des textes ici
import { PixelRatio } from 'react-native';

//Text corps
export const getFontSize = (fontSize) => {
  const fontSizeDefault = PixelRatio.getFontScale() === 2 ? fontSize : fontSize-2;
  return fontSizeDefault * PixelRatio.getFontScale();
};