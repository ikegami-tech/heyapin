//改定java//
const API_URL = "https://script.google.com/macros/s/AKfycbxMdWVjU8TfjmLXMMai2O9lADK5-0dnwGShYSzZD-lQ53nzHP2h9GmmYrMiPst--odS/exec";
const SESSION_KEY_USER = 'bookingApp_User';       // 保存するキー名(ユーザー)
const SESSION_KEY_TIME = 'bookingApp_LoginTime';  // 保存するキー名(時間)
const SESSION_DURATION = 12 * 60 * 60 * 1000;     // 12時間 (ミリ秒)
const IMG_7F = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAf0AAAJDCAMAAAA2Oj0iAAAAAXNSR0IB2cksfwAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAALpQTFRFAEACAAAA////AAAA2dnZuL2/dYSLbn6GVWlyOVFcpKywYXN8HztIBCQznaaqLEZSGDVCW253lqClsbe6qrG0fIqQ0tPUaHmBy83OCyo4j5qgQFdiEjA+v8PEgo+VxcjKR11nTmNsAxwoAhIaAxghAxsmAx0pM0xYJUBNiZWaeYiNJD9MBiY0NE1ZCCg3UmZwWWx1Ij5LU2dxGzhFNE1YCyo5Ax4rBCEuBCIwAxsnBCAtBSUzAyAuP1ZgGtCL5QAAAAF0Uk5TAEDm2GYAAAAHdElNRQfqAQgCCiUxsHu4AAALjUlEQVR42u3de1sa2QHA4U2eAeRyJAIOSERw06zitk1a0nZ78ft/rSIMF2HAbSXE4by/fyLR7ObhzQxnzlzOTz+9pncqdD+9Uj854d69e/9/94p35mhvKn369OnTp0+fPn369OnTp0+fPn369OnTp0+fPn369OnTp0+fPn369OnTp0+fPn369OnTp0+fPn369OnTp0+fPn369OnTp0+fPn369OnTp3/Yd+c10adPX/RFX/RFX/RFX/RFnz59+vTp06dPnz59+vTp06dPnz59+vTp06dPnz59+vTp06dPn/5S/90PumNF9PWj9d//kDtVRV/0RV/0RZ8+ffr06dOnT58+ffr06dOnT58+ffr06dOnT58+ffr0i6N/tOjTp/+m9N8fJ/r06dOnT58+ffr06dOnT58+ffr06dOnTx8WfdFXAfU9tYk+/Tj1vd/0RV/0RV/0RV/0RV/0RV/0RV/0RV/0RV/0RV/0RV/0RV/0RZ8+ffr06dOnT58+ffr06dOnT58+ffr06dOnT58+ffr06dOnT58+ffr06Xu/6Yu+6Iu+6Iu+6Iu+6Iu+6Iu+6Iu+6Iu+6Iu+6Iu+6Iu+6Is+ffr06dOnT58+ffr06dOnT58+ffr06dOnT58+ffr06dOnT58+ffr06dP3ftMXfdEXfdEXfdEXfdEXfdEXfdEXfdEXfdEXfdEXfdEXfdEXffr06dOPU/9o0acve37RF33RF33RF33RF33RF33RF33RF33RF33RF/0323n19uJhXEsXry8fz7o3rQ79k6vbrVTKl4sqzfLUvDOZ1V78zHj28j6lf2pNNqunSXtDuzV7/WDbP339STkZzH49W30SzF636EegP2nP9bsb+rX5i86AfgH6OtndaJ9+azj7pZKr35o0S/RPRb+x9b2zdLf+oD794m5A/0T072eve7OvL7Khfm/265fatPNWv7TUH97M//Rjj/5p6DdX+nP0b4svFo0z/fFDY/Vb9E9C/26lPz/Mv9mlvzomrKX0i6x/sfypbyv9+X699IL+l7YxfwEqtXP6MlkQZ1VX+tVsx79Pf3Sc+V7636P5LN7kMsnRLy12/Jl+83baqHrfWunfHmuun/53KB3NEO/WxuyPS/3xcq/Qyz3im3TbR/uL0v8OzYEn52u/9XGp/7jY8e/Qz/5USr+YDRobE/jTRgv99upYrrdnri85P8YugP7h626cuX2m/zD7YvCifn8yqd4M6Bd0yHeR5Omns0m/evKi/uXT11/pF3PINynl6s+FO5v6aeey+lz/6+pfCf3itBi5J7n6t7MJ/GRdPy21uo2n7fx8bXp3uDwupF+kTf9b3qa/0G+vX8CRHe/fL672mOvftzrtdqu6ddRAvwC1JtsD/pX+eLl5D0qd8bO5vpuktjVTPKRfyE2/lq/fqy4OBx43pc8Xw8W18zyO+Aq56VfTfP1M+DFNKs+cm5ft1b+cRY0S/WJt+vNte9JPdugn5Wzf318p3z105v9YSnfr+NXvP9tP/6DVdn1gL/WHs0FeY7jYzX/pl6b055V+Z/rN3vnD18dmo1m97Y7bR5jrpX/Qvuz6wF7qZxv95dOAf3TTyU4E1WendfvH/uvSP2SlSf6Yb12/N9/4e+WH1Q4ibSyGA/SL20M2XOvt0c+u7Xl208b8Yq/m0LZf5DFfNnFTSfbpl7ZPA9SPfhcP/YPX2bnjX9efX+HZmO7le71eOi3797A4Snz6rek36Bes7u4punX9cnaStz3ZV0q/UPW2ruPO1+9n832dvfo9+oU82L95QX9xlte2f0qVJzkX9ezUr9E/qe727LPX9cf0T3eqp5rs18/OBXSyP7A1Lzi/sGNizF+ostN7eUf7z+b6siODAf1Tqr54KsMe/Vq/ks0INVP6p9T9nkHfQr+zdttepn/X3eiCfvEa7L0cK9NfzAVPvvVWA4X86Bdxmjd/sL743M8+HmYP5aF/Oo33zPSt9Ocn+LrDhP5JDvpyh/zLe3hr96NKa/D8EJF+8WvufdjOY848kDH/yZSurszOq0r/lPWXQ/78K3G/0T9l/eWkff5F+Hc5B4M79Af0C9fyNqzBnlFBnr6zPCdQf/9VGfc5+s7xxVKDfvRPaKdPn36c+oMc/V1HfK7qPG39Dv1Iqo+m3W7M9vyae14g7dande35RV/0RV/0RV/0RV/0RV+/X/9o0aevN6V/tP8RffqiL/qiL/qiL/qiL/qiL/qiL/qiL/qiL/qiL/qiL/qiL/qiL/r06dOnT58+ffr06dOnT58+ffr06dOnT58+ffr06dOnT58+ffr06dOnT1/0RV/09QP1rc5An77s+UVf9EVf9EVf9EVf9EVf9EVf9EVf9EWfvreBvuiLvuiLvuiLvuiLvuiLvuiLvuiLvugXpVK5clatVujHV63eCLPoR9d5c+r+4aLSOqMfW+1qCI165+nLCv3IKk83+8vsa/pxlZ6F0O0l9GOsVw1X/dVL+lH1MVx3EvpxVg/Xg4R+nN2Eq1pCP86GV+EyoR9pozBK6EdaO1yV6Me76dcT+pE2CFdD+rHql8NtQj9W/Wro049VfxiuUvqx6ve3Dvfox/SxX6EfrX493NCPVn8UyrWnhnHrR9rPIbdP6z9D/1T7w+enfold//2Re8NvartWG6y/O/Rj0t98d+jTp0+fPn369OnTp0+fPn369OnTp0+fPn369OnTp0+fPn369OnTp0+fPn369OnTp0+fPn369Om/Jf3KXfW2Uqm98FNvddEP+q/Un9/7d33WT3f9yBte9IP+a/XPapXufVh7wv/z3vSiH/Rfqz8zLV1OkRutrW+/8UU/fpD+MTqmfraRjzZ2/2990Q/6h9JPkvFVaK4/B+TtL/rxg/QL8unyv+kn7UZotJevCrDoB/0D6ifDZmgst/4CLPpB/5D6SXoX7rLP/iIs+kH/oPrJsJE9+7cQi37QP6x+0rkKTwd+xVj0g/6B9ZPL8CEtyqIf9A+tn95Pt/qCLPpB/9D6SWu68Rdk0Q/6B9dPmuGhIIt+0D+8/k34tSCLftA/vP4w/LEgi37QP7x+8qfw55R+rPpfQiOhH6v+1/AX+tHq/zVM6Md4lme22Me38LdiLPpBf/+781Kfwu/v0xtcoYL+QfX//vnz53/89ts/X1r0g/4J7PkHtVrnd/2nni/6Yc9/EvrFjj59+vTp049T/2rHUdqAfgT6DfoR61dD3oEb/Tj0b0MrV79HPwL9bt5q7FN9o74Y9C/DGf1o9QfhOqUf7fH+fTinH61+JVzk7BDox6FfCtdD+tHO9ObcfjMI/6Ifh/7gKrTpR3uWpx6aPfqx6g8b4SP9aM/wlq43Pvrpx3R+/zyE8vrrGv2Yru64CeE2Xdf/O/2Iru2pXYdme03/M/2YruwaPD1vtUQ/Tv0krV+FcHZOP0r96ZFf/emB+7f9Wko/Pv3p7r/SnF3U9+/wH/rR6SfDm8f5RZ2/0Y9NvzR6gq9WKuXwC/249IdnU/rRuGfUF6H+zdOQf+iIL0r9+trhPv249Hsfw/qjtWvhZ/rR6KfVcF1zlidS/dvw4dmTtdv049Evh6vnN/M5vx+PfjtsPl2Xfjz6za0H6tGPRr81W1GFfpz6ze27eAfm+SPRPw/32+f63MsTif5FzmN0e/Qj0f+wdSdP4h7eWPQ7eQsq0I9Ev7x9Dyf9aPTrYUw/Wv1R3qM7pvpD+hHo34Wzynae1xeHvmd1xqxfye3TJ09rjOnKrs13x6iPPn369OnTj0f/1KNPn/6OPeOpR58+ffr06dOnT58+ffr06dOnT58+ffr06dOnT58+ffr06dOnT58+ffr06dOnT58+ffr06dOnT58+ffr06dOnT58+ffr06dOnT58+ffr06dOnT58+ffr06dOnT58+ffr06dOnT58+ffr06dOnT58+ffr06dOnT58+ffr06dOnT59+cfS1e51a+vSlE+y/39uKkAe8aVUAAAAASUVORK5CYII="
const IMG_6F = "data:image/png;base64,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"
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

