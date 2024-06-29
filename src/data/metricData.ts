interface Metric {
  header: {
    text: string;
    amount: string;
  };
  info: {
    badge: string;
    text: string;
    color: string;
    bg_color: string;
  };
}

export const metricData: Metric[] = [
  {
    header: {
      text: "Organ Transplants",
      amount: "55",
    },
    info: {
      badge: "+85%",
      text: "Success Rate",
      color: "#20C997",
      bg_color: "#DCFFF5"
    },
  },
  {
    header: {
      text: "Registered Donors",
      amount: "122",
    },
    info: {
      badge: "+55%",
      text: "Conversion Rate",
      color: "#DC3545",
      bg_color: "#ffe0e3"
    },
  },
  {
    header: {
      text: "Registered Receivers",
      amount: "116",
    },
    info: {
      badge: "20%",
      text: "Cure Rate",
      color: "#DC3545",
      bg_color: "#ffe0e3"
    },
  },
  {
    header: {
      text: "Organ Researved",
      amount: "6",
    },
    info: {
      badge: "+83%",
      text: "Conversion Rate",
      color: "#20C997",
      bg_color: "#DCFFF5"
    },
  },
];
