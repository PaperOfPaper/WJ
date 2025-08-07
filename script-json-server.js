// JSON Server 데이터 수집 기능 (Firebase 대안)
async function collectVisitorDataJSON() {
    try {
        const visitorData = {
            접속시간: new Date().toLocaleString('ko-KR'),
            기기유형: navigator.userAgent.includes('Mobile') ? '모바일' : '데스크톱',
            운영체제: navigator.platform,
            언어: navigator.language,
            화면해상도: `${screen.width} x ${screen.height}`,
            창크기: `${window.innerWidth} x ${window.innerHeight}`,
            브라우저정보: navigator.userAgent,
            IP주소: '확인 중...'
        };

        // IP 주소 가져오기
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            visitorData.IP주소 = data.ip;
        } catch (error) {
            visitorData.IP주소 = '확인 실패';
        }

        // JSON Server에 저장
        const response = await fetch('http://localhost:3001/api/visitors', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(visitorData)
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Visitor data saved with ID: ', result.id);
            return visitorData;
        } else {
            throw new Error('Failed to save visitor data');
        }
    } catch (error) {
        console.error('Error collecting visitor data: ', error);
    }
}

async function collectCalculationDataJSON(results, inputData) {
    try {
        const calculationData = {
            계산시간: new Date().toLocaleString('ko-KR'),
            입력데이터: inputData,
            결과데이터: results,
            모델수: results.length,
            총생산시간: results.reduce((sum, result) => sum + result.totalProductionMinutes, 0),
            총수량: results.reduce((sum, result) => sum + result.quantity, 0)
        };

        // JSON Server에 저장
        const response = await fetch('http://localhost:3001/api/calculations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(calculationData)
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Calculation data saved with ID: ', result.id);
            return calculationData;
        } else {
            throw new Error('Failed to save calculation data');
        }
    } catch (error) {
        console.error('Error collecting calculation data: ', error);
    }
}

// 데이터 조회 함수들
async function getVisitorData() {
    try {
        const response = await fetch('http://localhost:3001/api/visitors');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching visitor data: ', error);
        return [];
    }
}

async function getCalculationData() {
    try {
        const response = await fetch('http://localhost:3001/api/calculations');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching calculation data: ', error);
        return [];
    }
}

async function getAllData() {
    try {
        const response = await fetch('http://localhost:3001/api/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching all data: ', error);
        return { visitors: [], calculations: [] };
    }
}

// 사용 예시:
// 1. 페이지 로드 시: collectVisitorDataJSON()
// 2. 계산 완료 시: collectCalculationDataJSON(results, inputData)
// 3. 데이터 조회: getVisitorData(), getCalculationData(), getAllData() 