/* ==============================================
   1. 定数定義 & 設定
   ============================================== */
// AWSのAPI Gateway URL (本番環境用に書き換えてください)
const API_URL = "https://script.google.com/macros/s/AKfycbwRT-tfBEJZw1bSdM7waIDITEeNve9boU6detJJUB5fa3cxISVrGyCdAGe8ymPIyluD/exec"; 
const SESSION_KEY_USER = 'bookingApp_User';
const SESSION_KEY_TIME = 'bookingApp_LoginTime';  // 保存するキー名(時間)
const SESSION_DURATION = 30 * 24 * 60 * 60 * 1000;   

// Base64画像データ (省略)
const IMG_7F = "data:image/png;base64,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"
const IMG_6F = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmcAAAIUCAMAAABo2ntMAAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAIpQTFRFAI/rAAAA////AAAA2dnZGDVCOVFcaHmBbn6GiZWay83OuL2/dYSLVWlyM0xYTmNspKyw0tPUj5qgQFdiHztIBCQzgo+VxcjKYXN8EjA+Cyo4R11nnaaqLEZSW253lqClJUBNfIqQsbe6qrG0v8PENU5ZMUtXAhIaBCEuAxsmBCIwAxsnAx0pAx4rYg2fZgAAAAF0Uk5TAEDm2GYAAAAHdElNRQfqAQgCCTvgkhUYAAAMFklEQVR42u3d6Xai2AKA0e67EOcIRtRyiGOq+07v/3oXFQSRjJVbSZX7+9Fl1O61Qm3PgQPSf/zxhv6U3tcfnOnrOQtuu7dsgLe99x8v95Pf9JFxxhlnnHHGGWecccYZZ5xxxhlnnHHGGWecccYZZ5xxxhlnnHHGGWecccYZZ5xxxhlnnHHGGWecccYZZ5xxxhlnnHHGGWecccYZZ5xxxhlnnHHGGWecccYZZ5xxxhlnnHHGGWecccYZZ5xxxhlnnHHGGWecccYZZ5xxxhlnnHHGGWecccYZZ5xxxhlnnHHGGWecccYZZ5xxxhlnnHHGGWecccYZZ5xxxhlnnHHGGWecccYZZ5xxxhlnnHHGGWecccYZZ5xxxhlnnHHGGWecccYZZ5xxxhlnnHHGGWecccYZZ5xxxhlnnHHGGWecccYZZ5xxxhlnnHHGGWecccYZZ5xxxhlnnHHGGWecccYZZ5xxxtnnOPtN4owzzm7e2W/zceFMnHHGGWfiTJxxxhln4kyccSbOxBlnnHEmzsQZZ+JMnHHGGWfiTJxxxhln4kyccSbOxBlnnHEmzsQZZ+JMnHHGGWfiTJxxJs7EGWeccSbOxBlnnHEmzsQZZ+JMnHHGGWfiTJxxJs7EGWeccSbOxBlnnHEmzvwdccaZOBNnnHHGmTgTZ5yJM3HGGWeciTNxxpk4E2ecccaZOBNnnHHGmTgTZ5yJM3HGGWeciTNxxpk4E2ecccaZOBNnnIkzccYZZ5yJM3HGGWeciTNxxpk4E2ecccaZOBNnnIkzccYZZ5yJM3HGGWeciTNxxpk4E2ecccaZOBNnnIkzccYZZ5yJM3HGmTgTZ5xxxpk4E2ecccaZOBNnnIkzccYZZ5yJM3HGmTgTZ5y92CIcPPTaUZz/vLnvN8erHWecvbtms9XqbfJay16qa9c4ts3f0z7+uI454+y9NapN42BbcbU6/twznnH2cc5ST/vjn/1iHj3+vOKMs+fbr3qDx/XjoDXsvuyssT05a1acRacfdnvOOKvdrR+UEN0v4pecrSbHP1q1zlaNZZczzq7Hsn6FUf9iQBpdMevHTzvbT9MH3/eccVZpt76C9L08IJ1e7hwfP2SHmZ2TtyhtsUqn2tzZZJyNiR3OOLtoO6qZGO8mxRuWhbMTr8f8QV47c9bejIqnOOOs1GR55rKcF48find8L5ydls3GTzkrVj6imDPOyj1kNB5XB0nd865asbZ/Vzg7zYrdF5wNto43Obssym1kE2WcQZsWVsLCWZhNm885m3/Zs0+cfV7zbDQ777d3D/v3q9LuWclZN582M2fLQdo8XK8KZ4MvfI6Ts8871ryaJYPmsLIocX921s6nzcxZdV2j0dx+5V/2z58fZ6dajcoJpJoKZ/f5tPmEs0U293LG2UWdbB0ienlqTZ1tixWLzjPnA4LF1x7Wft4cy1ll2oxf5WxzfLB/0dmw0QjHe844yxtfLZY94yw+nhiYBi8627w4FXN2W86y0+fDVzlblI4YSs7i3Sa8dNYvPHLGWUrk+mjzGWdHlGFQdhZ3V83RYexalE42Tc6rH5xxdmifOTvuS3XbD+H68WG8jeudbcuXMmbrZ+v8useTs/Vqt92uwvKxJ2ecZQeQx3384oRTI4xqnbXPQ9a+u2tfnA8Yn08rFE044+xydXWdPrq4aKMZ1zjrhPlXT+6rphZnscWZdOsanOVlo9J99XKLRj+u2T87WbqP88Xd/CqPTUovfrz8D4y6nHFWWdbod68uQWvVrZ/1splzWLogcrM7kezelf/1cBdwxlleftYpW94oa9vVOJscd/tHk3ySHAy7KbJFa7hLX+wseg/hcrQMB832Ng444+xcswRrk5qJ9+PziBRfO8sGss3hYHMw3mWXeEyPFwMNf7NNw9kHNi2+47TPD0HzQS2qcdY5DWidXq84moxH+W4bZ5zV93C+NrFTPQYtHTDOq9fTXnwd+HSKdDkxnnH2krP1vnguDotFtStn3evTodNf4ZvonH2JeXNVs9hR3KOl5Oz0XYFROkd2Op04LZOX780dnkpf4IyzmuOAy32rbRVf2VkvO0+1bTxXzBlnpXrZ+sTFk5PqNzDLzobZULd71lmHM86u12nnF0/mX2Xa1DnLrw0ynnH2+rKF/ceLJ+PqKYFrZxFnnL2hqM7Fs87anHH25rp11/DE55vpXTvLFj122b95dVFGtm/neJOzul2x7iuPAzrN/LpIzjh7Q/Oa9bPu+aKyS2fRsJVdPruMOePsLbVrLkpcVAe5zNmudDuNzNlds9IDZ5zVtK3ZQcvmxlFccRbnt+M73Iuj++xxAGecXa5hPF7dFW8yql7pmO+fZWepjjef5Yyzd6yglS6z7l1d6Jg7O63qNicBZ5y99YhzXbn+bNW4OheV38clWs9bq/3lwQJnnL1lQGus2/s4iLfnK2xLd2IJa85ZOt7k7G17aKV7upe+H7AJOOPsI5s81kx80/KZo0fOOPvx9tfQWhcnKO9qvl/+hLM9Z5w9OaI9VJhVvru0fNKZ8+icvaWo/L936lW/UrKuceZ6Dc7eU3fYmn9fzx82u+trYUeccfYTanDGGWf/L2fut/0pzvY1zp5a1+hwxtmHONv9/s7Mmz+56TxtUFmnXVfvXnUsbk7TmvbPOBNn4kyccSbOxBln4kyciTPOxJk440yciTNxxpk4E2ecccaZOBNnnIkzcSbOOBNn4owzcSbOxBln4kycccYZZ+JMnHEmzsQZZ5xxJs70yzpzv21xJvOmeVOciTPbnTPOxJk440yciTNxxpk4E2eciTNxJs44E2fijDPOOBNn4owzcSbOxBln4kyccSbOxJk440yciTPOxJk4E2eciTNxxhlnnIkzccaZnnfmftviTOZN86Y4E2e2O2eciTNxxpk4E2fijDNxJs44E2fiTJxxJs7EGWeccSbOxBln4kyciTPOxJk440yciTNxxpk4E2eciTNxJs44E2fijDPOOBNn4owzPe/M/bbFmcyb5k1xJs5sd844E2fijDNxJs7EGWfiTJxxJs7EmTjjTJyJM84440yciTPOxJk4E2eciTNxxpk4E2fijDNxJs44E2fiTJxxJs7EGWeccSbOxBln4kyf78x93cWZVMLKmTgTZxJn4kyccSbOxJnEmTgTZ5yJM3EmcSbOxJnEmTgTZ5/rrBGGzVa788K7ur1WPwxbt/OX07oLB61W9MK74mGrdR+OOHu55FQ4njz5lmg6Or3plpydfuNv/WH8NLLB7PQuzl7jLBq35oetNa0f1BbL9LXGQ2vVvy1n/ajVXB9+9U29ss239MVlaxNx9jpnh3922uln81vv+rO7DZNkNN2dNv1NOTv+st1N+ikbra5fH44Oc8C+2IKcvcZZ2j4d1JbVybNX+jzforNsPJ9XPoDxIN1WUXULcvYaZ+l+2CgZbS82Zz9Jmp3gtp0FQXtW+QB27pJZu24LcvYaZ8FkmcwWpc0ZJrNh/aa/KWfB9vIDuB8ljW3A2budHeaDWbEF75Nvu4Cz0wdwdB7ROutkuQ84+wFnQfCQjPKJcpp82wecnT6Ad8ldvo82T+46AWc/5iwOk/D0aJzMooCzfEQbJYP8lcY+4OwHnR026PEAczJLNgFn53az5Li8sa1+/Dh7l7NglTTi4+wwDzgrtcm3yzTg7AOcBcukd/zYdjm72KNYHwb4XTKbcPYhzqLDprz+2N66s9NAv7x+nrP3OUuNjffXH9ubd5Yaa3dPkydnH+GsnYS9/OiKs6Jxct9K+gFnH+SsM5s9JkPOqk2S2fdkwdlHOQvCJJnFnL1yu3D2Xmeb5GpRg7Mntwtn73UW1V46y1n9duHsvc66STLm7LXbhbN3OIsOLZKkd3ww4exUfLld4l/M2Z+fX/KG/vrzZvrrLdvlq/8yX9HZ3/9M+/tf/07/+R/Oiv5bbJf//oLOPn1Urc6OT7aNov3tzJv7KNq96o2ddAN+lV0r3zEXZ+JMnHEmzsQZZ+JMnIkzzsSZOJM4E2fijDNxJs4kzsSZOONMnIkzccaZOBNnnIkzcSbOOBNn4kziTJyJM87EmTgTZ5yJM3HGmTgTZ+KMM3EmziTOxJk440yciTOJM3EmzjgTZ+JMnHGmX8SZ9Fyc6Zdx9j/7fQqnwfoMpAAAAABJRU5ErkJggg=="

const mapConfig = {
    7: {
        image: IMG_7F, 
        areas: [
            { id: "Z 角", name: "Z 角", top: 11.1, left: 0.0, width: 12.0, height: 7.1, color: "rgba(0, 100, 255, 0.3)" },
            { id: "Z 中", name: "Z 中", top: 0.0, left: 56.0, width: 12.0, height: 6.8, color: "rgba(0, 100, 255, 0.3)" },
            { id: "会議室2", name: "会議室2", top: 15.0, left: 79.0, width: 21.0, height: 22.5, color: "rgba(0, 200, 80, 0.3)" },
            { id: "会議室1", name: "会議室1", top: 37.3, left: 79.0, width: 21.0, height: 15.0, color: "rgba(0, 200, 80, 0.3)" },
            { id: "応接室(8人)", name: "応接室(8人)", top: 71.0, left: 0.0, width: 22.5, height: 28.5, color: "rgba(255, 165, 0, 0.3)" },
            { id: "応接室(6人)", name: "応接室(6人)", top: 76.5, left: 22.6, width: 20.0, height: 23.0, color: "rgba(255, 165, 0, 0.3)" },
        ]
    },
    6: {
        image: IMG_6F,
        areas: [
             { id: "Ｚ １", name: "Ｚ １", top: 0.0, left: 63.4, width: 6.0, height: 17.7, color: "rgba(0, 100, 255, 0.3)" },
             { id: "Ｚ ２", name: "Ｚ ２", top: 0.0, left: 69.3, width: 6.0, height: 17.7, color: "rgba(0, 100, 255, 0.3)" },
             { id: "Ｚ ３", name: "Ｚ ３", top: 0.0, left: 75.4, width: 6.0, height: 17.7, color: "rgba(0, 100, 255, 0.3)" },
             { id: "応接室(10人)", name: "応接室(10人)", top: 0.0, left: 81.5, width: 18.2, height: 44.2, color: "rgba(255, 165, 0, 0.3)" },
             { id: "Ｚ ４", name: "Ｚ ４", top: 44.5, left: 88.8, width: 11.1, height: 7.0, color: "rgba(0, 100, 255, 0.3)" },
             { id: "Ｚ ５", name: "Ｚ ５", top: 51.9, left: 88.8, width: 11.1, height: 7.0, color: "rgba(0, 100, 255, 0.3)" },
             { id: "Ｚ ６", name: "Ｚ ６", top: 59.0, left: 88.8, width: 11.1, height: 7.2, color: "rgba(0, 100, 255, 0.3)" },
             { id: "Ｚ ７", name: "Ｚ ７", top: 66.4, left: 88.8, width: 11.1, height: 7.0, color: "rgba(0, 100, 255, 0.3)" },
             { id: "Ｚ ８", name: "Ｚ ８", top: 73.5, left: 88.8, width: 11.1, height: 7.5, color: "rgba(0, 100, 255, 0.3)" },
        ]
    }
};

