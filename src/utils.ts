import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { DayHour, Hours } from "./types/autogen";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to check if business is open
export function isBusinessOpen(hours: Hours): boolean {
  const now = new Date();
  const dayOfWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ][now.getDay()];
  const currentTime = `${String(now.getHours()).padStart(2, "0")}:${String(
    now.getMinutes()
  ).padStart(2, "0")}`;

  const dayHour = hours[dayOfWeek];

  // If the business is closed today, return false
  if (dayHour?.isClosed) {
    return false;
  }

  // If there are no intervals defined, assume it's closed
  if (!dayHour?.openIntervals) {
    return false;
  }

  // Check each open interval to see if current time falls within any of them
  for (const interval of dayHour.openIntervals) {
    if (currentTime >= interval.start && currentTime <= interval.end) {
      return true;
    }
  }

  return false;
}

export function nextBusinessEvent(hours: Hours): string {
  const now = new Date();
  const dayOfWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ][now.getDay()] as keyof Hours;
  const currentTime = `${String(now.getHours()).padStart(2, "0")}:${String(
    now.getMinutes()
  ).padStart(2, "0")}`;

  const dayHour: DayHour | undefined = hours[dayOfWeek];

  // If the business is closed today, or no intervals defined
  if (dayHour?.isClosed || !dayHour?.openIntervals) {
    return "Opens at 9 AM"; // Replace with actual opening time or dynamically determine it
  }

  let nextEvent = "Closes at 5 PM"; // Default value, replace with actual closing time or dynamically determine it

  for (const interval of dayHour.openIntervals) {
    if (currentTime < interval.start) {
      return `Opens at ${formatTime(interval.start)}`;
    }
    if (currentTime >= interval.start && currentTime <= interval.end) {
      nextEvent = `Closes at ${formatTime(interval.end)}`;
    }
  }

  return nextEvent;
}

function formatTime(time: string): string {
  const [hour, minutes] = time.split(":").map(Number);
  const AMPM = hour < 12 ? "AM" : "PM";
  const formattedHour = hour <= 12 ? hour : hour - 12;
  return `${formattedHour}:${minutes} ${AMPM}`;
}

export const formatDate = (date?: string) => {
  if (!date) {
    return "";
  }

  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export const formatDateTime = (dateTime?: string) => {
  if (!dateTime) {
    return "";
  }

  const dateObj = new Date(dateTime);
  return dateObj.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export const isValidUTCDateString = (dateString: string): boolean => {
  // Regular expression for ISO 8601 format
  const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/;

  if (!regex.test(dateString)) {
    return false;
  }

  const date = new Date(dateString);
  return !isNaN(date.getTime());
};