// 選択状態管理
let selectedParticipantIds = new Set();      // 予約モーダル用
let groupCreateSelectedIds = new Set();      // グループ作成モーダル用
let originalParticipantIds = new Set();      // 編集時の比較用（今回は未使用だが保持）
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
  // 日付の初期セット（既存処理）
  const d = new Date();
  if(document.getElementById('timeline-date')) document.getElementById('timeline-date').valueAsDate = d;
  if(document.getElementById('map-date')) document.getElementById('map-date').valueAsDate = d;

  // ★追加: 自動ログインチェックを実行
  checkAutoLogin();
  
  // ★追加: マップ画像のサイズ調整監視を開始
  initMapResizer();
};

async function callAPI(params) {
  if(API_URL.indexOf("http") === -1) { alert("GASのURLを設定してください"); return; }
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
      
      // ★追加: ログイン成功時に情報をブラウザに保存する
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

// ★追加: 自動ログイン判定関数
function checkAutoLogin() {
  const storedUser = localStorage.getItem(SESSION_KEY_USER);
  const storedTime = localStorage.getItem(SESSION_KEY_TIME);

  if (storedUser && storedTime) {
    const now = new Date().getTime();
    const loginTime = parseInt(storedTime, 10);

    // 経過時間をチェック (現在時刻 - ログイン時刻 < 12時間)
    if (now - loginTime < SESSION_DURATION) {
      // 有効期間内なので、ログイン状態を復元
      try {
        currentUser = JSON.parse(storedUser);
        document.getElementById('display-user-name').innerText = currentUser.userName;
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('app-screen').style.display = 'flex'; 
        
        // データをロード
        loadAllData();
        return; // 自動ログイン成功したらここで終了
      } catch (e) {
        console.error("保存データの読み込みに失敗しました", e);
      }
    } else {
      // 12時間過ぎているので、期限切れとして情報を消す
      console.log("セッション有効期限切れです");
      localStorage.removeItem(SESSION_KEY_USER);
      localStorage.removeItem(SESSION_KEY_TIME);
    }
  }
  // 自動ログインできない場合は、何もしない（ログイン画面のまま）
}

function logout() { 
  // ★追加: 保存されたログイン情報を削除
  localStorage.removeItem(SESSION_KEY_USER);
  localStorage.removeItem(SESSION_KEY_TIME);
  
  // 画面リロード
  location.reload(); 
}

async function loadAllData(isUpdate = false, isBackground = false) {
  // 裏側更新(isBackground)でない時だけ、ローディング画面を出す
  if (!isBackground) {
      document.getElementById('loading').style.display = 'flex';
  }
  
  const url = new URL(API_URL);
  url.searchParams.append('action', 'getAllData');
  url.searchParams.append('_t', new Date().getTime()); 
  
  try {
    const res = await fetch(url.toString(), { method: 'GET', headers: { 'Content-Type': 'text/plain;charset=utf-8' } });
    const json = await res.json();
    
    // 読み込み完了したらローディングを消す
    if (!isBackground) {
        document.getElementById('loading').style.display = 'none';
    }

    if (json.status === 'success') {
      masterData = json.data;
      if (isUpdate) {
          refreshUI();
      } else {
          initUI();
      }
    } else { 
      // バックグラウンド更新時はエラーが出てもアラートを出さない方が親切（無視する）
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
  // 部屋プルダウン初期化
  updateRoomSelect();
  renderGroupButtons();
  
  currentFloor = 7;
  currentTimelineFloor = 7;

  renderDualMaps(); // 7階・6階一括描画
  switchFloor(7);   // 初期表示
  switchTab('map-view');
  initCustomTimePickers();
  updateRefreshTime();
  // ▼▼▼ 追加: 自動更新を開始 ▼▼▼
  startPolling();
}
/* ==============================================
   自動更新 (ポーリング) 設定：アイドリング検知付き
   ============================================== */

// ▼ 設定値（ここを変更しました）
const POLLING_INTERVAL_ACTIVE = 20000;   // アクティブ時: 20秒
const POLLING_INTERVAL_IDLE   = 600000;  // アイドル時: 10分 (10 * 60 * 1000)
const IDLE_TIMEOUT            = 60000;   // 放置判定: 1分 (60 * 1000)

let pollingTimer = null;
let idleCheckTimer = null;
let isUserIdle = false;
let lastActivityTime = new Date().getTime();

/**
 * ユーザーの操作を監視して、アクティブ/アイドルを切り替える
 */
function initIdleDetection() {
    // 検知する操作イベント (PCのマウス操作、キー入力、スマホのタッチ、スクロール)
    const events = ['mousemove', 'keydown', 'click', 'scroll', 'touchstart'];
    
    events.forEach(evt => {
        window.addEventListener(evt, () => {
            lastActivityTime = new Date().getTime();
            
            // アイドル状態だった場合、即座にアクティブモードに復帰させる
            if (isUserIdle) {
                console.log("操作検知: アクティブモード(20秒更新)に復帰します");
                isUserIdle = false;
                
                // 即座にデータを読み込む (ユーザー体験向上のため)
                loadAllData(true, true);
                
                // タイマーを20秒間隔で再始動
                restartPolling(POLLING_INTERVAL_ACTIVE);
            }
        }, { passive: true });
    });

    // 定期チェック (5秒ごとに「1分以上放置されていないか」を確認)
    if (idleCheckTimer) clearInterval(idleCheckTimer);
    idleCheckTimer = setInterval(() => {
        const now = new Date().getTime();
        // まだアイドル判定されておらず、かつ最後の操作から規定時間が過ぎていたら
        if (!isUserIdle && (now - lastActivityTime > IDLE_TIMEOUT)) {
            console.log("1分間操作なし: アイドルモード(10分更新)に移行します");
            isUserIdle = true;
            restartPolling(POLLING_INTERVAL_IDLE);
        }
    }, 5000);
}

/**
 * 指定された間隔でポーリングタイマーを再セットする
 */
function restartPolling(interval) {
    if (pollingTimer) clearInterval(pollingTimer);
    
    pollingTimer = setInterval(() => {
        // モーダルが開いている時は更新しない（入力の邪魔になるため）
        const modalOpen = document.querySelectorAll('.modal[style*="display: flex"]').length > 0;
        
        if (!modalOpen) {
            console.log(`自動更新を実行中... (間隔: ${interval/1000}秒)`);
            loadAllData(true, true);
        } else {
            console.log("モーダル表示中のため自動更新をスキップしました");
        }
    }, interval);
}

/**
 * 起動時に呼ばれる関数
 */
function startPolling() {
    console.log("自動更新機能を開始します");
    initIdleDetection();            // 操作検知の開始
    restartPolling(POLLING_INTERVAL_ACTIVE); // 最初はアクティブモード(20秒)でスタート
}

function refreshUI() {
  renderLogs();
  renderGroupButtons();
  updateRoomSelect();

  if (document.getElementById('view-timeline').classList.contains('active')) {
      renderVerticalTimeline('all');
  } else if (document.getElementById('view-map-view').classList.contains('active')) {
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

function switchTab(tabName) {
  document.querySelectorAll('.view-container').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  
  const targetView = document.getElementById('view-' + tabName);
  if(targetView) targetView.classList.add('active');
  
  const tabs = document.querySelectorAll('.nav-item');
  if(tabName === 'map-view' && tabs[0]) tabs[0].classList.add('active');
  if(tabName === 'timeline' && tabs[1]) tabs[1].classList.add('active');
  if(tabName === 'logs' && tabs[2]) tabs[2].classList.add('active');
  
  if (tabName === 'map-view') {
      setTimeout(() => { switchFloor(currentFloor); }, 50);
  } else if (tabName === 'timeline') {
      setTimeout(() => {
          document.querySelectorAll('#view-timeline .floor-tab').forEach(tab => tab.classList.remove('active'));
          const activeTab = document.getElementById(`timeline-tab-${currentTimelineFloor}f`);
          if(activeTab) activeTab.classList.add('active');
          
          renderVerticalTimeline('all');

          // ★追加: 描画が終わった直後に、赤線を中央にする処理を呼ぶ
          setTimeout(scrollToNow, 50); 

      }, 0);
  } else if (tabName === 'logs') {
      renderLogs();
  }
}

/* ==============================================
   4. マップ関連処理
   ============================================== */
/* ==============================================
   4. マップ関連処理 (renderDualMaps修正版)
   ============================================== */
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
            
            // ★追加: 名前で判定して、色分け用のクラスを追加する
            if (area.name.indexOf("会議室") !== -1) {
                div.classList.add("type-meeting");    // 緑
            } else if (area.name.indexOf("応接室") !== -1) {
                div.classList.add("type-reception");  // オレンジ
            } else if (area.name.indexOf("Z") !== -1 || area.name.indexOf("Ｚ") !== -1) {
                div.classList.add("type-z");          // 青 (半角Zと全角Ｚ両対応)
            }

            div.style.top = area.top + "%";
            div.style.left = area.left + "%";
            div.style.width = area.width + "%";
            div.style.height = area.height + "%";
            div.innerText = area.name;
            
            // mapConfigで指定された初期色があれば使う（ホバー時はCSSが優先される）
            if(area.color) div.style.backgroundColor = area.color;
            
            div.setAttribute('data-room-id', area.id);
            div.onclick = function() { selectRoomFromMap(this); };
            container.appendChild(div);
        });
    });
}

