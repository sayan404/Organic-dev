import { ChartWrapper } from "./ChartWrapper";
import { Header } from "./Header";
import Chart from "react-apexcharts";

export const Charts = () => {
  return (
    <>
      <ChartWrapper>
        <div className="w-full">
          <Header header_text={"Performance"} />
          <ChartComponent />
        </div>
      </ChartWrapper>
    </>
  );
};

const state = {
  options: {
    chart: {
      id: "area",
      zoom: {
        enabled: true,
      },
    },
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
  },
  series: [
    {
      name: "Instagram",
      data: [30, 80, 45, 100, 50, 60, 90, 91],
    },
    {
      name: "Facebook",
      data: [20, 50, 90, 40, 87, 60, 60, 81],
    },
  ],
};

export const ChartComponent = () => {
  return (
    <div className="app pb-4 md:h-[300px]">
      <div className="row h-full">
        <div className="mixed-chart h-[300px] md:h-full">
          <Chart
            options={state.options}
            series={state.series}
            type="area"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};
