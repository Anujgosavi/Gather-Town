const rtcConfig = {
  iceServers: [
    { urls: ["stun:bn-turn1.xirsys.com"] },
    {
      username:
        "lk11OZP5aa3h51oLgGVIOg8q9D623_Rsp8vWjV3GxdjxsprkjyNOlvuJQQRuHx1QAAAAAGhmmBRUdXJuQW51ag==",
      credential: "b0377942-581c-11f0-8bcc-0242ac140004",
      urls: [
        "turn:bn-turn1.xirsys.com:80?transport=udp",
        "turn:bn-turn1.xirsys.com:3478?transport=udp",
        "turn:bn-turn1.xirsys.com:80?transport=tcp",
        "turn:bn-turn1.xirsys.com:3478?transport=tcp",
        "turns:bn-turn1.xirsys.com:443?transport=tcp",
        "turns:bn-turn1.xirsys.com:5349?transport=tcp",
      ],
    },
  ],
};

export default rtcConfig;
