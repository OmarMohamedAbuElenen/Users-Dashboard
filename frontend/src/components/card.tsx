import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface MetricCardProps {
  metric: string;
  value: number | string;
}

const MetricCard: React.FunctionComponent<MetricCardProps> = ({
  metric,
  value,
}) => {
  return (
    <Card
      sx={{
        width: "450px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {metric}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{
            maxWidth: "250px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginInlineStart: "20px",
          }}
        >
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
