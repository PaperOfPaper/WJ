// 생산 시간표 데이터 (옵시디언 문서 정확히 반영)
const productionSchedule = {
    AB: {
        0: { // 미잔업
            A_TIME: { start: '08:30', end: '09:50' },
            BREAK1: { start: '09:50', end: '10:00' },
            B_TIME: { start: '10:00', end: '11:30' },
            LUNCH: { start: '11:30', end: '12:10' },
            C_TIME: { start: '12:10', end: '14:50' },
            BREAK2: { start: '14:50', end: '15:00' },
            D_TIME: { start: '15:00', end: '17:10' }
        },
        1: { // 1시간 잔업
            A_TIME: { start: '08:30', end: '09:50' },
            BREAK1: { start: '09:50', end: '10:00' },
            B_TIME: { start: '10:00', end: '11:30' },
            LUNCH: { start: '11:30', end: '12:10' },
            C_TIME: { start: '12:10', end: '14:50' },
            BREAK2: { start: '14:50', end: '15:00' },
            D_TIME: { start: '15:00', end: '16:50' },
            DINNER: { start: '16:50', end: '17:00' },
            E_TIME: { start: '17:00', end: '18:20' }
        },
        2: { // 2시간 잔업
            A_TIME: { start: '08:30', end: '09:50' },
            BREAK1: { start: '09:50', end: '10:00' },
            B_TIME: { start: '10:00', end: '11:30' },
            LUNCH: { start: '11:30', end: '12:10' },
            C_TIME: { start: '12:10', end: '14:50' },
            BREAK2: { start: '14:50', end: '15:00' },
            D_TIME: { start: '15:00', end: '16:30' },
            DINNER: { start: '16:30', end: '17:00' },
            E_TIME: { start: '17:00', end: '19:40' }
        }
    },
    CD: {
        0: { // 미잔업
            A_TIME: { start: '08:30', end: '09:50' },
            BREAK1: { start: '09:50', end: '10:00' },
            B_TIME: { start: '10:00', end: '11:45' },
            LUNCH: { start: '11:45', end: '12:25' },
            C_TIME: { start: '12:25', end: '14:50' },
            BREAK2: { start: '14:50', end: '15:00' },
            D_TIME: { start: '15:00', end: '17:10' }
        },
        1: { // 1시간 잔업
            A_TIME: { start: '08:30', end: '09:50' },
            BREAK1: { start: '09:50', end: '10:00' },
            B_TIME: { start: '10:00', end: '11:45' },
            LUNCH: { start: '11:45', end: '12:25' },
            C_TIME: { start: '12:25', end: '14:50' },
            BREAK2: { start: '14:50', end: '15:00' },
            D_TIME: { start: '15:00', end: '16:50' },
            DINNER: { start: '16:50', end: '17:00' },
            E_TIME: { start: '17:00', end: '18:20' }
        },
        2: { // 2시간 잔업
            A_TIME: { start: '08:30', end: '09:50' },
            BREAK1: { start: '09:50', end: '10:00' },
            B_TIME: { start: '10:00', end: '11:45' },
            LUNCH: { start: '11:45', end: '12:25' },
            C_TIME: { start: '12:25', end: '14:50' },
            BREAK2: { start: '14:50', end: '15:00' },
            D_TIME: { start: '15:00', end: '16:45' },
            DINNER: { start: '16:45', end: '17:15' },
            E_TIME: { start: '17:15', end: '19:40' }
        }
    },
    E: {
        0: { // 미잔업
            A_TIME: { start: '08:30', end: '10:00' },
            BREAK1: { start: '10:00', end: '10:10' },
            B_TIME: { start: '10:10', end: '12:00' },
            LUNCH: { start: '12:00', end: '12:40' },
            C_TIME: { start: '12:40', end: '15:00' },
            BREAK2: { start: '15:00', end: '15:10' },
            D_TIME: { start: '15:10', end: '17:10' }
        },
        1: { // 1시간 잔업
            A_TIME: { start: '08:30', end: '10:00' },
            BREAK1: { start: '10:00', end: '10:10' },
            B_TIME: { start: '10:10', end: '12:00' },
            LUNCH: { start: '12:00', end: '12:40' },
            C_TIME: { start: '12:40', end: '15:00' },
            BREAK2: { start: '15:00', end: '15:10' },
            D_TIME: { start: '15:10', end: '17:00' },
            DINNER: { start: '17:00', end: '17:10' },
            E_TIME: { start: '17:10', end: '18:20' }
        },
        2: { // 2시간 잔업
            A_TIME: { start: '08:30', end: '10:00' },
            BREAK1: { start: '10:00', end: '10:10' },
            B_TIME: { start: '10:10', end: '12:00' },
            LUNCH: { start: '12:00', end: '12:40' },
            C_TIME: { start: '12:40', end: '15:00' },
            BREAK2: { start: '15:00', end: '15:10' },
            D_TIME: { start: '15:10', end: '17:15' },
            DINNER: { start: '17:15', end: '17:45' },
            E_TIME: { start: '17:45', end: '19:40' }
        }
    }
};

