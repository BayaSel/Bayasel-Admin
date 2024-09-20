import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    {name: 'JAN', sales: 0},
    {name: 'FEB', sales: 70000},
    {name: 'MAR', sales: 50000},
    {name: 'APR', sales: 30000},
    {name: 'MAY', sales: 270000},
    {name: 'JUN', sales: 150000},
    {name: 'JUL', sales: 270000},
    {name: 'AUG', sales: 270000},
    {name: 'SEP', sales: 220000},
    {name: 'OCT', sales: 240000},
    {name: 'NOV', sales: 310000},
    {name: 'DEC', sales: 400000},
];

const formatNumber = (num) => {
    if (num >= 1000000) {
      return `${Math.round(num / 1000000)}M`;
    } else if (num >= 1000) {
      return `${Math.round(num / 1000)}k`;
    }
    return num;
  };

export default function MyLineChart() {
  return (
    <>
        <div className='bg-white rounded-2xl'>
            <div className='px-[20px] py-[16px]'>
                <h4 className='font-semibold'>Overall Customer Acquisition</h4>
                <hr />
            </div>
            <LineChart width={600} height={300} data={data}>
            <defs>
            <linearGradient id="salesGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#e9f6eb', stopOpacity: 1 }} />
              <stop offset="80%" style={{ stopColor: '#4c7e57', stopOpacity: 1 }} />
            </linearGradient>
            </defs>
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 9, fill: "#8e948e"}}/>
            <YAxis axisLine={false} tickLine={false}
            tickFormatter={formatNumber}
            tick={{fontSize: 9, fontWeight: "bold", fill: "#00000"}}/>
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="url(#salesGradient)" strokeWidth={8} dot={false} strokeLinecap='round'/>
            </LineChart>
        </div>
    </>
  );
}
