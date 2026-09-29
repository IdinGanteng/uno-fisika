export type PhysicsLog = {
  id: string;
  createdAt: string;
  mode: "bot" | "local" | "online";
  studentName: string;
  botCount: number;
  studentQuizScore: number;
  studentCardRankBonus: number;
  studentTotalScore: number;
  studentFinalRank: number;
  studentCardRank: number;
};

const STORAGE_KEY = "4-colors-arena-physics-logs";

export function getPhysicsScoreLogs(): PhysicsLog[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return [];
    }

    return JSON.parse(raw) as PhysicsLog[];
  } catch {
    return [];
  }
}

export function savePhysicsScoreLog(log: PhysicsLog): void {
  if (typeof window === "undefined") {
    return;
  }

  const logs = getPhysicsScoreLogs();

  logs.unshift(log);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(logs)
  );
}

export function deletePhysicsScoreLog(id: string): void {
  if (typeof window === "undefined") {
    return;
  }

  const logs = getPhysicsScoreLogs();

  const filteredLogs = logs.filter(
    (log) => log.id !== id
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(filteredLogs)
  );
}

export function clearPhysicsScoreLogs(): void {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
}

export function exportPhysicsScoreLogsToCsv(): string {
  const logs = getPhysicsScoreLogs();

  if (logs.length === 0) {
    return "";
  }

  const headers = [
    "ID",
    "Tanggal",
    "Mode",
    "Nama",
    "Jumlah Bot",
    "Quiz Score",
    "Card Rank Bonus",
    "Total Score",
    "Final Rank",
    "Card Rank",
  ];

  const rows = logs.map((log) => [
    log.id,
    log.createdAt,
    log.mode,
    log.studentName,
    log.botCount,
    log.studentQuizScore,
    log.studentCardRankBonus,
    log.studentTotalScore,
    log.studentFinalRank,
    log.studentCardRank,
  ]);

  return [
    headers,
    ...rows,
  ]
    .map((row) =>
      row
        .map((value) =>
          `"${String(value).replace(/"/g, '""')}"`
        )
        .join(",")
    )
    .join("\n");
}