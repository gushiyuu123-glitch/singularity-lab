import AIRoomTemplate from "../components/lab/AIRoomTemplate";
import { aiRooms } from "../data/aiRooms";

export default function AgiRoom() {
  return <AIRoomTemplate room={aiRooms.agi} />;
}