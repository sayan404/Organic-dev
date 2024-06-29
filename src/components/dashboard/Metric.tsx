
import { FC } from 'react';
import {metricData} from '../../data/metricData'

export const Metric = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-between gap-2'>
      {metricData.map((metric, index) => {
        return <MetricCard
        key={index}
        header_text={metric.header.text}
        header_amount={metric.header.amount}
        info_badge={metric.info.badge}
        info_text={metric.info.text}
        badge_color={metric.info.color}
        badge_bg_color={metric.info.bg_color}
       />
      } )}
    </div>
  );

};

interface MetricProps {
    key: number
    header_text: string
    header_amount: string
    info_badge: string
    info_text: string
    badge_color: string
    badge_bg_color: string
}

export const MetricCard: FC<MetricProps>  = ({header_text, header_amount, info_badge, info_text, badge_color, badge_bg_color}): JSX.Element => {
    console.log(badge_bg_color);
    
  return (
    <div className="h-36 bg-white md:w-[262px] rounded-lg py-3 px-4 flex flex-col gap-2 justify-between shadow-sm hover:shadow-lg">
      {/* header */}
      <div>
        <p className="text-sm leading-[14px] text-[#5F6980]">{header_text}</p>
        <p className="text-[22px] leading-[38px] text-[#282828] font-semibold">
          {header_amount}
        </p>
      </div>

      {/* info */}
      <div className="flex gap-2 items-center">
        <p style={{color: `${badge_color}`, background: `${badge_bg_color}`}} className={`px-2 py-1 rounded-full text-xs text-center font-semibold text-[${badge_color}] bg-[${badge_bg_color}]`}>
          {info_badge}
        </p>
        <p className="text-xs font-semibold text-[#9D9FA1]">{info_text}</p>
      </div>
    </div>
  );
};
