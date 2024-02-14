import { MdDashboardCustomize } from "react-icons/md";
import {} from "react-icons/md";

const Choose = () => {
  return (
    <div className="w-full min-h-[300px] flex items-center justify-center">
      <div
        className="w-[60%] min-h-[200px] grid grid-cols-1 gap-4 md:w-[95%]
      md:grid-cols-3 lg:w-[77%] lg:grid-cols-3 xl:w-[60%]"
      >
        <div className="bg-white h-[200px] border-solid border-blue-900 border-[1px] rounded-2xl p-5">
          <div className="flex flex-col gap-[20px]">
            <div className="text-blue-900 ">
              <MdDashboardCustomize size={30} />
            </div>
            <p className="font-bold text-[20px]">Customer</p>
            <p>We put our customers & their needs first</p>
          </div>
        </div>
        <div className="bg-white h-[200px] border-solid border-blue-900 border-[1px] rounded-2xl p-5">
          <div className="flex flex-col gap-[20px]">
            <div className="text-blue-900 ">
              <MdDashboardCustomize size={30} />
            </div>
            <p className="font-bold text-[20px]">Experience</p>
            <p>Over 10 years of experience as industry leaders</p>
          </div>
        </div>
        <div className="bg-white h-[200px] border-solid border-blue-900 border-[1px] rounded-2xl p-5">
          <div className="flex flex-col gap-[20px]">
            <div className="text-blue-900 ">
              <MdDashboardCustomize size={30} />
            </div>
            <p className="font-bold text-[20px]">Customer support</p>
            <p>Excellent customer support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
