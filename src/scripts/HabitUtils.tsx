import { v4 as uuidv4 } from "uuid";

export const daysObject = {
  mon: "Monday",
  tue: "Tuesday",
  wed: "Wednesday",
  thu: "Thursday",
  fri: "Friday",
  sat: "Saturday",
  sun: "Sunday",
};

export function getDaysShortcut(days: string[]): string[] {
  if (days.length === 0) {
    return ["never"];
  } else if (days.length === 7) {
    return ["daily"];
  } else if (days.length === 5) {
    let isWeekday = true;

    days.forEach((day) => {
      if (day === "sat" || day === "sun") {
        isWeekday = false;
      }
    });
    if (isWeekday) {
      return ["weekday"];
    }
  } else if (days.length === 2) {
    let isWeekend = true;

    days.forEach((day) => {
      if (day !== "sat" && day !== "sun") {
        isWeekend = false;
      }
    });
    if (isWeekend) {
      return ["weekend"];
    }
  }

  return days;
}

interface IHabit {
  uuid?: string;
  name: string;
  streak?: number;
  lastCompleted?: Date | undefined;
  days?: string[];
  dayCycle?: number;
  completeCount?: number;
  type: "date" | "count";
  checkValue?: string;
}

export class Habit {
  uuid: string;
  name: string;
  streak: number;
  lastCompleted: Date | undefined;
  days: string[];
  dayCycle: number;
  completeCount: number;
  type: "date" | "count";
  checkValue: string;

  constructor(obj: IHabit);
  constructor(obj?: IHabit) {
    this.uuid = obj?.uuid ?? uuidv4();
    this.name = obj?.name ?? "";
    this.streak = obj?.streak ?? 0;
    this.lastCompleted = obj?.lastCompleted;
    this.days = obj?.days ?? [];
    this.dayCycle = obj?.dayCycle ?? this.days.length;
    this.completeCount = obj?.completeCount ?? 0;
    this.type = obj?.type ?? "count";
    this.checkValue = obj?.checkValue ?? "U";
  }
}

interface IhabitList {
  habits: Habit[];
}

export class HabitList {
  habits: Habit[];
  habitsDate: Habit[];
  habitsCount: Habit[];

  constructor(obj: IhabitList);
  constructor(obj?: IhabitList) {
    this.habits = obj?.habits ?? [];
    this.habitsDate = this.habits.filter((v) => v.days.length > 0);
    this.habitsCount = this.habits.filter((v) => v.days.length === 0);
  }
}

export class JSONParser {
  public static Deserialize(data: string): any {
    return JSON.parse(data, JSONParser.ReviveDateTime);
  }

  private static ReviveDateTime(key: any, value: any): any {
    if (typeof value === "string") {
      let a =
        /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/.test(
          value
        );
      if (a) {
        return new Date(value);
      }
    }
    return value;
  }
}
