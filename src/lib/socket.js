import io from "socket.io-client";
import { serverUrl } from "./commons";

export const socket = io.connect(serverUrl);
