import { Search, MoreVertical, Smile, Mic, Send, Plus, Play } from "lucide-react";
import { Card } from "../../shared/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../../shared/ui/avatar";
import { Input } from "../../shared/ui/input";

const chats = [
  { name: "Mark Williams", img: 11, last: "¿Los has llamado?", time: "Ahora", unread: 0, active: true },
  { name: "Andrew Simmons", img: 12, last: "¿Los has llamado?", time: "Ahora", unread: 2 },
  { name: "David Steiger", img: 15, last: "Escribiendo...", time: "11:49 AM", unread: 0 },
  { name: "Leena Luch", img: 22, last: "Video", time: "Hace 10 min", unread: 0 },
  { name: "Walter Hartmann", img: 13, last: "¿Sabes cuál...", time: "Ayer", unread: 0 },
  { name: "Andrea Jermaine", img: 23, last: "Audio", time: "Miércoles", unread: 0 },
  { name: "Lan Adams", img: 14, last: "Gracias", time: "Hace 1 sem", unread: 2 },
  { name: "Ann Crump", img: 24, last: "Foto", time: "Miércoles", unread: 0 },
  { name: "Julie Black", img: 25, last: "Gracias", time: "Viernes", unread: 0 },
  { name: "Jean Walker", img: 26, last: "¡Excelente trabajo!", time: "Hace 1 sem", unread: 2 },
];

const messages = [
  { from: "them", time: "8:16 PM", text: "Hola @Dr. Horace Keene\n\nDoctor, me he sentido mal últimamente. Mi presión arterial ha estado alta los últimos días. ¿Debería preocuparme?" },
  { divider: "Hoy, 28 de Marzo" },
  { from: "me", time: "8:16 PM", text: "¿Puede compartir sus lecturas recientes? ¿Ha experimentado mareos, dolores de cabeza o molestias en el pecho?" },
  { from: "them", time: "8:16 PM", text: "Mis lecturas fueron 140/90 y 145/92. Sin dolores de cabeza, pero me siento fatigado." },
  { from: "me", audio: true, time: "8:16 PM" },
  { from: "them", time: "8:16 PM", text: "Bien, registraré mis lecturas. Si se mantiene alta, ¿debería agendar una visita?" },
];

export function Messages() {
  return (
    <div className="p-6">
      <h1 style={{ fontWeight: 600 }} className="text-xl mb-4">Chat</h1>
      <div className="grid grid-cols-[340px_1fr] gap-5">
        {/* Chat list */}
        <Card className="p-0 overflow-hidden">
          <div className="px-4 py-3 border-b flex items-center justify-between">
            <h2 style={{ fontWeight: 600 }}>Chat</h2>
            <div className="flex items-center gap-2">
              <button className="w-7 h-7 rounded-md hover:bg-slate-100 flex items-center justify-center"><Search className="w-4 h-4" /></button>
              <button className="w-7 h-7 rounded-md hover:bg-slate-100 flex items-center justify-center"><MoreVertical className="w-4 h-4" /></button>
            </div>
          </div>
          <div className="max-h-[600px] overflow-y-auto">
            {chats.map((c, i) => (
              <div key={i} className={`px-4 py-3 border-b last:border-0 flex items-center gap-3 cursor-pointer ${c.active ? "bg-violet-50" : "hover:bg-slate-50"}`}>
                <Avatar className="w-10 h-10"><AvatarImage src={`https://i.pravatar.cc/40?img=${c.img}`} /><AvatarFallback>{c.name[0]}</AvatarFallback></Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm" style={{ fontWeight: 600 }}>{c.name}</span>
                    <span className="text-xs text-slate-500">{c.time}</span>
                  </div>
                  <div className="text-xs text-slate-500 truncate">{c.last}</div>
                </div>
                {c.unread > 0 && (
                  <span className="w-5 h-5 rounded-full bg-violet-600 text-white text-xs flex items-center justify-center">{c.unread}</span>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Conversation */}
        <Card className="p-0 flex flex-col">
          <div className="px-5 py-3 border-b flex items-center gap-3">
            <Avatar className="w-10 h-10"><AvatarImage src="https://i.pravatar.cc/40?img=11" /><AvatarFallback>M</AvatarFallback></Avatar>
            <div className="flex-1">
              <div className="text-sm" style={{ fontWeight: 600 }}>Mark Williams</div>
              <div className="text-xs text-slate-500">Última conexión a las 07:15 PM</div>
            </div>
            <button className="w-8 h-8 rounded-md hover:bg-slate-100 flex items-center justify-center"><MoreVertical className="w-4 h-4" /></button>
          </div>

          <div className="flex-1 px-5 py-4 space-y-4 overflow-y-auto" style={{ minHeight: 480 }}>
            {messages.map((m, i) => {
              if ("divider" in m) {
                return (
                  <div key={i} className="flex justify-center">
                    <span className="px-3 py-1 rounded-full bg-violet-600 text-white text-xs">{m.divider}</span>
                  </div>
                );
              }
              const mine = m.from === "me";
              return (
                <div key={i} className={`flex gap-2 ${mine ? "justify-end" : ""}`}>
                  {!mine && <Avatar className="w-8 h-8"><AvatarImage src="https://i.pravatar.cc/32?img=11" /><AvatarFallback>M</AvatarFallback></Avatar>}
                  <div className={mine ? "text-right max-w-[60%]" : "max-w-[60%]"}>
                    <div className="text-xs text-slate-500 mb-1">
                      {mine ? "Horace Keene" : "Mark Williams"} · {m.time}
                    </div>
                    {m.audio ? (
                      <div className="bg-slate-900 text-white px-3 py-2 rounded-lg flex items-center gap-2 w-fit ml-auto">
                        <Play className="w-3.5 h-3.5" fill="white" />
                        <div className="flex items-center gap-0.5">
                          {Array.from({ length: 18 }).map((_, k) => (
                            <span key={k} className="w-0.5 bg-white/70" style={{ height: 4 + Math.abs(Math.sin(k)) * 14 }} />
                          ))}
                        </div>
                        <span className="text-xs">0:05</span>
                      </div>
                    ) : (
                      <div className={`px-3 py-2 rounded-lg text-sm whitespace-pre-line ${mine ? "bg-slate-900 text-white" : "bg-slate-100"}`}>
                        {m.text}
                      </div>
                    )}
                  </div>
                  {mine && <Avatar className="w-8 h-8"><AvatarImage src="https://i.pravatar.cc/32?img=33" /><AvatarFallback>H</AvatarFallback></Avatar>}
                </div>
              );
            })}
          </div>

          <div className="border-t px-4 py-3 flex items-center gap-2">
            <button className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center"><Plus className="w-4 h-4" /></button>
            <button className="w-9 h-9 rounded-md hover:bg-slate-100 flex items-center justify-center"><Smile className="w-4 h-4" /></button>
            <button className="w-9 h-9 rounded-md hover:bg-slate-100 flex items-center justify-center"><Mic className="w-4 h-4" /></button>
            <Input placeholder="Escribe tu mensaje aquí..." className="flex-1" />
            <button className="w-9 h-9 rounded-md bg-violet-600 hover:bg-violet-700 text-white flex items-center justify-center"><Send className="w-4 h-4" /></button>
          </div>
        </Card>
      </div>
    </div>
  );
}

