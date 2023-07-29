// import style files
import './styles/style.scss'

//import and export scripts
import { onKeydown } from './js/eventListeners';
import { highlightChoice } from './js/uiActions';
import { constants, getCurrentScores } from "./values";

export {constants, onKeydown, highlightChoice, getCurrentScores};