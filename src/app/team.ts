export interface Team {
  id?: string;
  averageClimbPoints?: number;
  averageRankingScore?: number;
  canDoCargo: boolean;
  canDoHatches: boolean;
  ccwm?: number;
  climbLvl: number;
  dpr?: number;
  driveMotor: string;
  maxReach: number;
  teamName: string;
  numOfDriveMotors: number;
  opr?: number;
  pointsFromCargo?: number;
  pointsFromHatch?: number;
  rankingPoints?: number;
  rankingScore?: number;
  teamNumber: number;
  typeOfBot: string;
  typeOfDrive: string;
}