function switchFloor(floor) {
    currentFloor = floor;
    // タブ切り替え
    const mapContainer = document.getElementById('view-map-view');
    if(mapContainer) {
        mapContainer.querySelectorAll('.floor-tab').forEach(tab => tab.classList.remove('active'));
    }
    const activeTab = document.getElementById(`tab-${floor}f`);
    if(activeTab) activeTab.classList.add('active');

    // 表示エリア切り替え
    const area7 = document.getElementById('area-7f');
    const area6 = document.getElementById('area-6f');
    if(area7) area7.classList.remove('active');
    if(area6) area6.classList.remove('active');
    
    const activeArea = document.getElementById(`area-${floor}f`);
    if(activeArea) activeArea.classList.add('active');
}

function selectRoomFromMap(element) {
  const roomId = element.getAttribute('data-room-id');
  const roomObj = masterData.rooms.find(r => String(r.roomId) === String(roomId));
  
  if (!roomObj) {
    alert("エラー: 指定された部屋ID (" + roomId + ") が見つかりません。");
    return;
  }
  currentMapRoomId = roomId;
  document.getElementById('map-timeline-section').style.display = 'block';
  document.getElementById('map-selected-room-name').innerText = roomObj.roomName;
  renderVerticalTimeline('map');
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
  const d = new Date(input.value);
  d.setDate(d.getDate() + days);
  input.valueAsDate = d;
  if(inputId === 'timeline-date') renderVerticalTimeline('all');
    else if(inputId === 'map-date') renderVerticalTimeline('map');
}

// 軸描画（共通）
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
   修正版v2: renderVerticalTimeline
   (スマホタップ対応 & マップ時の滑らかスクロール対応)
   ============================================== */
