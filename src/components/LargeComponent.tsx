import dayjs from "dayjs";

const LargeComponent = ({ date }: { date: string }) => (
  <time dateTime={date}>{dayjs(date).format("YYYY-MMM-DD")}</time>
  // <time dateTime={date}>{date}</time>
);

export default LargeComponent;
