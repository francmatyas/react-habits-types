import { v4 as uuidv4 } from "uuid";

export enum HabitFrequency {
  Monday = "Mon",
  Tuesday = "Tue",
  Wednesday = "Wed",
  Thursday = "Thu",
  Friday = "Fri",
  Saturday = "Sat",
  Sunday = "Sun",
}

interface IHabit {
  uuid?: string;
  name: string;
  streak?: number;
  lastCompleted?: Date | undefined;
  days?: HabitFrequency[];
  dayCycle?: number;
  completeCount?: number;
}

export class Habit {
  uuid: string;
  name: string;
  streak: number;
  lastCompleted: Date | undefined;
  days: HabitFrequency[];
  dayCycle: number;
  completeCount: number;

  constructor(obj: IHabit);
  constructor(obj?: IHabit) {
    this.uuid = obj?.uuid ?? uuidv4();
    this.name = obj?.name ?? "";
    this.streak = obj?.streak ?? 0;
    this.lastCompleted = obj?.lastCompleted;
    this.days = obj?.days ?? [];
    this.dayCycle = obj?.dayCycle ?? this.days.length;
    this.completeCount = obj?.completeCount ?? 0;
  }

  /* getFrequencyLabel(): string {
    if (this.days.length === 0) {
      return "Never";
    } else if (this.days.length === 7) {
      return "Everyday";
    } else if (this.days.length === 5) {
      let isWeekday = true;

      this.days.forEach((day) => {
        if (day === HabitFrequency.Saturday || day === HabitFrequency.Sunday) {
          isWeekday = false;
        }
      });
      if (isWeekday) {
        return "Weekdays";
      }
    } else if (this.days.length === 2) {
      let isWeekend = true;

      this.days.forEach((day) => {
        if (day !== HabitFrequency.Saturday && day !== HabitFrequency.Sunday) {
          isWeekend = false;
        }
      });
      if (isWeekend) {
        return "Weekends";
      }
    }
    return this.days.map((v) => HabitFrequency[v]).join(", ");
  } */
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
