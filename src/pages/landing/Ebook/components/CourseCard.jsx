import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { courseName, date, icons, image, name } = course;
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden dark:bg-default-50 mt-6">
      <div className="grid sm:grid-cols-5">
        <div>
          <img src={image} className="h-full w-full" />
        </div>
        <div className="sm:col-span-4 group p-6">
          <h3 className="text-2xl font-medium text-default-950 hover:text-primary transition-all cursor-pointer">
            {courseName}
          </h3>
          <p className="text-base text-default-950 mt-3">{name}</p>
          <div className="flex items-center justify-between mt-5">
            <p className="text-base text-default-950">{date}</p>
            <div className="flex items-center gap-4">
              {icons.map((icon, idx) => {
                const Icon = icon;
                return (
                  <Link to="" key={idx}>
                    <Icon className="h-5 w-5 hover:text-primary transition-all" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
