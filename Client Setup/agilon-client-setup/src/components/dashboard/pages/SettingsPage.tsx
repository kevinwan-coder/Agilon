import { useSetupStore } from '../../../store/useSetupStore';

export function SettingsPage() {
  const businessInfo = useSetupStore((s) => s.businessInfo);
  const branding = useSetupStore((s) => s.branding);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-dark">Settings</h1>
        <p className="text-gray mt-1">Manage your business profile and preferences.</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Business Profile */}
        <div className="bg-white rounded-xl border border-border p-6">
          <h3 className="text-lg font-semibold text-dark mb-5">Business Profile</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-xs text-gray uppercase tracking-wider mb-1">Business Name</label>
              <p className="text-sm font-medium text-dark">{businessInfo.name || '\u2014'}</p>
            </div>
            <div>
              <label className="block text-xs text-gray uppercase tracking-wider mb-1">Industry</label>
              <p className="text-sm font-medium text-dark">{businessInfo.industry || '\u2014'}</p>
            </div>
            <div>
              <label className="block text-xs text-gray uppercase tracking-wider mb-1">State</label>
              <p className="text-sm font-medium text-dark">{businessInfo.state || '\u2014'}</p>
            </div>
            <div>
              <label className="block text-xs text-gray uppercase tracking-wider mb-1">Company Size</label>
              <p className="text-sm font-medium text-dark">{businessInfo.size || '\u2014'}</p>
            </div>
          </div>
          <button className="mt-5 px-4 py-2 bg-primary-light text-primary rounded-lg text-sm font-medium cursor-pointer border-none hover:bg-primary hover:text-white transition-colors">
            Edit Profile
          </button>
        </div>

        {/* Branding */}
        <div className="bg-white rounded-xl border border-border p-6">
          <h3 className="text-lg font-semibold text-dark mb-5">Branding</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-xs text-gray uppercase tracking-wider mb-1">Template</label>
              <p className="text-sm font-medium text-dark capitalize">{branding.template || '\u2014'}</p>
            </div>
            <div>
              <label className="block text-xs text-gray uppercase tracking-wider mb-1">Logo</label>
              <p className="text-sm font-medium text-dark">{branding.logoName || 'Not uploaded'}</p>
            </div>
            <div>
              <label className="block text-xs text-gray uppercase tracking-wider mb-1">Brand Color</label>
              <div className="flex items-center gap-2">
                {branding.color && (
                  <div className="w-6 h-6 rounded-full border border-border" style={{ backgroundColor: branding.color }} />
                )}
                <span className="text-sm font-medium text-dark">{branding.color || '\u2014'}</span>
              </div>
            </div>
          </div>
          <button className="mt-5 px-4 py-2 bg-primary-light text-primary rounded-lg text-sm font-medium cursor-pointer border-none hover:bg-primary hover:text-white transition-colors">
            Edit Branding
          </button>
        </div>

        {/* Agilon Bot */}
        <div className="bg-white rounded-xl border border-border p-6">
          <h3 className="text-lg font-semibold text-dark mb-5">Agilon Bot</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-xl">
                {'\uD83E\uDD16'}
              </div>
              <div>
                <p className="text-sm font-semibold text-dark">Nanobot (OpenClaw)</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green" />
                  <span className="text-xs text-green">Online</span>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray uppercase tracking-wider mb-1">Infrastructure</label>
              <p className="text-sm font-medium text-dark">Aedify.ai Cloud</p>
            </div>
            <div>
              <label className="block text-xs text-gray uppercase tracking-wider mb-1">Database</label>
              <p className="text-sm font-medium text-dark">LightSQL</p>
            </div>
          </div>
        </div>

        {/* Deployment */}
        <div className="bg-white rounded-xl border border-border p-6">
          <h3 className="text-lg font-semibold text-dark mb-5">Deployment</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-light rounded-lg">
              <div className="flex items-center gap-3">
                <span className="text-lg">{'\uD83C\uDF10'}</span>
                <div>
                  <p className="text-sm font-medium text-dark">Web App</p>
                  <p className="text-xs text-gray">app.agilon.ai/{(businessInfo.name || 'my-business').toLowerCase().replace(/\s+/g, '-')}</p>
                </div>
              </div>
              <button className="px-3 py-1.5 bg-primary-light text-primary rounded-md text-xs font-medium cursor-pointer border-none">
                Open
              </button>
            </div>
            <div className="flex items-center justify-between p-3 bg-light rounded-lg">
              <div className="flex items-center gap-3">
                <span className="text-lg">{'\uD83D\uDCF1'}</span>
                <div>
                  <p className="text-sm font-medium text-dark">Mobile App</p>
                  <p className="text-xs text-gray">Scan QR code to access</p>
                </div>
              </div>
              <button className="px-3 py-1.5 bg-primary-light text-primary rounded-md text-xs font-medium cursor-pointer border-none">
                QR Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
