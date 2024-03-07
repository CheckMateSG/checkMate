interface createVoteRequest {
  factCheckerId?: string
  factCheckerName?: string
}

interface updateVoteRequest {
  category: string
  truthScore?: number //between 1 and 5
}

interface createChecker {
  name: string
  type: "human" | "ai"
  isActive?: boolean
  isOnboardingComplete?: boolean
  singpassOpenId: string | null
  telegramId: string | null
  whatsappId?: string | null
  level?: number
  experience?: number
  numVoted?: number
  numCorrectVotes?: number
  numVerifiedLinks?: number
  preferredPlatform?: string | null
  lastVotedTimestamp?: null
}

export { createVoteRequest, updateVoteRequest, createChecker }
