export default function ComplexDashboardLayout({
  children,
  user,
  order,
  notification,
}: {
  children: React.ReactNode;
  user: React.ReactNode;
  order: React.ReactNode;
  notification: React.ReactNode;
}) {
  return (
    <div className="p-8 bg-gray-50 min-h-screen text-black">
      <h1 className="text-2xl font-bold mb-6">{children}</h1>
      <div className="flex gap-8">
        <div className="flex flex-col gap-6">
          <div className="bg-white border border-gray-200 rounded-xl shadow p-6 min-w-[320px] min-h-[120px]">
            {user}
          </div>
          <div className="bg-white border border-gray-200 rounded-xl shadow p-6 min-w-[320px] min-h-[120px]">
            {order}
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl shadow p-6 min-w-[320px] min-h-[270px] flex items-start">
          {notification}
        </div>
      </div>
    </div>
  );
}
