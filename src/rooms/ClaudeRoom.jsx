import AIRoomTemplate from "../components/lab/AIRoomTemplate";
import { aiRooms } from "../data/aiRooms";

export default function ClaudeRoom() {
  return <AIRoomTemplate room={aiRooms.claude} />;
}