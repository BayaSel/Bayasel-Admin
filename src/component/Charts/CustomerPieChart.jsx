import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
  { name: 'New', value: 62 },
  { name: 'Returning', value: 13 },
  { name: 'Inactive', value: 23 }
];

const COLORS = ['#175421', '#33cc33', '#cccccc'];

export default function CustomerPieChart() {
    return (
      <>
        <div className='flex gap-5 bg-white rounded-2xl w-[315px] h-[224px] px-[27px] py-[15px] items-center'>
            <div className='flex flex-col gap-[81px]'>
                <div className=''>
                    <p className='text-[20px]'>Customer</p>
                    <p className='text-[#33cc33] text-[24px] font-semibold'>3,329</p>
                </div>
                <div>
                    <div className='flex items-center  gap-1'>
                        <span className='w-[12.27px] h-[8.9px] bg-[#004d00] rounded-md'></span>
                        <p className='text-[9.75px] font-semibold'>62% </p>
                        <p className='text-[9.75px]'>New</p>
                    </div>
                    <div className='flex items-center  gap-1'>
                        <span className='w-[12.27px] h-[8.9px] bg-[#33cc33] rounded-md'></span>
                        <p className='text-[9.75px] font-semibold'>13%</p>
                        <p className='text-[9.75px]'>Returning</p>
                    </div>
                    <div className='flex items-center  gap-1'>
                        <span className='w-[12.27px] h-[8.9px] bg-[#cccccc] rounded-md'></span>
                        <p className='text-[9.75px] font-semibold'>23%</p>
                        <p className='text-[9.75px]'>Inactive</p>
                    </div>
                </div>
            </div>
            <div>
                <PieChart width={140} height={140}>
                    <Pie
                       data={data}
                       cx={70}
                       cy={70}
                       innerRadius={40}
                       outerRadius={60}
                       fill="#8884d8"
                       paddingAngle={5}
                       dataKey="value"
                    >
                      {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                      </Pie>
                      <Tooltip />
                </PieChart>
            </div>
        </div>
      </>
    );
  }