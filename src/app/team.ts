export interface Team {
  id?: string;
  averageClimbPoints?: number;
  averageRankingScore?: number;
  gameElementAccuracy?: number;
  ccwm?: number;
  climbLvl: number;
  dpr?: number;
  driveMotor: string;
  maxReach: number;
  teamName: string;
  numOfDriveMotors: number;
  opr?: number;
  pointsFromGameElement?: number;
  rankingPoints?: number;
  rankingScore?: number;
  teamNumber: number;
  typeOfBot: string;
  typeOfDrive: string;
}
