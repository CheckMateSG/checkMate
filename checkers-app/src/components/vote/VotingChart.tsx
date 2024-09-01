import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { AssessedInfo } from "../../types";

interface VotingChartProps {
  assessedInfo: AssessedInfo | null;
}

export default function VotingChart(Props: VotingChartProps) {
  const assessedInfo = Props.assessedInfo;

  if (assessedInfo === null) {
    return null;
  }
  const infoObj =
    "total" in assessedInfo.infoCount
      ? {
          name: "Info",
          count: assessedInfo.infoCount.total,
        }
      : {
          name: "Info",
          1: assessedInfo.infoCount["1"],
          2: assessedInfo.infoCount["2"],
          3: assessedInfo.infoCount["3"],
          4: assessedInfo.infoCount["4"],
          5: assessedInfo.infoCount["5"],
        };

  const irrelevantCount = assessedInfo.irrelevantCount;
  const incorrectCount = assessedInfo.tagCounts.incorrect ?? 0; //INCORRECT USAGE

  const data = [
    {
      name: "Scam",
      count: assessedInfo.scamCount,
    },
    {
      name: "Illicit",
      count: assessedInfo.illicitCount,
    },
    infoObj,
    {
      name: "Satire",
      count: assessedInfo.satireCount,
    },
    {
      name: "Marketing/Spam",
      count: assessedInfo.spamCount,
    },
    {
      name: "No Verifiable Content",
      credible: assessedInfo.legitimateCount,
      notsure: irrelevantCount - incorrectCount,
    },
    {
      name: "Incorrect Usage",
      count: incorrectCount,
    },
    {
      name: "Unsure",
      count: assessedInfo.unsureCount,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 5,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" angle={-45} tick={{ fontSize: 12, dy: 5 }} />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" stackId="a" fill="#8884d8" />
        <Bar dataKey="1" stackId="a" fill="#FFD700" />
        <Bar dataKey="2" stackId="a" fill="#C9B037" />
        <Bar dataKey="3" stackId="a" fill="#B4A76C" />
        <Bar dataKey="4" stackId="a" fill="#8B6914" />
        <Bar dataKey="5" stackId="a" fill="#806517" />
        <Bar dataKey="credible" stackId="a" fill="#82ca9d" />
        <Bar dataKey="notsure" stackId="a" fill="#808080" />
      </BarChart>
    </ResponsiveContainer>
  );
}
