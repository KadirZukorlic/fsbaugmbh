import { Search } from "lucide-react";

export function SearchForm() {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="w-4 h-4 text-gray-500" />
      </div>
      <input
        type="search"
        className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
        placeholder="Suchen..."
        required
      />
    </div>
  );
}