const START_HOUR = 7;
const END_HOUR = 22;
const BASE_HOUR_HEIGHT = 100; 

let currentUser = null;
let masterData = { rooms: [], users: [], reservations: [], logs: [], groups: [] };

// 状態管理変数
let selectedParticipantIds = new Set();
let groupCreateSelectedIds = new Set();
let originalParticipantIds = new Set();
let currentMapRoomId = null; 
let currentFloor = 7; 
let currentTimelineFloor = 7;
let currentLogPage = 1;
const LOGS_PER_PAGE = 50;
let isDeleteMode = false;
let isEditMode = false;
let currentDetailRes = null;
let hourRowHeights = {}; 

/* ==============================================
   2. 初期化 & API通信
   ============================================== */
window.onload = () => {
  const d = new Date();
  if(document.getElementById('timeline-date')) document.getElementById('timeline-date').valueAsDate = d;
  if(document.getElementById('map-date')) document.getElementById('map-date').valueAsDate = d;

  checkAutoLogin();
  initMapResizer();
};

async function callAPI(params) {
  if(API_URL.indexOf("http") === -1) { alert("GASのURLを設定してください"); return { status: 'error' }; }
  document.getElementById('loading').style.display = 'flex';
  const options = { method: 'POST', body: JSON.stringify(params), headers: { 'Content-Type': 'text/plain;charset=utf-8' } };
  try {
    const res = await fetch(API_URL, options);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const json = await res.json();
    document.getElementById('loading').style.display = 'none';
    if (json.status === 'error') { alert("システムエラー: " + json.message); return { status: 'error' }; }
    return json;
  } catch(e) {
    document.getElementById('loading').style.display = 'none';
    alert("通信エラー: " + e.message);
    return { status: 'error' };
  }
}

async function tryLogin() {
  const id = document.getElementById('loginId').value.trim();
  const pass = document.getElementById('loginPass').value.trim();
  if(!id || !pass) return;
  document.getElementById('loading').style.display = 'flex';
  
  const url = new URL(API_URL);
  url.searchParams.append('action', 'login');
  url.searchParams.append('userId', id);
  url.searchParams.append('password', pass);
  try {
    const res = await fetch(url.toString(), { method: 'GET', headers: { 'Content-Type': 'text/plain;charset=utf-8' } });
    const json = await res.json();
    document.getElementById('loading').style.display = 'none';
    
    if (json.status === 'success') {
      currentUser = json.user;
      document.getElementById('display-user-name').innerText = currentUser.userName;
      document.getElementById('login-screen').style.display = 'none';
      document.getElementById('app-screen').style.display = 'flex'; 
      
      localStorage.setItem(SESSION_KEY_USER, JSON.stringify(currentUser));
      localStorage.setItem(SESSION_KEY_TIME, new Date().getTime().toString());

      loadAllData();
    } else { 
      alert("ログイン失敗: " + json.message); 
    }
  } catch (e) {
    document.getElementById('loading').style.display = 'none';
    alert("通信エラー: " + e.message);
  }
}

function checkAutoLogin() {
  const storedUser = localStorage.getItem(SESSION_KEY_USER);
  const storedTime = localStorage.getItem(SESSION_KEY_TIME);

  if (storedUser && storedTime) {
    const now = new Date().getTime();
    const loginTime = parseInt(storedTime, 10);

    if (now - loginTime < SESSION_DURATION) {
      try {
        currentUser = JSON.parse(storedUser);
        document.getElementById('display-user-name').innerText = currentUser.userName;
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('app-screen').style.display = 'flex'; 
        loadAllData();
        return;
      } catch (e) {
        console.error("保存データの読み込みに失敗しました", e);
      }
    } else {
      console.log("セッション有効期限切れです");
      localStorage.removeItem(SESSION_KEY_USER);
      localStorage.removeItem(SESSION_KEY_TIME);
    }
  }
}

function logout() { 
  localStorage.removeItem(SESSION_KEY_USER);
  localStorage.removeItem(SESSION_KEY_TIME);
  location.reload(); 
}

async function loadAllData(isUpdate = false, isBackground = false) {
  if (!isBackground) document.getElementById('loading').style.display = 'flex';
  
  const url = new URL(API_URL);
  url.searchParams.append('action', 'getAllData');
  url.searchParams.append('_t', new Date().getTime()); 
  
  try {
    const res = await fetch(url.toString(), { method: 'GET', headers: { 'Content-Type': 'text/plain;charset=utf-8' } });
    const json = await res.json();
    
    if (!isBackground) document.getElementById('loading').style.display = 'none';

    if (json.status === 'success') {
      masterData = json.data;
      if (isUpdate) refreshUI();
      else initUI();
    } else { 
      if (!isBackground) alert("読込エラー: " + json.message); 
    }
  } catch(e) { 
    if (!isBackground) document.getElementById('loading').style.display = 'none'; 
    console.error("通信エラー(バックグラウンド):", e);
  }
}

/* ==============================================
   3. UI初期化・更新・タブ切り替え
   ============================================== */
function initUI() {
  updateRoomSelect();
  renderGroupButtons();
  
  currentFloor = 7;
  renderDualMaps(); 
  switchFloor(7); 
  
  document.getElementById('view-map-view').classList.add('active');

  initCustomTimePickers();
  updateRefreshTime();
  updateDayDisplay('map-date');
  startPolling();
}

/* --- 自動更新 (ポーリング) --- */
const POLLING_INTERVAL_ACTIVE = 20000;   
const POLLING_INTERVAL_IDLE   = 600000;  
const IDLE_TIMEOUT            = 60000;   

let pollingTimer = null;
let idleCheckTimer = null;
let isUserIdle = false;
let lastActivityTime = new Date().getTime();

function initIdleDetection() {
    const events = ['mousemove', 'keydown', 'click', 'scroll', 'touchstart'];
    events.forEach(evt => {
        window.addEventListener(evt, () => {
            lastActivityTime = new Date().getTime();
            if (isUserIdle) {
                console.log("操作検知: アクティブモード復帰");
                isUserIdle = false;
                loadAllData(true, true);
                restartPolling(POLLING_INTERVAL_ACTIVE);
            }
        }, { passive: true });
    });

    if (idleCheckTimer) clearInterval(idleCheckTimer);
    idleCheckTimer = setInterval(() => {
        const now = new Date().getTime();
        if (!isUserIdle && (now - lastActivityTime > IDLE_TIMEOUT)) {
            console.log("アイドルモード移行");
            isUserIdle = true;
            restartPolling(POLLING_INTERVAL_IDLE);
        }
    }, 5000);
}

function restartPolling(interval) {
    if (pollingTimer) clearInterval(pollingTimer);
    pollingTimer = setInterval(() => {
        const modalOpen = document.querySelectorAll('.modal[style*="display: flex"]').length > 0;
        if (!modalOpen) {
            console.log(`自動更新実行 (${interval/1000}秒間隔)`);
            loadAllData(true, true);
        }
    }, interval);
}

function startPolling() {
    initIdleDetection();
    restartPolling(POLLING_INTERVAL_ACTIVE);
}

function refreshUI() {
  renderLogs();
  renderGroupButtons();
  updateRoomSelect();

  if (document.getElementById('view-map-view').classList.contains('active')) {
      if(document.getElementById('map-timeline-section').style.display !== 'none') {
          renderVerticalTimeline('map');
      }
  }
}

function updateRoomSelect() {
  const roomSelect = document.getElementById('input-room');
  if (roomSelect) {
    const currentVal = roomSelect.value;
    roomSelect.innerHTML = "";
    masterData.rooms.forEach(r => {
      const op = document.createElement('option');
      op.value = r.roomId;
      op.innerText = r.roomName;
      roomSelect.appendChild(op);
    });
    if(currentVal) roomSelect.value = currentVal;
  }
}

/* switchTab 関数をこれに置き換え */
function switchTab(tabName) {
  document.querySelectorAll('.view-container').forEach(el => el.classList.remove('active'));
  const targetView = document.getElementById('view-' + tabName);
  if(targetView) targetView.classList.add('active');
  
  // ▼▼▼ 追加: 戻るボタンの表示制御 ▼▼▼
  const backBtn = document.getElementById('btn-header-back');
  if (backBtn) {
      // logs画面(履歴)のときだけ表示、それ以外は非表示
      backBtn.style.display = (tabName === 'logs') ? 'inline-block' : 'none';
  }
  // ▲▲▲ 追加ここまで ▲▲▲

  if (tabName === 'map-view') {
      setTimeout(() => { switchFloor(currentFloor); }, 50);
  } else if (tabName === 'logs') {
      renderLogs();
  }
}

function renderDualMaps() {
    [7, 6].forEach(floor => {
        const config = mapConfig[floor];
        if (!config) return;

        const imgEl = document.getElementById(`map-img-${floor}`);
        if (imgEl) imgEl.src = config.image;

        const container = document.getElementById(`overlay-container-${floor}`);
        if (!container) return;
        container.innerHTML = '';

        config.areas.forEach(area => {
            const div = document.createElement("div");
            div.className = "map-click-area"; 
            
            if (area.name.indexOf("会議室") !== -1) div.classList.add("type-meeting");
            else if (area.name.indexOf("応接室") !== -1) div.classList.add("type-reception");
            else if (area.name.indexOf("Z") !== -1 || area.name.indexOf("Ｚ") !== -1) div.classList.add("type-z");

            div.style.top = area.top + "%";
            div.style.left = area.left + "%";
            div.style.width = area.width + "%";
            div.style.height = area.height + "%";
            div.innerText = area.name;
            if(area.color) div.style.backgroundColor = area.color;
            
            div.setAttribute('data-room-id', area.id);
            div.onclick = function() { selectRoomFromMap(this); };
            container.appendChild(div);
        });
    });
}

function switchFloor(floor) {
    currentFloor = floor;
    currentMapRoomId = null;

    const mapContainer = document.getElementById('view-map-view');
    if(mapContainer) {
        mapContainer.querySelectorAll('.floor-tab').forEach(tab => tab.classList.remove('active'));
    }
    const activeTab = document.getElementById(`tab-${floor}f`);
    if(activeTab) activeTab.classList.add('active');

    const area7 = document.getElementById('area-7f');
    const area6 = document.getElementById('area-6f');
    if(area7) area7.classList.remove('active');
    if(area6) area6.classList.remove('active');
    
    const activeArea = document.getElementById(`area-${floor}f`);
    if(activeArea) {
        activeArea.classList.add('active');
        // ★修正: サイズ固定リセット
        const wrapper = activeArea.querySelector('.map-inner-wrapper');
        if (wrapper) {
            wrapper.style.width = '';
            wrapper.style.height = '';
        }
    }

    const titleEl = document.getElementById('map-selected-room-name');
    if(titleEl) titleEl.innerText = `${floor}階 予約状況`;
    
    const timelineSec = document.getElementById('map-timeline-section');
    if(timelineSec) timelineSec.style.display = 'block';

    renderVerticalTimeline('map');
}

/* ==============================================
   マップの部屋クリック時の処理 (修正版)
   ============================================== */
