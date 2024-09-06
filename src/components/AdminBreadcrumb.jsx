import { LuChevronsRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import PageMetaData from "./PageMetaData";

const AdminBreadcrumb = ({ title }) => {
  return (
    <>
      <PageMetaData title={title} />
      <section className="hidden md:block">
        <div className="container">
          <div className="my-6 rounded-lg border border-default-200 bg-white dark:bg-default-50">
            <div className="flex items-center justify-between p-6">
              <h4 className="text-lg font-medium text-default-900">{title}</h4>
              <div className="flex items-center justify-end gap-3">
                <div className="flex items-center gap-2">
                  <Link
                    to=""
                    className="text-base font-medium text-default-900 transition-all duration-200 hover:text-primary"
                  >
                    Admin
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <LuChevronsRight className="size-5 text-default-900 rtl:rotate-180" />
                  <Link
                    to=""
                    className="text-base font-medium text-default-900"
                  >
                    {title}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminBreadcrumb;