// 전역 변수
let modelCount = 0;
let visitorInfoVisible = false;
let visitorInfoElement = null;

// 관리자 모드 토글 함수
function toggleVisitorInfo() {
    const password = prompt('관리자 비밀번호를 입력하세요:');
    
    // 비밀번호 확인 (여기서는 간단히 'admin123'으로 설정)
    if (password === 'admin123') {
        if (!visitorInfoVisible) {
            displayVisitorInfo();
            visitorInfoVisible = true;
            document.getElementById('toggleVisitorInfo').textContent = '접속자 정보 숨기기';
            document.getElementById('toggleVisitorInfo').classList.add('active');
        } else {
            hideVisitorInfo();
            visitorInfoVisible = false;
            document.getElementById('toggleVisitorInfo').textContent = '관리자 모드';
            document.getElementById('toggleVisitorInfo').classList.remove('active');
        }
    } else if (password !== null) {
        alert('비밀번호가 올바르지 않습니다.');
    }
}

// 접속자 정보 표시 함수
function displayVisitorInfo() {
    // 이미 표시되어 있다면 제거
    if (visitorInfoElement) {
        visitorInfoElement.remove();
    }
    
    // 접속자 정보 수집
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    const language = navigator.language;
    const screenWidth = screen.width;
    const screenHeight = screen.height;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // 모바일 기기 감지
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const deviceType = isMobile ? '모바일' : '데스크톱';
    
    // 접속 시간
    const accessTime = new Date().toLocaleString('ko-KR');
    
    // 접속자 정보 HTML 생성
    const visitorInfo = `
        <div class="visitor-info" id="visitorInfo">
            <h3>🔒 관리자 전용 - 접속자 정보</h3>
            <div class="info-grid">
                <div class="info-item">
                    <strong>접속 시간:</strong> ${accessTime}
                </div>
                <div class="info-item">
                    <strong>기기 유형:</strong> ${deviceType}
                </div>
                <div class="info-item">
                    <strong>운영체제:</strong> ${platform}
                </div>
                <div class="info-item">
                    <strong>언어:</strong> ${language}
                </div>
                <div class="info-item">
                    <strong>화면 해상도:</strong> ${screenWidth} x ${screenHeight}
                </div>
                <div class="info-item">
                    <strong>창 크기:</strong> ${windowWidth} x ${windowHeight}
                </div>
                <div class="info-item">
                    <strong>브라우저 정보:</strong> ${userAgent.substring(0, 100)}...
                </div>
            </div>
        </div>
    `;
    
    // 페이지에 정보 표시
    const header = document.querySelector('header');
    header.insertAdjacentHTML('afterend', visitorInfo);
    visitorInfoElement = document.getElementById('visitorInfo');
    
    // IP 주소 가져오기 (외부 API 사용)
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const ipInfo = document.createElement('div');
            ipInfo.className = 'info-item';
            ipInfo.innerHTML = `<strong>IP 주소:</strong> ${data.ip}`;
            document.querySelector('.info-grid').appendChild(ipInfo);
        })
        .catch(error => {
            console.log('IP 주소를 가져올 수 없습니다:', error);
        });
}

// 접속자 정보 숨기기 함수
function hideVisitorInfo() {
    if (visitorInfoElement) {
        visitorInfoElement.remove();
        visitorInfoElement = null;
    }
}

// DOM 로드 완료 후 실행
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// 앱 초기화
function initializeApp() {
    // 기본 1개 모델 폼 생성
    addModelForm();
    
    // 이벤트 리스너 등록
    document.getElementById('addModel').addEventListener('click', addModelForm);
    document.getElementById('calculateBtn').addEventListener('click', calculateProductionTime);
    document.getElementById('toggleVisitorInfo').addEventListener('click', toggleVisitorInfo);
    
    // 접속자 정보는 기본적으로 숨김
    visitorInfoVisible = false;
}

