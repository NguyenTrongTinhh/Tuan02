const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
  ]);
  
  // 1. Tạo mảng `events` với các sự kiện không trùng lặp
  const events = [...new Set(gameEvents.values())];
  console.log(events);
  
  // 2. Xóa sự kiện thẻ vàng ở phút 64
  gameEvents.delete(64);
  
  // 3. Tính toán và in ra thời gian trung bình giữa các sự kiện
  const time = [...gameEvents.keys()].pop();
  console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);
  
  // 4. Duyệt và in từng sự kiện với dấu hiệu của nửa đầu hay nửa sau
  for (const [minute, event] of gameEvents) {
    const half = minute <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
    console.log(`${half} ${minute}: ${event}`);
  }
  