import { HoursStatus } from "@yext/sites-react-components";

const HoursShort = (hours) => {
  return (
    <HoursStatus hours timezone="EST" className="bg-gray-200 px-10 py-3" />
  );
};

export default HoursShort;
