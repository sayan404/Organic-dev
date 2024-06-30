import { Banner } from "./Banner";
import { Metric } from "./Metric";
import { Charts } from "./Charts";
import { Table } from "./Table";

export const Body = () => {
  return (
    <div className="px-3 md:px-8">
      <Banner />
      <Metric />
      <Charts />
      <Table />
    </div>
  );
};
