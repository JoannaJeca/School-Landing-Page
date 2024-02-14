import schools from "../assets/persona-school.webp";
import teacher from "../assets/persona-teacher.webp";
import students from "../assets/persona-student.webp";
import parents from "../assets/persona-parent.webp";

const Card = () => {
  return (
    <div className="w-full min-h-[500px] bg-white flex items-center justify-center">
      <div
        className="grid grid-row-2 w-[100%] gap-4 md:w-[100%]  sm:w-[90%] lg:w-[100%]
      xl:w-[80%] 
      "
      >
        <div className="flex justify-center flex-wrap gap-4 ">
          <div
            className="bg-red-100 h-[300px] w-[450px] mt-1 rounded-lg flex flex-row justify-between
          p-8"
          >
            <div className="w-[55%]">
              <p className="font-bold text-[20px]">Schools</p>
              <p>
                Improve efficiency by automating all the processes in your
                school with the most powerful school management platform.
              </p>
            </div>
            <div className="w-[35%] min-h-[200px]">
              <img className="w-[100%] h-[250px] " src={schools} />
            </div>
          </div>
          <div
            className="bg-blue-100 w-[450px] h-[300px] mt-1 rounded-lg flex flex-row justify-between
          p-8"
          >
            <div className="w-[55%]">
              <p className="font-bold text-[20px]">Teachers</p>
              <p>
                Create an enriching learning environment in your school by
                integrating top digital tools that make classroom operations
                seamless.
              </p>
            </div>
            <div className="w-[35%] min-h-[200px]">
              <img className="w-[100%] h-[250px] " src={teacher} />
            </div>
          </div>
        </div>
        <div className="flex  flex-wrap gap-4 justify-center">
          <div
            className="bg-slate-100 h-[300px] w-[450px] lg:mt-1 rounded-lg flex flex-row justify-between
          p-8"
          >
            <div className="w-[55%]">
              <p className="font-bold text-[20px]">Students</p>
              <p>
                Never miss a session and engage in continuous learning with the
                assistance of classroom recordings, limitless practice questions
                and so much more!
              </p>
            </div>
            <div className="w-[35%] min-h-[200px]">
              <img className="w-[100%] h-[250px] " src={students} />
            </div>
          </div>
          <div
            className="bg-orange-100 w-[450px] h-[300px] mb-3 mt-1 rounded-lg flex flex-row justify-between
          p-8"
          >
            <div className="w-[55%]">
              <p className="font-bold text-[20px]">Parents</p>
              <p>
                Get complete transparency over your ward’s progress and stay up
                to date on all school activities.
              </p>
            </div>
            <div className="w-[35%] min-h-[200px]">
              <img className="w-[100%] h-[250px] " src={parents} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
