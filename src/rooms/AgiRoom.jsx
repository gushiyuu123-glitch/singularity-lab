import AIRoomTemplate from "../components/lab/AIRoomTemplate";
import { aiRooms } from "../data/aiRooms";

export default function AgiRoom() {
  const room = aiRooms.agi;

  if (!room) return null;

  return <AIRoomTemplate room={room} />;
}