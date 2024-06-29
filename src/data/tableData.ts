//asset import
import zepplinLogo from '../assets/apps/zepplin.png'
import metaLogo from '../assets/apps/meta.png'
import fingmaLogo from '../assets/apps/figma.png'
import vueLogo from '../assets/apps/vue.png'
import angularLogo from '../assets/apps/angular.png'

export enum Status {
  Active = "Active",
  Pending = "Pending",
  Cancelled = "Cancelled",
}

export enum Colors {
  green_primary = "#20C997",
  green_secondary = "#DCFFF5",
  orange_primary = "#FD7E14",
  orange_secondary = "#FFEAD8",
  dark_primary = "#5F6980",
  dark_secondary = "#F2F4F7",
}

export enum Months {
  January = "January",
  February = "February",
  March = "March",
  April = "April",
  May = "May",
  June = "June",
  July = "July",
  August = "August",
  September = "September",
  October = "October",
  November = "November",
  December = "December",
}

export enum Groups {
  Design = "Design",
  Finance = "Finance",
  Coding = "Coding",
  Marketing = "Marketing",
}

export const tableData = [
  {
    source: {
      logo: zepplinLogo,
      name: "Zeppin",
    },
    amount: "656.00",
    status: Status.Active,
    user_id: "114423",
    joined: Months.October,
    group: Groups.Design,
  },
  {
    source: {
      logo: fingmaLogo,
      name: "Figma",
    },
    amount: "864.00",
    status: Status.Pending,
    user_id: "76223",
    joined: Months.June,
    group: Groups.Finance,
  },
  {
    source: {
      logo: metaLogo,
      name: "Meta",
    },
    amount: "176.00",
    status: Status.Cancelled,
    user_id: "89453",
    joined: Months.March,
    group: Groups.Coding,
  },
  {
    source: {
      logo: angularLogo,
      name: "Angular",
    },
    amount: "49.00",
    status: Status.Active,
    user_id: "11467",
    joined: Months.February,
    group: Groups.Marketing,
  },
  {
    source: {
      logo: vueLogo,
      name: "Vue",
    },
    amount: "999.00",
    status: Status.Active,
    user_id: "67385",
    joined: Months.October,
    group: Groups.Finance,
  },
];
