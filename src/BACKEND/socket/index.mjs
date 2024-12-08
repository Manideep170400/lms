import { Server, socket } from "socket.io";

const io = new Server(5000, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("a user connected");
});
socket.emit("email", {
  subject: "Welcome!",
  body: "This is a test email sent via socket.io",
});
socket.on("disconnect", () => {
  console.log("user disconnected");
});

export default io;
