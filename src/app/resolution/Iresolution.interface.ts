export interface IResolution {
  approver: string;
  resolution: 'approved' | 'reject' | null;
  comment: string;
  state: 0 | 1;
  resolutionType?: string;
}
