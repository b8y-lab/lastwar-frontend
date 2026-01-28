import { TimeEnum } from '@/utils/enum/TimeEnum.ts';

export function getNowInt() {
  return Date.now() / 1000;
}

export function getNowIntFloor() {
  return Math.floor(Date.now() / 1000);
}

export function getAfterOneHourFloor() {
  return Math.floor(Date.now() / 1000 + TimeEnum.OneHourInt);
}

export function getAfterOneHourMilliSec() {
  return new Date(Date.now() + TimeEnum.OneHourMilliSec);
}