// 모델 폼 추가
function addModelForm() {
    modelCount++;
    const container = document.getElementById('modelsContainer');
    
    const modelForm = document.createElement('div');
    modelForm.className = 'model-form';
    modelForm.innerHTML = `
        <h3>모델 ${modelCount}</h3>
        <button type="button" class="remove-model" onclick="removeModelForm(this)">×</button>
        <div class="model-inputs">
            <div class="model-input-group">
                <label for="modelName${modelCount}">모델명</label>
                <input type="text" id="modelName${modelCount}" placeholder="모델명을 입력하세요" required>
            </div>
            <div class="model-input-group">
                <label for="modelQuantity${modelCount}">수량</label>
                <input type="number" id="modelQuantity${modelCount}" placeholder="수량을 입력하세요" min="1" required>
            </div>
            <div class="model-input-group">
                <label for="modelST${modelCount}">ST (초)</label>
                <input type="number" id="modelST${modelCount}" placeholder="ST를 입력하세요" min="0.1" step="0.1" required>
            </div>
            ${modelCount > 1 ? `
            <div class="model-input-group">
                <label for="lineChangeTime${modelCount}">라인교체시간 (분)</label>
                <input type="number" id="lineChangeTime${modelCount}" placeholder="라인교체시간을 입력하세요" min="0" value="0">
            </div>
            ` : ''}
        </div>
    `;
    
    container.appendChild(modelForm);
}

// 모델 폼 제거
function removeModelForm(button) {
    const modelForm = button.parentElement;
    modelForm.remove();
    updateModelNumbers();
}

// 모델 번호 업데이트
function updateModelNumbers() {
    const modelForms = document.querySelectorAll('.model-form');
    modelForms.forEach((form, index) => {
        const title = form.querySelector('h3');
        title.textContent = `모델 ${index + 1}`;
    });
    modelCount = modelForms.length;
}

// 시간을 분으로 변환
function timeToMinutes(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
}

// 분을 시간 문자열로 변환 (정수만)
function minutesToTime(minutes) {
    const totalMinutes = Math.round(minutes); // 반올림하여 정수로
    const hours = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
}

// 시간이 생산 시간대 내에 있는지 확인
function isWithinProductionTime(time, schedule) {
    const timeMinutes = timeToMinutes(time);
    
    // 생산 시간대만 확인 (쉬는시간, 점심시간, 저녁시간 제외)
    const productionPeriods = ['A_TIME', 'B_TIME', 'C_TIME', 'D_TIME', 'E_TIME'];
    
    for (const periodName of productionPeriods) {
        if (schedule[periodName]) {
            const period = schedule[periodName];
            const startMinutes = timeToMinutes(period.start);
            const endMinutes = timeToMinutes(period.end);
            
            if (timeMinutes >= startMinutes && timeMinutes < endMinutes) {
                return true;
            }
        }
    }
    return false;
}

// 다음 생산 시간대 찾기
function getNextProductionTime(currentTime, schedule) {
    const currentMinutes = timeToMinutes(currentTime);
    
    // 생산 시간대만 확인 (쉬는시간, 점심시간, 저녁시간 제외)
    const productionPeriods = ['A_TIME', 'B_TIME', 'C_TIME', 'D_TIME', 'E_TIME'];
    
    for (const periodName of productionPeriods) {
        if (schedule[periodName]) {
            const period = schedule[periodName];
            const startMinutes = timeToMinutes(period.start);
            if (currentMinutes < startMinutes) {
                return period.start;
            }
        }
    }
    
    // 다음날 8:30
    return '08:30';
}

// 생산 시간 계산
function calculateProductionTime() {
    try {
        // 입력값 가져오기
        const productionLine = document.querySelector('input[name="productionLine"]:checked').value;
        const overtime = parseInt(document.querySelector('input[name="overtime"]:checked').value);
        const startTime = document.getElementById('startTime').value;
        
        if (!productionLine || overtime === undefined || !startTime) {
            alert('기본 설정을 모두 입력해주세요.');
            return;
        }
    
    // 모델 데이터 수집
    const models = [];
    const modelForms = document.querySelectorAll('.model-form');
    
    for (let i = 0; i < modelForms.length; i++) {
        const form = modelForms[i];
        
        const modelNameInput = form.querySelector(`#modelName${i + 1}`);
        const quantityInput = form.querySelector(`#modelQuantity${i + 1}`);
        const stInput = form.querySelector(`#modelST${i + 1}`);
        
        if (!modelNameInput || !quantityInput || !stInput) {
            alert(`모델 ${i + 1}의 입력 필드를 찾을 수 없습니다.`);
            return;
        }
        
        const modelName = modelNameInput.value;
        const quantity = parseInt(quantityInput.value);
        const st = parseFloat(stInput.value) / 60; // 초를 분으로 변환
        const lineChangeTime = i > 0 ? parseInt(form.querySelector(`#lineChangeTime${i + 1}`).value) || 0 : 0;
        
        if (!modelName || !quantity || !st) {
            alert(`모델 ${i + 1}의 모든 필드를 입력해주세요.`);
            return;
        }
        
        models.push({
            name: modelName,
            quantity: quantity,
            st: st,
            lineChangeTime: lineChangeTime
        });
    }
    
    if (models.length === 0) {
        alert('최소 하나의 모델을 입력해주세요.');
        return;
    }
    
    // 생산 스케줄 가져오기
    const schedule = productionSchedule[productionLine][overtime];
    
    // 계산 실행
    const results = calculateSchedule(models, startTime, schedule, overtime, productionLine);
    
    // 결과 표시
    displayResults(results);
    } catch (error) {
        console.error('계산 중 오류 발생:', error);
        alert('계산 중 오류가 발생했습니다. 콘솔을 확인해주세요.');
    }
}

