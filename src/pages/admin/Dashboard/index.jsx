import { AdminBreadcrumb } from "@/components";
import ProgressCard from "./components/ProgressCard";
import RecentOrders from "./components/RecentOrders";
import RevenueChart from "./components/RevenueChart";
import Sources from "./components/Sources";
import Statistics from "./components/Statistics";
import TopPerformers from "./components/TopPerformers";

const Dashboard = () => {
  return (
    <>
      <AdminBreadcrumb title="Dashboard" />
      <section>
        <div className="container">
          <div className="my-6 space-y-6">
            <Statistics />

            <div className="grid gap-6 lg:grid-cols-2">
              <ProgressCard />
              <Sources />
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <RevenueChart />
              </div>
              <TopPerformers />
            </div>
            <div className="grid grid-cols-1">
              <RecentOrders />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
