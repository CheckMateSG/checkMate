import { Card, Typography } from "@material-tailwind/react";
import {
  ClockIcon,
  UserIcon,
  TrophyIcon,
  HashtagIcon,
  CheckCircleIcon,
  CalculatorIcon,
} from "@heroicons/react/24/solid";
import { Tooltip } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useUser } from "../../providers/UserContext";
import Loading from "../common/Loading";
import { LeaderboardEntry } from "../../types";
import { getLeaderboard } from "../../services/api";
import { ReactivationDialog } from "../common/ReactivationModal";

const iconsize = "h-4 w-4";
const COLUMNS = [
  {
    title: "rank",
    icon: <TrophyIcon className={iconsize} />,
    description: "Rank",
  },
  {
    title: "name",
    icon: <UserIcon className={iconsize} />,
    description: "Name",
  },
  {
    title: "numVotes",
    icon: <HashtagIcon className={iconsize} />,
    description: "Number of votes on messages that did not end in unsure",
  },
  {
    title: "accuracy",
    icon: <CheckCircleIcon className={iconsize} />,
    description: "Accuracy (%) of votes on messages that did not end in unsure",
  },
  {
    title: "averageTimeTaken",
    icon: <ClockIcon className={iconsize} />,
    description:
      "Average time (hrs) taken on votes on messages that did not end in unsure",
  },
  {
    title: "score",
    icon: <CalculatorIcon className={iconsize} />,
    description: "Score, based on both accuracy and speed",
  },
];

export function LeaderboardTable() {
  let lastIndex = 0;
  const [isLoading, setIsLoading] = useState(false);
  const { checkerDetails } = useUser();
  const [abridgedLeaderboard, setAbridgedLeaderboard] = useState<
    LeaderboardEntry[]
  >([]);
  const [showReactivationDialog, setShowReactivationDialog] = useState(false);
  const fetchLeaderboard = async () => {
    setIsLoading(true);
    if (!checkerDetails.checkerId) {
      return;
    }
    const leaderboard: LeaderboardEntry[] = await getLeaderboard(
      checkerDetails.checkerId
    );
    if (leaderboard) {
      setAbridgedLeaderboard(leaderboard);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (!checkerDetails.checkerId) {
      return;
    }
    if (!checkerDetails.isActive) {
      setShowReactivationDialog(true);
      setIsLoading(false);
      return;
    }
    if (checkerDetails.checkerId) {
      fetchLeaderboard();
    }
  }, [checkerDetails.checkerId]);

  const handleReactivation = async () => {
    if (checkerDetails.checkerId) {
      await fetchLeaderboard();
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <ReactivationDialog
        open={showReactivationDialog}
        onClose={() => setShowReactivationDialog(false)}
        onActivation={handleReactivation}
      />
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {COLUMNS.map((col) => (
                <th
                  key={col.title}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Tooltip content={col.description}>{col.icon}</Tooltip>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {abridgedLeaderboard.map(
              (
                {
                  id,
                  position,
                  name,
                  numVoted,
                  accuracy,
                  averageTimeTaken,
                  score,
                },
                index
              ) => {
                const discontinuity = position - lastIndex > 1;
                const isChecker = id === checkerDetails.checkerId;
                const isLast = index === abridgedLeaderboard.length - 1;
                const rowClasses = isChecker ? "bg-orange-100" : "";
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
                lastIndex = position;

                return (
                  <>
                    {discontinuity && (
                      <tr
                        key={`discontinuity-${position}`}
                        className="bg-gray-100"
                      >
                        <td colSpan={6} className="text-center p-4 italic">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            ...
                          </Typography>
                        </td>
                      </tr>
                    )}
                    <tr key={name} className={rowClasses}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {position}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {name.length > 10 ? `${name.slice(0, 10)}..` : name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {numVoted}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {(accuracy * 100).toFixed(0)}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {(averageTimeTaken / 60).toFixed(2)}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {score.toFixed(1)}
                        </Typography>
                      </td>
                    </tr>
                  </>
                );
              }
            )}
          </tbody>
        </table>
      </Card>
    </>
  );
}