function selectRoomFromMap(element) {
  const roomId = element.getAttribute('data-room-id');
  const roomObj = masterData.rooms.find(r => String(r.roomId) === String(roomId));
  
  if (!roomObj) {
    alert("エラー: 指定された部屋ID (" + roomId + ") が見つかりません。");
    return;
  }
  currentMapRoomId = roomId;
  document.getElementById('map-timeline-section').style.display = 'block';
  
  // ★修正: 要素が存在する場合だけ文字を更新する（削除済みなら無視してエラー回避）
  const titleEl = document.getElementById('map-selected-room-name');
  if (titleEl) {
      titleEl.innerText = roomObj.roomName;
  }

  // タイムラインを描画してスクロール
  renderVerticalTimeline('map', true);
  document.getElementById('map-timeline-section').scrollIntoView({behavior: 'smooth'});
}
/* ==============================================
   5. タイムライン関連処理
   ============================================== */
function switchTimelineFloor(floor) {
    currentTimelineFloor = floor;
    document.querySelectorAll('#view-timeline .floor-tab').forEach(tab => tab.classList.remove('active'));
    const activeTab = document.getElementById(`timeline-tab-${floor}f`);
    if(activeTab) activeTab.classList.add('active');
    renderVerticalTimeline('all');
}

function changeDate(days, inputId) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const d = new Date(input.value);
  d.setDate(d.getDate() + days);
  input.valueAsDate = d;
  updateDayDisplay(inputId);
  if(inputId === 'map-date') renderVerticalTimeline('map');
}

function drawTimeAxis(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";
  
  const header = document.createElement('div');
  header.className = 'time-axis-header';
  header.style.height = "40px"; 
  header.style.minHeight = "40px"; 
  header.style.flexShrink = "0";
  container.appendChild(header);

  for (let i = START_HOUR; i < END_HOUR; i++) {
      const height = hourRowHeights[i] || BASE_HOUR_HEIGHT;
      const div = document.createElement('div');
      div.className = 'time-label';
      div.innerText = i + ":00";
      div.style.height = height + "px";
      div.style.minHeight = height + "px";
      container.appendChild(div);
  }
}

/* ==============================================
   レンダリング: 垂直タイムライン
   【修正版: スクロールバー分のズレを自動補正】
   ============================================== */
