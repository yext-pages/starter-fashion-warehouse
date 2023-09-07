import nameUrl from "../assets/images/name.png";
import tacoUrl from "../assets/images/taco.png";

export interface LocationHeaderProps {}

const LocationHeader = () => {
  return (
    <div className="fixed inset-0 grid h-24 grid-cols-3 gap-4 bg-white px-4 py-6">
      <div className="flex items-center justify-start gap-2.5">
        <img src={tacoUrl} />
        <img src={nameUrl} />
      </div>
      <div className="flex shrink grow basis-0 items-center justify-center gap-8 px-8">
        <div className="flex items-center justify-center gap-2.5">
          <div className="text-base font-bold leading-[30px] text-red-600">
            Restaurants
          </div>
        </div>
        <div className="flex items-center justify-center gap-2.5">
          <div className="text-base font-bold leading-[30px] text-red-600">
            Blog
          </div>
        </div>
        <div className="flex items-center justify-center gap-2.5">
          <div className="text-base font-bold leading-[30px] text-red-600">
            Support
          </div>
        </div>
      </div>
      {/* <div className="flex h-8 items-center justify-start gap-1 rounded-[3px] border border-zinc-200 bg-white py-1.5 pl-3 pr-1.5">
        <div className="shrink grow basis-0 self-stretch text-[13px] font-normal text-gray-700">
          Search
        </div>
        <div className="flex h-5 w-5 items-center justify-center gap-2.5 p-1">
          <img className="h-3 w-3" src="https://via.placeholder.com/12x12" />
        </div>
      </div> */}
    </div>
  );
};

export default LocationHeader;
