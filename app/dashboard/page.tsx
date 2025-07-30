import User from "./user";
import Order from "./order";
import Notification from "./notification";

export default async function Dashboard() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen text-black">
      <h1 className="text-2xl font-bold mb-6">Dashboard Page:</h1>
      <div className="flex gap-8">
        <div className="flex flex-col gap-6">
          <div className="bg-white border border-gray-200 rounded-xl shadow p-6 min-w-[320px] min-h-[120px]">
            <User />
          </div>
          <div className="bg-white border border-gray-200 rounded-xl shadow p-6 min-w-[320px] min-h-[120px]">
            <Order />
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl shadow p-6 min-w-[320px] min-h-[270px] flex items-start">
          <Notification />
        </div>
      </div>
    </div>
  );
}