// 스케줄 계산
function calculateSchedule(models, startTime, schedule, overtime, productionLine) {
    const results = [];
    let currentTime = startTime;
    let currentDay = 1;
    
    for (let i = 0; i < models.length; i++) {
        const model = models[i];
        const totalProductionMinutes = model.quantity * model.st;
        
        // 라인교체시간 추가 (첫 번째 모델 제외)
        if (i > 0) {
            currentTime = addMinutes(currentTime, model.lineChangeTime);
        }
        
        // 생산 시작 시간이 생산 시간대 내에 있는지 확인
        if (!isWithinProductionTime(currentTime, schedule)) {
            currentTime = getNextProductionTime(currentTime, schedule);
        }
        
        const modelResult = {
            name: model.name,
            quantity: model.quantity,
            st: model.st,
            totalProductionMinutes: totalProductionMinutes,
            startTime: currentTime,
            endTime: '',
            schedule: [],
            nextDaySchedule: [],
            lineChangeTime: model.lineChangeTime
        };
        
        // 정확한 생산 시간대별 계산 (옵시디언 문서 요구사항)
        let remainingMinutes = totalProductionMinutes;
        let currentProductionTime = currentTime;
        let daySchedule = [];
        let nextDaySchedule = [];
        let isNextDay = false;
        let currentDayNumber = 1;
        let loopCount = 0;
        
        while (remainingMinutes > 0 && loopCount < 1000) {
            loopCount++;
            
            // 현재 시간이 어떤 생산 시간대에 속하는지 확인
            let currentPeriod = null;
            const productionPeriods = ['A_TIME', 'B_TIME', 'C_TIME', 'D_TIME', 'E_TIME'];
            
            for (const periodName of productionPeriods) {
                if (schedule[periodName]) {
                    const period = schedule[periodName];
                    const startMinutes = timeToMinutes(period.start);
                    const endMinutes = timeToMinutes(period.end);
                    const currentMinutes = timeToMinutes(currentProductionTime);
                    
                    if (currentMinutes >= startMinutes && currentMinutes < endMinutes) {
                        currentPeriod = { name: periodName, ...period };
                        break;
                    }
                }
            }
            
            if (!currentPeriod) {
                // 다음 생산 시간대 찾기
                currentProductionTime = getNextProductionTime(currentProductionTime, schedule);
                if (currentProductionTime === '08:30') {
                    isNextDay = true;
                    currentDayNumber++;
                }
                continue;
            }
            
            const periodStartMinutes = timeToMinutes(currentPeriod.start);
            const periodEndMinutes = timeToMinutes(currentPeriod.end);
            const currentMinutes = timeToMinutes(currentProductionTime);
            
            // 이 시간대에서 생산 가능한 시간
            const availableMinutes = periodEndMinutes - currentMinutes;
            const productionMinutes = Math.min(remainingMinutes, availableMinutes);
            
            // 생산 수량 계산 (소수점 내림)
            const productionQuantity = Math.floor(productionMinutes / model.st);
            const actualProductionMinutes = productionQuantity * model.st;
            
            if (productionQuantity > 0) {
                const periodEndTime = addMinutes(currentProductionTime, actualProductionMinutes);
                const scheduleItem = {
                    period: currentPeriod.name,
                    startTime: currentProductionTime,
                    endTime: periodEndTime,
                    quantity: productionQuantity,
                    minutes: actualProductionMinutes
                };
                
                if (isNextDay) {
                    scheduleItem.dayNumber = currentDayNumber;
                    nextDaySchedule.push(scheduleItem);
                } else {
                    scheduleItem.dayNumber = 1;
                    daySchedule.push(scheduleItem);
                }
            }
            
            remainingMinutes -= actualProductionMinutes;
            currentProductionTime = addMinutes(currentProductionTime, actualProductionMinutes);
            
            // 하루 종료 시간 확인
            let dayEndTime;
            if (productionLine === 'E') {
                dayEndTime = overtime === 0 ? '17:10' : 
                            overtime === 1 ? '18:20' : '19:40';
            } else {
                dayEndTime = overtime === 0 ? '17:10' : 
                            overtime === 1 ? '18:20' : '19:40';
            }
            
            if (timeToMinutes(currentProductionTime) >= timeToMinutes(dayEndTime)) {
                // 다음날로 넘어감
                isNextDay = true;
                currentDayNumber++;
                currentProductionTime = '08:30';
                continue;
            }
            
            // 남은 시간이 너무 작으면 (1분 이하) 무시
            if (remainingMinutes <= model.st) {
                remainingMinutes = 0;
                break;
            }
        }
        
        if (loopCount >= 1000) {
            console.warn('무한 루프 방지: 계산이 중단되었습니다.');
        }
        
        modelResult.schedule = daySchedule;
        modelResult.nextDaySchedule = nextDaySchedule;
        modelResult.endTime = currentProductionTime;
        modelResult.remainingMinutes = remainingMinutes;
        
        results.push(modelResult);
        currentTime = currentProductionTime;
    }
    
    return results;
}

