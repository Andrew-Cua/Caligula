export interface TeamMatchData {
  teamNumber: number;
  approxHatchScored: number;
  approxCargoScored: number;
  flag: string;
  canClimb: boolean;
  climbHeight?: number;
  commonlyDropGameElements: boolean;
  won: boolean;
}
