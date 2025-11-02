// src/components/Mining/ControlsPanel.tsx
export default function ControlsPanel() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-green-600 to-green-700 p-4">
      <div className="flex justify-center items-center gap-6">
        <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-bold shadow-lg">
          supliment!
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold shadow-lg">
          Upgrade
        </button>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-bold shadow-lg">
          Boost
        </button>
      </div>
    </div>
  );
}