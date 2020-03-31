import { BehaviorSubject } from "rxjs";

export let stats$ = new BehaviorSubject(JSON.parse(localStorage.getItem("stats") || "{}"));

export function updateStats(gameStatsObj) {
  let newStats = { ...stats$.value };

  for (let data in gameStatsObj) {
    if (data in newStats) {
      newStats[data] += gameStatsObj[data];
    } else {
      newStats[data] = gameStatsObj[data];
    }
  }
  localStorage.setItem("stats", JSON.stringify(newStats));
  stats$.next(newStats);
}
