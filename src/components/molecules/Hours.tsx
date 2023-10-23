import { HoursType, Interval, DayHour } from "../../types/autogen";

interface HoursProps {
  hours?: HoursType;
}

const Hours = ({ hours }: HoursProps) => {
  if (!hours) {
    return null;
  }

  const renderInterval = (interval: Interval) => {
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
    };

    // Note: Creating a date without any timezone info
    const start = new Date(`1970-01-01T${interval.start}`);
    const end = new Date(`1970-01-01T${interval.end}`);

    const startFormatted = start.toLocaleTimeString(undefined, options);
    const endFormatted = end.toLocaleTimeString(undefined, options);

    return `${startFormatted} - ${endFormatted}`;
  };

  const renderDayHours = (day: string, dayHour: DayHour) => {
    if (dayHour.isClosed) {
      return (
        <div className="flex justify-between py-1">
          <span>{day}</span>
          <span>Closed</span>
        </div>
      );
    }

    return (
      <div className="flex justify-between py-1">
        <span>{day}</span>
        <span>{dayHour.openIntervals?.map(renderInterval).join(", ")}</span>
      </div>
    );
  };

  return (
    <div className="text-left">
      {hours.sunday && renderDayHours("Sunday", hours.sunday)}
      {hours.monday && renderDayHours("Monday", hours.monday)}
      {hours.tuesday && renderDayHours("Tuesday", hours.tuesday)}
      {hours.wednesday && renderDayHours("Wednesday", hours.wednesday)}
      {hours.thursday && renderDayHours("Thursday", hours.thursday)}
      {hours.friday && renderDayHours("Friday", hours.friday)}
      {hours.saturday && renderDayHours("Saturday", hours.saturday)}
    </div>
  );
};

export default Hours;
