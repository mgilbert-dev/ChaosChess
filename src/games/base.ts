import { ChaosGameTypes, BoardTypes, GameTypes } from '../redux/Game';
import { Board } from '../engine/types';
import { DEFAULT_BOARD } from '../engine/constants';

export default class BaseGame {
  public static gameName: string;
  public static description: string;
  public static type: GameTypes;
  public static subType: ChaosGameTypes;
  public static initialBoard: BoardTypes;
  public static previewComponent: JSX.Element;
  
  public engineDifficulty: number = 4;

  public moveMade = (board: Board): Board => board;
  public filterLegalMoves = (moves: string[], board: Board): string[] => moves;
  public async generateInitialBoard() {
    return DEFAULT_BOARD;
  }
}
