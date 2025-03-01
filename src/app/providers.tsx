'use client'
import { StateProvider } from "@/state/provider";
// app/providers.tsx

import { HeroUIProvider } from "@heroui/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <StateProvider>
    <HeroUIProvider>
           <NextThemesProvider attribute="class" enableSystem={false} defaultTheme='light'>
        {children}
      </NextThemesProvider>
     
    </HeroUIProvider>
    </StateProvider>
  )
}