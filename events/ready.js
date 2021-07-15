module.exports = (client) => {
  console.log("[Discord API]: Đã đăng nhập ✔️ " + client.user.tag);
  client.user.setPresence({
    status: "online",  // You can show online, idle, and dnd
    activity: {
        name: "Inazuma",  // The message shown
        type: "LISTENING", // PLAYING, WATCHING, LISTENING, STREAMING,
    }
})
};