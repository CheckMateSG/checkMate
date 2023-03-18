exports.USER_BOT_RESPONSES = {
  1.5: "⛔⛔ Thank you for waiting! Our CheckMates have reviewed the message and think it's *likely to be untrue*.❌\n\nPlease do not spread it further⛔️\n\nThank you for keeping Singapore informed!",
  3.5: "🚧🚧 Thank you for waiting! Our CheckMates have reviewed the message and think that *while some elements within could be true, it's presented in a misleading way*.⚠️\n\nPlease take it with a pinch of salt and think twice before spreading it further🚧.\n\nThank you for keeping Singapore informed!",
  5: "✅✅ Thank you for waiting! Our CheckMates have reviewed the message and think that it's *accurate*.✅\n\nThank you for keeping Singapore informed!",
  IRRELEVANT: "Thank you for waiting! Our CheckMates have reviewed the message and think it's *harmless*.👌",
  NO_SCORE: "Hello! 👋 Thank you for sending this in! Our *CheckMates🕵🏻 will be reviewing this message* and *providing you with the results soon*.",
  MESSAGE_NOT_YET_ASSESSED: "Hello! 👋 Thank you for sending this in! Our *CheckMates🕵🏻 will be reviewing this message* and *providing you with the results soon*.",
  SCAM: "⛔⛔ Thank you for waiting! Our CheckMates have reviewed the message and think this is likely to be a *scam*!🚫\n\nWe recommend you do not engage further⛔️",
  SUSPICIOUS: "⛔⛔ Thank you for waiting! Our CheckMates have reviewed the message and think this *looks suspicious*!🚨\n\nWe recommend you do not engage further⛔️",
  UNSUPPORTED_TYPE: "Sorry, CheckMate currently doesn't support this type of message.",
  SCAMSHIELD_PREAMBLE: "The above represents the collective opinion of our CheckMates. That said, ScamShield (https://scamshield.org.sg) is still the authoritative, official source for scams in Singapore. CheckMate is partnering with ScamShield to better fight scams in Singapore.",
  SCAMSHIELD_SEEK_CONSENT: "Would you like us to share this message with ScamShield? Only the contents of this message, and no other information, will be sent.",
  SCAMSHIELD_ON_CONSENT: "Thank you for sharing this message with us and ScamShield, and for keeping Singapore safe!",
  SCAMSHIELD_ON_DECLINE: `No worries! We will not be sending your message to ScamShield. If you change your mind, you can still hit "Yes" above. Thank you for sharing this message with us, and for keeping Singapore safe!`,
  DEMO_SCAM_MESSAGE: "Imagine this is a scam message that you receive in another WhatsApp chat. Forward me in to this same chat to try how CheckMate works!",
  DEMO_SCAM_PROMPT: "If you receive a scam message like this demo one above, just forward or copy and send it to this number. Go ahead and try it to see how CheckMate works!",
  ONBOARDING_END: "See how it works now? When you see a message that you're unsure of 🤔, just forward it in and we'll help you check it ✅✅. It works for images/photos too! Apart from such messages, please don't send in anything else, because then our CheckMates will have to review it. Now, let's go do our part in the fight against scams and fake news! 💪"
};

exports.FACTCHECKER_BOT_RESPONSES = {
  VOTE_NO: "No problem! If you wish to come back and assess the message, you may do so by clicking the 'yes' button. See you soon!😊",
  FACTCHECK_PROMPT: "Please vote on the new viral message above. If there is no claim in the message, select 'No Claim Made'. Otherwise, assess the veracity of the claim(s) on a scale from 0 to 5, where 0 means the claim(s) are entirely false, and 5 means the claim(s) are entirely true.",
  L1_SCAM_ASSESSMENT_PROMPT: "Which of these two categories better describes this message?",
  L2_SCAM_ASSESSMENT_PROMPT: "Is this message a scam, i.e. an attempt to trick someone into giving away their money or personal information, or is it some other kind of suspected illicit activity, e.g. soliciting moneylending/prostitution",
  RESPONSE_RECORDED: "Got it! Your response has been recorded. Thank you for playing your part in the fight against scams and misinformation, one message at a time! 💪",
  HOLD_FOR_NEXT_POLL: "Got it👍! Please hold for another poll to vote on how true the message is.",
  HOLD_FOR_L2_SCAM_ASSESSMENT: "Got it👍! Please hold for another selection.",
  ONBOARDING_1: "Welcome to our community of CheckMates! 👋🏻 We're grateful to have you on board to combat misinformation and scams. 🙇‍♀️🙇🏻 We'd love to get to know you better - could you *reply to this message* and share your name with us? (Reply to this message by swiping right)!",
  ONBOARDING_2: "Thank you and welcome, {{name}}! We're thrilled to have you on board as we work together to combat misinformation and scams.😊 By using the CheckMate bot, you are accepting our privacy policy which can be found here: https://bit.ly/checkmate-privacy",
  ONBOARDING_3: `To ensure you're equipped with the necessary skills to identify misinformation and scams, let's start with a quick quiz. 📝 Simply follow the link (https://bit.ly/checkmates-quiz) to take the quiz. Once you've completed it, come back to this chat and click on "I've done the quiz!" to notify me. Let's get started! 🤖`,
  ONBOARDING_4: "Awesome! Now that you know how to identify misinformation and scams, you are ready to help us combat them! 🙌🏻 Here's the infographic guide that was shown to you earlier on. If you haven't already, do join this WhatsApp group (https://bit.ly/checkmates-groupchat) that brings together all the other CheckMates and the core product team for updates and feedback. Thanks again for joining our community of CheckMates. Enjoy! 👋🏻🤖",
  NOT_A_REPLY: "Sorry, did you forget to reply to a message? You need to swipe right on the message to reply to it.",
};

exports.thresholds = {
  endVote: 0.5,
  endVoteSus: 0.2,
  startVote: 1,
  isIrrelevant: 0.5,
  isSus: 0.7,
};
