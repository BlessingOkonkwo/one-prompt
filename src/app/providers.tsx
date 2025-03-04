"use client";
import { Toaster } from "@/components/ui/sonner";
import { StateProvider } from "@/state/provider";
import NiceModal from "@ebay/nice-modal-react";
// app/providers.tsx

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StateProvider>
      <Toaster position="top-center" richColors />
      <NiceModal.Provider>
        <HeroUIProvider>
          <NextThemesProvider
            attribute="class"
            enableSystem={false}
            defaultTheme="light"
          >
            {children}
          </NextThemesProvider>
        </HeroUIProvider>
      </NiceModal.Provider>
    </StateProvider>
  );
}
