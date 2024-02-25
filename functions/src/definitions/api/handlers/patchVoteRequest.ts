import { Request, Response } from "express"
import { updateVoteRequest } from "../interfaces"
import { Timestamp } from "firebase-admin/firestore"
import * as admin from "firebase-admin"

if (!admin.apps.length) {
  admin.initializeApp()
}

const db = admin.firestore()

const patchVoteRequestHandler = async (req: Request, res: Response) => {
  // get message ID and voteRequestId
  const messageId = req.params.messageId
  const voteRequestId = req.params.voteRequestId
  // check that both are passed
  if (!messageId || !voteRequestId) {
    return res.status(400).send("Message Id or vote request Id missing.")
  }
  //confirm category in body
  const { category, truthScore } = req.body as updateVoteRequest
  if (!category) {
    return res.status(400).send("A category is required in the body")
  }

  if (category === "info" && !truthScore) {
    return res.status(400).send("truthScore is required for info category")
  }

  if (truthScore) {
    if (category !== "info") {
      return res
        .status(400)
        .send("Vote can only be submitted for info category")
    }
    if (typeof truthScore !== "number" || truthScore < 0 || truthScore > 5) {
      return res.status(400).send("truthScore must be a number between 0 and 5")
    }
  }
  //check if vote request exists in firestore
  const voteRequestRef = db
    .collection("messages")
    .doc(messageId)
    .collection("voteRequests")
    .doc(voteRequestId)
  const voteRequestSnap = await voteRequestRef.get()
  if (!voteRequestSnap.exists) {
    return res.status(404).send("vote request not found")
  }
  await voteRequestRef.update({
    category: category,
    vote: truthScore ?? null,
    votedTimestamp: Timestamp.fromDate(new Date()),
  })
  return res.status(200).send({
    success: true,
  })
}

export default patchVoteRequestHandler
