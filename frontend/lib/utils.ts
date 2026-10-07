import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatBDT(amount: number): string {
  return new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency: "BDT",
    minimumFractionDigits: 2,
  })
    .format(amount)
    .replace("BDT", "৳");
}

export function formatDate(dateString: string): string {
  try {
    const d = new Date(dateString);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return dateString;
  }
}

export function getTransactionTitle(tx: {
  merchant_id?: string | null;
  type: string;
  meta_info?: Record<string, any> | null;
}): string {
  if (tx.merchant_id === "MERCH-ABC-01") return "ABC Cafe Banani";
  if (tx.merchant_id === "MERCH-SHW-01") return "Shwapno Superstore Mirpur";
  if (tx.merchant_id === "MERCH-AGR-01") return "Agora Supermarket Gulshan";
  if (tx.merchant_id === "MERCH-GLO-01") return "Gloria Jean's Coffees Dhanmondi";
  if (tx.merchant_id === "MERCH-YEL-01") return "Yellow Flagship Clothing Uttara";
  if (tx.merchant_id === "MERCH-BAT-01") return "Bata Shoe Store Elephant Road";
  if (tx.merchant_id === "MERCH-RYA-01") return "Ryans Computers IDB Bhaban";

  if (tx.meta_info?.operator) return `Mobile Recharge (${tx.meta_info.operator})`;
  if (tx.meta_info?.biller) return `Utility Bill (${tx.meta_info.biller})`;
  if (tx.meta_info?.recipient_name) return `Send Money (${tx.meta_info.recipient_name})`;
  if (tx.meta_info?.agent_name) return `Cash In (${tx.meta_info.agent_name})`;
  if (tx.meta_info?.bank_name) return `Bank Cash In (${tx.meta_info.bank_name})`;
  if (tx.meta_info?.bank) return `Card Payment (${tx.meta_info.bank})`;
  if (tx.meta_info?.disburser) return `Salary (${tx.meta_info.disburser})`;
  if (tx.meta_info?.atm_id) return `ATM Cash Out`;

  return tx.type.replace(/_/g, " ");
}