function renderVerticalTimeline(mode, shouldScroll = false) {
    let container, dateInputId, targetRooms, timeAxisId;

    if (mode === 'all') {
        container = document.getElementById('rooms-container-all');
        dateInputId = 'timeline-date';
        timeAxisId = 'time-axis-all';
        const floorConfig = mapConfig[currentTimelineFloor];
        if (floorConfig) {
            const floorRoomIds = floorConfig.areas.map(area => String(area.id)); 
            targetRooms = masterData.rooms.filter(r => floorRoomIds.includes(String(r.roomId)));
        } else { targetRooms = []; }
    } else if (mode === 'map') {
        container = document.getElementById('rooms-container-map');
        dateInputId = 'map-date';
        timeAxisId = 'time-axis-map';
        targetRooms = [];
        const floorOrder = [7, 6]; 
        floorOrder.forEach(floor => {
            const config = mapConfig[floor];
            if (config && config.areas) {
                config.areas.forEach(area => {
                    const room = masterData.rooms.find(r => String(r.roomId) === String(area.id));
                    if (room) targetRooms.push(room);
                });
            }
        });
    } else { return; }

    const headerContainer = document.getElementById('map-room-headers');
    if (mode === 'map' && headerContainer) {
        headerContainer.style.display = 'flex';
        headerContainer.innerHTML = "";
        const spacer = document.createElement('div');
        spacer.className = 'sticky-header-spacer'; 
        headerContainer.appendChild(spacer);
    } else if (headerContainer) {
        headerContainer.style.display = 'none';
    }

    if (!targetRooms || targetRooms.length === 0) {
        if (container) container.innerHTML = "<div style='padding:20px;'>部屋データが見つかりません。</div>";
        return;
    }

    const scrollableParent = container ? container.closest('.calendar-scroll-area') : null;
    let savedScrollTop = 0, savedScrollLeft = 0;
    const mapWrapper = document.querySelector('.map-wrapper');
    if (mode === 'map' && mapWrapper) {
        savedScrollTop = mapWrapper.scrollTop;
    } else if (scrollableParent) {
        savedScrollTop = scrollableParent.scrollTop;
        savedScrollLeft = scrollableParent.scrollLeft;
    }

    if (container) {
        container.innerHTML = "";
        if (mode === 'map') {
            container.style.height = "auto";
            container.style.overflowY = "visible"; 
        } else {
            container.style.height = "100%";
            container.style.overflowY = "auto";
        }
        container.style.width = "100%";
        container.style.overflowX = "visible"; 
        container.style.display = "flex";
        container.style.flexWrap = "nowrap";
        container.style.alignItems = "flex-start";
        container.style.position = "relative";
        container.style.cursor = "default";
        container.style.userSelect = "none";
    }
    
    // ドラッグスクロール関連
    let isDown = false;
    let startX, startY, startScrollLeftVal, startScrollTopVal, hasDragged = false, isTouch = false, rafId = null; 

    if (scrollableParent) {
        scrollableParent.addEventListener('touchstart', () => { isTouch = true; }, { passive: true });
        const mapWrapper = document.querySelector('.map-wrapper');
        const vScrollTarget = (mode === 'map') ? mapWrapper : scrollableParent;

        scrollableParent.style.cursor = "default";

        scrollableParent.onwheel = (e) => {
            if (e.ctrlKey) return; 
            if (e.deltaX !== 0 || e.shiftKey) {
                e.preventDefault();
                scrollableParent.scrollLeft += (e.deltaX || e.deltaY);
            }
        };

        scrollableParent.onmousedown = (e) => {
            if (isTouch) return;
            if (e.target.closest('.v-booking-bar') || ['INPUT', 'SELECT', 'BUTTON', 'TEXTAREA'].includes(e.target.tagName)) return;
            
            isDown = true;
            hasDragged = false;
            scrollableParent.style.cursor = "grabbing";
            startX = e.pageX;
            startY = e.pageY;
            startScrollLeftVal = scrollableParent.scrollLeft;
            startScrollTopVal = vScrollTarget ? vScrollTarget.scrollTop : 0;
            
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        };

        const onMouseMove = (e) => {
            if (!isDown || isTouch) return;
            e.preventDefault();
            if (rafId) return;
            const currentX = e.pageX;
            const currentY = e.pageY;
            rafId = requestAnimationFrame(() => {
                const walkX = (currentX - startX) * 1.5;
                const walkY = (currentY - startY) * 1.5;
                if (Math.abs(walkX) > 5 || Math.abs(walkY) > 5) hasDragged = true;
                scrollableParent.scrollLeft = startScrollLeftVal - walkX;
                if (vScrollTarget) vScrollTarget.scrollTop = startScrollTopVal - walkY;
                rafId = null;
            });
        };

        const onMouseUp = () => {
            isDown = false;
            if (scrollableParent) scrollableParent.style.cursor = "default";
            if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            setTimeout(() => { hasDragged = false; }, 50);
        };
    }

    const rawDateVal = document.getElementById(dateInputId).value;
    const targetDateNum = formatDateToNum(new Date(rawDateVal));
    hourRowHeights = {}; 
    for (let h = START_HOUR; h < END_HOUR; h++) hourRowHeights[h] = BASE_HOUR_HEIGHT;

    const DYNAMIC_CHARS_PER_LINE = 12;
    const allRelevantReservations = masterData.reservations.filter(res => {
        const startTimeVal = getVal(res, ['startTime', 'start_time', '開始日時', '開始']);
        if (!startTimeVal) return false;
        const rId = getVal(res, ['resourceId', 'roomId', 'room_id', 'resource_id', '部屋ID']);
        const isTargetRoom = targetRooms.some(r => String(r.roomId) === String(rId));
        const resDateNum = formatDateToNum(new Date(startTimeVal));
        res._startTime = startTimeVal;
        res._endTime = getVal(res, ['endTime', 'end_time', '終了日時', '終了']);
        res._resourceId = rId;
        return isTargetRoom && (resDateNum === targetDateNum);
    });

    allRelevantReservations.forEach(res => {
        const start = new Date(res._startTime);
        const sHour = start.getHours();
        let displayText = getVal(res, ['title', 'subject', '件名', 'タイトル']) || '予約';
        const titleLines = Math.ceil(displayText.length / DYNAMIC_CHARS_PER_LINE) || 1;
        const contentHeightPx = (titleLines * 15) + 65;
        let durationMin = (new Date(res._endTime) - new Date(res._startTime)) / 60000;
        if (durationMin < 15) durationMin = 15;
        const ratio = durationMin / 60;
        const requiredHourHeight = contentHeightPx / ratio;
        if (sHour >= START_HOUR && sHour < END_HOUR) {
            if (requiredHourHeight > hourRowHeights[sHour]) hourRowHeights[sHour] = requiredHourHeight;
        }
    });

    const hourTops = {};
    let currentTop = 0;
    for (let h = START_HOUR; h < END_HOUR; h++) {
        hourTops[h] = currentTop;
        currentTop += hourRowHeights[h];
    }
    hourTops[END_HOUR] = currentTop;

    let nowTopPx = -1;
    const now = new Date();
    const todayStr = formatDateToNum(now);
    if (targetDateNum === todayStr) {
        const nowH = now.getHours();
        const nowM = now.getMinutes();
        if (nowH >= START_HOUR && nowH < END_HOUR) {
            nowTopPx = hourTops[nowH] + (hourRowHeights[nowH] * (nowM / 60));
        }
    }

    drawTimeAxis(timeAxisId);
    const axisContainer = document.getElementById(timeAxisId);
    if (axisContainer && container) {
        if (mode === 'all') {
            axisContainer.style.height = container.style.height;
            axisContainer.style.overflow = "hidden";
            axisContainer.scrollTop = savedScrollTop;
        } else {
            axisContainer.style.height = currentTop + "px";
            axisContainer.style.overflow = "visible";
        }
        axisContainer.style.display = "block";
    }

    targetRooms.forEach(room => {
        const col = document.createElement('div');
        col.className = 'room-col';
        col.style.width = "120px"; 
        col.style.minWidth = "120px"; 
        col.style.flex = "0 0 120px"; 
        col.style.position = "relative";
        col.style.borderRight = "1px solid #ddd";
        col.style.overflow = "visible";

        if (mode === 'map' && String(room.roomId) === String(currentMapRoomId)) {
            col.classList.add('target-highlight');
            if (shouldScroll && scrollableParent) {
                setTimeout(() => {
                    const colLeft = col.offsetLeft;
                    const parentWidth = scrollableParent.clientWidth;
                    scrollableParent.scrollLeft = colLeft - (parentWidth / 2) + 60; 
                }, 100);
            }
        }
        
        if (mode === 'map' && headerContainer) {
            const stickyHeader = document.createElement('div');
            stickyHeader.className = 'sticky-header-item'; 
            stickyHeader.innerText = room.roomName;
            stickyHeader.style.width = "120px";
            stickyHeader.style.minWidth = "120px";
            stickyHeader.style.flex = "0 0 120px";

            stickyHeader.onclick = (e) => {
                 currentMapRoomId = room.roomId;
                 document.querySelectorAll('.sticky-header-item').forEach(el => el.style.backgroundColor = '#fafafa');
                 document.querySelectorAll('.room-col').forEach(el => el.classList.remove('target-highlight'));
                 stickyHeader.style.backgroundColor = '#fff9c4'; 
                 col.classList.add('target-highlight');
                 const titleEl = document.getElementById('map-selected-room-name');
                 if (titleEl) titleEl.innerText = room.roomName;
            };
            
            if (String(room.roomId) === String(currentMapRoomId)) {
                stickyHeader.style.backgroundColor = '#fff9c4';
                col.classList.add('target-highlight');
            }
            headerContainer.appendChild(stickyHeader);
        } else {
            const header = document.createElement('div');
            header.className = 'room-header';
            header.innerText = room.roomName;
            col.appendChild(header);
        }

        const body = document.createElement('div');
        body.className = 'room-grid-body';
        
        if (nowTopPx !== -1) {
            const line = document.createElement('div');
            line.className = 'current-time-line';
            line.style.top = nowTopPx + "px";
            line.style.position = 'absolute';
            line.style.left = '0';
            line.style.width = '100%';
            line.style.height = '2px';
            line.style.borderTop = '2px solid red';
            line.style.zIndex = '50';
            line.style.pointerEvents = 'none';
            body.appendChild(line);
        }

        body.style.height = currentTop + "px";
        body.style.position = "relative";
        body.style.cursor = "pointer"; 

        for (let h = START_HOUR; h < END_HOUR; h++) {
            const slot = document.createElement('div');
            slot.className = 'grid-slot';
            slot.style.height = hourRowHeights[h] + "px";
            slot.style.boxSizing = "border-box";
            slot.style.borderBottom = "1px dotted #eee";
            body.appendChild(slot);
        }

        body.onclick = (e) => {
            if (!isTouch && hasDragged) return;
            if (e.target.closest('.v-booking-bar')) return;
            const rect = body.getBoundingClientRect();
            const clickY = e.clientY - rect.top;
            let clickedHour = -1;
            let clickedMin = 0;
            for (let h = START_HOUR; h < END_HOUR; h++) {
                const top = hourTops[h];
                const bottom = hourTops[h + 1] !== undefined ? hourTops[h + 1] : (top + hourRowHeights[h]);
                if (clickY >= top && clickY < bottom) {
                    clickedHour = h;
                    const height = bottom - top;
                    const relativeY = clickY - top;
                    if (relativeY >= height / 2) clickedMin = 30;
                    break;
                }
            }
            if (clickedHour !== -1) openModal(null, room.roomId, clickedHour, clickedMin);
        };

        const reservations = allRelevantReservations.filter(res => String(res._resourceId) === String(room.roomId));
        reservations.forEach(res => {
            const start = new Date(res._startTime);
            const end = new Date(res._endTime);
            let sHour = start.getHours();
            let sMin = start.getMinutes();
            let eHour = end.getHours();
            let eMin = end.getMinutes();

            if (sHour < START_HOUR) { sHour = START_HOUR; sMin = 0; }
            if (eHour >= END_HOUR) { eHour = END_HOUR; eMin = 0; }

            if (sHour < END_HOUR && (sHour > START_HOUR || (sHour === START_HOUR && sMin >= 0))) {
                const topPx = hourTops[sHour] + (hourRowHeights[sHour] * (sMin / 60));
                let bottomPx = 0;
                if (eHour === END_HOUR) bottomPx = hourTops[END_HOUR];
                else bottomPx = hourTops[eHour] + (hourRowHeights[eHour] * (eMin / 60));

                let heightPx = bottomPx - topPx;
                const minHeightPx = hourRowHeights[sHour] * (15 / 60);
                if (heightPx < minHeightPx) heightPx = minHeightPx;

                const bar = document.createElement('div');
                let cssType = room.type;
                if (!cssType || (cssType !== 'meeting' && cssType !== 'reception' && cssType !== 'zoom')) {
                    if (room.roomName.indexOf("会議室") !== -1) cssType = "meeting";
                    else if (room.roomName.indexOf("応接室") !== -1) cssType = "reception";
                    else if (room.roomName.indexOf("Z") !== -1 || room.roomName.indexOf("Ｚ") !== -1) cssType = "zoom";
                }
                bar.className = `v-booking-bar type-${cssType}`;
                bar.style.top = (topPx + 1) + "px";
                bar.style.height = (heightPx - 2) + "px";
                bar.style.zIndex = "5";
                bar.style.position = "absolute";
                bar.style.left = "2px";
                bar.style.width = "calc(100% - 4px)";

                let displayTitle = getVal(res, ['title', 'subject', '件名', 'タイトル']) || '予約';
                const startTimeStr = `${start.getHours()}:${pad(start.getMinutes())}`;
                const endTimeStr = `${end.getHours()}:${pad(end.getMinutes())}`;
                const timeRangeStr = `${startTimeStr}-${endTimeStr}`;
                
                let participantsStr = "";
                let pIdsRaw = getVal(res, ['participantIds', 'participant_ids', '参加者', 'メンバー']);
                if (pIdsRaw) {
                     const cleanIds = String(pIdsRaw).replace(/['"]/g, "").split(/[,、\s]+/);
                     let names = [];
                     cleanIds.forEach(id => {
                         const trimId = id.trim();
                         if(!trimId) return;
                         const u = masterData.users.find(user => String(user.userId) === trimId);
                         names.push(u ? u.userName : trimId);
                     });
                     if (names.length > 0) {
                         if (names.length <= 4) participantsStr = names.join(', ');
                         else {
                             const showNames = names.slice(0, 4).join(', ');
                             const restCount = names.length - 4;
                             participantsStr = `${showNames} (+${restCount}名)`;
                         }
                     }
                }

                bar.innerHTML = `
                      <div style="width:100%; font-weight:bold; font-size:0.85em; line-height:1.1; margin-bottom:2px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${timeRangeStr}</div>
                      <div style="width:100%; font-weight:bold; font-size:0.9em; line-height:1.1; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${displayTitle}</div>
                      <div style="width:100%; font-weight:bold; font-size:0.9em; line-height:1.1; margin-top:2px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${participantsStr}</div>
                  `;

                bar.onclick = (e) => {
                    if (!isTouch && hasDragged) return;
                    e.stopPropagation();
                    openDetailModal(res);
                };
                body.appendChild(bar);
            }
        });

        col.appendChild(body);
        container.appendChild(col);
    });

    if (scrollableParent) {
        if (!shouldScroll) {
            scrollableParent.scrollLeft = savedScrollLeft; 
            if (mode !== 'map') scrollableParent.scrollTop = savedScrollTop; 
        }
        
        if (mode === 'map' && headerContainer) {
            // ★追加: スクロールバー幅分の補正処理
            // ヘッダーの右側に、下のスクロールバーと同じ幅のpaddingを入れる
            const scrollBarWidth = scrollableParent.offsetWidth - scrollableParent.clientWidth;
            if (scrollBarWidth > 0) {
                headerContainer.style.paddingRight = scrollBarWidth + "px";
                headerContainer.style.boxSizing = "border-box";
            } else {
                headerContainer.style.paddingRight = "0px";
            }

            headerContainer.scrollLeft = scrollableParent.scrollLeft;
            scrollableParent.onscroll = () => {
                headerContainer.scrollLeft = scrollableParent.scrollLeft;
                if (mode === 'all' && axisContainer) axisContainer.scrollTop = scrollableParent.scrollTop;
            };
        }
    }
}
/* ==============================================
   6. 予約・詳細モーダル関連
   ============================================== */

/* ★修正: 共通時間計算関数 (新規予約・空き検索の両方で使用) */
function calculateEndTime(startId, endId) {
  const startInput = document.getElementById(startId);
  const endInput = document.getElementById(endId);
  
  if (!startInput || !endInput || !startInput.value) return;

  const parts = startInput.value.split(':');
  let h = parseInt(parts[0], 10);
  let m = parseInt(parts[1], 10);

  // 1時間進める
  h += 1;

  // 21時を超える場合は21:00に制限
  if (h >= 21) {
    h = 21;
    m = 0;
  }

  const hStr = (h < 10 ? '0' : '') + h;
  const mStr = (m < 10 ? '0' : '') + m;
  
  endInput.value = `${hStr}:${mStr}`;
}

// ラッパー関数
function autoSetEndTime() { calculateEndTime('input-start', 'input-end'); }
function autoSetAvailEndTime() { calculateEndTime('avail-start', 'avail-end'); }

function selectTimePart(elm) {
    setTimeout(() => {
        const val = elm.value;
        if (!val || val.indexOf(':') === -1) return;
        const colonIndex = val.indexOf(':');
        const cursorPos = elm.selectionStart;
        if (cursorPos <= colonIndex) elm.setSelectionRange(0, colonIndex); 
        else elm.setSelectionRange(colonIndex + 1, val.length); 
    }, 10);
}

function handleTimeArrowKeys(event, elm) {
    if (event.key === 'Enter') { elm.blur(); return; }
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    const val = elm.value;
    const colonIndex = val.indexOf(':');
    if (colonIndex === -1) return;
    const cursorPos = elm.selectionStart;
    if (event.key === 'ArrowRight' && cursorPos > colonIndex) {
        elm.setSelectionRange(colonIndex + 1, val.length);
    }
    if (event.key === 'ArrowLeft' && cursorPos <= colonIndex) {
        elm.setSelectionRange(0, colonIndex);
    }
}

function formatTimeInput(elm) {
    let val = elm.value.trim();
    if (!val) return;
    val = val.replace(/[０-９]/g, s => String.fromCharCode(s.charCodeAt(0) - 0xFEE0));
    if (val.indexOf(':') === -1) return;
    let parts = val.split(':');
    let h = parseInt(parts[0]);
    let m = parseInt(parts[1]);
    if (!isNaN(h)) h = (h < 10 ? '0' : '') + h;
    if (!isNaN(m)) m = (m < 10 ? '0' : '') + m;
    if(!isNaN(h) && !isNaN(m)) {
        elm.value = `${h}:${m}`;
        if (elm.id === 'input-start') autoSetEndTime();
        if (elm.id === 'avail-start') autoSetAvailEndTime();
    }
}

/* ----- 修正後の openModal 関数（ここだけ書き換えてください） ----- */
function openModal(res = null, defaultRoomId = null, clickHour = null, clickMin = 0) {
  const modal = document.getElementById('bookingModal');
  modal.style.display = 'flex';
  document.getElementById('btn-back-avail').style.display = 'none';   
  document.getElementById('btn-modal-cancel').style.display = 'inline-block'; 
   
  selectedParticipantIds.clear();
  originalParticipantIds.clear(); 
  document.getElementById('shuttle-search-input').value = "";

  // ▼▼▼ 【追加】編集用・新規用のエリア表示リセット ▼▼▼
  // 編集用の「リンクする」エリアを一旦隠す
  const editSeriesOption = document.getElementById('edit-series-option');
  if(editSeriesOption) editSeriesOption.style.display = 'none';
  if(document.getElementById('check-sync-series')) document.getElementById('check-sync-series').checked = true; // デフォルトON

  // 新規用の「繰り返し作成」エリアを表示状態に戻しておく
  const createRepeatSection = document.getElementById('create-repeat-section');
  if(createRepeatSection) createRepeatSection.style.display = 'block';
  // ▲▲▲ 追加ここまで ▲▲▲
   
  if (res) {
    // === 編集モード ===
    document.getElementById('modal-title').innerText = "予約編集";
    document.getElementById('edit-res-id').value = res.id;
    const rId = res._resourceId || res.resourceId || res.roomId; 
    document.getElementById('input-room').value = rId;

    // ▼▼▼ 修正箇所 ▼▼▼
    // データに seriesId が入っていなくても、UI確認のために一時的にIDがあることにする
    // 本番（AWS移行後）では元のコードに戻してください
    let currentSeriesId = getVal(res, ['seriesId', 'series_id', 'group_id']); 
    
    // ★テスト用: IDがなくてもあるとみなしてボタンを出す（ここを追加！）
    if (!currentSeriesId && res) {
         currentSeriesId = "temp-id-for-test"; // テスト用のダミーID
         console.log("テスト用にダミーのseriesIdを適用しました");
    }

    if (currentSeriesId) {
        // シリーズIDがある場合 → 「リンクする」を表示
        if(editSeriesOption) editSeriesOption.style.display = 'block';
        
        // 新規作成用の繰り返しエリアは隠す
        if(createRepeatSection) createRepeatSection.style.display = 'none';
        
        // 念のため、既存の「繰り返しチェック」の親要素も非表示にする（IDがない場合の保険）
        const oldRepeatCheck = document.getElementById('check-repeat');
        if(oldRepeatCheck && oldRepeatCheck.closest('.form-group')) {
             // 構造によってはここが効かない場合があるので、基本は create-repeat-section 推奨
        }
    } else {
        // 単発の場合
        if(createRepeatSection) createRepeatSection.style.display = 'none';
    }
    // ▲▲▲ 修正ここまで ▲▲▲

    const startObj = new Date(res._startTime || res.startTime);
    const endObj = new Date(res._endTime || res.endTime);
    // ... (既存の日付セット処理) ...
    const y = startObj.getFullYear();
    const m = ('0' + (startObj.getMonth() + 1)).slice(-2);
    const d = ('0' + startObj.getDate()).slice(-2);
    document.getElementById('input-date').value = `${y}-${m}-${d}`;

    document.getElementById('input-start').value = `${('0'+startObj.getHours()).slice(-2)}:${('0'+startObj.getMinutes()).slice(-2)}`;
    document.getElementById('input-end').value = `${('0'+endObj.getHours()).slice(-2)}:${('0'+endObj.getMinutes()).slice(-2)}`;
    
    document.getElementById('input-title').value = getVal(res, ['title', 'subject', '件名', 'タイトル', '用件', 'name']);
    document.getElementById('input-note').value = getVal(res, ['note', 'description', '備考', 'メモ', '詳細', 'body']);
    
    const pIds = getVal(res, ['participantIds', 'participant_ids', '参加者', 'メンバー']);
    if (pIds) {
        // ... (既存の参加者セット処理) ...
        let idList = [];
        if (Array.isArray(pIds)) idList = pIds;
        else if (typeof pIds === 'string') idList = pIds.split(',');
        else if (typeof pIds === 'number') idList = [pIds];

        idList.forEach(rawId => { 
          if(rawId !== null && rawId !== undefined && String(rawId).trim() !== "") {
              const targetId = String(rawId).trim();
              const user = masterData.users.find(u => {
                  const uId = String(u.userId).trim();
                  return uId === targetId || (!isNaN(uId) && !isNaN(targetId) && Number(uId) === Number(targetId));
              });
              const finalId = user ? String(user.userId).trim() : targetId;
              selectedParticipantIds.add(finalId); 
              originalParticipantIds.add(finalId); 
          }
        });
    }
    document.getElementById('btn-delete').style.display = 'inline-block';

  } else {
    // === 新規予約モード ===
    document.getElementById('modal-title').innerText = "新規予約";
    document.getElementById('edit-res-id').value = "";
    if(defaultRoomId) document.getElementById('input-room').value = defaultRoomId;
    
    // ▼▼▼ 新規作成時は繰り返しオプションをリセット ▼▼▼
    if(document.getElementById('check-repeat')) {
         document.getElementById('check-repeat').checked = false;
         toggleRepeatOptions();
    }
    // ▲▲▲ ここまで ▲▲▲

    const dateInput = document.getElementById('map-date');
    let currentTabDate = dateInput ? dateInput.value : '';
    if(!currentTabDate) {
        const now = new Date();
        currentTabDate = `${now.getFullYear()}-${('0' + (now.getMonth() + 1)).slice(-2)}-${('0' + now.getDate()).slice(-2)}`;
    }
    document.getElementById('input-date').value = currentTabDate;

    const sHour = clickHour !== null ? clickHour : 9;
    const sMin  = clickMin;
    document.getElementById('input-start').value = `${pad(sHour)}:${pad(sMin)}`;
    autoSetEndTime();

    document.getElementById('input-title').value = "";
    document.getElementById('input-note').value = "";
    document.getElementById('btn-delete').style.display = 'none';
    if (typeof currentUser !== 'undefined' && currentUser && currentUser.userId) {
        selectedParticipantIds.add(String(currentUser.userId));
    }
  }
  renderShuttleLists(); 
  if (modal) modal.scrollTop = 0;
  const modalContent = modal.querySelector('.modal-content');
  if (modalContent) modalContent.scrollTop = 0;
}

function closeModal() { document.getElementById('bookingModal').style.display = 'none'; }

function getParticipantIdsFromRes(res) {
    const pIds = getVal(res, ['participantIds', 'participant_ids', '参加者', 'メンバー']);
    if (!pIds) return [];
    
    let list = [];
    if (Array.isArray(pIds)) {
        list = pIds;
    } else if (typeof pIds === 'string') {
        list = pIds.split(/[,、\s]+/);
    } else if (typeof pIds === 'number') {
        list = [pIds];
    }
    return list.map(id => String(id).trim()).filter(id => id !== "");
}

/* ==============================================
   繰り返しオプションの表示切替（この部分が足りていませんでした）
   ============================================== */
function toggleRepeatOptions() {
    const chk = document.getElementById('check-repeat');
    const area = document.getElementById('repeat-options');
    
    // 要素が存在する場合のみ表示・非表示を切り替え
    if (chk && area) {
        area.style.display = chk.checked ? 'block' : 'none';
    }
}

async function saveBooking() {
    // フォームから値を取得
    const id = document.getElementById('edit-res-id').value;
    const room = document.getElementById('input-room').value;
    const date = document.getElementById('input-date').value;
    const start = document.getElementById('input-start').value;
    const end = document.getElementById('input-end').value;
    const title = document.getElementById('input-title').value;
    const note = document.getElementById('input-note').value;
    
    // --- 入力値バリデーション ---
    const timePattern = /^([0-9]{1,2}):([0-9]{2})$/;
    if (!timePattern.test(start) || !timePattern.test(end)) {
        alert("時間は「09:00」のように半角数字とコロン(:)で入力してください。");
        return;
    }
    if (start >= end) { 
        alert("開始時間は終了時間より前に設定してください。"); 
        return; 
    }
    const startParts = start.split(':');
    const endParts = end.split(':');
    const startMinutes = parseInt(startParts[0]) * 60 + parseInt(startParts[1]);
    const endMinutes = parseInt(endParts[0]) * 60 + parseInt(endParts[1]);
    if (endMinutes - startMinutes < 15) {
        alert("最低でも15分以上の日時を設定してください。");
        return;
    }

    // --- 予約データの生成 ---
    let reservationList = []; 
    const pIds = Array.from(selectedParticipantIds).join(', ');
    
    // 状態判定用の変数
    const isRepeatChecked = document.getElementById('check-repeat') && document.getElementById('check-repeat').checked;
    const isEditMode = !!id;
    const isSeriesLinkChecked = document.getElementById('check-sync-series') && document.getElementById('check-sync-series').checked;
    
    let targetSeriesId = null;

    // 編集モードの場合
    let originalRes = null;
    if (isEditMode) {
        originalRes = masterData.reservations.find(r => String(r.id) === String(id));
        const oldSeriesId = getVal(originalRes, ['seriesId', 'series_id', 'group_id']);
        
        if (oldSeriesId) {
            if (isSeriesLinkChecked) targetSeriesId = oldSeriesId;
            else targetSeriesId = null;
        }
    }

    // ========== 【パターンA：新規登録 & 繰り返しON】 ==========
    if (!id && isRepeatChecked) {
        targetSeriesId = generateUUID();
        const interval = parseInt(document.getElementById('repeat-interval').value) || 1;
        const unit = document.getElementById('repeat-unit').value; 
        
        let endType = 'none';
        const radio = document.querySelector('input[name="repeat-end"]:checked');
        if (radio) endType = radio.value;

        let currentDate = new Date(date.replace(/-/g, '/'));
        let count = 0;
        const maxCount = (endType === 'count') ? parseInt(document.getElementById('repeat-count').value) : 1000;
        const untilDate = (endType === 'date') ? new Date(document.getElementById('repeat-until').value) : null;
        const maxLimitDate = new Date();
        maxLimitDate.setMonth(maxLimitDate.getMonth() + 3);

        while (true) {
            if (endType === 'count' && count >= maxCount) break;
            if (endType === 'date' && untilDate && currentDate > untilDate) break;
            if (endType === 'none' && currentDate > maxLimitDate) break; 
            if (count > 100) break; 

            const y = currentDate.getFullYear();
            const m = ('0' + (currentDate.getMonth() + 1)).slice(-2);
            const d = ('0' + currentDate.getDate()).slice(-2);
            
            reservationList.push({
                isUpdate: false,
                reservationId: "", 
                resourceId: room, 
                seriesId: targetSeriesId,
                date: `${y}-${m}-${d}`,
                startTime: `${y}/${m}/${d} ${start}`,
                endTime: `${y}/${m}/${d} ${end}`
            });

            count++;
            if (unit === 'day') currentDate.setDate(currentDate.getDate() + interval);
            else if (unit === 'week') currentDate.setDate(currentDate.getDate() + (interval * 7));
            else if (unit === 'month') currentDate.setMonth(currentDate.getMonth() + interval);
        }
    } 
    // ========== 【パターンB：編集モード & リンクON】 ==========
    else if (id && targetSeriesId && isSeriesLinkChecked) {
        const oldStartObj = new Date(originalRes._startTime || originalRes.startTime);
        const oldDateOnly = new Date(oldStartObj.getFullYear(), oldStartObj.getMonth(), oldStartObj.getDate());
        const newDateParts = date.split('-'); 
        const newDateOnly = new Date(parseInt(newDateParts[0]), parseInt(newDateParts[1]) - 1, parseInt(newDateParts[2]));
        const diffMillis = newDateOnly.getTime() - oldDateOnly.getTime();

        const currentStartObj = new Date(originalRes._startTime || originalRes.startTime);
        
        const relatedRes = masterData.reservations.filter(r => {
             const rSeriesId = getVal(r, ['seriesId', 'series_id', 'group_id']);
             const rStart = new Date(r._startTime || r.startTime);
             const isSameSeries = String(rSeriesId) === String(targetSeriesId);
             const isFuture = rStart.getTime() >= currentStartObj.getTime() - 1000; 
             return isSameSeries && isFuture;
        });

        if (relatedRes.length === 0) relatedRes.push(originalRes);

        relatedRes.forEach(r => {
            const rStartVal = new Date(r._startTime || r.startTime);
            const newDateForRes = new Date(rStartVal.getTime() + diffMillis);
            const y = newDateForRes.getFullYear();
            const m = ('0' + (newDateForRes.getMonth() + 1)).slice(-2);
            const d = ('0' + newDateForRes.getDate()).slice(-2);
            
            reservationList.push({
                isUpdate: true,
                reservationId: r.id,
                resourceId: room,
                seriesId: targetSeriesId,
                date: `${y}-${m}-${d}`,
                startTime: `${y}/${m}/${d} ${start}`,
                endTime: `${y}/${m}/${d} ${end}`
            });
        });
    }
    // ========== 【パターンC：単発 / リンク解除 / 単発編集】 ==========
    else {
        reservationList.push({
            isUpdate: !!id, 
            reservationId: id || "", 
            resourceId: room,
            seriesId: targetSeriesId,
            date: date,
            startTime: `${date.replace(/-/g, '/')} ${start}`,
            endTime: `${date.replace(/-/g, '/')} ${end}`
        });
    }

    if (reservationList.length === 0) {
        alert("予約データが生成されませんでした。");
        return;
    }

    // --- ▼▼▼ 重複チェック (部屋と人を分離) ▼▼▼ ---
    let roomConflictMessages = [];   // 部屋の重複用
    let memberConflictMessages = []; // 人の重複用
    const checkTargets = Array.from(selectedParticipantIds);

    // 今回登録しようとしている全予約データをチェック
    for (const resData of reservationList) {
        const newStartObj = new Date(resData.startTime);
        const newEndObj = new Date(resData.endTime);
        const targetResourceId = resData.resourceId;

        // 全予約データ(masterData)と比較
        masterData.reservations.forEach(existingRes => {
            // 自分自身の更新は除外
            if (resData.isUpdate && String(existingRes.id) === String(resData.reservationId)) return;

            const exStart = new Date(existingRes._startTime || existingRes.startTime);
            const exEnd = new Date(existingRes._endTime || existingRes.endTime);
            if (isNaN(exStart.getTime()) || isNaN(exEnd.getTime())) return;

            // 時間被り判定
            const isTimeOverlap = (exStart < newEndObj && exEnd > newStartObj);
            if (!isTimeOverlap) return;

            // 1. 【部屋の重複】チェック
            const exResourceId = existingRes._resourceId || existingRes.resourceId;
            if (String(exResourceId) === String(targetResourceId)) {
                const dateStr = `${exStart.getMonth()+1}/${exStart.getDate()}`;
                const timeStr = `${pad(exStart.getHours())}:${pad(exStart.getMinutes())}-${pad(exEnd.getHours())}:${pad(exEnd.getMinutes())}`;
                const roomObj = masterData.rooms.find(r => String(r.roomId) === String(exResourceId));
                const roomName = roomObj ? roomObj.roomName : "不明な部屋";
                
                // メッセージ追加（重複しないように）
                const msg = `・${dateStr} ${timeStr} ${roomName}`;
                if (!roomConflictMessages.includes(msg)) roomConflictMessages.push(msg);
            }

            // 2. 【人の重複】チェック
            const exMemberIds = getParticipantIdsFromRes(existingRes);
            const overlappingMembers = checkTargets.filter(id => exMemberIds.includes(id));
            
            if (overlappingMembers.length > 0) {
                overlappingMembers.forEach(targetUserId => {
                    const conflictingUser = masterData.users.find(u => String(u.userId) === String(targetUserId));
                    const userName = conflictingUser ? conflictingUser.userName : targetUserId;
                    const dateStr = `${exStart.getMonth()+1}/${exStart.getDate()}`;
                    const timeStr = `${pad(exStart.getHours())}:${pad(exStart.getMinutes())}-${pad(exEnd.getHours())}:${pad(exEnd.getMinutes())}`;
                    
                    const msg = `・${dateStr} ${timeStr} ${userName}`;
                    if (!memberConflictMessages.includes(msg)) memberConflictMessages.push(msg);
                });
            }
        });
    }

    // ▼▼▼ 判定ロジック ▼▼▼
    
    // 1. 部屋の重複がある場合 -> 【登録不可 (Alert & Return)】
    if (roomConflictMessages.length > 0) {
        alert(`【登録できません】\n以下の日程で「部屋」が重複しています。\n時間を変更してください。\n\n${roomConflictMessages.slice(0, 5).join('\n')}` + (roomConflictMessages.length > 5 ? '\n...他' : ''));
        return; // 中断
    }

    // 2. 人の重複がある場合 -> 【警告 (Confirm)】
    if (memberConflictMessages.length > 0) {
        const msg = `以下の予定と「参加者」が重複していますが、このまま登録しますか？\n(重複: ${memberConflictMessages.length}件)\n\n` + 
                    memberConflictMessages.slice(0, 5).join('\n') + 
                    (memberConflictMessages.length > 5 ? '\n...他' : '');
        
        // キャンセルを押したら中断、OKなら進む
        if (!confirm(msg)) return;
    } 
    // 3. 重複なしだが一括登録の場合 -> 【確認 (Confirm)】
    else if (reservationList.length > 1) {
        if (!confirm(`${reservationList.length}件の予約を一括登録/更新します。よろしいですか？`)) return;
    }

    // --- 送信処理 ---
    const loadingEl = document.getElementById('loading');
    const wrapper = document.getElementById('progress-wrapper');
    const bar = document.getElementById('progress-bar');
    const txt = document.getElementById('progress-text');
    
    loadingEl.style.display = 'flex';
    if (reservationList.length > 1) {
        wrapper.style.display = 'block';
        bar.style.width = '0%';
        txt.innerText = `0 / ${reservationList.length} 件完了`;
    } else {
        wrapper.style.display = 'none';
    }

    let successCount = 0;
    let failCount = 0;
    let processedCount = 0; 

    for (const resData of reservationList) {
        const params = {
            action: resData.isUpdate ? 'updateReservation' : 'createReservation',
            reservationId: resData.reservationId,
            resourceId: resData.resourceId,
            startTime: resData.startTime,
            endTime: resData.endTime,
            seriesId: resData.seriesId, 
            reserverId: currentUser.userId,
            operatorName: currentUser.userName,
            participantIds: pIds, 
            title: title,
            note: note 
        };

        try {
            const result = await callAPI(params, false);
            if (result.status === 'success') successCount++;
            else failCount++;
        } catch(e) {
            failCount++;
            console.error("API Error:", e);
        }

        processedCount++;
        if (reservationList.length > 1) {
            const percentage = Math.round((processedCount / reservationList.length) * 100);
            bar.style.width = percentage + '%';
            txt.innerText = `${processedCount} / ${reservationList.length} 件完了`;
        }
    }

    setTimeout(() => {
        loadingEl.style.display = 'none';
        wrapper.style.display = 'none'; 

        if (failCount === 0) {
            alert("保存しました (" + successCount + "件)");
            closeModal();
            loadAllData(true);
        } else {
            alert(`完了しましたが、一部エラーが発生しました。\n成功: ${successCount}件\n失敗: ${failCount}件`);
            closeModal();
            loadAllData(true);
        }
    }, 200);
}

/* ==============================================
   詳細モーダル表示 (曜日追加・堅牢版)
   ============================================== */
function openDetailModal(res) {
  currentDetailRes = res;
  const modal = document.getElementById('detailModal');
  
  // 日付文字列を安全にパース
  const safeDate = (str) => new Date(String(str).replace(/-/g, '/'));
  
  const s = safeDate(res._startTime);
  const e = safeDate(res._endTime);

  const week = ['日', '月', '火', '水', '木', '金', '土'];
  // getDay()が取れない場合のガード処理を追加
  const dayIndex = s.getDay();
  const w = isNaN(dayIndex) ? '?' : week[dayIndex];
  
  const dateStr = `${s.getMonth()+1}/${s.getDate()}(${w})`;
  const timeStr = `${pad(s.getHours())}:${pad(s.getMinutes())} - ${pad(e.getHours())}:${pad(e.getMinutes())}`;
  
  document.getElementById('detail-time').innerText = `${dateStr} ${timeStr}`;
  
  const room = masterData.rooms.find(r => String(r.roomId) === String(res._resourceId));
  document.getElementById('detail-room').innerText = room ? room.roomName : res._resourceId;
  document.getElementById('detail-title').innerText = getVal(res, ['title', 'subject', '件名', 'タイトル']) || '(なし)';

  // 登録者・編集者情報
  const metaContainer = document.getElementById('detail-meta-info');
  if (metaContainer) {
      const fmt = (dStr) => {
          if(!dStr) return "-";
          const d = safeDate(dStr);
          if(isNaN(d.getTime())) return dStr; 
          return `${d.getFullYear()}/${('0'+(d.getMonth()+1)).slice(-2)}/${('0'+d.getDate()).slice(-2)} ${('0'+d.getHours()).slice(-2)}:${('0'+d.getMinutes()).slice(-2)}`;
      };
      const createdTime = fmt(res.createdAt);
      const createdName = res.createdBy || "-";
      const updatedTime = fmt(res.updatedAt);
      const updatedName = res.updatedBy || "-";
      let html = `<div>登録 : ${createdTime} ${createdName}</div>`;
      html += `<div>編集 : ${updatedTime} ${updatedName}</div>`;
      metaContainer.innerHTML = html;
  }

  // 参加者リスト
  const membersContainer = document.getElementById('detail-members');
  membersContainer.innerHTML = "";
  let pIdsStr = getVal(res, ['participantIds', 'participant_ids', '参加者', 'メンバー']);
  
  if (String(pIdsStr).includes('e+')) {
      membersContainer.innerHTML = "<div class='detail-member-item' style='color:red;'>⚠️データ形式エラー</div>";
  } else if (pIdsStr) {
      const cleanIdsStr = String(pIdsStr).replace(/['"]/g, "");
      const resIds = cleanIdsStr.split(/,\s*/).map(id => id.trim());
      const names = resIds.map(id => {
          if(!id) return "";
          const u = masterData.users.find(user => {
              const uIdStr = String(user.userId).trim();
              return uIdStr === id || (!isNaN(uIdStr) && !isNaN(id) && Number(uIdStr) === Number(id));
          });
          return u ? u.userName : id;
      }).filter(n => n !== "");

      if(names.length > 0) {
          names.forEach(name => {
              const div = document.createElement('div');
              div.className = 'detail-member-item';
              div.innerText = name;
              membersContainer.appendChild(div);
          });
      } else { membersContainer.innerHTML = "<div class='detail-member-item'>-</div>"; }
  } else { membersContainer.innerHTML = "<div class='detail-member-item'>-</div>"; }

  // 備考欄
  let rawNote = getVal(res, ['note', 'description', '備考', 'メモ']) || '';
  let cleanNote = rawNote.replace(/【変更履歴】.*/g, '').replace(/^\s*[\r\n]/gm, '').trim();
  let escapedNote = cleanNote
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  let linkedNote = escapedNote.replace(
      /(https?:\/\/[^\s]+)/g, 
      '<a href="$1" target="_blank" rel="noopener noreferrer" style="color: #3498db; text-decoration: underline;">$1</a>'
  );
  document.getElementById('detail-note').innerHTML = linkedNote;

  document.getElementById('btn-go-edit').onclick = function() {
      closeDetailModal();        
      openModal(currentDetailRes); 
  };
  modal.style.display = 'flex';
}
function closeDetailModal() { document.getElementById('detailModal').style.display = 'none'; }

/* ==============================================
   7. メンバー/グループ選択 (シャトル)
   ============================================== */
function renderGenericShuttle(filterText, targetSet, candidatesContainerId, selectedContainerId, searchInputId) {
    const rawInput = (filterText || "").trim();
    const searchLower = rawInput.toLowerCase();
    const searchKata = hiraToKata(rawInput);
    const searchHira = kataToHira(rawInput);
    
    const leftList = document.getElementById(candidatesContainerId);
    const rightList = document.getElementById(selectedContainerId);
    if(!leftList || !rightList) return;

    leftList.innerHTML = "";
    rightList.innerHTML = "";

    masterData.users.forEach(u => {
        if (!u.userId) return;
        const uidStr = String(u.userId);
        
        if (targetSet.has(uidStr)) {
            const div = document.createElement('div');
            div.className = 'shuttle-item icon-remove';
            div.innerText = u.userName;
            div.onclick = () => {
                targetSet.delete(uidStr);
                renderGenericShuttle(rawInput, targetSet, candidatesContainerId, selectedContainerId, searchInputId);
            };
            rightList.appendChild(div);
        } else {
            const name = (u.userName || "").toLowerCase();
            const kana = (u.kana || "").toLowerCase();

            const isMatch = (rawInput === "") || 
                            name.includes(searchLower) || 
                            kana.includes(searchLower) || 
                            kana.includes(searchKata) || 
                            kana.includes(searchHira);

            if (isMatch) {
                const div = document.createElement('div');
                div.className = 'shuttle-item icon-add';
                div.innerText = u.userName;
                
                div.onclick = () => {
                    targetSet.add(uidStr);
                    if (searchInputId) {
                        const inputEl = document.getElementById(searchInputId);
                        if(inputEl) inputEl.value = "";
                    }
                    renderGenericShuttle("", targetSet, candidatesContainerId, selectedContainerId, searchInputId);
                };
                leftList.appendChild(div);
            }
        }
    });
}

function renderShuttleLists(filterText = "") {
    const searchId = 'shuttle-search-input'; 
    const text = filterText || document.getElementById(searchId).value;
    renderGenericShuttle(text, selectedParticipantIds, 'list-candidates', 'list-selected', searchId);
}

function renderGroupCreateShuttle() {
    const searchId = 'group-shuttle-search'; 
    const text = document.getElementById(searchId).value;
    renderGenericShuttle(text, groupCreateSelectedIds, 'group-create-candidates', 'group-create-selected', searchId);
}

function selectGroupMembers(idsStr) {
  if (!idsStr) return;
  const rawIds = String(idsStr).split(/[,、\s]+/);
  const targetUsers = [];
  rawIds.forEach(rawId => {
      const cleanIdStr = rawId.replace(/['"]/g, "").trim();
      if (!cleanIdStr) return; 
      const user = masterData.users.find(u => String(u.userId) === cleanIdStr);
      if (user) { targetUsers.push(user); }
  });

  const isAllSelected = targetUsers.every(u => selectedParticipantIds.has(String(u.userId)));
  if (isAllSelected) {
      targetUsers.forEach(u => selectedParticipantIds.delete(String(u.userId)));
  } else {
      targetUsers.forEach(u => selectedParticipantIds.add(String(u.userId)));
  }
  renderShuttleLists(document.getElementById('shuttle-search-input').value);
}

function renderGroupButtons() {
  const container = document.getElementById('group-buttons-area');
  container.innerHTML = "";
  (masterData.groups || []).forEach(grp => {
      createGroupButton(container, grp.groupName, grp.memberIds, true, grp.groupId);
  });

  const addBtn = document.createElement('div');
  addBtn.className = 'group-chip';
  addBtn.style.backgroundColor = '#4caf50';
  addBtn.style.color = 'white';
  addBtn.style.fontWeight = 'bold';
  addBtn.innerText = "＋新規作成";
  addBtn.style.opacity = (isDeleteMode || isEditMode) ? "0.3" : "1.0";
  addBtn.onclick = () => {
      if(isDeleteMode || isEditMode) return;
      openGroupModal();
  };
  container.appendChild(addBtn);

  if ((masterData.groups || []).length > 0) {
      const editBtn = document.createElement('div');
      editBtn.className = 'group-chip';
      editBtn.style.backgroundColor = isEditMode ? '#2980b9' : '#3498db';
      editBtn.style.color = 'white';
      editBtn.style.fontWeight = 'bold';
      editBtn.innerText = isEditMode ? "完了" : "✎ 編集";
      editBtn.onclick = () => {
          isEditMode = !isEditMode;
          isDeleteMode = false;
          renderGroupButtons();
      };
      container.appendChild(editBtn);

      const delBtn = document.createElement('div');
      delBtn.className = 'group-chip';
      delBtn.style.backgroundColor = isDeleteMode ? '#c0392b' : '#e74c3c';
      delBtn.style.color = 'white';
      delBtn.style.fontWeight = 'bold';
      delBtn.innerText = isDeleteMode ? "完了" : "× 削除";
      delBtn.onclick = () => {
          isDeleteMode = !isDeleteMode;
          isEditMode = false;  
          renderGroupButtons();
      };
      container.appendChild(delBtn);
  }
}

function createGroupButton(container, name, ids, isCustom, groupId) {
    const btn = document.createElement('div');
    btn.className = 'group-chip';
    btn.innerText = name;
    btn.onclick = () => {
        if (isDeleteMode) {
            if (isCustom) deleteSharedGroup(groupId, name);
            else alert("この項目はシステム固定のため削除できません。");
            return;
        }
        if (isEditMode) {
            if (isCustom) openGroupModal(groupId, name, ids);
            else alert("この項目はシステム固定のため編集できません。");
            return;
        }
        selectGroupMembers(ids);
    };

    if (isDeleteMode && isCustom) {
        btn.style.border = "2px dashed #c0392b"; 
        btn.style.color = "#c0392b";
        btn.style.backgroundColor = "#fdeaea";
    } else if (isEditMode && isCustom) {
        btn.classList.add('edit-mode-style');
    }
    container.appendChild(btn);
}

function openGroupModal(groupId = null, groupName = "", memberIds = "") {
    document.getElementById('groupCreateModal').style.display = 'flex';
    const titleEl = document.getElementById('group-modal-title');
    const nameInput = document.getElementById('new-group-name');
    const idInput = document.getElementById('edit-group-id');
    const searchInput = document.getElementById('group-shuttle-search');
    
    searchInput.value = "";
    groupCreateSelectedIds.clear();

    if (groupId) {
        titleEl.innerText = "グループ編集";
        idInput.value = groupId;
        nameInput.value = groupName;
        if (memberIds) {
            String(memberIds).split(/[,、\s]+/).map(s => s.trim()).forEach(id => {
               const u = masterData.users.find(user => String(user.userId) === id);
               if(u) groupCreateSelectedIds.add(String(u.userId));
            });
        }
    } else {
        titleEl.innerText = "グループ作成";
        idInput.value = "";
        nameInput.value = "";
    }
    renderGroupCreateShuttle();
}

async function saveNewGroup() {
    const id = document.getElementById('edit-group-id').value;
    const name = document.getElementById('new-group-name').value.trim();
    if (!name) { alert("グループ名を入力してください"); return; }
    if (groupCreateSelectedIds.size === 0) { alert("メンバーを1人以上選択してください"); return; }

    const idsStr = Array.from(groupCreateSelectedIds).join(',');
    const params = {
        action: id ? 'updateGroup' : 'createGroup',
        groupId: id,
        groupName: name,
        memberIds: idsStr,
        operatorName: currentUser ? currentUser.userName : 'Unknown'
    };
    const result = await callAPI(params);
    if (result.status === 'success') {
        const msg = id ? `グループ「${name}」を更新しました` : `グループ「${name}」を作成しました`;
        alert(msg);
        closeGroupModal();
        isEditMode = false;
        isDeleteMode = false;
        loadAllData(true); 
    } else {
        alert("保存エラー: " + result.message);
    }
}
function closeGroupModal() { document.getElementById('groupCreateModal').style.display = 'none'; }

async function deleteSharedGroup(groupId, groupName) {
    if(!confirm(`共有グループ「${groupName}」を本当に削除しますか？\n（全社員の画面から消えます）`)) return;
    const result = await callAPI({ action: 'deleteGroup', groupId: groupId });
    if (result.status === 'success') {
        alert("削除しました");
        loadAllData(true);
    } else {
        alert("削除エラー: " + result.message);
    }
}

/* ==============================================
   8. ログ関連
   ============================================== */
function searchLogs() { currentLogPage = 1; renderLogs(); }
function changeLogPage(direction) { currentLogPage += direction; renderLogs(); }

/* ==============================================
   ログ一覧描画 (曜日追加・堅牢版)
   ============================================== */
function renderLogs() {
    const tbody = document.getElementById('log-tbody');
    tbody.innerHTML = "";
    if (!masterData.logs || masterData.logs.length === 0) {
        document.getElementById('log-pagination').innerHTML = "データがありません";
        return;
    }

    let allLogs = [...masterData.logs].sort((a, b) => {
    return new Date(b.timestamp) - new Date(a.timestamp);
});
    const filterText = document.getElementById('log-search-input').value.toLowerCase().trim();
    
    // 安全な日付パース関数
    const safeDate = (str) => new Date(String(str).replace(/-/g, '/'));

    if (filterText) {
        const searchKata = hiraToKata(filterText); 
        const searchHira = kataToHira(filterText);

        allLogs = allLogs.filter(log => {
            const dateStr = formatDate(safeDate(log.timestamp));
            let roomName = log.resourceName || "";
            const roomObj = masterData.rooms.find(r => String(r.roomId) === String(log.resourceId || log.resourceName));
            if (roomObj) roomName = roomObj.roomName;

            const operatorUser = masterData.users.find(u => u.userName === log.operatorName);
            const operatorKana = operatorUser ? (operatorUser.kana || "") : "";

            return (
                dateStr.includes(filterText) ||
                (log.operatorName && log.operatorName.toLowerCase().includes(filterText)) ||
                (operatorKana && (
                    operatorKana.includes(filterText) || 
                    operatorKana.includes(searchKata) || 
                    operatorKana.includes(searchHira)
                )) ||
                (log.action && log.action.toLowerCase().includes(filterText)) ||
                (roomName && roomName.toLowerCase().includes(filterText)) ||
                (log.details && log.details.toLowerCase().includes(filterText))
            );
        });
    }

    const totalItems = allLogs.length;
    const totalPages = Math.ceil(totalItems / LOGS_PER_PAGE) || 1;
    if (currentLogPage < 1) currentLogPage = 1;
    if (currentLogPage > totalPages) currentLogPage = totalPages;

    const displayLogs = allLogs.slice((currentLogPage - 1) * LOGS_PER_PAGE, currentLogPage * LOGS_PER_PAGE);

    const resolveName = (id) => {
        const u = masterData.users.find(user => String(user.userId) === String(id));
        return u ? u.userName : id;
    };

    const formatRange = (rangeStr) => {
        if (!rangeStr || !rangeStr.includes(' - ')) return rangeStr;
        const parts = rangeStr.split(' - ');
        const sDate = safeDate(parts[0]);
        const eDate = safeDate(parts[1]);
        if (isNaN(sDate.getTime()) || isNaN(eDate.getTime())) return rangeStr;

        const week = ['日', '月', '火', '水', '木', '金', '土'];
        const dayIndex = sDate.getDay();
        const w = isNaN(dayIndex) ? '?' : week[dayIndex];
        
        return `${sDate.getMonth() + 1}/${sDate.getDate()}(${w}) ${pad(sDate.getHours())}:${pad(sDate.getMinutes())} - ${pad(eDate.getHours())}:${pad(eDate.getMinutes())}`;
    };

    displayLogs.forEach(log => {
        const tr = document.createElement('tr');
        let rawResName = log.resourceName || '-';
        let roomDisplay = rawResName;
        let detailLines = "";

        if (rawResName.includes('\n')) {
            const parts = rawResName.split('\n');
            const roomIdPart = parts[0].trim();
            detailLines = parts.slice(1).join('<br>');
            const roomObj = masterData.rooms.find(r => String(r.roomId) === String(roomIdPart));
            roomDisplay = roomObj ? roomObj.roomName : roomIdPart;
        } else {
            const roomObj = masterData.rooms.find(r => String(r.roomId) === String(rawResName));
            if (roomObj) roomDisplay = roomObj.roomName;
        }

        if (detailLines) {
            detailLines = detailLines.replace(/(\d+)/g, (match) => resolveName(match));
        }

        let timeDisplay = log.timeRange || '';
        if (timeDisplay.includes('→')) {
            const ranges = timeDisplay.split('→');
            timeDisplay = `${formatRange(ranges[0].trim())} <br><span style="color:#e67e22; font-weight:bold;">↓</span><br> ${formatRange(ranges[1].trim())}`;
        } else {
            timeDisplay = formatRange(timeDisplay);
        }

        const detailHtml = `<strong>${roomDisplay}</strong>${detailLines ? `<br><span style="font-size:0.85em; color:#666;">${detailLines}</span>` : ''}<br><span style="font-size:0.8em; color:#999;">${timeDisplay}</span>`;

        tr.innerHTML = `<td>${formatDate(safeDate(log.timestamp))}</td><td>${log.operatorName}</td><td>${log.action}</td><td>${detailHtml}</td>`;
        tbody.appendChild(tr);
    });

    renderPaginationControls(totalPages, totalItems, (currentLogPage - 1) * LOGS_PER_PAGE + 1, Math.min(currentLogPage * LOGS_PER_PAGE, totalItems));
}

function renderPaginationControls(totalPages, totalItems, startCount, endCount) {
    const container = document.getElementById('log-pagination');
    container.innerHTML = "";
    if (totalItems === 0) { container.innerText = "一致する履歴はありません"; return; }

    const prevBtn = document.createElement('button');
    prevBtn.className = 'page-btn';
    prevBtn.innerText = "< 前へ";
    prevBtn.disabled = (currentLogPage === 1);
    if (currentLogPage === 1) prevBtn.classList.add('disabled');
    prevBtn.onclick = () => changeLogPage(-1);
    container.appendChild(prevBtn);

    const infoSpan = document.createElement('span');
    infoSpan.className = 'page-info';
    infoSpan.innerText = ` ${startCount} - ${endCount} / ${totalItems}件 `;
    container.appendChild(infoSpan);
    
    const nextBtn = document.createElement('button');
    nextBtn.className = 'page-btn';
    nextBtn.innerText = "次へ >";
    nextBtn.disabled = (currentLogPage === totalPages);
    if (currentLogPage === totalPages) nextBtn.classList.add('disabled');
    nextBtn.onclick = () => changeLogPage(1);
    container.appendChild(nextBtn);
}

/* ==============================================
   9. ユーティリティ関数
   ============================================== */
function pad(n) { return n < 10 ? '0'+n : n; }

// ★修正: 曜日を追加 (安全対策済み)
function formatDate(d) {
    if (isNaN(d.getTime())) return "Invalid Date";
    const week = ['日', '月', '火', '水', '木', '金', '土'];
    const dayIndex = d.getDay();
    const w = isNaN(dayIndex) ? '?' : week[dayIndex];
    return `${d.getMonth()+1}/${d.getDate()}(${w}) ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

// ...以下変更なし
function formatDateToNum(d) {
  if (isNaN(d.getTime())) return ""; 
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}
function hiraToKata(str) {
    return str.replace(/[\u3041-\u3096]/g, function(match) {
        var chr = match.charCodeAt(0) + 0x60;
        return String.fromCharCode(chr);
    });
}
function kataToHira(str) {
    return str.replace(/[\u30A1-\u30F6]/g, function(match) {
        var chr = match.charCodeAt(0) - 0x60;
        return String.fromCharCode(chr);
    });
}
function getVal(obj, keys) {
    if(!obj) return "";
    for (const k of keys) {
        if (obj[k] !== undefined && obj[k] !== null) return obj[k];
    }
    return ""; 
}

/* ==============================================
   10. マップ画像と座標枠の自動同期
   ============================================== */
function initMapResizer() {
  const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
          const img = entry.target;
          const wrapper = img.closest('.map-inner-wrapper');
          
          if (wrapper) {
              // ▼▼▼【修正】サイズが正の場合のみ適用（非表示時の0px固定防止）▼▼▼
              if (entry.contentRect.width > 0 && entry.contentRect.height > 0) {
                  wrapper.style.width = entry.contentRect.width + 'px';
                  wrapper.style.height = entry.contentRect.height + 'px';
              }
          }
      }
  });

  const mapImages = document.querySelectorAll('.map-image');
  if (mapImages.length > 0) {
      mapImages.forEach(img => resizeObserver.observe(img));
  } else {
      setTimeout(initMapResizer, 500);
  }
}
/* ==============================================
   追加: 空き状況検索 (Availability Search) 機能
   ============================================== */

// モーダルを開く
function openAvailabilityModal() {
    const modal = document.getElementById('availabilityModal');
    if (!modal) return;
    
    const content = modal.querySelector('.modal-content');
    if(content) content.classList.remove('modal-expanded');
    
    // 現在の日時を初期値セット
    const now = new Date();
    const y = now.getFullYear();
    const m = ('0' + (now.getMonth() + 1)).slice(-2);
    const d = ('0' + now.getDate()).slice(-2);
    
    // 現在時刻から「次の00分か30分」を計算
    let h = now.getHours();
    let min = now.getMinutes();
    if(min < 30) min = 0;
    else { min = 30; } 
    
    document.getElementById('avail-date').value = `${y}-${m}-${d}`;
    document.getElementById('avail-start').value = `${('0'+h).slice(-2)}:${('0'+min).slice(-2)}`;
    // 終了時間は自動計算させる
    autoSetAvailEndTime();

    // 結果エリアリセット
    document.getElementById('avail-result-container').innerHTML = '';

    modal.style.display = 'flex';
}

// モーダルを閉じる
function closeAvailabilityModal() {
    const modal = document.getElementById('availabilityModal');
    if(modal) modal.style.display = 'none';
}

// 検索実行
function execAvailabilitySearch() {
    const dateVal = document.getElementById('avail-date').value;
    const startVal = document.getElementById('avail-start').value;
    const endVal = document.getElementById('avail-end').value;

    if (!dateVal || !startVal || !endVal) {
        alert("日付と時間を正しく入力してください");
        return;
    }

    const searchStart = new Date(`${dateVal}T${startVal}:00`);
    const searchEnd = new Date(`${dateVal}T${endVal}:00`);

    if (searchStart >= searchEnd) {
        alert("開始時間は終了時間より前に設定してください");
        return;
    }

    const resultContainer = document.getElementById('avail-result-container');
    resultContainer.innerHTML = ""; 

    let hasRoom = false;
    const rooms = masterData.rooms;

    rooms.forEach(room => {
        // その部屋の「指定日」の予約を取得
        const roomRes = masterData.reservations.filter(res => {
            const rId = getVal(res, ['resourceId', 'roomId', 'room_id', 'resource_id', '部屋ID', '部屋']);
            return String(rId) === String(room.roomId);
        });

        // 重複チェック
        const isBusy = roomRes.some(res => {
            const rStart = new Date(res._startTime || res.startTime);
            const rEnd = new Date(res._endTime || res.endTime);
            return (rStart < searchEnd && rEnd > searchStart);
        });

        const item = document.createElement('div');
        item.className = 'avail-list-item';

        const statusHtml = isBusy 
            ? `<span class="status-ng">×</span>`
            : `<span class="status-ok" onclick="transitionToBooking('${room.roomName}', '${dateVal}', '${startVal}', '${endVal}')">○</span>`;

        item.innerHTML = `
            <div><div class="avail-room-name">${room.roomName}</div></div>
            <div>${statusHtml}</div>
        `;
        resultContainer.appendChild(item);
        hasRoom = true;
    });

    if(!hasRoom) {
        resultContainer.innerHTML = '<p style="padding:20px; text-align:center;">部屋データがありません</p>';
    }
    const modalContent = document.querySelector('#availabilityModal .modal-content');
    if (modalContent) {
        modalContent.classList.add('modal-expanded');
    }
}
/* ==============================================
   11. 空き状況検索 ⇔ 予約画面連携
   ============================================== */
function transitionToBooking(roomName, dateVal, startVal, endVal) {
  document.getElementById('availabilityModal').style.display = 'none';

  document.getElementById('edit-res-id').value = ''; 
  document.getElementById('modal-title').innerText = '新規予約';
  document.getElementById('input-date').value = dateVal;
  document.getElementById('input-start').value = startVal;
  document.getElementById('input-end').value = endVal;
  document.getElementById('input-title').value = ""; 
  document.getElementById('input-note').value = "";  
  
  const roomSelect = document.getElementById('input-room');
  for (let i = 0; i < roomSelect.options.length; i++) {
    if (roomSelect.options[i].text === roomName) {
      roomSelect.selectedIndex = i;
      break;
    }
  }

  selectedParticipantIds.clear();
  if (typeof currentUser !== 'undefined' && currentUser && currentUser.userId) {
      selectedParticipantIds.add(String(currentUser.userId));
  }
  document.getElementById('shuttle-search-input').value = ""; 

  renderShuttleLists(); 

  document.getElementById('bookingModal').style.display = 'flex';
  document.getElementById('btn-back-avail').style.display = 'inline-block'; 
  document.getElementById('btn-modal-cancel').style.display = 'none';       
}

function backToAvailability() {
  document.getElementById('bookingModal').style.display = 'none';
  document.getElementById('availabilityModal').style.display = 'flex';
}

function scrollToNow() {
  const container = document.getElementById('rooms-container-all');
  const axis = document.getElementById('time-axis-all');
  if (!container) return;

  const redLine = container.querySelector('.current-time-line');
  if (redLine) {
    const lineTop = redLine.offsetTop;
    const containerHeight = container.clientHeight;
    const targetScroll = lineTop - (containerHeight / 2);

    container.scrollTop = targetScroll;
    if(axis) axis.scrollTop = targetScroll;
  }
}

/* ==============================================
   12. 設定メニュー & その他機能
   ============================================== */
function toggleSettingsMenu() {
  const dropdown = document.getElementById("settings-dropdown");
  dropdown.classList.toggle("show");
}

function manualRefresh() {
  const dropdown = document.getElementById("settings-dropdown");
  if(dropdown) dropdown.classList.remove("show");
  console.log("手動更新を実行します");
  loadAllData(true, false); 
  updateRefreshTime();
}

window.onclick = function(event) {
  if (event.target.matches('.settings-icon')) return;
  const dropdown = document.getElementById("settings-dropdown");
  if (dropdown && dropdown.classList.contains('show')) {
    dropdown.classList.remove('show');
  }
}

/* パスワード変更 */
function openPasswordModal() {
  const dropdown = document.getElementById("settings-dropdown");
  if(dropdown) dropdown.classList.remove("show");
  document.getElementById('old-pass').value = "";
  document.getElementById('new-pass').value = "";
  document.getElementById('new-pass-confirm').value = "";
  document.getElementById('passwordModal').style.display = 'flex';
}
function closePasswordModal() { document.getElementById('passwordModal').style.display = 'none'; }

async function savePassword() {
  const oldPass = document.getElementById('old-pass').value;
  const newPass = document.getElementById('new-pass').value;
  const confirmPass = document.getElementById('new-pass-confirm').value;

  if (!oldPass || !newPass) { alert("全ての項目を入力してください"); return; }
  if (newPass !== confirmPass) { alert("新しいパスワードが一致しません"); return; }

  const params = {
    action: 'changePassword',
    userId: currentUser.userId,
    oldPassword: oldPass,
    newPassword: newPass
  };

  const result = await callAPI(params);
  if (result.status === 'success') {
    alert("パスワードを変更しました。\n次回ログイン時から有効です。");
    closePasswordModal();
  } else {
    alert("エラー: " + result.message);
  }
}

/* カスタム時間ピッカー */
function initCustomTimePickers() {
  const wrappers = document.querySelectorAll('.time-picker-wrapper');
  
  wrappers.forEach(wrapper => {
    if (wrapper.querySelector('.custom-time-dropdown')) return;

    const dropdown = document.createElement('div');
    dropdown.className = 'custom-time-dropdown';

    const times = [];
    for(let h=7; h<=21; h++) {
       const hStr = (h < 10 ? '0' : '') + h;
       if (h === 21) times.push("21:00");
       else ['00','15','30','45'].forEach(m => times.push(`${hStr}:${m}`));
    }

    times.forEach(time => {
       const item = document.createElement('div');
       item.className = 'time-option';
       item.innerText = time;
       
       item.onclick = (e) => {
         e.stopPropagation();
         const input = wrapper.querySelector('input');
         input.value = time;
         if (input.id === 'input-start') autoSetEndTime();
         if (input.id === 'avail-start') autoSetAvailEndTime();
         dropdown.classList.remove('show');
       };
       dropdown.appendChild(item);
    });

    wrapper.appendChild(dropdown);

    const arrow = wrapper.querySelector('.time-picker-arrow');
    if (arrow) {
      arrow.onclick = (e) => {
         e.stopPropagation();
         document.querySelectorAll('.custom-time-dropdown').forEach(d => {
            if(d !== dropdown) d.classList.remove('show');
         });
         
         if (dropdown.classList.contains('show')) {
             dropdown.classList.remove('show');
         } else {
             dropdown.classList.add('show');
             const currentVal = wrapper.querySelector('input').value;
             if (currentVal) {
                 const targetItem = Array.from(dropdown.children).find(child => child.innerText === currentVal);
                 if (targetItem) dropdown.scrollTop = targetItem.offsetTop;
             }
         }
      };
    }
  });
  document.addEventListener('click', () => {
     document.querySelectorAll('.custom-time-dropdown').forEach(d => d.classList.remove('show'));
  });
}

function updateRefreshTime() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    
    const el = document.getElementById('last-update-time');
    if (el) el.innerText = `更新：${h}:${m}`;
}

/* お問い合わせ */
function openContactModal() {
  const dropdown = document.getElementById("settings-dropdown");
  if(dropdown) dropdown.classList.remove("show");
  document.getElementById('contact-message').value = "";
  document.getElementById('contactModal').style.display = 'flex';
}
function closeContactModal() { document.getElementById('contactModal').style.display = 'none'; }

async function sendContactFeedback() {
  const msg = document.getElementById('contact-message').value.trim();
  if (!msg) { alert("お問い合わせ内容を入力してください"); return; }

  document.getElementById('loading').style.display = 'flex';
  const params = {
    action: 'sendFeedback',
    operatorName: currentUser ? currentUser.userName : 'Unknown',
    message: msg
  };

  try {
    const result = await callAPI(params);
    document.getElementById('loading').style.display = 'none';
    if (result.status === 'success') {
      alert("送信しました。\nご意見ありがとうございます！");
      closeContactModal();
    } else {
      alert("送信エラー: " + result.message);
    }
  } catch (e) {
    document.getElementById('loading').style.display = 'none';
    alert("通信エラーが発生しました");
  }
}

function openHistoryFromMenu() {
    const dropdown = document.getElementById("settings-dropdown");
    if(dropdown) dropdown.classList.remove("show");
    switchTab('logs');
}
/* ==============================================
   追加: 曜日表示の更新機能
   ============================================== */
function updateDayDisplay(inputId) {
    const input = document.getElementById(inputId);
    const displaySpan = document.getElementById(inputId + '-week'); // 例: map-date-week
    
    if (input && displaySpan) {
        const d = new Date(input.value);
        if (!isNaN(d.getTime())) {
            const week = ['日', '月', '火', '水', '木', '金', '土'];
            const w = week[d.getDay()];
            displaySpan.innerText = `(${w})`;
            
            // 土日は色を変える（任意）
            if (w === '土') displaySpan.style.color = 'blue';
            else if (w === '日') displaySpan.style.color = 'red';
            else displaySpan.style.color = '#333';
        } else {
            displaySpan.innerText = "";
        }
    }
}
/* ==============================================
   追加: 予約削除機能（これが抜けていました）
   ============================================== */
async function deleteBooking() {
    // 編集中の予約IDを取得
    const resId = document.getElementById('edit-res-id').value;
    
    // IDがない（新規作成画面など）場合は何もしない
    if (!resId) return;

    // 確認ダイアログ
    if (!confirm("本当にこの予約を削除しますか？\n（この操作は取り消せません）")) return;

    // ローディング表示
    const loadingEl = document.getElementById('loading');
    if(loadingEl) loadingEl.style.display = 'flex';

    // 削除APIを呼び出すパラメータ
    const params = {
        action: 'deleteReservation',
        reservationId: resId,
        operatorName: currentUser ? currentUser.userName : 'Unknown'
    };

    try {
        // API通信実行
        const result = await callAPI(params, false); 
        
        if(loadingEl) loadingEl.style.display = 'none';

        if (result.status === 'success') {
            alert("予約を削除しました");
            closeModal();       // モーダルを閉じる
            loadAllData(true);  // 画面を再読み込み
        } else {
            alert("削除エラー: " + result.message);
        }
    } catch (e) {
        if(loadingEl) loadingEl.style.display = 'none';
        console.error(e);
        alert("通信エラーが発生しました");
    }
}
/* ==============================================
   追加: ユニークID生成 (シリーズID用)
   ============================================== */
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
