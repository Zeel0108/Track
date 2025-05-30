import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardDescription, CardTitle } from "./ui/card";

interface AnalyticsCardProps {
  title: string;
  value: number;
  variant: "up" | "down";
  increaseValue: number;
}

const AnalyticsCard = ({
  title,
  value,
  variant,
  increaseValue,
}: AnalyticsCardProps) => {
  const iconColor = variant === "up" ? "text-emerald-500" : "text-red-500";
  const Icon = variant === "up" ? FaCaretUp : FaCaretDown;

  return (
    <Card className="shadow-none border-none w-full">
      <CardHeader>
        <div className="flex items-center gap-x-2.5">
          <CardDescription className="flex items-center gap-x-2 font-medium overflow-hidden">
            <span className="truncate text-base">{title}</span>
          </CardDescription>
          <div className="flex items-center gap-x-1">
            <Icon className={cn("size-4", iconColor)} />
            <span
              className={cn("truncate text-base font-medium", increaseValue)}
            >
              {increaseValue}
            </span>
          </div>
        </div>
        <CardTitle className="3xl font-semibold">{value}</CardTitle>
      </CardHeader>
    </Card>
  );
};

export default AnalyticsCard;
