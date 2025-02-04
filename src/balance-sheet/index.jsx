import React from "react";
import { Header } from "./header";
import { TableTemplate } from "./table-template";
import { NetWorth } from "./netWorth";
import "./styles.css";

const assetsData = [
  {
    name: "Cash",
    description: "This is the cash we currently have on hand.",
    values: ["$25", "$30", "$28"],
  },
  {
    name: "Checking",
    description: "Our primary transactional account.",
    values: ["$54", "$56", "$53"],
  },
  {
    name: "Savings",
    description: "Funds set aside for emergencies.",
    values: ["$500", "$650", "$728"],
  },
];

const liabilitiesData = [
  {
    name: "Loans",
    description: "The outstanding balance on our startup loan.",
    values: ["$500", "$250", "$0"],
  },
  {
    name: "Expenses",
    description: "Annual anticipated expenses, such as payroll.",
    values: ["$200", "$300", "$400"],
  },
  {
    name: "Credit",
    description: "The outstanding balance on our credit card.",
    values: ["$50", "$50", "$75"],
  },
];

const year = [{ year: 2019 }, { year: 2020 }, { year: 2021 }];
export default function BalanceSheet() {
  return (
    <div className="balance-container">
      <div className="head">
        <title>Balance Sheet</title>
      </div>
      <div className="main-container">
        <Header arr={year} />
        <div className="table-wrap">
          <TableTemplate year={year} data={assetsData} title="Assets" />
          <TableTemplate
            year={year}
            data={liabilitiesData}
            title="Liabilities"
          />
          <NetWorth year={year} />
        </div>
      </div>
    </div>
  );
}
