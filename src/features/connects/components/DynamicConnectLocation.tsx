"use client"

import dynamic from "next/dynamic"

export const DynamicConnectLocation = dynamic(() => import('./ConnectLocation'), { ssr: false})
