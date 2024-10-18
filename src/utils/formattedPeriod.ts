import { differenceInMonths, format } from "date-fns";

export const formattedPeriod = ({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate?: string;
}) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  const formattedStartDate = format(start, "MMM yyyy");
  const formattedEndDate = endDate ? format(end, "MMM yyyy") : "Present";
  const duration = differenceInMonths(end, start);
  const years = Math.floor(duration / 12);
  const months = duration % 12;
  const formattedDuration = `${years}y${months !== 0 ? ` ${months}m` : ""}`;

  return `${formattedStartDate} - ${formattedEndDate} (${formattedDuration})`;
};
