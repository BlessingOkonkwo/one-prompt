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
    <main className="font-inter h-screen flex flex-col w-full overflow-hidden text-sm">
      <ChatBotHeader />
      <div className="flex-grow overflow-hidden h-full ">{children}</div>
    </main>
  );
}
