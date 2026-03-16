const express = require('express');
const app = express();

// public 폴더를 정적 파일로 서빙
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('서버 실행 중: http://localhost:3000');
});