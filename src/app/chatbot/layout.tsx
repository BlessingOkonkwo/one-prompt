import type { Metadata } from "next";
import ChatBotHeader from "../../pattern/shared/chatbot-header";

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
            className="font-inter flex flex-col w-full min-h-screen h-full text-sm"
        >
            <ChatBotHeader />

            {children}
        </main>

    );
}
