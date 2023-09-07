import { Hours } from "../types/autogen";
import { isBusinessOpen, nextBusinessEvent } from "../utils";
import { twMerge } from "tailwind-merge";
import Stars from "./atoms/Stars";

export interface LocationInfoCardProps {
  containerClassname?: string;
  name?: string;
  city?: string;
  hours?: Hours;
  rating?: number;
  reviewCount?: number;
  cta1?: {
    text?: string;
    url?: string;
  };
  cta2?: {
    text?: string;
    url?: string;
  };
}

export const initialProps: LocationInfoCardProps = {
  name: "Location Name",
  city: "Brooklyn",
  hours: {
    monday: {
      openIntervals: [
        {
          start: "09:00",
          end: "17:00",
        },
      ],
    },
    tuesday: {
      openIntervals: [
        {
          start: "09:00",
          end: "17:00",
        },
      ],
    },
    wednesday: {
      openIntervals: [
        {
          start: "09:00",
          end: "17:00",
        },
      ],
    },
    thursday: {
      openIntervals: [
        {
          start: "09:00",
          end: "17:00",
        },
      ],
    },
    friday: {
      openIntervals: [
        {
          start: "09:00",
          end: "17:00",
        },
      ],
    },
    saturday: {
      openIntervals: [
        {
          start: "09:00",
          end: "17:00",
        },
      ],
    },
    sunday: {
      openIntervals: [
        {
          start: "09:00",
          end: "17:00",
        },
      ],
    },
  },
  rating: 4.5,
  reviewCount: 21,
  cta1: {
    text: "Get Directions",
    url: "#",
  },
  cta2: {
    text: "Order Online",
    url: "#",
  },
};

const LocationInfoCard = ({
  name,
  city,
  hours,
  rating,
  reviewCount,
  cta1,
  cta2,
  containerClassname,
}: LocationInfoCardProps) => {
  return (
    <div
      className={twMerge(
        "flex flex-col items-start justify-start gap-3",
        containerClassname
      )}
    >
      <h2 className="text-2xl font-bold text-red-600">{name}</h2>
      <h1 className="text-5xl font-bold text-zinc-800">{city}</h1>
      {hours && (
        <div className="inline-flex items-center justify-start gap-3">
          <div className="text-lg font-bold text-zinc-800">
            {isBusinessOpen(hours) ? "Open Now" : "Closed Now"}
          </div>
          <div className="h-1 w-1 rounded-full bg-zinc-800"></div>
          <div className="text-lg font-normal text-zinc-800">
            {nextBusinessEvent(hours)}
          </div>
        </div>
      )}
      <div className="inline-flex items-center justify-center gap-3">
        <div className="text-center text-base font-bold text-zinc-800">
          {rating}
        </div>
        <Stars rating={rating ?? 0} />
        <div className="text-center text-base font-normal text-zinc-800">
          {`(${reviewCount} reviews)`}
        </div>
      </div>
      <div className="inline-flex items-start justify-start gap-3">
        {cta1 && (
          <div className="inline-flex flex-col items-center justify-center bg-red-600">
            <a
              href={cta1.url}
              className="inline-flex items-start justify-start gap-2.5 px-6 py-2"
            >
              <div className="text-center text-base font-bold text-white">
                {cta1.text}
              </div>
            </a>
          </div>
        )}
        {cta2 && (
          <a
            href={cta2.url}
            className="inline-flex flex-col items-center justify-center border border-red-600"
          >
            <div className="inline-flex items-start justify-start gap-2.5 px-6 py-2">
              <div className="text-center text-base font-bold text-red-600">
                {cta2.text}
              </div>
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

export default LocationInfoCard;
