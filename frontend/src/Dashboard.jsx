export default function Dashboard() {
  return (
    <div className="min-h-screen bg-neutralGray text-textGray font-openSans">

      {/* Top Navigation Bar */}
      <header className="bg-dhakaBlue text-white px-6 py-4 flex justify-between items-center shadow">
        <h1 className="text-2xl font-montserrat font-bold">
          Dhaka Bank PLC — FX Dashboard
        </h1>

        <div className="flex items-center gap-4">
          <span className="text-dhakaGold font-semibold">Welcome, Asif</span>
          <button className="bg-dhakaGold text-dhakaBlue font-semibold px-4 py-2 rounded hover:brightness-90">
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-sm font-semibold text-gray-500">Total FX Requests</h3>
            <p className="text-3xl font-bold text-dhakaBlue mt-2">128</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-sm font-semibold text-gray-500">Pending Approvals</h3>
            <p className="text-3xl font-bold text-warningAmber mt-2">14</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-sm font-semibold text-gray-500">Completed</h3>
            <p className="text-3xl font-bold text-successGreen mt-2">96</p>
          </div>
        </div>

        {/* Recent FX Requests Table */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-montserrat font-bold mb-4 text-dhakaBlue">
            Recent FX Requests
          </h2>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-3 text-gray-600">Request ID</th>
                <th className="py-3 text-gray-600">Customer</th>
                <th className="py-3 text-gray-600">Amount</th>
                <th className="py-3 text-gray-600">Status</th>
                <th className="py-3 text-gray-600">Action</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b hover:bg-neutralGray/50">
                <td className="py-3">FX-2026-001</td>
                <td className="py-3">Rahim Traders</td>
                <td className="py-3">$12,500</td>
                <td className="py-3">
                  <span className="px-3 py-1 rounded bg-warningAmber text-white text-sm">
                    Pending
                  </span>
                </td>
                <td className="py-3">
                  <button className="text-dhakaBlue font-semibold hover:underline">
                    View
                  </button>
                </td>
              </tr>

              <tr className="border-b hover:bg-neutralGray/50">
                <td className="py-3">FX-2026-002</td>
                <td className="py-3">Global Exports</td>
                <td className="py-3">$8,900</td>
                <td className="py-3">
                  <span className="px-3 py-1 rounded bg-successGreen text-white text-sm">
                    Completed
                  </span>
                </td>
                <td className="py-3">
                  <button className="text-dhakaBlue font-semibold hover:underline">
                    View
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-neutralGray/50">
                <td className="py-3">FX-2026-003</td>
                <td className="py-3">Nexus Holdings</td>
                <td className="py-3">$5,200</td>
                <td className="py-3">
                  <span className="px-3 py-1 rounded bg-errorRed text-white text-sm">
                    Rejected
                  </span>
                </td>
                <td className="py-3">
                  <button className="text-dhakaBlue font-semibold hover:underline">
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
}
