import { Box } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import MetricCard from "./card";
import { Stats } from "../types/user";

interface UsersDashboardProps {
  stats?: Stats;
}

const UsersDashboard: React.FunctionComponent<UsersDashboardProps> = ({
  stats,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        marginBottom: "30px",
      }}
    >
      <MetricCard metric="Users Count" value={Number(stats?.users_count)} />
      <PieChart
        series={[
          {
            data: [
              {
                id: 0,
                value: stats?.active_users_count || 0,
                label: "Active",
              },
              {
                id: 1,
                value: stats?.inactive_users_count || 0,
                label: "Inactive",
              },
            ],
          },
        ]}
        width={300}
        height={100}
      />
      <MetricCard
        metric="Avg user Age"
        value={Number(stats?.avg_age).toFixed(1)}
      />
    </Box>
  );
};

export default UsersDashboard;
