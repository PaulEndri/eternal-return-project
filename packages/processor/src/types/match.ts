import { IUserGameHistory } from 'erbs-client';

export interface IMatchDocument {
  id: number;
  seasonId?: number;
  gameMode?: number;
  version?: {
    major: number;
    minor: number;
  };
  data: IUserGameHistory[];
  lastUpdated?: Date;
  averageMMR?: number;
}
