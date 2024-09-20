import { BarChart, Bar, XAxis, YAxis,  Tooltip, Legend } from 'recharts';

const data = [
  {name: 'JAN', acquisition: 100000},
  {name: 'FEB', acquisition: 150000},
  {name: 'MAR', acquisition: 150000},
  {name: 'APR', acquisition: 250000},
  {name: 'MAY', acquisition: 280000},
  {name: 'JUN', acquisition: 220000},
  {name: 'JUL', acquisition: 250000},
  {name: 'AUG', acquisition: 100000},
  {name: 'SEP', acquisition: 300000},
  {name: 'OCT', acquisition: 350000},
  {name: 'NOV', acquisition: 380000},
  {name: 'DEC', acquisition: 400000},
];

const formatNumber = (num) => {
    if (num >= 1000000) {
      return `${Math.round(num / 1000000)}M`;
    } else if (num >= 1000) {
      return `${Math.round(num / 1000)}k`;
    }
    return num;
  };

export default function MyBarChart() {
  return (
    <>
        <div className='bg-white rounded-2xl'>
            <div className='px-[20px] py-[16px]'>
                <h4 className='font-semibold'>Overall Customer Acquisition</h4>
                <hr />
            </div>
            <BarChart width={600} height={300} data={data}>
            <XAxis dataKey="name" axisLine={false} tickLine={false}
            tick={{fontSize: 9, fill: "#8e948e"}}/>
            <YAxis axisLine={false} tickLine={false} 
            tickFormatter={formatNumber}
            tick={{fontSize: 9, fontWeight: "bold", fill: "#00000"}}/>
            <Tooltip wrapperStyle={{backgroundColor: 'navy'}}/>
            <Bar dataKey="acquisition" fill="#4c7e57" barSize={13} radius={[10, 10, 10, 10]} isAnimationActive={false}/>
            </BarChart>
        </div>
    </>
  );
}
