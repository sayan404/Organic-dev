import { FC } from "react";

export const ChartWrapper: FC<{children: JSX.Element}> = ({
  children,
}): JSX.Element => {
  return <div className="rounded-xl bg-white my-4 hover:shadow-lg">{children}</div>;
};
