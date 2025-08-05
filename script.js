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
let currentCalculationResults = null; // 현재 계산 결과 저장

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
    document.getElementById('checkCurrentTimeBtn').addEventListener('click', checkCurrentTimeProduction);
    document.getElementById('clearResultsBtn').addEventListener('click', clearResults);
    document.getElementById('toggleVisitorInfo').addEventListener('click', toggleVisitorInfo);
    
    // 시간 리셋 버튼 이벤트 리스너 등록
    document.getElementById('resetStartTime').addEventListener('click', resetStartTime);
    document.getElementById('resetEndTime').addEventListener('click', resetEndTime);
    
    // 시간대 선택 버튼 이벤트 리스너 등록
    const timePeriodButtons = document.querySelectorAll('.btn-time-period');
    timePeriodButtons.forEach(button => {
        button.addEventListener('click', handleTimePeriodClick);
    });
    
    // 라디오 버튼 변경 시 시간대 버튼 상태 업데이트
    document.querySelectorAll('input[name="productionLine"], input[name="overtime"]').forEach(radio => {
        radio.addEventListener('change', updateTimePeriodButtons);
    });
    
    // 초기 시간대 버튼 상태 설정
    updateTimePeriodButtons();
    
    // 시작 시간 입력 변경 시 시간대 버튼 상태 업데이트
    document.getElementById('startTime').addEventListener('input', function() {
        updateTimePeriodButtonSelection(null, this.value);
    });
    
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

// 현재 생산 시간대 찾기
function getCurrentProductionPeriod(currentTime, schedule) {
    const currentMinutes = timeToMinutes(currentTime);
    
    // 생산 시간대만 확인 (쉬는시간, 점심시간, 저녁시간 제외)
    const productionPeriods = ['A_TIME', 'B_TIME', 'C_TIME', 'D_TIME', 'E_TIME'];
    
    for (const periodName of productionPeriods) {
        if (schedule[periodName]) {
            const period = schedule[periodName];
            const startMinutes = timeToMinutes(period.start);
            const endMinutes = timeToMinutes(period.end);
            
            if (currentMinutes >= startMinutes && currentMinutes < endMinutes) {
                return { name: periodName, ...period };
            }
        }
    }
    
    return null;
}

