const FILES = [
  { name: 'Q1_Financial_Report.pdf', size: '2.4 MB', date: 'Feb 15, 2026', type: 'pdf', icon: '\uD83D\uDCC4' },
  { name: 'Employee_Contracts/', size: '12 files', date: 'Feb 14, 2026', type: 'folder', icon: '\uD83D\uDCC1' },
  { name: 'Invoice_1042_AcmeCorp.pdf', size: '340 KB', date: 'Feb 18, 2026', type: 'pdf', icon: '\uD83D\uDCC4' },
  { name: 'Tax_Estimates_2026.xlsx', size: '1.1 MB', date: 'Feb 10, 2026', type: 'excel', icon: '\uD83D\uDCCA' },
  { name: 'NDA_ClientX.pdf', size: '520 KB', date: 'Feb 18, 2026', type: 'pdf', icon: '\uD83D\uDD12' },
  { name: 'Meeting_Notes/', size: '8 files', date: 'Feb 17, 2026', type: 'folder', icon: '\uD83D\uDCC1' },
  { name: 'Payroll_Feb2026.csv', size: '890 KB', date: 'Feb 16, 2026', type: 'csv', icon: '\uD83D\uDCCB' },
  { name: 'Company_Logo.png', size: '156 KB', date: 'Feb 1, 2026', type: 'image', icon: '\uD83D\uDDBC\uFE0F' },
];

export function StoragePage() {
  const usedGB = 2.4;
  const totalGB = 10;
  const percent = (usedGB / totalGB) * 100;

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-dark">Storage</h1>
          <p className="text-gray mt-1">Manage your files and documents on Aedify cloud.</p>
        </div>
        <button className="px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold cursor-pointer border-none hover:bg-primary-hover transition-colors">
          {'\uD83D\uDCE4'} Upload Files
        </button>
      </div>

      {/* Storage bar */}
      <div className="bg-white rounded-xl border border-border p-5 mb-6">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-sm font-semibold text-dark">Storage Usage</span>
          <span className="text-sm text-gray">{usedGB} GB of {totalGB} GB used</span>
        </div>
        <div className="w-full h-3 bg-light rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all"
            style={{ width: `${percent}%` }}
          />
        </div>
        <div className="flex gap-6 mt-3">
          <span className="text-xs text-gray">{'\uD83D\uDCC4'} Documents: 1.8 GB</span>
          <span className="text-xs text-gray">{'\uD83D\uDDBC\uFE0F'} Images: 0.3 GB</span>
          <span className="text-xs text-gray">{'\uD83D\uDCCA'} Spreadsheets: 0.3 GB</span>
        </div>
      </div>

      {/* File list */}
      <div className="bg-white rounded-xl border border-border">
        <div className="px-5 py-4 border-b border-border flex items-center justify-between">
          <h3 className="font-semibold text-dark">Files</h3>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search files..."
              className="px-3 py-1.5 bg-light border border-border rounded-lg text-sm text-dark placeholder:text-gray-light focus:outline-none focus:border-primary"
            />
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-xs text-gray font-semibold uppercase tracking-wider px-5 py-3">Name</th>
              <th className="text-left text-xs text-gray font-semibold uppercase tracking-wider px-5 py-3">Size</th>
              <th className="text-left text-xs text-gray font-semibold uppercase tracking-wider px-5 py-3">Modified</th>
              <th className="text-right text-xs text-gray font-semibold uppercase tracking-wider px-5 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {FILES.map((file) => (
              <tr key={file.name} className="border-b border-border last:border-none hover:bg-light transition-colors cursor-pointer">
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{file.icon}</span>
                    <span className="text-sm font-medium text-dark">{file.name}</span>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-sm text-gray">{file.size}</td>
                <td className="px-5 py-3.5 text-sm text-gray">{file.date}</td>
                <td className="px-5 py-3.5 text-right">
                  <button className="text-sm text-primary bg-transparent border-none cursor-pointer hover:underline font-medium">
                    {file.type === 'folder' ? 'Open' : 'Download'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
