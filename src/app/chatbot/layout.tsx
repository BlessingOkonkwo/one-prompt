import type { Metadata } from "next";
import ChatBotHeader from "../../pattern/shared/chatbot-header";
import Sidebar from "@/pattern/shared/sidebar";
import Suggestions from "@/pattern/dashboard/suggestions";
import AddMessageField from "@/pattern/chat/textfield";

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
        <main className="font-inter h-screen flex flex-col w-full overflow-hidden text-sm">
            <ChatBotHeader />
            <div className="flex-grow overflow-hidden h-full  ">

                {children}

            </div>
        </main>
    );
}
