import AIRoomTemplate from "../components/lab/AIRoomTemplate";
import { aiRooms } from "../data/aiRooms";

export default function ChatGPTRoom() {
  return <AIRoomTemplate room={aiRooms.chatgpt} />;
}