function renderVerticalTimeline(mode) {
    let container, dateInputId, targetRooms, timeAxisId;

    // モード判定
    if (mode === 'all') {
        container = document.getElementById('rooms-container-all');
        dateInputId = 'timeline-date';
        timeAxisId = 'time-axis-all';
        const floorConfig = mapConfig[currentTimelineFloor];
        if (floorConfig) {
            const floorRoomIds = floorConfig.areas.map(area => area.id);
            targetRooms = masterData.rooms.filter(r => floorRoomIds.includes(r.roomId));
        } else { targetRooms = []; }
    } else if (mode === 'map') {
        container = document.getElementById('rooms-container-map');
        dateInputId = 'map-date';
        timeAxisId = 'time-axis-map';
        targetRooms = masterData.rooms.filter(r => String(r.roomId) === String(currentMapRoomId));
    } else { return; }

    if (!targetRooms || targetRooms.length === 0) {
        if (container) container.innerHTML = "<div style='padding:20px;'>部屋データが見つかりません。</div>";
        return;
    }

    let savedScrollTop = 0;
    let savedScrollLeft = 0;
    
    // マップモードの場合、スクロール位置の保存対象は親ラッパーにする
    const mapWrapper = document.querySelector('.map-wrapper');
    if (mode === 'map' && mapWrapper) {
        savedScrollTop = mapWrapper.scrollTop;
    } else if (container) {
        savedScrollTop = container.scrollTop;
        savedScrollLeft = container.scrollLeft;
    }

    // コンテナ初期化
    document.body.style.overflow = "hidden";
    if (container) {
        container.innerHTML = "";
        // マップモードと一覧モードでスタイルを分岐
        if (mode === 'map') {
            container.style.height = "auto";
            container.style.overflowY = "visible"; // マップ時は中身に合わせて伸びる
        } else {
            container.style.height = "100%";
            container.style.overflowY = "auto";    // 一覧時は枠内でスクロール
        }
        container.style.width = "100%";
        container.style.maxWidth = "100vw";
        container.style.overflowX = "auto";
        container.style.minWidth = "0";
        
        // ★修正: マップモード時は親へのスクロール連動(bubbling)を許可する
        // これにより、強制スクロールJSを使わずに滑らかなネイティブスクロールが可能になります
        container.style.overscrollBehavior = (mode === 'map') ? "auto" : "contain";

        container.style.display = "flex";
        container.style.flexWrap = "nowrap";
        container.style.alignItems = "flex-start";
        container.style.position = "relative";
        container.style.boxSizing = "border-box";
        container.style.setProperty('cursor', 'default', 'important');
        container.style.userSelect = "none";
        container.style.webkitUserSelect = "none";
    }

    // ==============================================
    // 【修正1】 ドラッグスクロール処理 (PCのみ有効化)
    // ==============================================
    let isDown = false;
    let startX, startY;
    let startScrollLeft, startScrollTop;
    let hasDragged = false;
    let isTouch = false; // スマホ判定フラグ

    if (container) {
        // タッチ開始を検知したらフラグを立てる
        container.addEventListener('touchstart', () => { isTouch = true; }, { passive: true });

        // マップモード時のスクロール対象（親ラッパー または 自分自身）
        const vScrollTarget = (mode === 'map') ? mapWrapper : container;

        container.onmousedown = (e) => {
            // ★スマホならPC用ドラッグ処理を即座に中断（ネイティブスクロールに任せる）
            if (isTouch) return;

            isDown = true;
            hasDragged = false;
            container.style.cursor = "grabbing";
            startX = e.pageX;
            startY = e.pageY;
            startScrollLeft = container.scrollLeft;
            // 縦スクロール位置の取得元を分岐
            startScrollTop = vScrollTarget ? vScrollTarget.scrollTop : 0;
        };

        container.onmouseleave = () => { isDown = false; container.style.cursor = "default"; };
        container.onmouseup = () => {
            isDown = false;
            container.style.cursor = "default";
            // クリック判定のために少し遅らせてフラグを下ろす
            setTimeout(() => { hasDragged = false; }, 50);
        };

        container.onmousemove = (e) => {
            if (!isDown || isTouch) return; // スマホなら無視
            e.preventDefault();

            const x = e.pageX;
            const y = e.pageY;
            const walkX = (x - startX) * 1.5;
            const walkY = (y - startY) * 1.5;

            // 5px以上動いたらドラッグとみなす（クリック誤爆防止）
            if (Math.abs(walkX) > 5 || Math.abs(walkY) > 5) {
                hasDragged = true;
            }

            container.scrollLeft = startScrollLeft - walkX;
            if (vScrollTarget) {
                vScrollTarget.scrollTop = startScrollTop - walkY;
            }
        };

        // ★削除: 以前ここにあった「強制スクロール(wheelイベント)」は削除しました。
        // container.style.overscrollBehavior = "auto" にしたことで不要になり、
        // これを消すことでスクロールが滑らかになります。
    }

    // --- 以下、データ描画処理 (変更なし) ---
    
    const rawDateVal = document.getElementById(dateInputId).value;
    const targetDateNum = formatDateToNum(new Date(rawDateVal));
    for (let h = START_HOUR; h < END_HOUR; h++) hourRowHeights[h] = BASE_HOUR_HEIGHT;

    const DYNAMIC_CHARS_PER_LINE = 12;
    const allRelevantReservations = masterData.reservations.filter(res => {
        const startTimeVal = getVal(res, ['startTime', 'start_time', '開始日時', '開始', 'Start']);
        if (!startTimeVal) return false;
        const rId = getVal(res, ['resourceId', 'roomId', 'room_id', 'resource_id', '部屋ID', '部屋']);
        const isTargetRoom = targetRooms.some(r => String(r.roomId) === String(rId));
        const resDateNum = formatDateToNum(new Date(startTimeVal));
        res._startTime = startTimeVal;
        res._endTime = getVal(res, ['endTime', 'end_time', '終了日時', '終了', 'End']);
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
        axisContainer.style.height = (mode === 'map') ? 'auto' : container.style.height;
        axisContainer.style.overflow = "hidden";
        axisContainer.style.display = "block";
        
        // 軸のスクロール同期
        if (mode === 'all') {
            container.onscroll = () => { axisContainer.scrollTop = container.scrollTop; };
            axisContainer.scrollTop = savedScrollTop;
            axisContainer.onwheel = (e) => {
                e.preventDefault();
                container.scrollTop += e.deltaY;
                container.scrollLeft += e.deltaX;
            };
        } else {
            // マップモードの場合は軸自体の高さもコンテンツに合わせる
            axisContainer.style.height = currentTop + "px";
        }

        const axisHeader = axisContainer.querySelector('.time-axis-header');
        if (axisHeader) {
            axisHeader.style.position = "sticky";
            axisHeader.style.top = "0";
            axisHeader.style.backgroundColor = "#fff";
            axisHeader.style.zIndex = "20";
            axisHeader.style.borderBottom = "1px solid #ddd";
            axisHeader.style.boxSizing = "border-box";
        }
    }

    targetRooms.forEach(room => {
        const col = document.createElement('div');
        col.className = 'room-col';
        col.style.minWidth = "200px";
        col.style.flexShrink = "0";
        col.style.flexGrow = "1";
        col.style.position = "relative";
        col.style.borderRight = "1px solid #ddd";
        col.style.overflow = "visible";

        const header = document.createElement('div');
        header.className = 'room-header';
        header.innerText = room.roomName;
        header.style.position = "sticky";
        header.style.top = "0";
        header.style.zIndex = "60";
        header.style.backgroundColor = "#fff";
        header.style.borderBottom = "1px solid #999";
        header.style.borderTop = "1px solid #ddd";
        header.style.height = "40px";
        header.style.lineHeight = "40px";
        header.style.textAlign = "center";
        header.style.fontWeight = "bold";
        header.style.boxSizing = "border-box";
        col.appendChild(header);

        const body = document.createElement('div');
        body.className = 'room-grid-body';
        if (nowTopPx !== -1) {
            const line = document.createElement('div');
            line.className = 'current-time-line';
            line.style.top = nowTopPx + "px";
            body.appendChild(line);
        }
        body.style.height = currentTop + "px";
        body.style.position = "relative";

        for (let h = START_HOUR; h < END_HOUR; h++) {
            const slot = document.createElement('div');
            slot.className = 'grid-slot';
            slot.style.height = hourRowHeights[h] + "px";
            slot.style.boxSizing = "border-box";
            slot.style.borderBottom = "1px dotted #eee";
            body.appendChild(slot);
        }

        // ==============================================
        // 【修正3】 クリック判定 (スマホ対応)
        // ==============================================
        body.onclick = (e) => {
            // PCでの明らかなドラッグ操作後はキャンセル
            if (!isTouch && hasDragged) return;
            if (e.target.closest('.v-booking-bar')) return;

            // スマホ、またはPCのクリックの場合
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
                bar.className = `v-booking-bar type-${room.type}`;
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
                         if (names.length <= 4) {
                             participantsStr = names.join(', ');
                         } else {
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
                    // PCでのドラッグ後はキャンセル
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

    // ==============================================
    // 【修正箇所】スクロール復元 & ズレ補正
    // ==============================================
    if (container) {
        // 1. スクロール位置の復元
        if (mode === 'map' && mapWrapper) {
             mapWrapper.scrollTop = savedScrollTop;
        } else {
             container.scrollTop = savedScrollTop;
             container.scrollLeft = savedScrollLeft;
        }
        
        const axisContainerEnd = document.getElementById(timeAxisId);
        
        // 2. ★追加：予約一覧モードの場合、横スクロールバーの分だけ時間軸の下に詰め物をする
        if (mode === 'all' && axisContainerEnd) {
            axisContainerEnd.scrollTop = savedScrollTop;
            
            // コンテナ全体の高さ - 中身の表示高さ = 横スクロールバーの高さ
            const scrollBarHeight = container.offsetHeight - container.clientHeight;
            
            // スクロールバーが出ている場合のみ実行
            if (scrollBarHeight > 0) {
                const spacer = document.createElement('div');
                spacer.style.height = scrollBarHeight + 'px'; // ズレている分の高さを確保
                spacer.style.width = '1px';
                spacer.style.flexShrink = '0';
                axisContainerEnd.appendChild(spacer);
            }
        }
    }
}
/* ==============================================
   6. 予約・詳細モーダル関連
   ============================================== */
// 1. 新規予約・編集モーダル用
function autoSetEndTime() {
  const startInput = document.getElementById('input-start');
  const endInput = document.getElementById('input-end');
  
  if (!startInput || !endInput || !startInput.value) return;

  const parts = startInput.value.split(':');
  let h = parseInt(parts[0], 10);
  let m = parseInt(parts[1], 10);

  // 1時間進める
  h += 1;

  // ★修正: 21:00 を超える場合は強制的に 21:00 にする
  if (h >= 21) {
    h = 21;
    m = 0; // 分も00にする
  }

  const hStr = (h < 10 ? '0' : '') + h;
  const mStr = (m < 10 ? '0' : '') + m;
  
  endInput.value = `${hStr}:${mStr}`;
}

// 2. 空き状況検索用
function autoSetAvailEndTime() {
  const startInput = document.getElementById('avail-start');
  const endInput = document.getElementById('avail-end');
  
  if (!startInput || !endInput || !startInput.value) return;

  const parts = startInput.value.split(':');
  let h = parseInt(parts[0], 10);
  let m = parseInt(parts[1], 10);

  // 1時間進める
  h += 1;

  // ★修正: 21:00 を超える場合は強制的に 21:00 にする
  if (h >= 21) {
    h = 21;
    m = 0;
  }

  const hStr = (h < 10 ? '0' : '') + h;
  const mStr = (m < 10 ? '0' : '') + m;
  
  endInput.value = `${hStr}:${mStr}`;
}

function selectTimePart(elm) {
    setTimeout(() => {
        const val = elm.value;
        if (!val || val.indexOf(':') === -1) return;
        const colonIndex = val.indexOf(':');
        const cursorPos = elm.selectionStart;
        if (cursorPos <= colonIndex) {
            elm.setSelectionRange(0, colonIndex); 
        } else {
            elm.setSelectionRange(colonIndex + 1, val.length); 
        }
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
    
    // 予約画面の開始時間なら
    if (elm.id === 'input-start') autoSetEndTime();
    
    // ★追加: 空き状況検索の開始時間なら
    if (elm.id === 'avail-start') autoSetAvailEndTime();
    }
}

// 予約モーダル表示
/* script.js の openModal 関数 (機能維持 + 21時制限版) */

function openModal(res = null, defaultRoomId = null, clickHour = null, clickMin = 0) {
  const modal = document.getElementById('bookingModal');
  modal.style.display = 'flex';
  document.getElementById('btn-back-avail').style.display = 'none';   // 戻るボタンを隠す
  document.getElementById('btn-modal-cancel').style.display = 'inline-block'; // キャンセルボタンを表示
   
  // 一旦リセット
  selectedParticipantIds.clear();
  originalParticipantIds.clear(); 
  document.getElementById('shuttle-search-input').value = "";
   
  if (res) {
    // ============================================
    //  既存予約の編集モード (ここは変更なし)
    // ============================================
    document.getElementById('modal-title').innerText = "予約編集";
    document.getElementById('edit-res-id').value = res.id;
    const rId = res._resourceId || res.resourceId || res.roomId; 
    document.getElementById('input-room').value = rId;

    const startObj = new Date(res._startTime || res.startTime);
    const endObj = new Date(res._endTime || res.endTime);
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
    // ============================================
    //  新規予約モード (★ここだけ修正)
    // ============================================
    document.getElementById('modal-title').innerText = "新規予約";
    document.getElementById('edit-res-id').value = "";
    if(defaultRoomId) document.getElementById('input-room').value = defaultRoomId;
    
    let currentTabDate = document.getElementById('view-timeline').classList.contains('active') 
        ? document.getElementById('timeline-date').value 
        : document.getElementById('map-date').value;
    
    if(!currentTabDate) {
        const now = new Date();
        currentTabDate = `${now.getFullYear()}-${('0' + (now.getMonth() + 1)).slice(-2)}-${('0' + now.getDate()).slice(-2)}`;
    }
    document.getElementById('input-date').value = currentTabDate;

    // 時間のセット
    const sHour = clickHour !== null ? clickHour : 9;
    const sMin  = clickMin;
    document.getElementById('input-start').value = `${pad(sHour)}:${pad(sMin)}`;
    
    // ▼▼▼ 変更点: 手動計算をやめて、autoSetEndTime() を呼ぶ ▼▼▼
    // document.getElementById('input-end').value = `${pad(sHour+1)}:${pad(sMin)}`; // ←これは削除
    autoSetEndTime(); // ←これを追加（これで21時制限が適用されます）
    // ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲

    document.getElementById('input-title').value = "";
    document.getElementById('input-note').value = "";
    document.getElementById('btn-delete').style.display = 'none';
    if (typeof currentUser !== 'undefined' && currentUser && currentUser.userId) {
        selectedParticipantIds.add(String(currentUser.userId));
    }
  }
   
  renderShuttleLists(); // 予約用シャトル描画
  if (modal) modal.scrollTop = 0;
  const modalContent = modal.querySelector('.modal-content');
  if (modalContent) modalContent.scrollTop = 0;
}
function closeModal() { document.getElementById('bookingModal').style.display = 'none'; }

// 予約保存
async function saveBooking() {
  const id = document.getElementById('edit-res-id').value;
  const room = document.getElementById('input-room').value;
  const date = document.getElementById('input-date').value;
  const start = document.getElementById('input-start').value;
  const end = document.getElementById('input-end').value;
  const title = document.getElementById('input-title').value;
  const note = document.getElementById('input-note').value;
  const timePattern = /^([0-9]{1,2}):([0-9]{2})$/;
  
  if (!timePattern.test(start) || !timePattern.test(end)) {
      alert("時間は「09:00」のように半角数字とコロン(:)で入力してください。");
      return;
  }
  if (start >= end) { alert("開始時間は終了時間より前に設定してください。"); return; }
  if (start < "07:00" || start > "21:00" || end < "07:00" || end > "21:00") {
      alert("利用時間は 7:00 〜 21:00 の範囲で設定してください。");
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

  const startTime = `${date.replace(/-/g, '/')} ${start}`;
  const endTime = `${date.replace(/-/g, '/')} ${end}`;
  const pIds = Array.from(selectedParticipantIds).join(', ');

  const params = {
    action: id ? 'updateReservation' : 'createReservation',
    reservationId: id,
    resourceId: room,
    startTime: startTime,
    endTime: endTime,
    reserverId: currentUser.userId,
    operatorName: currentUser.userName,
    participantIds: pIds, 
    title: title,
    note: note 
  };

  const result = await callAPI(params);
  if(result.status === 'success') {
    closeModal();
    loadAllData(true);
  } else {
    alert("エラー: " + result.message);
  }
}

async function deleteBooking() {
    const id = document.getElementById('edit-res-id').value;
    if (!id || !confirm("本当にこの予約を削除しますか？")) return;

    const params = {
        action: 'deleteReservation',
        reservationId: id,
        operatorName: currentUser ? currentUser.userName : 'Unknown'
    };
    const result = await callAPI(params);
    if (result.status === 'success') {
        alert("予約を削除しました");
        closeModal();
        loadAllData(true);
    } else {
        alert("削除エラー: " + result.message);
    }
}

// 詳細モーダル
function openDetailModal(res) {
  currentDetailRes = res;
  const modal = document.getElementById('detailModal');
  
  const s = new Date(res._startTime);
  const e = new Date(res._endTime);
  const dateStr = `${s.getMonth()+1}/${s.getDate()}`;
  const timeStr = `${pad(s.getHours())}:${pad(s.getMinutes())} - ${pad(e.getHours())}:${pad(e.getMinutes())}`;
  document.getElementById('detail-time').innerText = `${dateStr} ${timeStr}`;
  
  const room = masterData.rooms.find(r => String(r.roomId) === String(res._resourceId));
  document.getElementById('detail-room').innerText = room ? room.roomName : res._resourceId;
  document.getElementById('detail-title').innerText = getVal(res, ['title', 'subject', '件名', 'タイトル']) || '(なし)';

  // ▼ 登録者・編集者の表示処理
  const metaContainer = document.getElementById('detail-meta-info');
  if (metaContainer) {
      const fmt = (dStr) => {
          if(!dStr) return "-";
          const d = new Date(dStr);
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

  // ▼▼▼ ここを修正しました ▼▼▼
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
  // ▲▲▲ 修正ここまで ▲▲▲

  document.getElementById('btn-go-edit').onclick = function() {
      closeDetailModal();        
      openModal(currentDetailRes); 
  };
  modal.style.display = 'flex';
}
function closeDetailModal() { document.getElementById('detailModal').style.display = 'none'; }

/* ==============================================
   共通シャトル処理 (検索クリア機能付き)
   ============================================== */
// ★修正: 第5引数 searchInputId を追加しました
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
            // 右側（選択済み）の描画
            const div = document.createElement('div');
            div.className = 'shuttle-item icon-remove';
            div.innerText = u.userName;
            div.onclick = () => {
                targetSet.delete(uidStr);
                // 削除時は検索ボックスを維持したまま再描画
                renderGenericShuttle(rawInput, targetSet, candidatesContainerId, selectedContainerId, searchInputId);
            };
            rightList.appendChild(div);
        } else {
            // 左側（候補）の描画
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
                
                // ★修正: 追加クリック時の処理
                div.onclick = () => {
                    targetSet.add(uidStr);
                    
                    // 検索ボックスを空にする
                    if (searchInputId) {
                        const inputEl = document.getElementById(searchInputId);
                        if(inputEl) inputEl.value = "";
                    }
                    
                    // 引数のテキストを空("")にして再描画（全件表示に戻す）
                    renderGenericShuttle("", targetSet, candidatesContainerId, selectedContainerId, searchInputId);
                };
                leftList.appendChild(div);
            }
        }
    });
}
// 予約モーダル用ラッパー
function renderShuttleLists(filterText = "") {
    const searchId = 'shuttle-search-input'; // IDを指定
    const text = filterText || document.getElementById(searchId).value;
    
    // 第5引数に searchId を渡す
    renderGenericShuttle(text, selectedParticipantIds, 'list-candidates', 'list-selected', searchId);
}

// グループ作成モーダル用ラッパー
function renderGroupCreateShuttle() {
    const searchId = 'group-shuttle-search'; // IDを指定
    const text = document.getElementById(searchId).value;
    
    // 第5引数に searchId を渡す
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

  // 新規ボタン
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

function renderLogs() {
    const tbody = document.getElementById('log-tbody');
    tbody.innerHTML = "";
    if (!masterData.logs || masterData.logs.length === 0) {
        document.getElementById('log-pagination').innerHTML = "データがありません";
        return;
    }

    let allLogs = [...masterData.logs].reverse(); 
    const filterText = document.getElementById('log-search-input').value.toLowerCase().trim();
    
    if (filterText) {
        // ★修正: 検索ワードを両方のカナに変換
        const searchKata = hiraToKata(filterText); 
        const searchHira = kataToHira(filterText);

        allLogs = allLogs.filter(log => {
            const dateStr = formatDate(new Date(log.timestamp));
            let roomName = log.resourceName || "";
            const roomObj = masterData.rooms.find(r => String(r.roomId) === String(log.resourceId || log.resourceName));
            if (roomObj) roomName = roomObj.roomName;

            // 操作者のフリガナを取得
            const operatorUser = masterData.users.find(u => u.userName === log.operatorName);
            const operatorKana = operatorUser ? (operatorUser.kana || "") : "";

            // ▼ 検索判定 (強化版)
            return (
                dateStr.includes(filterText) ||
                (log.operatorName && log.operatorName.toLowerCase().includes(filterText)) ||
                // フリガナ検索 (ひらがな・カタカナ両対応)
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
        const sDate = new Date(parts[0]);
        const eDate = new Date(parts[1]);
        if (isNaN(sDate.getTime()) || isNaN(eDate.getTime())) return rangeStr;
        return `${sDate.getMonth() + 1}/${sDate.getDate()} ${pad(sDate.getHours())}:${pad(sDate.getMinutes())} - ${pad(eDate.getHours())}:${pad(eDate.getMinutes())}`;
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

        tr.innerHTML = `<td>${formatDate(new Date(log.timestamp))}</td><td>${log.operatorName}</td><td>${log.action}</td><td>${detailHtml}</td>`;
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
function formatDate(d) { return `${d.getMonth()+1}/${d.getDate()} ${pad(d.getHours())}:${pad(d.getMinutes())}`; }
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
function getVal(obj, keys) {
    if(!obj) return "";
    for (const k of keys) {
        if (obj[k] !== undefined && obj[k] !== null) return obj[k];
    }
    return ""; 
}
// ==============================================
//  マップ画像と座標枠の自動同期 (ResizeObserver)
// ==============================================
function initMapResizer() {
  // ブラウザ標準の「サイズ監視機能」を使用
  const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
          const img = entry.target;
          // 画像の親要素(.map-inner-wrapper)を探す
          const wrapper = img.closest('.map-inner-wrapper');
          
          if (wrapper) {
              // 画像の現在の表示サイズ(幅・高さ)を取得し、ラッパーに強制適用
              // これにより、座標(%)が画像の大きさと完全に一致します
              wrapper.style.width = entry.contentRect.width + 'px';
              wrapper.style.height = entry.contentRect.height + 'px';
          }
      }
  });

  // 全てのマップ画像を監視対象に登録
  const mapImages = document.querySelectorAll('.map-image');
  if (mapImages.length > 0) {
      mapImages.forEach(img => {
          resizeObserver.observe(img);
      });
  } else {
      // まだ画像が生成されていない場合は少し待ってから再実行
      setTimeout(initMapResizer, 500);
  }
}

// ページ読み込み完了時と、画像読み込み完了時に実行
window.addEventListener('DOMContentLoaded', initMapResizer);
window.addEventListener('load', initMapResizer);

// ==============================================
//  空き状況検索機能
// ==============================================

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
    else { min = 30; } // 簡易的に00か30に丸める
    
    // 入力欄にセット
    document.getElementById('avail-date').value = `${y}-${m}-${d}`;
    document.getElementById('avail-start').value = `${('0'+h).slice(-2)}:${('0'+min).slice(-2)}`;
    // デフォルト1時間後
    document.getElementById('avail-end').value = `${('0'+(h+1)).slice(-2)}:${('0'+min).slice(-2)}`;

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

    // 検索用の開始・終了日時オブジェクト作成
    const searchStart = new Date(`${dateVal}T${startVal}:00`);
    const searchEnd = new Date(`${dateVal}T${endVal}:00`);

    if (searchStart >= searchEnd) {
        alert("開始時間は終了時間より前に設定してください");
        return;
    }

    const resultContainer = document.getElementById('avail-result-container');
    resultContainer.innerHTML = ""; // クリア

    // 全部屋をループして空き状況判定
    let hasRoom = false;
    
    // 部屋リスト（ID順などでソート推奨）
    const rooms = masterData.rooms;

    rooms.forEach(room => {
        // その部屋の「指定日」の予約を取得
        const roomRes = masterData.reservations.filter(res => {
            const rId = getVal(res, ['resourceId', 'roomId', 'room_id', 'resource_id', '部屋ID', '部屋']);
            // 同じ部屋 かつ 日付が検索対象日を含んでいるか（簡易チェック）
            // ※厳密には日時比較のみで良いが、データ量削減のため日付文字列比較などを挟むと高速
            return String(rId) === String(room.roomId);
        });

        // 重複チェック
        // 「既存予約の開始 < 検索終了」 かつ 「既存予約の終了 > 検索開始」 なら被っている
        const isBusy = roomRes.some(res => {
            const rStart = new Date(res._startTime || res.startTime);
            const rEnd = new Date(res._endTime || res.endTime);
            return (rStart < searchEnd && rEnd > searchStart);
        });

        // HTML生成
        const item = document.createElement('div');
        item.className = 'avail-list-item';

        // ◯ボタンクリック時の動作
        const sHour = searchStart.getHours();
        const sMin = searchStart.getMinutes();
        
        // ◯ならクリックイベント、×ならただの表示
        const statusHtml = isBusy 
    ? `<span class="status-ng">×</span>`
    : `<span class="status-ok" onclick="transitionToBooking('${room.roomName}', '${dateVal}', '${startVal}', '${endVal}')">○</span>`;

        item.innerHTML = `
            <div>
                <div class="avail-room-name">${room.roomName}</div>
            </div>
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
   24. 空き状況検索 ⇔ 予約画面 の連携処理
   ============================================== */
/**
 * 空き状況リストの「予約」ボタンが押された時の処理
 * @param {string} roomName - 部屋名
 * @param {string} dateVal - 日付 (YYYY-MM-DD)
 * @param {string} startVal - 開始時間 (HH:mm)
 * @param {string} endVal - 終了時間 (HH:mm)
 */
function transitionToBooking(roomName, dateVal, startVal, endVal) {
  // 1. 空き状況モーダルを一時的に隠す
  document.getElementById('availabilityModal').style.display = 'none';

  // 2. 予約モーダルを開く準備
  // フォームの値をセット
  document.getElementById('edit-res-id').value = ''; // 新規
  document.getElementById('modal-title').innerText = '新規予約';
  document.getElementById('input-date').value = dateVal;
  document.getElementById('input-start').value = startVal;
  document.getElementById('input-end').value = endVal;
  document.getElementById('input-title').value = ""; // タイトルクリア
  document.getElementById('input-note').value = "";  // 備考クリア
  
  // 部屋のプルダウンを選択
  const roomSelect = document.getElementById('input-room');
  for (let i = 0; i < roomSelect.options.length; i++) {
    if (roomSelect.options[i].text === roomName) {
      roomSelect.selectedIndex = i;
      break;
    }
  }

  // ★修正: 参加者選択の状態を初期化して、自分を選択済みにする
  selectedParticipantIds.clear();
  if (typeof currentUser !== 'undefined' && currentUser && currentUser.userId) {
      selectedParticipantIds.add(String(currentUser.userId));
  }
  document.getElementById('shuttle-search-input').value = ""; // 検索窓クリア

  // ★重要: ここで候補者リストを描画する！
  renderShuttleLists(); 

  // 3. 予約モーダルを表示
  document.getElementById('bookingModal').style.display = 'flex';

  // 4. ボタンの表示切替（「戻る」を表示、「キャンセル」を隠す）
  document.getElementById('btn-back-avail').style.display = 'inline-block'; // 戻るボタンON
  document.getElementById('btn-modal-cancel').style.display = 'none';       // キャンセルボタンOFF
}
/**
 * 「戻る」ボタンが押された時の処理
 */
function backToAvailability() {
  // 予約モーダルを閉じる
  document.getElementById('bookingModal').style.display = 'none';
  
  // 空き状況モーダルを再表示
  document.getElementById('availabilityModal').style.display = 'flex';
}
/**
 * 現在時刻（赤線）が画面中央に来るようにスクロールする関数
 */
function scrollToNow() {
  const container = document.getElementById('rooms-container-all');
  const axis = document.getElementById('time-axis-all');
  if (!container) return;

  // 赤線要素を探す
  const redLine = container.querySelector('.current-time-line');

  if (redLine) {
    // 赤線の位置(上からのpx)を取得
    // offsetTop は親要素(grid-body)の上端からの距離
    const lineTop = redLine.offsetTop;
    
    // 表示エリアの高さを取得
    const containerHeight = container.clientHeight;
    
    // 中央に来るためのスクロール量を計算
    // (線の位置) - (画面の半分の高さ)
    const targetScroll = lineTop - (containerHeight / 2);

    // スクロール実行 (コンテナと時間軸の両方)
    container.scrollTop = targetScroll;
    if(axis) axis.scrollTop = targetScroll;
  }
}
/* ==============================================
   設定メニュー (歯車) 関連の処理
   ============================================== */

/**
 * 歯車メニューの開閉トグル
 */
function toggleSettingsMenu() {
  const dropdown = document.getElementById("settings-dropdown");
  dropdown.classList.toggle("show");
}

/**
 * 手動更新ボタンが押された時の処理
 */
function manualRefresh() {
  // メニューを閉じる
  const dropdown = document.getElementById("settings-dropdown");
  if(dropdown) dropdown.classList.remove("show");

  // 強制的にデータを再読み込み (ローディング画面あり)
  console.log("手動更新を実行します");
  loadAllData(true, false); 
  updateRefreshTime();
  // 第2引数を false にして、ローディング画面を表示させることで「更新した感」を出します
}

/**
 * 画面のどこかをクリックした時にメニューを閉じる処理
 */
window.onclick = function(event) {
  // 歯車アイコン自体をクリックした場合は何もしない（toggleが動くので）
  if (event.target.matches('.settings-icon')) {
    return;
  }

  // それ以外をクリックしたら、開いているメニューを閉じる
  const dropdown = document.getElementById("settings-dropdown");
  if (dropdown && dropdown.classList.contains('show')) {
    dropdown.classList.remove('show');
  }
}
/* ==============================================
   パスワード変更機能
   ============================================== */

function openPasswordModal() {
  // メニューを閉じる
  const dropdown = document.getElementById("settings-dropdown");
  if(dropdown) dropdown.classList.remove("show");

  // 入力欄をクリア
  document.getElementById('old-pass').value = "";
  document.getElementById('new-pass').value = "";
  document.getElementById('new-pass-confirm').value = "";

  document.getElementById('passwordModal').style.display = 'flex';
}

function closePasswordModal() {
  document.getElementById('passwordModal').style.display = 'none';
}

async function savePassword() {
  const oldPass = document.getElementById('old-pass').value;
  const newPass = document.getElementById('new-pass').value;
  const confirmPass = document.getElementById('new-pass-confirm').value;

  if (!oldPass || !newPass) {
    alert("全ての項目を入力してください");
    return;
  }
  
  if (newPass !== confirmPass) {
    alert("新しいパスワードが一致しません");
    return;
  }

  // サーバー通信
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
function initCustomTimePickers() {
  const wrappers = document.querySelectorAll('.time-picker-wrapper');
  
  wrappers.forEach(wrapper => {
    // 既に作成済みならスキップ
    if (wrapper.querySelector('.custom-time-dropdown')) return;

    // 1. ドロップダウンの箱を作成
    const dropdown = document.createElement('div');
    dropdown.className = 'custom-time-dropdown';

    // 時間リストを生成 (07:00 ～ 21:00)
    const times = [];
    for(let h=7; h<=21; h++) {
       const hStr = (h < 10 ? '0' : '') + h;
       if (h === 21) {
          times.push("21:00");
       } else {
          ['00','15','30','45'].forEach(m => times.push(`${hStr}:${m}`));
       }
    }

    // 選択肢を追加
    times.forEach(time => {
       const item = document.createElement('div');
       item.className = 'time-option';
       item.innerText = time;
       
       item.onclick = (e) => {
         e.stopPropagation();
         const input = wrapper.querySelector('input');
         input.value = time;
         
         // 連動処理 (終了時間などの自動計算)
         if (input.id === 'input-start') autoSetEndTime();
         if (input.id === 'avail-start') autoSetAvailEndTime();

         dropdown.classList.remove('show');
       };
       dropdown.appendChild(item);
    });

    wrapper.appendChild(dropdown);

    // 2. 矢印(▼)をクリックした時の開閉処理
    // ※入力欄(input)自体には触らないので、手入力(キーボード)が可能です
    const arrow = wrapper.querySelector('.time-picker-arrow');
    if (arrow) {
      arrow.onclick = (e) => {
         e.stopPropagation();
         
         // 他の開いているドロップダウンを閉じる
         document.querySelectorAll('.custom-time-dropdown').forEach(d => {
            if(d !== dropdown) d.classList.remove('show');
         });
         
         // 開閉切り替え
         if (dropdown.classList.contains('show')) {
             dropdown.classList.remove('show');
         } else {
             dropdown.classList.add('show');
             
             // 現在の値の位置まで自動スクロール
             const currentVal = wrapper.querySelector('input').value;
             if (currentVal) {
                 const targetItem = Array.from(dropdown.children).find(child => child.innerText === currentVal);
                 if (targetItem) {
                     dropdown.scrollTop = targetItem.offsetTop;
                 }
             }
         }
      };
    }
  });
  // 3. 画面外クリックで閉じる
  document.addEventListener('click', () => {
     document.querySelectorAll('.custom-time-dropdown').forEach(d => d.classList.remove('show'));
  });
}
/* ==============================================
   文字変換ユーティリティ (既存の hiraToKata の下あたりに追加)
   ============================================== */

// 既存の hiraToKata (もし無ければここを使ってください)
function hiraToKata(str) {
    return str.replace(/[\u3041-\u3096]/g, function(match) {
        var chr = match.charCodeAt(0) + 0x60;
        return String.fromCharCode(chr);
    });
}

// ★追加: カタカナ -> ひらがな 変換
function kataToHira(str) {
    return str.replace(/[\u30A1-\u30F6]/g, function(match) {
        var chr = match.charCodeAt(0) - 0x60;
        return String.fromCharCode(chr);
    });
}
/* ==============================================
   更新時刻表示機能
   ============================================== */

// 時刻を「更新：HH:mm」形式で表示する関数
function updateRefreshTime() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    
    const el = document.getElementById('last-update-time');
    if (el) {
        el.innerText = `更新：${h}:${m}`;
    }
}
/* ==============================================
   お問い合わせ機能
   ============================================== */

function openContactModal() {
  // メニューを閉じる
  const dropdown = document.getElementById("settings-dropdown");
  if(dropdown) dropdown.classList.remove("show");

  // 入力欄をクリア
  document.getElementById('contact-message').value = "";
  
  // モーダル表示
  document.getElementById('contactModal').style.display = 'flex';
}

function closeContactModal() {
  document.getElementById('contactModal').style.display = 'none';
}

async function sendContactFeedback() {
  const msg = document.getElementById('contact-message').value.trim();
  
  if (!msg) {
    alert("お問い合わせ内容を入力してください");
    return;
  }

  // 二重送信防止のためボタンを一時的に無効化（ローディング表示など）
  document.getElementById('loading').style.display = 'flex';

  const params = {
    action: 'sendFeedback',
    operatorName: currentUser ? currentUser.userName : 'Unknown', // ログインユーザー名
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
