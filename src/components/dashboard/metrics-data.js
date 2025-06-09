import { getMetrics } from "@/actions/metrics";

import {
  Store,
  Wallet,
  ReceiptText,
  Banknote,
} from "lucide-react";

export async function dataCards() {
  const reports = await getMetrics();

  const data = [
    {
      title: "Net Sales",
      value: reports.curr_metrics["Total Revenue"],
      badge: "50%",
      icon: <Store size={20} />,
      past: "+12",
      ratio: false,
    },
    {
      title: "Inventory",
      value: reports.curr_metrics["Inventory"],
      badge: "30%",
      icon: <Wallet size={20} />,
      past: "+8",
      ratio: false,
    },
    {
      title: "Operating Cash Flow",
      value: reports.curr_metrics["Operating Cash Flow"],
      badge: "20%",
      icon: <ReceiptText size={20} />,
      past: "-0.5",
      ratio: false,
    },
    {
      title: "Gross Profit",
      value: reports.curr_metrics["Gross Profit"],
      badge: "10%",
      icon: <Banknote size={20} />,
      past: "+0.2",
      ratio: false,
    },
    {
      title: "New Data",
      value: reports.curr_metrics[""],
      badge: "2%",
      icon: <ReceiptText size={20} />,
      past: "-0.9",
      ratio: false,
    }
  ]

  return data;
}