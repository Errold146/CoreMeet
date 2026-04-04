"use client"

import Link from "next/link";
import { useChat } from "@ai-sdk/react";
import { SparklesIcon, UserCircleIcon, PaperAirplaneIcon, UsersIcon, CalendarDaysIcon, MapPinIcon, VideoCameraIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { useRef, useState, type ChangeEvent, type KeyboardEvent, type SubmitEvent } from "react";
import { Message } from "../types/ai.types";

/**
 * Devuelve el nombre de la herramienta si el part tiene output disponible,
 * manejando tanto ToolUIPart estático (type: 'tool-{name}') como
 * DynamicToolUIPart (type: 'tool-output-available', toolName: string).
 */
function getReadyToolName(part: any): string | null {
    if (part.state !== 'output-available') return null;
    if (part.type === 'tool-output-available' && part.toolName) return part.toolName as string;
    if (typeof part.type === 'string' && part.type.startsWith('tool-')) return part.type.slice(5);
    return null;
}

export function IASearch() {

    const [input, setInput] = useState('')
    const { messages, status, sendMessage } = useChat<Message>({})
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    const isLoading = status === 'streaming' || status === 'submitted'

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!input.trim() || isLoading) return
        sendMessage({ text: input })
        setInput('')
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'
        }
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSubmit(e as unknown as SubmitEvent<HTMLFormElement>)
        }
    }

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const target = e.target
        target.style.height = 'auto'
        target.style.height = `${Math.min(target.scrollHeight, 128)}px`
        setInput(target.value)
    }

    return (
        <div className="flex flex-col h-[75vh] bg-white rounded-3xl shadow-2xl border border-azul-100 overflow-hidden mt-5">

            {/* Header */}
            <div className="flex items-center gap-3 px-6 py-4 bg-linear-to-r from-azul-950 to-mirage-900 border-b border-azul-800/50">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-azul-600/25 border border-azul-500/30 shadow-inner">
                    <SparklesIcon className="w-5 h-5 text-naranja-300" />
                </div>
                <div>
                    <p className="text-white font-bold text-sm leading-tight">Asistente IA CoreMeet</p>
                    <p className="text-azul-400 text-xs">Powered by AI</p>
                </div>
                <div className="ml-auto flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${isLoading ? 'bg-naranja-400 animate-pulse' : 'bg-emerald-400'}`} />
                    <span className="text-xs text-azul-300">{isLoading ? 'Procesando...' : 'En línea'}</span>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-6 space-y-5 bg-mirage-50/40 scroll-smooth">

                {/* Empty state */}
                {messages.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-full gap-4 text-center px-8">
                        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-linear-to-br from-azul-600 to-mirage-500 shadow-xl shadow-azul-600/30">
                            <SparklesIcon className="w-10 h-10 text-naranja-200" />
                        </div>
                        <div className="space-y-1">
                            <p className="text-mirage-800 font-bold text-xl">¿En qué puedo ayudarte?</p>
                            <p className="text-mirage-400 text-sm">Busca CoreConnects y CoreCommunities usando inteligencia artificial</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-2 mt-2">
                            {['Próximos eventos', 'Comunidades activas', 'Eventos virtuales'].map(hint => (
                                <button
                                    key={hint}
                                    type="button"
                                    onClick={() => setInput(hint)}
                                    className="text-xs px-3 py-1.5 rounded-full border border-azul-200 bg-azul-50 text-azul-700 hover:bg-azul-100 hover:border-azul-400 transition-all duration-150 cursor-pointer"
                                >
                                    {hint}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Message bubbles */}
                {messages.map(message => {
                    const isUser = message.role === 'user'
                    const textContent = message.parts
                        .filter(part => part.type === 'text')
                        .map(part => (part as any).text)
                        .join('')

                    return (
                        <div key={message.id} className={`flex items-end gap-2.5 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>

                            {/* Avatar */}
                            <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full shadow-md ${
                                isUser
                                    ? 'bg-linear-to-br from-azul-600 to-azul-800'
                                    : 'bg-linear-to-br from-mirage-600 to-naranja-500'
                            }`}>
                                {isUser
                                    ? <UserCircleIcon className="w-5 h-5 text-white" />
                                    : <SparklesIcon className="w-4 h-4 text-naranja-200" />
                                }
                            </div>

                            {/* Bubble */}
                            <div className={`max-w-[75%] rounded-2xl px-4 py-3 shadow-sm ${
                                isUser
                                    ? 'bg-linear-to-br from-azul-600 to-azul-700 text-white rounded-br-none'
                                    : 'bg-white border border-mirage-200 text-mirage-900 rounded-bl-none'
                            }`}>
                                <p className={`text-[11px] font-semibold uppercase tracking-wider mb-1.5 ${isUser ? 'text-azul-200' : 'text-naranja-400'}`}>
                                    {isUser ? 'Tú' : 'CoreMeet IA'}
                                </p>

                                {textContent && (
                                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{textContent}</p>
                                )}

                                {message.parts.map((part, i) => {
                                    const toolName = getReadyToolName(part)
                                    if (!toolName) return null

                                    const output = (part as any).output

                                    if (toolName === 'getRecommendedCommunities' || toolName === 'getFeaturedCommunities') {
                                        const list = (output as { communities: Array<{ id: string; name: string; description: string | null; imageUrl: string; adminName?: string; adminImage?: string | null; membersCount?: string }> })?.communities
                                        if (!list?.length) {
                                            return <p key={i} className="text-sm text-mirage-500 italic">No se encontraron comunidades.</p>
                                        }
                                        return (
                                            <div key={i} className="mt-3 space-y-3 w-full">
                                                {list.map(c => (
                                                    <Link
                                                        key={c.id}
                                                        href={`/communities/${c.id}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="group flex gap-3 p-3 rounded-xl bg-white border border-mirage-200 hover:border-azul-400 hover:shadow-md transition-all duration-200"
                                                    >
                                                        {c.imageUrl
                                                            ? <img src={c.imageUrl} alt={c.name} className="w-14 h-14 rounded-xl object-cover shrink-0 ring-1 ring-mirage-200" />
                                                            : <div className="w-14 h-14 rounded-xl bg-azul-100 flex items-center justify-center shrink-0"><UsersIcon className="w-6 h-6 text-azul-400" /></div>
                                                        }
                                                        <div className="min-w-0 flex-1">
                                                            <div className="flex items-start justify-between gap-2">
                                                                <p className="text-sm font-bold text-mirage-800 group-hover:text-azul-600 transition-colors truncate">{c.name}</p>
                                                                <ArrowRightIcon className="w-4 h-4 text-mirage-300 group-hover:text-azul-500 shrink-0 transition-colors" />
                                                            </div>
                                                            {c.description && <p className="text-xs text-mirage-500 line-clamp-2 mt-0.5">{c.description}</p>}
                                                            <div className="flex items-center gap-3 mt-1.5">
                                                                {c.adminName && (
                                                                    <div className="flex items-center gap-1">
                                                                        {c.adminImage
                                                                            ? <img src={c.adminImage} alt={c.adminName} className="w-4 h-4 rounded-full object-cover" />
                                                                            : <UserCircleIcon className="w-4 h-4 text-mirage-400" />
                                                                        }
                                                                        <span className="text-xs text-mirage-400">{c.adminName}</span>
                                                                    </div>
                                                                )}
                                                                {c.membersCount != null && (
                                                                    <div className="flex items-center gap-1">
                                                                        <UsersIcon className="w-3.5 h-3.5 text-mirage-400" />
                                                                        <span className="text-xs text-mirage-400">{c.membersCount} miembros</span>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        )
                                    }

                                    if (toolName === 'getRecommendedConnects' || toolName === 'getUpcomingConnects' || toolName === 'getConnectsByCategory') {
                                        const connectsOutput = output as { connects: Array<{ id: string; title: string; details: string; date: string; time: string; virtual: boolean; image: string; categoryName?: string; communityName?: string; organizerName?: string; organizerImage?: string | null }>; totalFound: number }
                                        if (!connectsOutput?.connects?.length) {
                                            return <p key={i} className="text-sm text-mirage-500 italic">No se encontraron eventos próximos.</p>
                                        }
                                        return (
                                            <div key={i} className="mt-3 space-y-3 w-full">
                                                {connectsOutput.connects.map(c => (
                                                    <Link
                                                        key={c.id}
                                                        href={`/connects/${c.id}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="group flex gap-3 p-3 rounded-xl bg-white border border-mirage-200 hover:border-naranja-400 hover:shadow-md transition-all duration-200"
                                                    >
                                                        {c.image
                                                            ? <img src={c.image} alt={c.title} className="w-14 h-14 rounded-xl object-cover shrink-0 ring-1 ring-mirage-200" />
                                                            : <div className="w-14 h-14 rounded-xl bg-naranja-50 flex items-center justify-center shrink-0"><CalendarDaysIcon className="w-6 h-6 text-naranja-400" /></div>
                                                        }
                                                        <div className="min-w-0 flex-1">
                                                            <div className="flex items-start justify-between gap-2">
                                                                <p className="text-sm font-bold text-mirage-800 group-hover:text-naranja-600 transition-colors truncate">{c.title}</p>
                                                                <ArrowRightIcon className="w-4 h-4 text-mirage-300 group-hover:text-naranja-500 shrink-0 transition-colors" />
                                                            </div>
                                                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                                                                <div className="flex items-center gap-1">
                                                                    <CalendarDaysIcon className="w-3.5 h-3.5 text-mirage-400" />
                                                                    <span className="text-xs text-mirage-500">{c.date} · {c.time.slice(0, 5)}</span>
                                                                </div>
                                                                <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium ${c.virtual ? 'bg-azul-50 text-azul-600 border border-azul-200' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'}`}>
                                                                    {c.virtual ? <VideoCameraIcon className="w-3 h-3" /> : <MapPinIcon className="w-3 h-3" />}
                                                                    {c.virtual ? 'Virtual' : 'Presencial'}
                                                                </span>
                                                            </div>
                                                            {(c.categoryName || c.communityName) && (
                                                                <div className="flex flex-wrap gap-1.5 mt-1.5">
                                                                    {c.categoryName && <span className="text-xs px-2 py-0.5 rounded-full bg-naranja-50 text-naranja-600 border border-naranja-200">{c.categoryName}</span>}
                                                                    {c.communityName && <span className="text-xs px-2 py-0.5 rounded-full bg-mirage-100 text-mirage-600 border border-mirage-200">{c.communityName}</span>}
                                                                </div>
                                                            )}
                                                            {c.organizerName && (
                                                                <div className="flex items-center gap-1 mt-1.5">
                                                                    {c.organizerImage
                                                                        ? <img src={c.organizerImage} alt={c.organizerName} className="w-4 h-4 rounded-full object-cover" />
                                                                        : <UserCircleIcon className="w-4 h-4 text-mirage-400" />
                                                                    }
                                                                    <span className="text-xs text-mirage-400">Organiza: {c.organizerName}</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        )
                                    }

                                    if (toolName === 'getCategories') {
                                        const categoriesOutput = output as { categories: Array<{ id: string; name: string; slug: string; imageUrl: string }> }
                                        return (
                                            <div key={i} className="mt-3 flex flex-wrap gap-2">
                                                {categoriesOutput?.categories?.map(c => (
                                                    <Link
                                                        key={c.id}
                                                        href={`/categories/${c.id}`}
                                                        className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-azul-200 bg-azul-50 text-azul-700 hover:bg-azul-100 hover:border-azul-400 hover:shadow-sm transition-all duration-150"
                                                    >
                                                        {c.imageUrl && <img src={c.imageUrl} alt={c.name} className="w-4 h-4 rounded-full object-cover" />}
                                                        <span className="text-xs font-medium">{c.name}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        )
                                    }

                                    return null
                                })}
                            </div>
                        </div>
                    )
                })}

                {/* Typing indicator */}
                {isLoading && (
                    <div className="flex items-end gap-2.5">
                        <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-mirage-600 to-naranja-500 shadow-md">
                            <SparklesIcon className="w-4 h-4 text-naranja-200" />
                        </div>
                        <div className="bg-white border border-mirage-200 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                            <p className="text-[11px] font-semibold uppercase tracking-wider text-naranja-400 mb-1.5">CoreMeet IA</p>
                            <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 bg-mirage-400 rounded-full animate-bounce [animation-delay:0ms]" />
                                <span className="w-2 h-2 bg-mirage-400 rounded-full animate-bounce [animation-delay:150ms]" />
                                <span className="w-2 h-2 bg-mirage-400 rounded-full animate-bounce [animation-delay:300ms]" />
                            </div>
                        </div>
                    </div>
                )}

            </div>

            {/* Input area */}
            <form
                onSubmit={handleSubmit}
                className="px-4 py-4 bg-white border-t border-mirage-100"
            >
                <div className="flex items-end gap-3 bg-mirage-50 border-2 border-mirage-200 rounded-2xl px-4 py-3 focus-within:border-azul-400 focus-within:ring-2 focus-within:ring-azul-100 transition-all duration-200">
                    <textarea
                        ref={textareaRef}
                        value={input}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        rows={1}
                        placeholder="Escribe tu consulta aquí..."
                        className="flex-1 bg-transparent resize-none outline-none text-sm text-mirage-800 placeholder:text-mirage-400 leading-relaxed"
                        style={{ maxHeight: '128px' }}
                    />
                    <button
                        type="submit"
                        disabled={input.trim() === '' || isLoading}
                        className="*shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-linear-to-br from-azul-600 to-azul-700 text-white shadow-md hover:from-azul-500 hover:to-azul-600 hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none transition-all duration-200"
                    >
                        <PaperAirplaneIcon className="w-4 h-4" />
                    </button>
                </div>
                <p className="text-xs text-mirage-400 mt-2 text-center">Enter para enviar · Shift+Enter para nueva línea</p>
            </form>
        </div>
    )
}
