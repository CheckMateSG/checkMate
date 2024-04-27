import {
  Vote,
  VoteSummary,
  Checker,
  updateVoteRequest,
  VoteSummaryApiResponse,
  PendingCountApiResponse,
  AssessedInfo,
  updateChecker,
} from "../../functions/src/definitions/api/interfaces";

interface CheckerDetails {
  checkerId: string | null;
  checkerName: string;
  pendingCount: number;
  isAdmin: boolean;
  tier: string;
}

interface Window {
  Telegram: {
    WebApp: any;
  };
}

export type {
  Vote,
  VoteSummary,
  Checker,
  updateVoteRequest,
  VoteSummaryApiResponse,
  PendingCountApiResponse,
  AssessedInfo,
  updateChecker,
  CheckerDetails,
  Window,
};
