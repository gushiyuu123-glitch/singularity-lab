import AIRoomTemplate from "../components/lab/AIRoomTemplate";
import { aiRooms } from "../data/aiRooms";

export default function MidjourneyRoom() {
  return <AIRoomTemplate room={aiRooms.midjourney} />;
}