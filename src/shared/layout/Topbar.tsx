import { Search, Bell, Maximize2, Sparkles } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

export function Topbar() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center gap-4">
      <div className="flex-1 max-w-xl relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          placeholder="Buscar"
          className="w-full pl-9 pr-3 py-2 rounded-md bg-slate-50 border border-slate-200 text-sm outline-none focus:border-violet-300"
        />
      </div>
      <div className="ml-auto flex items-center gap-2">
        <Button variant="outline" size="sm" className="gap-1.5">
          <Sparkles className="w-4 h-4 text-violet-600" /> Asistente IA
        </Button>
        <button className="w-9 h-9 rounded-md hover:bg-slate-100 flex items-center justify-center">
          <Maximize2 className="w-4 h-4 text-slate-500" />
        </button>
        <button className="w-9 h-9 rounded-md hover:bg-slate-100 flex items-center justify-center relative">
          <Bell className="w-4 h-4 text-slate-500" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
        </button>
        <Avatar className="w-9 h-9">
          <AvatarImage src="https://i.pravatar.cc/40?img=5" />
          <AvatarFallback>DR</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

