const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// CORS 설정
app.use(cors());
app.use(express.json());

// 데이터 파일 경로
const dataFile = path.join(__dirname, 'db.json');

// 초기 데이터 로드
let data = { visitors: [], calculations: [] };
if (fs.existsSync(dataFile)) {
    data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
}

// 데이터 저장 함수
function saveData() {
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
}

// 접속자 정보 수집 API
app.post('/api/visitors', (req, res) => {
    try {
        const visitorData = {
            id: Date.now().toString(),
            ...req.body,
            timestamp: new Date().toISOString()
        };
        
        data.visitors.push(visitorData);
        saveData();
        
        console.log('Visitor data saved:', visitorData);
        res.status(201).json({ success: true, id: visitorData.id });
    } catch (error) {
        console.error('Error saving visitor data:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// 계산 데이터 수집 API
app.post('/api/calculations', (req, res) => {
    try {
        const calculationData = {
            id: Date.now().toString(),
            ...req.body,
            timestamp: new Date().toISOString()
        };
        
        data.calculations.push(calculationData);
        saveData();
        
        console.log('Calculation data saved:', calculationData);
        res.status(201).json({ success: true, id: calculationData.id });
    } catch (error) {
        console.error('Error saving calculation data:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// 데이터 조회 API
app.get('/api/visitors', (req, res) => {
    res.json(data.visitors);
});

app.get('/api/calculations', (req, res) => {
    res.json(data.calculations);
});

// 전체 데이터 조회 API
app.get('/api/data', (req, res) => {
    res.json(data);
});

// 서버 시작
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`API endpoints:`);
    console.log(`  POST /api/visitors - 접속자 정보 수집`);
    console.log(`  POST /api/calculations - 계산 데이터 수집`);
    console.log(`  GET /api/visitors - 접속자 정보 조회`);
    console.log(`  GET /api/calculations - 계산 데이터 조회`);
    console.log(`  GET /api/data - 전체 데이터 조회`);
}); 