// 생산 시간 계산
function calculateProductionTime() {
    try {
        // 현재시간 확인 버튼 숨기기
        document.getElementById('currentTimeSection').style.display = 'none';
        
        // 입력값 가져오기
        const productionLine = document.querySelector('input[name="productionLine"]:checked').value;
        const overtime = parseInt(document.querySelector('input[name="overtime"]:checked').value);
        const startTime = document.getElementById('startTime').value;
        const endTime = document.getElementById('endTime').value;
        
        if (!productionLine || overtime === undefined || !startTime) {
            alert('기본 설정을 모두 입력해주세요.');
            return;
        }
        
        // 종료시간 유효성 검사
        if (endTime && timeToMinutes(endTime) <= timeToMinutes(startTime)) {
            alert('종료시간은 시작시간보다 늦어야 합니다.');
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
    const results = calculateSchedule(models, startTime, schedule, overtime, productionLine, endTime);
    
    // 결과 표시
    displayResults(results, endTime);
    } catch (error) {
        console.error('계산 중 오류 발생:', error);
        alert('계산 중 오류가 발생했습니다. 콘솔을 확인해주세요.');
    }
}

// 스케줄 계산
function calculateSchedule(models, startTime, schedule, overtime, productionLine, endTime) {
    const results = [];
    let currentTime = startTime;
    let currentDay = 1;
    let dayNumber = 1; // 전체 모델에 대한 일자 추적
    
    for (let i = 0; i < models.length; i++) {
        const model = models[i];
        const totalProductionMinutes = model.quantity * model.st;
        
        // 라인교체시간 추가 (첫 번째 모델 제외)
        if (i > 0) {
            // 라인교체시간이 쉬는시간에 걸치는지 확인하고 처리
            const lineChangeResult = handleLineChangeTime(currentTime, model.lineChangeTime, schedule);
            currentTime = lineChangeResult.newTime;
            dayNumber = lineChangeResult.newDayNumber;
        }
        
        // 생산 시작 시간이 생산 시간대 내에 있는지 확인
        if (!isWithinProductionTime(currentTime, schedule)) {
            currentTime = getNextProductionTime(currentTime, schedule);
            // 다음날로 넘어간 경우 dayNumber 증가
            if (currentTime === '08:30') {
                dayNumber++;
            }
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
            lineChangeTime: model.lineChangeTime,
            dayNumber: dayNumber // 현재 모델의 시작 일자
        };
        
        // 정확한 생산 시간대별 계산 (옵시디언 문서 요구사항)
        let remainingMinutes = totalProductionMinutes;
        let currentProductionTime = currentTime;
        let daySchedule = [];
        let nextDaySchedule = [];
        let isNextDay = false;
        let currentDayNumber = dayNumber; // 현재 모델의 시작 일자로 초기화
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
            
            // 생산 가능한 시간이 ST보다 작으면 다음 시간대로 넘어감
            if (productionMinutes < model.st) {
                remainingMinutes -= productionMinutes;
                currentProductionTime = addMinutes(currentProductionTime, productionMinutes);
                continue;
            }
            
            // 생산 수량 계산 (소수점 내림)
            const productionQuantity = Math.floor(productionMinutes / model.st);
            const actualProductionMinutes = productionQuantity * model.st;
            
            // 생산 수량이 0이더라도 최소 1개는 생산 가능한지 확인
            let finalProductionQuantity = productionQuantity;
            let finalProductionMinutes = actualProductionMinutes;
            
            if (productionQuantity === 0 && productionMinutes >= model.st) {
                finalProductionQuantity = 1;
                finalProductionMinutes = model.st;
            }
            
            if (finalProductionQuantity > 0) {
                const periodEndTime = addMinutes(currentProductionTime, finalProductionMinutes);
                const scheduleItem = {
                    period: currentPeriod.name,
                    startTime: currentProductionTime,
                    endTime: periodEndTime,
                    quantity: finalProductionQuantity,
                    minutes: finalProductionMinutes,
                    dayNumber: currentDayNumber
                };
                
                if (isNextDay) {
                    nextDaySchedule.push(scheduleItem);
                } else {
                    daySchedule.push(scheduleItem);
                }
            }
            
            remainingMinutes -= finalProductionMinutes;
            currentProductionTime = addMinutes(currentProductionTime, finalProductionMinutes);
            
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
            
            // 남은 시간이 너무 작으면 (ST보다 작거나 같으면) 무시
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
        
        // 종료시간이 입력된 경우 생산 가능한 수량 계산
        if (endTime) {
            modelResult.maxQuantityInfo = calculateMaxQuantity(model, startTime, endTime, schedule, overtime, productionLine);
        }
        
        results.push(modelResult);
        currentTime = currentProductionTime;
        // 다음 모델의 시작 일자 업데이트
        if (isNextDay) {
            dayNumber = currentDayNumber;
        }
    }
    
    return results;
}

// 시간에 분 추가
function addMinutes(timeStr, minutes) {
    const totalMinutes = timeToMinutes(timeStr) + minutes;
    return minutesToTime(totalMinutes);
}

// 라인교체시간이 쉬는시간에 걸치는 경우 처리
function handleLineChangeTime(currentTime, lineChangeMinutes, schedule) {
    let remainingLineChangeMinutes = lineChangeMinutes;
    let newTime = currentTime;
    let newDayNumber = 1;
    
    // 쉬는시간 정의
    const breaks = ['BREAK1', 'BREAK2', 'LUNCH', 'DINNER'];
    
    while (remainingLineChangeMinutes > 0) {
        // 현재 시간이 쉬는시간인지 확인
        let isInBreak = false;
        let breakEndTime = null;
        
        for (const breakName of breaks) {
            if (schedule[breakName]) {
                const breakPeriod = schedule[breakName];
                const breakStartMinutes = timeToMinutes(breakPeriod.start);
                const breakEndMinutes = timeToMinutes(breakPeriod.end);
                const currentMinutes = timeToMinutes(newTime);
                
                if (currentMinutes >= breakStartMinutes && currentMinutes < breakEndMinutes) {
                    isInBreak = true;
                    breakEndTime = breakPeriod.end;
                    break;
                }
            }
        }
        
        if (isInBreak) {
            // 쉬는시간 중이면 쉬는시간 끝까지 기다림
            newTime = breakEndTime;
            // 쉬는시간 중에는 라인교체시간 소모하지 않음
        } else {
            // 생산시간 중이면 라인교체시간 적용
            const nextTime = addMinutes(newTime, remainingLineChangeMinutes);
            
            // 다음 시간이 쉬는시간에 걸치는지 확인
            let crossesBreak = false;
            for (const breakName of breaks) {
                if (schedule[breakName]) {
                    const breakPeriod = schedule[breakName];
                    const breakStartMinutes = timeToMinutes(breakPeriod.start);
                    const breakEndMinutes = timeToMinutes(breakPeriod.end);
                    const currentMinutes = timeToMinutes(newTime);
                    const nextMinutes = timeToMinutes(nextTime);
                    
                    // 라인교체시간이 쉬는시간을 걸치는 경우
                    if (currentMinutes < breakStartMinutes && nextMinutes > breakStartMinutes) {
                        crossesBreak = true;
                        // 쉬는시간 시작까지의 시간만 소모
                        const minutesToBreak = breakStartMinutes - currentMinutes;
                        remainingLineChangeMinutes -= minutesToBreak;
                        newTime = breakPeriod.start;
                        break;
                    }
                }
            }
            
            if (!crossesBreak) {
                // 쉬는시간을 걸치지 않으면 전체 라인교체시간 적용
                newTime = nextTime;
                remainingLineChangeMinutes = 0;
            }
        }
        
        // 하루 종료 시간 확인 (다음날로 넘어가는 경우)
        if (timeToMinutes(newTime) >= timeToMinutes('23:59')) {
            newTime = '08:30';
            newDayNumber++;
        }
    }
    
    return { newTime, newDayNumber };
}

// 종료시간까지 생산 가능한 수량 계산
function calculateMaxQuantity(model, startTime, endTime, schedule, overtime, productionLine) {
    if (!endTime) return null;
    
    const startMinutes = timeToMinutes(startTime);
    const endMinutes = timeToMinutes(endTime);
    
    // 종료시간이 시작시간보다 이전이면 계산 불가
    if (endMinutes <= startMinutes) {
        return { maxQuantity: 0, reason: '종료시간이 시작시간보다 이전입니다.' };
    }
    
    let availableMinutes = 0;
    let currentTime = startTime;
    let currentDay = 1;
    let loopCount = 0;
    
    while (timeToMinutes(currentTime) < endMinutes && loopCount < 1000) {
        loopCount++;
        
        // 현재 시간이 어떤 생산 시간대에 속하는지 확인
        let currentPeriod = null;
        const productionPeriods = ['A_TIME', 'B_TIME', 'C_TIME', 'D_TIME', 'E_TIME'];
        
        for (const periodName of productionPeriods) {
            if (schedule[periodName]) {
                const period = schedule[periodName];
                const startMinutes = timeToMinutes(period.start);
                const endMinutes = timeToMinutes(period.end);
                const currentMinutes = timeToMinutes(currentTime);
                
                if (currentMinutes >= startMinutes && currentMinutes < endMinutes) {
                    currentPeriod = { name: periodName, ...period };
                    break;
                }
            }
        }
        
        if (!currentPeriod) {
            // 다음 생산 시간대 찾기
            currentTime = getNextProductionTime(currentTime, schedule);
            if (currentTime === '08:30') {
                currentDay++;
            }
            continue;
        }
        
        const periodStartMinutes = timeToMinutes(currentPeriod.start);
        const periodEndMinutes = timeToMinutes(currentPeriod.end);
        const currentMinutes = timeToMinutes(currentTime);
        
        // 이 시간대에서 사용 가능한 시간
        const periodAvailableMinutes = Math.min(periodEndMinutes, endMinutes) - currentMinutes;
        
        if (periodAvailableMinutes > 0) {
            availableMinutes += periodAvailableMinutes;
        }
        
        currentTime = addMinutes(currentTime, periodAvailableMinutes);
        
        // 하루 종료 시간 확인
        let dayEndTime;
        if (productionLine === 'E') {
            dayEndTime = overtime === 0 ? '17:10' : 
                        overtime === 1 ? '18:20' : '19:40';
        } else {
            dayEndTime = overtime === 0 ? '17:10' : 
                        overtime === 1 ? '18:20' : '19:40';
        }
        
        if (timeToMinutes(currentTime) >= timeToMinutes(dayEndTime)) {
            // 다음날로 넘어감
            currentDay++;
            currentTime = '08:30';
            continue;
        }
    }
    
    if (loopCount >= 1000) {
        return { maxQuantity: 0, reason: '계산 중 오류가 발생했습니다.' };
    }
    
    // 생산 가능한 수량 계산 (라인교체시간 제외)
    const maxQuantity = Math.floor(availableMinutes / model.st);
    
    return {
        maxQuantity: maxQuantity,
        availableMinutes: availableMinutes,
        endTime: endTime
    };
}

// 현재시간까지 생산량 확인
function checkCurrentTimeProduction() {
    if (!currentCalculationResults) {
        alert('먼저 생산 시간을 계산해주세요.');
        return;
    }
    
    const currentTime = new Date();
    const currentTimeStr = `${currentTime.getHours().toString().padStart(2, '0')}:${currentTime.getMinutes().toString().padStart(2, '0')}`;
    
    const productionLine = document.querySelector('input[name="productionLine"]:checked').value;
    const overtime = parseInt(document.querySelector('input[name="overtime"]:checked').value);
    const startTime = document.getElementById('startTime').value;
    
    const schedule = productionSchedule[productionLine][overtime];
    
    // 현재시간까지의 생산량 계산
    const currentProductionResults = calculateCurrentTimeProduction(currentCalculationResults, startTime, currentTimeStr, schedule, overtime, productionLine);
    
    // 결과 표시
    displayCurrentTimeResults(currentProductionResults, currentTimeStr);
}

// 현재시간까지 생산량 계산
function calculateCurrentTimeProduction(results, startTime, currentTime, schedule, overtime, productionLine) {
    const currentProductionResults = [];
    
    results.forEach((result, index) => {
        let totalProduced = 0;
        let currentModelProduced = 0;
        let isCurrentModelActive = false;
        let currentModelStartTime = null;
        
        // 모든 모델의 스케줄을 순서대로 확인
        for (let i = 0; i <= index; i++) {
            const modelResult = results[i];
            const model = {
                name: modelResult.name,
                st: modelResult.st,
                lineChangeTime: modelResult.lineChangeTime
            };
            
            // 라인교체시간 고려
            if (i > 0) {
                const lineChangeEndTime = addMinutes(currentModelStartTime || startTime, modelResult.lineChangeTime);
                if (timeToMinutes(currentTime) <= timeToMinutes(lineChangeEndTime)) {
                    // 라인교체 중이면 이전 모델까지만 생산
                    break;
                }
            }
            
            // 현재 모델의 생산 시작 시간
            if (i === index) {
                currentModelStartTime = currentModelStartTime || startTime;
                isCurrentModelActive = true;
            }
            
            // 당일 생산량 계산
            modelResult.schedule.forEach(period => {
                const periodStartMinutes = timeToMinutes(period.startTime);
                const periodEndMinutes = timeToMinutes(period.endTime);
                const currentMinutes = timeToMinutes(currentTime);
                
                if (currentMinutes >= periodStartMinutes) {
                    if (currentMinutes >= periodEndMinutes) {
                        // 이 시간대는 완전히 생산 완료
                        if (i === index) {
                            currentModelProduced += period.quantity;
                        }
                        totalProduced += period.quantity;
                    } else {
                        // 현재 시간대에 생산 중
                        const elapsedMinutes = currentMinutes - periodStartMinutes;
                        const producedInThisPeriod = Math.floor(elapsedMinutes / model.st);
                        
                        if (i === index) {
                            currentModelProduced += producedInThisPeriod;
                        }
                        totalProduced += producedInThisPeriod;
                    }
                }
            });
            
            // 다음날 생산량 계산 (현재시간이 다음날인 경우)
            if (timeToMinutes(currentTime) > timeToMinutes('17:10')) {
                modelResult.nextDaySchedule.forEach(period => {
                    const periodStartMinutes = timeToMinutes(period.startTime);
                    const periodEndMinutes = timeToMinutes(period.endTime);
                    const currentMinutes = timeToMinutes(currentTime);
                    
                    if (currentMinutes >= periodStartMinutes) {
                        if (currentMinutes >= periodEndMinutes) {
                            // 이 시간대는 완전히 생산 완료
                            if (i === index) {
                                currentModelProduced += period.quantity;
                            }
                            totalProduced += period.quantity;
                        } else {
                            // 현재 시간대에 생산 중
                            const elapsedMinutes = currentMinutes - periodStartMinutes;
                            const producedInThisPeriod = Math.floor(elapsedMinutes / model.st);
                            
                            if (i === index) {
                                currentModelProduced += producedInThisPeriod;
                            }
                            totalProduced += producedInThisPeriod;
                        }
                    }
                });
            }
            
            // 현재 모델이 활성화된 경우, 현재 시간까지의 생산량을 더 정확히 계산
            if (i === index && isCurrentModelActive) {
                // 현재 시간이 생산 시간대 내에 있는지 확인
                if (isWithinProductionTime(currentTime, schedule)) {
                    // 현재 시간대에서의 생산량을 더 정확히 계산
                    const currentPeriod = getCurrentProductionPeriod(currentTime, schedule);
                    if (currentPeriod) {
                        const periodStartMinutes = timeToMinutes(currentPeriod.start);
                        const currentMinutes = timeToMinutes(currentTime);
                        const elapsedMinutes = currentMinutes - periodStartMinutes;
                        const additionalProduced = Math.floor(elapsedMinutes / model.st);
                        
                        if (additionalProduced > 0) {
                            currentModelProduced += additionalProduced;
                            totalProduced += additionalProduced;
                        }
                    }
                }
            }
        }
        
        currentProductionResults.push({
            name: result.name,
            totalProduced: totalProduced,
            currentModelProduced: currentModelProduced,
            isCurrentModelActive: isCurrentModelActive,
            targetQuantity: result.quantity
        });
    });
    
    return currentProductionResults;
}

// 현재시간 결과 표시
function displayCurrentTimeResults(results, currentTime) {
    const container = document.getElementById('resultsContainer');
    
    // 기존 결과 위에 현재시간 결과 추가
    const currentTimeHeader = document.createElement('div');
    currentTimeHeader.className = 'current-time-header';
    currentTimeHeader.style.cssText = `
        background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
        color: white;
        padding: 20px;
        border-radius: 12px;
        margin-bottom: 20px;
        text-align: center;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `;
    
    currentTimeHeader.innerHTML = `
        <h3 style="margin: 0 0 10px 0; font-size: 1.5rem;">🕐 현재시간 (${currentTime}) 생산량 현황</h3>
        <p style="margin: 0; font-size: 1.1rem; opacity: 0.9;">각 모델별 현재까지 생산되어야 할 수량</p>
    `;
    
    // 기존 헤더가 있으면 제거
    const existingHeader = container.querySelector('.current-time-header');
    if (existingHeader) {
        existingHeader.remove();
    }
    
    container.insertBefore(currentTimeHeader, container.firstChild);
    
    // 각 모델의 현재 생산량 표시
    results.forEach((result, index) => {
        const resultItem = container.querySelectorAll('.result-item')[index];
        if (resultItem) {
            // 기존 현재시간 표시 제거
            const existingCurrentTime = resultItem.querySelector('.current-time-production');
            if (existingCurrentTime) {
                existingCurrentTime.remove();
            }
            
            // 새로운 현재시간 표시 추가
            const currentTimeProduction = document.createElement('div');
            currentTimeProduction.className = 'current-time-production';
            currentTimeProduction.style.cssText = `
                background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
                color: white;
                padding: 15px;
                border-radius: 8px;
                margin: 15px 0;
                text-align: center;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            `;
            
            const progressPercentage = Math.round((result.totalProduced / result.targetQuantity) * 100);
            const statusText = result.isCurrentModelActive ? '현재 생산 중' : '생산 완료';
            
            currentTimeProduction.innerHTML = `
                <div style="font-weight: 600; margin-bottom: 8px; font-size: 1.1rem;">
                    현재까지 생산량: ${result.totalProduced}개 / ${result.targetQuantity}개
                </div>
                <div style="margin-bottom: 8px;">
                    <div style="background: rgba(255, 255, 255, 0.3); height: 8px; border-radius: 4px; overflow: hidden;">
                        <div style="background: white; height: 100%; width: ${Math.min(progressPercentage, 100)}%; transition: width 0.3s ease;"></div>
                    </div>
                    <div style="font-size: 0.9rem; margin-top: 5px;">진행률: ${progressPercentage}%</div>
                </div>
                <div style="font-size: 0.9rem; opacity: 0.9;">
                    ${result.isCurrentModelActive ? `현재 모델 (${result.name}) 생산량: ${result.currentModelProduced}개` : statusText}
                </div>
            `;
            
            // 결과 아이템의 맨 위에 삽입
            resultItem.insertBefore(currentTimeProduction, resultItem.firstChild);
        }
    });
    
    // 결과로 스크롤
    document.getElementById('resultsSection').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// 결과 표시
function displayResults(results, endTime) {
    // 계산 결과 저장
    currentCalculationResults = results;
    
    const container = document.getElementById('resultsContainer');
    container.innerHTML = '';
    
    results.forEach((result, index) => {
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        
        const totalQuantity = result.schedule.reduce((sum, period) => sum + period.quantity, 0);
        const actualProductionMinutes = result.schedule.reduce((sum, period) => sum + period.minutes, 0);
        
        // 당일과 다음날 생산량 계산
        const todayQuantity = result.schedule.reduce((sum, period) => sum + period.quantity, 0);
        const todayMinutes = result.schedule.reduce((sum, period) => sum + period.minutes, 0);
        const nextDayQuantity = result.nextDaySchedule.reduce((sum, period) => sum + period.quantity, 0);
        const nextDayMinutes = result.nextDaySchedule.reduce((sum, period) => sum + period.minutes, 0);
        
        // 날짜별 색상 정의
        const dayColors = [
            '#e3f2fd', // 1일차 - 연한 파랑
            '#f3e5f5', // 2일차 - 연한 보라
            '#e8f5e8', // 3일차 - 연한 초록
            '#fff3e0', // 4일차 - 연한 주황
            '#fce4ec', // 5일차 - 연한 분홍
            '#f1f8e9', // 6일차 - 연한 연두
            '#e0f2f1', // 7일차 - 연한 청록
            '#fafafa', // 8일차 - 연한 회색
            '#fff8e1', // 9일차 - 연한 노랑
            '#f5f5f5'  // 10일차 - 연한 회색
        ];
        
        // 당일과 다음날 생산량을 날짜별로 그룹화
        const allSchedules = [...result.schedule, ...result.nextDaySchedule];
        const schedulesByDay = {};
        
        allSchedules.forEach(period => {
            const day = period.dayNumber || 1;
            if (!schedulesByDay[day]) {
                schedulesByDay[day] = [];
            }
            schedulesByDay[day].push(period);
        });
        
        // 날짜별 생산량 HTML 생성
        const daySchedulesHTML = Object.keys(schedulesByDay).map(day => {
            const dayNum = parseInt(day);
            const daySchedule = schedulesByDay[day];
            const dayQuantity = daySchedule.reduce((sum, period) => sum + period.quantity, 0);
            const dayMinutes = daySchedule.reduce((sum, period) => sum + period.minutes, 0);
            const dayColor = dayColors[(dayNum - 1) % dayColors.length];
            
            // 날짜 표시 텍스트 - 전체 일수를 기준으로 절대값 사용
            let dayText = '';
            if (dayNum == 1) {
                dayText = '당일';
            } else if (dayNum == 2) {
                dayText = '다음날';
            } else {
                dayText = `+${dayNum - 1}일`;
            }
            
            return `
                <div class="result-schedule" style="background: ${dayColor}; border: 1px solid #dee2e6; margin-bottom: 10px;">
                    <h5 style="color: #2c3e50;">${dayText} 타임별 생산수량</h5>
                    <div class="schedule-summary" style="background: rgba(255,255,255,0.7); padding: 10px; margin-bottom: 10px; border-radius: 5px; border: 1px solid #dee2e6;">
                        <strong>${dayText} 총 생산수량:</strong> ${dayQuantity}개 | <strong>${dayText} 총 생산시간:</strong> ${Math.round(dayMinutes)}분
                    </div>
                    ${daySchedule.map(period => `
                        <div class="schedule-item">
                            <span class="schedule-time">${period.startTime} ~ ${period.endTime}</span>
                            <span class="schedule-desc">${period.quantity}개 생산 (${period.period})</span>
                        </div>
                    `).join('')}
                </div>
            `;
        }).join('');
        
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
                ${endTime && result.maxQuantityInfo ? `
                <div class="result-detail" style="background: #e8f5e8; border: 1px solid #4caf50; margin-top: 10px;">
                    <strong>목표 종료시간 (${endTime})까지 생산 가능한 수량</strong>
                    <span>${result.maxQuantityInfo.maxQuantity}개</span>
                    ${result.maxQuantityInfo.availableMinutes ? `
                    <br><small style="color: #2e7d32;">사용 가능한 생산시간: ${Math.round(result.maxQuantityInfo.availableMinutes)}분</small>
                    ` : ''}
                </div>
                ` : ''}
            </div>
            ${result.remainingMinutes > result.st ? `
            <div class="result-detail" style="background: #fff3cd; border: 1px solid #ffeaa7; margin-top: 10px;">
                <strong>남은 생산시간</strong>
                <span>${Math.round(result.remainingMinutes)}분 (다음날 생산)</span>
            </div>
            ` : ''}
            ${daySchedulesHTML}
        `;
        
        container.appendChild(resultItem);
    });
    
    // 결과 섹션 표시
    document.getElementById('resultsSection').style.display = 'block';
    
    // 결과로 스크롤
    document.getElementById('resultsSection').scrollIntoView({ 
        behavior: 'smooth' 
    });
    
    // 현재시간 확인 버튼 표시
    document.getElementById('currentTimeSection').style.display = 'block';
}



// 시작 시간 리셋 함수
function resetStartTime() {
    document.getElementById('startTime').value = '08:30';
}

// 종료 시간 리셋 함수
function resetEndTime() {
    document.getElementById('endTime').value = '';
}

// 시간대 선택 버튼 클릭 처리
function handleTimePeriodClick(event) {
    const button = event.target;
    const period = button.getAttribute('data-period');
    
    // 현재 선택된 생산 라인과 잔업 설정 가져오기
    const productionLine = document.querySelector('input[name="productionLine"]:checked').value;
    const overtime = parseInt(document.querySelector('input[name="overtime"]:checked').value);
    
    // 해당 스케줄 가져오기
    const schedule = productionSchedule[productionLine][overtime];
    
    // E타임이 미잔업일 때 선택된 경우 경고 메시지 표시
    if (period === 'E_TIME' && overtime === 0) {
        alert('미잔업일 때는 E타임이 존재하지 않습니다. 잔업을 선택해주세요.');
        return;
    }
    
    // 해당 시간대가 스케줄에 존재하는지 확인
    if (!schedule[period]) {
        alert('선택한 시간대가 현재 설정에 존재하지 않습니다.');
        return;
    }
    
    // 시작 시간 설정
    const startTime = schedule[period].start;
    document.getElementById('startTime').value = startTime;
    
    // 선택된 버튼 스타일 업데이트
    updateTimePeriodButtonSelection(period);
}

// 시간대 버튼 상태 업데이트 (라디오 버튼 변경 시)
function updateTimePeriodButtons() {
    const productionLine = document.querySelector('input[name="productionLine"]:checked').value;
    const overtime = parseInt(document.querySelector('input[name="overtime"]:checked').value);
    const schedule = productionSchedule[productionLine][overtime];
    
    const timePeriodButtons = document.querySelectorAll('.btn-time-period');
    
    timePeriodButtons.forEach(button => {
        const period = button.getAttribute('data-period');
        
        // E타임이 미잔업일 때 비활성화
        if (period === 'E_TIME' && overtime === 0) {
            button.classList.add('disabled');
            button.classList.remove('selected');
        } else {
            button.classList.remove('disabled');
        }
    });
    
    // 현재 시작 시간에 해당하는 버튼 선택 상태 업데이트
    const currentStartTime = document.getElementById('startTime').value;
    updateTimePeriodButtonSelection(null, currentStartTime);
}

// 시간대 버튼 선택 상태 업데이트
function updateTimePeriodButtonSelection(selectedPeriod = null, startTime = null) {
    const timePeriodButtons = document.querySelectorAll('.btn-time-period');
    
    // 모든 버튼의 선택 상태 제거
    timePeriodButtons.forEach(button => {
        button.classList.remove('selected');
    });
    
    if (selectedPeriod) {
        // 특정 시간대가 선택된 경우
        const button = document.querySelector(`[data-period="${selectedPeriod}"]`);
        if (button && !button.classList.contains('disabled')) {
            button.classList.add('selected');
        }
    } else if (startTime) {
        // 시작 시간에 해당하는 시간대 찾기
        const productionLine = document.querySelector('input[name="productionLine"]:checked').value;
        const overtime = parseInt(document.querySelector('input[name="overtime"]:checked').value);
        const schedule = productionSchedule[productionLine][overtime];
        
        for (const [periodName, period] of Object.entries(schedule)) {
            if (periodName.endsWith('_TIME') && period.start === startTime) {
                const button = document.querySelector(`[data-period="${periodName}"]`);
                if (button && !button.classList.contains('disabled')) {
                    button.classList.add('selected');
                }
                break;
            }
        }
    }
}

// 결과 지우기 함수
function clearResults() {
    // 결과 섹션 숨기기
    document.getElementById('resultsSection').style.display = 'none';
    
    // 현재시간 확인 섹션 숨기기
    document.getElementById('currentTimeSection').style.display = 'none';
    
    // 전역 변수 초기화
    currentCalculationResults = null;
}