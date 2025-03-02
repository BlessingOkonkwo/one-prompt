import type { Metadata } from "next";
import ChatBotHeader from "./chatbot-header";

export const metadata: Metadata = {
    title: "ChatBotPage",
    description: "Welcome to Chatbot",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main
            className="font-inter flex flex-col min-h-screen text-sm"
        >
            <ChatBotHeader />

            {children}
        </main>

    );
}
