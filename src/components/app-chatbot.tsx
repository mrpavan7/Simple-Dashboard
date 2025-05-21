import { IconMessageChatbotFilled } from "@tabler/icons-react";

export default function AppChatBot() {
  return (
    <div className="fixed flex items-center justify-center bottom-5 right-5 w-12 aspect-square rounded-full bg-green-500">
      <IconMessageChatbotFilled className="text-white" size={30} />
    </div>
  );
}
