import type { PriceVolumeChart } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generatePriceVolumeChartWithSession({
  startPrice = 253,
  date = "2026-01-15",
  intervalSec = 300, // 5 phút
  volatility = 0.6,
}: {
  startPrice?: number;
  date?: string; // YYYY-MM-DD
  intervalSec?: number;
  volatility?: number;
}): PriceVolumeChart {
  const o: number[] = [];
  const h: number[] = [];
  const l: number[] = [];
  const c: number[] = [];
  const v: number[] = [];
  const t: number[] = [];

  let lastClose = startPrice;

  const toUnix = (time: string) =>
    Math.floor(new Date(`${date}T${time}`).getTime() / 1000);

  const sessions = [
    { start: "09:00:00", end: "11:59:59" },
    { start: "13:00:00", end: "15:00:00" },
  ];

  for (const session of sessions) {
    let current = toUnix(session.start);
    const end = toUnix(session.end);

    while (current <= end) {
      const open = lastClose;

      const change = (Math.random() - 0.5) * volatility;
      const close = +(open + change).toFixed(2);

      const high = +Math.max(
        open,
        close,
        open + Math.random() * volatility
      ).toFixed(2);
      const low = +Math.min(
        open,
        close,
        open - Math.random() * volatility
      ).toFixed(2);

      const volume = Math.floor(800_000 + Math.random() * 2_000_000);

      o.push(open);
      h.push(high);
      l.push(low);
      c.push(close);
      v.push(volume);
      t.push(current);

      lastClose = close;
      current += intervalSec;
    }
  }

  return {
    o,
    h,
    l,
    c,
    v,
    t,
    s: "ok",
  };
}

export const getCssVar = (name: string) => {
  const root = document.documentElement;
  return getComputedStyle(root).getPropertyValue(name).trim();
};

function pick<T>(...values: (T | undefined | null)[]): T | undefined {
  for (const v of values) {
    if (v !== undefined && v !== null) {
      return v;
    }
  }
  return undefined;
}

export function numberFormat(
  input: string | number | undefined | null,
  decimals: number = 0,
  fallback: string = "",
  decimalSeparator?: string,
  thousandSeparator?: string
): string {
  // Xử lý các giá trị đặc biệt
  if (input === "ATO" || input === "ATC") return input;

  const h = Number(input) || 0;
  const c = Math.max(0, decimals);

  // Lấy số chữ số thập phân thực tế
  const fractionalLength = (h.toString().split(".")[1] || "").split("e")[0]
    .length;
  const parts = h.toString().split("e");

  // Làm tròn và định dạng số
  const g = (
    Math.abs(parts[1] ? Number(parts[0]) : h) +
    Math.pow(10, -Math.max(c, fractionalLength) - 1)
  ).toFixed(c);

  const w = String(parseInt(g, 10));
  const n = w.length > 3 ? w.length % 3 : 0;

  const dec = pick(decimalSeparator, ".")!;
  const thou = pick(thousandSeparator, ",")!;

  let formatted = (h < 0 ? "-" : "") + (n ? w.substring(0, n) + thou : "");
  formatted += w.substring(n).replace(/(\d{3})(?=\d)/g, `$1${thou}`);
  if (c) formatted += dec + g.slice(-c);
  if (parts[1] && +formatted !== 0) formatted += "e" + parts[1];

  if (Number(formatted) === 0) return fallback;
  return formatted;
}
