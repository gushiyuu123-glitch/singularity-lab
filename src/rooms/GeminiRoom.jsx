import AIRoomTemplate from "../components/lab/AIRoomTemplate";
import { aiRooms } from "../data/aiRooms";

export default function GeminiRoom() {
  return <AIRoomTemplate room={aiRooms.gemini} />;
}