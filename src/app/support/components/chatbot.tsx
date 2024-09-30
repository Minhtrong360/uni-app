import { BubbleChat } from "flowise-embed-react";

const Chatbot = () => {
  return (
    <BubbleChat
      chatflowid="dab68c0d-e774-42fc-b94e-5bd12efb914f"
      apiHost="https://flowise-ngy8.onrender.com"
      theme={{
        button: {
          backgroundColor: "#18181B",
          right: 20,
          bottom: 20,
          size: 48, // small | medium | large | number
          dragAndDrop: true,
          iconColor: "white",
          customIconSrc:
            "https://img.icons8.com/?size=100&id=82546&format=png&color=FFFFFF",
        },

        tooltip: {
          showTooltip: false,
          tooltipMessage: "Hi There 👋!",
          tooltipBackgroundColor: "black",
          tooltipTextColor: "white",
          tooltipFontSize: 16,
        },
        chatWindow: {
          showTitle: true,
          title: "FAQs Assistant",
          // titleAvatarSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
          showAgentMessages: false,
          welcomeMessage:
            "Hello! This is support assistant. How can I help you today?",
          errorMessage: "Please give me more detail!",
          backgroundColor: "#ffffff",
          height: 700,
          width: 400,
          fontSize: 16,
          poweredByTextColor: "#303235",
          botMessage: {
            backgroundColor: "#f7f8ff",
            textColor: "#303235",
            showAvatar: false,
            avatarSrc:
              "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
          },
          userMessage: {
            backgroundColor: "#18181B",
            textColor: "#ffffff",
            showAvatar: false,
            avatarSrc:
              "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
          },
          textInput: {
            placeholder: "Type your question",
            backgroundColor: "#ffffff",
            textColor: "#303235",
            sendButtonColor: "#3B81F6",
            maxChars: 100,
            maxCharsWarningMessage:
              "You exceeded the characters limit. Please input less than 50 characters.",
            autoFocus: true, // If not used, autofocus is disabled on mobile and enabled on desktop. true enables it on both, false disables it on both.
            sendMessageSound: true,
            // sendSoundLocation: "send_message.mp3", // If this is not used, the default sound effect will be played if sendSoundMessage is true.
            receiveMessageSound: true,
            // receiveSoundLocation: "receive_message.mp3", // If this is not used, the default sound effect will be played if receiveSoundMessage is true.
          },
          feedback: {
            color: "#303235",
          },
          footer: {
            textColor: "#303235",
            text: "Powered by",
            company: "Beekrowd",
            companyLink: "https://beekrowd.com",
          },
        },
      }}
    />
  );
};

export default Chatbot;