// 시간에 분 추가
function addMinutes(timeStr, minutes) {
    const totalMinutes = timeToMinutes(timeStr) + minutes;
    return minutesToTime(totalMinutes);
}

// 결과 표시
function displayResults(results) {
    const container = document.getElementById('resultsContainer');
    container.innerHTML = '';
    
    results.forEach((result, index) => {
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        
        const totalQuantity = result.schedule.reduce((sum, period) => sum + period.quantity, 0);
        const actualProductionMinutes = result.schedule.reduce((sum, period) => sum + period.minutes, 0);
        
        resultItem.innerHTML = `
            <h4>${result.name}</h4>
            <div class="result-details">
                <div class="result-detail">
                    <strong>총 수량</strong>
                    <span>${result.quantity}개</span>
                </div>
                <div class="result-detail">
                    <strong>총 생산시간</strong>
                    <span>${Math.round(result.totalProductionMinutes)}분</span>
                </div>
                <div class="result-detail">
                    <strong>시작 시간</strong>
                    <span>${result.startTime}</span>
                </div>
                <div class="result-detail">
                    <strong>종료 시간</strong>
                    <span>${result.endTime}</span>
                </div>
                ${result.lineChangeTime > 0 ? `
                <div class="result-detail">
                    <strong>라인교체시간</strong>
                    <span>${result.lineChangeTime}분</span>
                </div>
                ` : ''}
            </div>
            ${result.remainingMinutes > result.st ? `
            <div class="result-detail" style="background: #fff3cd; border: 1px solid #ffeaa7; margin-top: 10px;">
                <strong>남은 생산시간</strong>
                <span>${Math.round(result.remainingMinutes)}분 (다음날 생산)</span>
            </div>
            ` : ''}
            <div class="result-schedule">
                <h5>타임별 생산수량</h5>
                ${result.schedule.map(period => `
                    <div class="schedule-item">
                        <span class="schedule-time">${period.startTime} ~ ${period.endTime}</span>
                        <span class="schedule-desc">${period.quantity}개 생산 (${period.period})</span>
                    </div>
                `).join('')}
            </div>
            ${result.nextDaySchedule.length > 0 ? `
            <div class="result-schedule" style="background: #e8f5e8; border: 1px solid #4caf50;">
                <h5 style="color: #2e7d32;">다음날 타임별 생산수량</h5>
                ${result.nextDaySchedule.map(period => `
                    <div class="schedule-item">
                        <span class="schedule-time">${period.startTime} ~ ${period.endTime}</span>
                        <span class="schedule-desc">${period.quantity}개 생산 (${period.period}) ${period.dayNumber > 2 ? `+${period.dayNumber-1}일` : ''}</span>
                    </div>
                `).join('')}
            </div>
            ` : ''}
        `;
        
        container.appendChild(resultItem);
    });
    
    // 결과 섹션 표시
    document.getElementById('resultsSection').style.display = 'block';
    
    // 결과로 스크롤
    document.getElementById('resultsSection').scrollIntoView({ 
        behavior: 'smooth' 
    });
} 