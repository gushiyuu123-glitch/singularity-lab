import AIRoomTemplate from "../components/lab/AIRoomTemplate";
import { aiRooms } from "../data/aiRooms";

export default function DeepSeekRoom() {
  return <AIRoomTemplate room={aiRooms.deepseek} />;
}