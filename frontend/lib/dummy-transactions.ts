import { SyntheticTransaction } from "@/types/synthetic";

const now = Date.now();

export const DUMMY_TRANSACTIONS: SyntheticTransaction[] = [
  {
    id: "TXN-8F31A2",
    user_id: "USR-001",
    merchant_id: "MERCH-ABC-01",
    type: "QR_PAYMENT",
    amount: 2000.0,
    currency: "BDT",
    status: "PARTIAL_FAILURE",
    channel: "QR",
    device_id: "DEV-IPHONE-14",
    location: "Banani, Dhaka",
    created_at: new Date(now - 18 * 60 * 1000).toISOString(),
    failure_code: "GW_TIMEOUT_504",
    gateway_id: "GW-BRAC-SWITCH",
    meta_info: {
      qr_format: "BANGLA_QR",
      pos_terminal_id: "ABC-POS-04",
      counter: "Counter #2 (Pastry & Coffee)"
    }
  },
  {
    id: "TXN-23A91B",
    user_id: "USR-001",
    merchant_id: "MERCH-SHW-01",
    type: "MERCHANT_PAYMENT",
    amount: 850.0,
    currency: "BDT",
    status: "SUCCESS",
    channel: "APP",
    device_id: "DEV-IPHONE-14",
    location: "Mirpur-10, Dhaka",
    created_at: new Date(now - 4 * 3600 * 1000).toISOString(),
    failure_code: undefined,
    gateway_id: "GW-CITY-PG",
    meta_info: {
      pos_counter: "Counter #06",
      invoice_no: "INV-SHW-99214",
      cashback_awarded: 15.0
    }
  },
  {
    id: "TXN-101A01",
    user_id: "USR-001",
    merchant_id: undefined,
    type: "MOBILE_RECHARGE",
    amount: 500.0,
    currency: "BDT",
    status: "SUCCESS",
    channel: "APP",
    device_id: "DEV-IPHONE-14",
    location: "Banani, Dhaka",
    created_at: new Date(now - 5 * 3600 * 1000).toISOString(),
    failure_code: undefined,
    gateway_id: "GW-CITY-PG",
    meta_info: {
      operator: "Grameenphone",
      recipient_phone: "+8801711223344",
      package: "Unlimited Internet 5GB"
    }
  },
  {
    id: "TXN-101A02",
    user_id: "USR-001",
    merchant_id: undefined,
    type: "CASH_IN",
    amount: 5000.0,
    currency: "BDT",
    status: "SUCCESS",
    channel: "AGENT",
    device_id: "DEV-IPHONE-14",
    location: "Banani Agent Point, Dhaka",
    created_at: new Date(now - 10 * 3600 * 1000).toISOString(),
    failure_code: undefined,
    gateway_id: "GW-MTB-SWITCH",
    meta_info: {
      agent_id: "AGT-88219",
      agent_name: "Banani Telecom & Cash Point",
      commission_bdt: 10.0
    }
  },
  {
    id: "TXN-101A03",
    user_id: "USR-001",
    merchant_id: undefined,
    type: "UTILITY_BILL",
    amount: 3420.0,
    currency: "BDT",
    status: "SUCCESS",
    channel: "APP",
    device_id: "DEV-IPHONE-14",
    location: "Banani, Dhaka",
    created_at: new Date(now - 18 * 3600 * 1000).toISOString(),
    failure_code: undefined,
    gateway_id: "GW-CITY-PG",
    meta_info: {
      biller: "DESCO Electricity",
      account_no: "DESCO-9928172",
      billing_month: "September 2026"
    }
  },
  {
    id: "TXN-101A04",
    user_id: "USR-001",
    merchant_id: undefined,
    type: "SEND_MONEY",
    amount: 1200.0,
    currency: "BDT",
    status: "SUCCESS",
    channel: "APP",
    device_id: "DEV-IPHONE-14",
    location: "Banani, Dhaka",
    created_at: new Date(now - 26 * 3600 * 1000).toISOString(),
    failure_code: undefined,
    gateway_id: "GW-MTB-SWITCH",
    meta_info: {
      recipient_phone: "+8801812345678",
      recipient_name: "Tariqul Alam",
      note: "Dinner bill split"
    }
  },
  {
    id: "TXN-101A05",
    user_id: "USR-001",
    merchant_id: "MERCH-AGR-01",
    type: "QR_PAYMENT",
    amount: 1850.0,
    currency: "BDT",
    status: "SUCCESS",
    channel: "QR",
    device_id: "DEV-IPHONE-14",
    location: "Gulshan-2, Dhaka",
    created_at: new Date(now - 30 * 3600 * 1000).toISOString(),
    failure_code: undefined,
    gateway_id: "GW-CITY-PG",
    meta_info: {
      qr_type: "BANGLA_QR",
      counter: "Counter #3",
      items_count: 8
    }
  },
  {
    id: "TXN-101A06",
    user_id: "USR-001",
    merchant_id: "MERCH-YEL-01",
    type: "MERCHANT_PAYMENT",
    amount: 4500.0,
    currency: "BDT",
    status: "SUCCESS",
    channel: "APP",
    device_id: "DEV-IPHONE-14",
    location: "Uttara Sector 3, Dhaka",
    created_at: new Date(now - 48 * 3600 * 1000).toISOString(),
    failure_code: undefined,
    gateway_id: "GW-CITY-PG",
    meta_info: {
      invoice_no: "YEL-DH-8821",
      cashback: 150.0
    }
  },
  {
    id: "TXN-101A07",
    user_id: "USR-001",
    merchant_id: undefined,
    type: "CASH_OUT",
    amount: 2000.0,
    currency: "BDT",
    status: "SUCCESS",
    channel: "AGENT",
    device_id: "DEV-IPHONE-14",
    location: "Gulshan Agent Point, Dhaka",
    created_at: new Date(now - 56 * 3600 * 1000).toISOString(),
    failure_code: undefined,
    gateway_id: "GW-MTB-SWITCH",
    meta_info: {
      agent_id: "AGT-90112",
      charge_bdt: 29.0
    }
  },
  {
    id: "TXN-101A08",
    user_id: "USR-001",
    merchant_id: undefined,
    type: "UTILITY_BILL",
    amount: 890.0,
    currency: "BDT",
    status: "SUCCESS",
    channel: "APP",
    device_id: "DEV-IPHONE-14",
    location: "Banani, Dhaka",
    created_at: new Date(now - 70 * 3600 * 1000).toISOString(),
    failure_code: undefined,
    gateway_id: "GW-CITY-PG",
    meta_info: {
      biller: "Dhaka WASA Water",
      account_no: "WASA-771209"
    }
  },
  {
    id: "TXN-101A09",
    user_id: "USR-001",
    merchant_id: "MERCH-GLO-01",
    type: "QR_PAYMENT",
    amount: 650.0,
    currency: "BDT",
    status: "SUCCESS",
    channel: "QR",
    device_id: "DEV-IPHONE-14",
    location: "Dhanmondi-27, Dhaka",
    created_at: new Date(now - 78 * 3600 * 1000).toISOString(),
    failure_code: undefined,
    gateway_id: "GW-CITY-PG",
    meta_info: {
      order_type: "Dine In",
      item: "Cappuccino & Muffin"
    }
  },
  {
    id: "TXN-101A10",
    user_id: "USR-001",
    merchant_id: undefined,
    type: "SEND_MONEY",
    amount: 3500.0,
    currency: "BDT",
    status: "FAILED",
    channel: "APP",
    device_id: "DEV-IPHONE-14",
    location: "Banani, Dhaka",
    created_at: new Date(now - 96 * 3600 * 1000).toISOString(),
    failure_code: "LIMIT_EXCEEDED",
    gateway_id: "GW-BRAC-SWITCH",
    meta_info: {
      recipient_phone: "+8801900112233",
      error: "INSUFFICIENT_FUNDS_OR_LIMIT"
    }
  },
  {
    id: "TXN-101A11",
    user_id: "USR-001",
    merchant_id: "MERCH-BAT-01",
    type: "MERCHANT_PAYMENT",
    amount: 2990.0,
    currency: "BDT",
    status: "SUCCESS",
    channel: "APP",
    device_id: "DEV-IPHONE-14",
    location: "Elephant Road, Dhaka",
    created_at: new Date(now - 104 * 3600 * 1000).toISOString(),
    failure_code: undefined,
    gateway_id: "GW-CITY-PG",
    meta_info: {
      receipt_no: "BATA-ER-9012"
    }
  },
  {
    id: "TXN-101A12",
    user_id: "USR-001",
    merchant_id: undefined,
    type: "CREDIT_CARD_BILL",
    amount: 12500.0,
    currency: "BDT",
    status: "SUCCESS",
    channel: "BANK_TRANSFER",
    device_id: "DEV-IPHONE-14",
    location: "Banani, Dhaka",
    created_at: new Date(now - 120 * 3600 * 1000).toISOString(),
    failure_code: undefined,
    gateway_id: "GW-MTB-SWITCH",
    meta_info: {
      bank: "City Bank Visa Card",
      card_last4: "4891"
    }
  },
  {
    id: "TXN-101A13",
    user_id: "USR-001",
    merchant_id: undefined,
    type: "MOBILE_RECHARGE",
    amount: 200.0,
    currency: "BDT",
    status: "SUCCESS",
    channel: "APP",
    device_id: "DEV-IPHONE-14",
    location: "Banani, Dhaka",
    created_at: new Date(now - 128 * 3600 * 1000).toISOString(),
    failure_code: undefined,
    gateway_id: "GW-CITY-PG",
    meta_info: {
      operator: "Banglalink",
      recipient_phone: "+8801911998877"
    }
  },
  {
    id: "TXN-101A14",
    user_id: "USR-001",
    merchant_id: undefined,
    type: "CASH_IN",
    amount: 10000.0,
    currency: "BDT",
    status: "SUCCESS",
    channel: "BANK_TRANSFER",
    device_id: "DEV-IPHONE-14",
    location: "Banani, Dhaka",
    created_at: new Date(now - 144 * 3600 * 1000).toISOString(),
    failure_code: undefined,
    gateway_id: "GW-MTB-SWITCH",
    meta_info: {
      bank_name: "BRAC Bank Limited",
      account_last4: "9012"
    }
  },
  {
    id: "TXN-101A15",
    user_id: "USR-001",
    merchant_id: undefined,
    type: "UTILITY_BILL",
    amount: 1080.0,
    currency: "BDT",
    status: "SUCCESS",
    channel: "APP",
    device_id: "DEV-IPHONE-14",
    location: "Banani, Dhaka",
    created_at: new Date(now - 150 * 3600 * 1000).toISOString(),
    failure_code: undefined,
    gateway_id: "GW-CITY-PG",
    meta_info: {
      biller: "Titas Gas Prepaid",
      meter_no: "TITAS-44912"
    }
  },
  {
    id: "TXN-101A16",
    user_id: "USR-001",
    merchant_id: "MERCH-RYA-01",
    type: "QR_PAYMENT",
    amount: 18500.0,
    currency: "BDT",
    status: "SUCCESS",
    channel: "QR",
    device_id: "DEV-IPHONE-14",
    location: "Agargaon, Dhaka",
    created_at: new Date(now - 168 * 3600 * 1000).toISOString(),
    failure_code: undefined,
    gateway_id: "GW-CITY-PG",
    meta_info: {
      item: "Dell 27-inch 4K Monitor",
      warranty_months: 36
    }
  },
  {
    id: "TXN-101A17",
    user_id: "USR-001",
    merchant_id: undefined,
    type: "CASH_OUT",
    amount: 5000.0,
    currency: "BDT",
    status: "SUCCESS",
    channel: "ATM",
    device_id: "DEV-IPHONE-14",
    location: "Banani BRAC Bank ATM, Dhaka",
    created_at: new Date(now - 176 * 3600 * 1000).toISOString(),
    failure_code: undefined,
    gateway_id: "GW-MTB-SWITCH",
    meta_info: {
      atm_id: "ATM-BRAC-BNN-02",
      charge_bdt: 50.0
    }
  },
  {
    id: "TXN-101A18",
    user_id: "USR-001",
    merchant_id: undefined,
    type: "SALARY_DISBURSEMENT",
    amount: 45000.0,
    currency: "BDT",
    status: "SUCCESS",
    channel: "BANK_TRANSFER",
    device_id: "DEV-IPHONE-14",
    location: "Banani Corporate Hub, Dhaka",
    created_at: new Date(now - 192 * 3600 * 1000).toISOString(),
    failure_code: undefined,
    gateway_id: "GW-CITY-PG",
    meta_info: {
      disburser: "Upay Tech Hub Ltd",
      reference: "SALARY-SEP-2026"
    }
  }
];

export function getEffectiveTransactions(txns?: SyntheticTransaction[] | null): SyntheticTransaction[] {
  if (!txns || txns.length === 0) {
    return DUMMY_TRANSACTIONS;
  }
  
  // Exclude bulk systemic outage transactions (TXN-INC-) so personal ledger remains clean
  const personalTxns = txns.filter((t) => !t.id.startsWith("TXN-INC-"));
  if (personalTxns.length >= 10) {
    return personalTxns;
  }

  // Merge so we always have all 20 rich transactions available
  const existingIds = new Set(personalTxns.map((t) => t.id));
  const merged = [...personalTxns];
  for (const dummy of DUMMY_TRANSACTIONS) {
    if (!existingIds.has(dummy.id)) {
      merged.push(dummy);
    }
  }
  return merged;
}
