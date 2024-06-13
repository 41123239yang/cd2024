var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/mdecycu/cmsimde_site 網站: https://mde.tw/cmsimde_site/ 簡報: https://mde.tw/cmsimde_site/reveal 網誌: https://mde.tw/cmsimde_site/blog","tags":"misc","url":"./pages/about/"},{"title":"41123239W13","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 模擬場景建構 因為 Solvespace 內建的 Export Scale Factor 為 1:1=mm, 表示 STL 中 export 的數字為 mm, 因此若將 Solvespace 中 120mmx120mm 的 STL 平台, 以 1:1 直接 import 進入 CoppeliaSim, 將會得到 120mx120m 的龐然大 物. 若採 Auto Scale (此處會將 120 縮小 100 倍, 也就是採 0.01 作為 Scale) import 進入 CoppeliaSim, 則會 採 cm 作為單位, 得到一組 120cmx120cm 的鋼球平衡台. 至於進入場景後的座標, 以 Solvespace 中的零件繪圖, 其 Y 軸向上, 因此在導入 CoppeliaSim 時, 必須選擇 Y 軸向上. 若採 Siemens NX 進行零組件繪圖的轉入考量, 與上述 Solvespace 零組件相同. 利用零件 Hole 產生對應 Cylinder 元件 利用夠深的零件孔壁中的各節點, 可以在 Shape Editor 模式下建立 Cylinder 元件, 其步驟如下: 選擇帶有 Hole (可能必須夠深) 的零件. 利用 CoppeliaSim 左側的 Shape Editor 按鈕, 將場景轉換為 Shape Editor 模式. 利用滑鼠中鍵滑動, 將場景正對所要生成 Cylinder 元件的孔位置, 然後利用滑鼠中間的滾輪將孔儘量拉近. 利用滑鼠左鍵將 Shape Editor 出現的內建視窗, 從 Triangle edit mode, 轉為 Vertex edit mode, 然後左手按住 Shift, 右手滑鼠左鍵按下後, 從左上至 右下的位置涵蓋整個孔的位置. 將 Shape Editor 模式的 Vertex edit mode 切回 Triangle edit mode, 然後利用 Extract Clinder 功能, 針對上 列步驟所選到的 Vertex(圓孔的內壁點座標) 作為依據, 建立一個圓柱體 (Cylinder) 元件. 關閉 Shape Editor 內建表單視窗後, 選擇 Yes 或 No 都可完成上述從孔的內壁點座標生成圓柱體的步驟. 在 CoppeliaSim Divide 組立件 由於 CoppeliaSim 4.5.1 rev4 當採 STL 組立件轉入場景後, 其組立件為一體, 也就是全部被視為一個整體零件. 為了 進行後續組立, 可以使用 Edit - Shape Grouping/Merging 中的 Divide 功能, 將各零件分開. 只是 4.5.1 版將組立 件 Divide 後, 所有的零件將擁有絕對的共同座標系(因為可以採用程式方法進行零組件的重組與定位), 但各零件均以共同 座標為原點, 對於後續手動組立與操控較為不便, 因此可以再利用 Edit - Shape Reference Frame 中的 relocate to mesh center 將各零件的參考座標從共同的絕對座標系, 轉到各自的零件重心位置. 另外, 因為採 Solvespace 繪製的鋼 球平衡台, 並沒有繪製各機構(四連桿)連接軸, 因此將零組件導入 CoppeliaSim 後, 必須利用夠深的孔, 在 Shape Editor 模式下建立各連接孔的對應軸, 後續才能將轉動軸元件與新建的連接軸位置與方位進行定位.","tags":"w13 39","url":"./w13 39.html"},{"title":"41123239W12","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 12周網誌 零件3","tags":"w12 39","url":"./w12 39.html"},{"title":"41123239W11","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 利用上週加入的全班倉儲,在裡面編寫前10週之統整心得,以每組為例 因為每個人都有權限可在上面改版, 這樣就會出現一個問題就是說, 在 push 得時候只能一個人推, 如果全部人一起推會導 致出現亂碼, 我們所打的東西都會亂跑, 這時就有一個方法可以解決這個問題預防此問題產生, 就是在個人或各組完成階段 性改版之前, 先透過獨立分支進行資料改版提交與推送, 等個人階段性版本確定後, 再與分組分支合併, 最後各組的階段性 版本再與建立網頁的主分支進行合併","tags":"W11 39","url":"./W11 39.html"},{"title":"41123239W10","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 2024 Spring 協同產品設計實習課程教導, 建立各班學員的倉儲、網站與分組連結、鋼球平衡台 PID 控制與模擬、鋼球平衡台零組件繪圖. 根據老師所給的 2a.txt 裡的['學號', 'Github 帳號', '組別'], 以下是利用 Python 寫的初步資料數列. 建一個球體平衡平台涉及到平台本身的物理結構建造以及用於維持球體平衡的控制算法的理論研究)","tags":"W10 39","url":"./W10 39.html"},{"title":"41123239W9","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 期中整合 影片","tags":"W9 39","url":"./W9 39.html"},{"title":"41123239w8","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 協同內容 1.分組網站內容的協同: 網站內容與網誌內容, 可以在上面新增內容, 比如說上課所講到的是. 先前所用的子模組可透過 Python 程式方法整合各學員子模組的網誌內容, 統整一起. 2.分組報告內容的協同: 採用 girhub actions 與 miktex 整合起來. 3.分組產品設計的 PLM 協同: 利用 odoo, 讓各分組可以將網站內容、報告內容視為產品, 從協同架構的訂定作為起點, 完成資料展示作為終點, 逐一將過程的協調、派任與執行方法納入 PLM 系統管理. 4.分組零組件設計的協同: 利用 NX1876, 進行這學期我們要畫的零件, 並將各零件的 .prt 檔案納入各學員的倉儲進行組 立, 以便找出最佳的設計分工以及零組件轉檔流程. 5.分組模擬場景設計的協同: 利用 NX1876 畫完的完成圖, 導入一個平台(CoppeliaSim), 加入感測器 (Sensors)、致動 器 (Actuators) 以及 ZMQ RemoteAPI Python程式, 找到合用或最佳的協同產品設計模式. 6.分組專案簡報設計的協同: 在上述各產品設計階段所累積的各種資料, 該如何有效整合到專案完成後必須進行的網際簡報 中.","tags":"W8 39","url":"./W8 39.html"},{"title":"41123239w7","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. w1-w6內容統整","tags":"W7 39","url":"./W7 39.html"},{"title":"41123239w6","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. W6 更新分組倉儲中的分組倉儲 cd2024 2a w6 取下子模組, 以及更新學員倉儲內容 先前我們有把每個人的倉儲利用子模組導入組別倉儲, 即使你自己的倉儲有更新內容, 也不會顯示目前更新次數, 如何讓子 模組同步就利用 update 更新到最新版本. *","tags":"W6 39","url":"./W6 39.html"},{"title":"41123239w4","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 分組任務 教學影片分組整理並自評: * 在影片上填上字幕, 另行上傳到可以嵌入到各分組的網站上 * 從影片字幕中整理出逐字稿, 放在影片下方, 以 .txt 連結安排 * 並在各嵌入的教學影片下方, 以摘要方式說明該影片的教學重點","tags":"W4 39","url":"./W4 39.html"},{"title":"41123239w3","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 期中報告 由各組員在其個人的 cd2024 倉儲中, 以 LaTeX 格式分工完成文章的英文與中文翻譯並列資料, 最後在分組網站的 Release 或 downloads 區完成 2a-midbgx_report.pdf 的製作.","tags":"w3 39","url":"./W3 39.html"},{"title":"41123239w2","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 利用 init_replit 指令安裝所需 Python 模組 啟動動態 指令 1.chmod u+x init_replit 2. ./init_replit 3. Python3 main.py 靜態 指令 Python3 -m http.server Push 指令 1.git add . 2. git commit -m \" add+你要推的內容 \" 3. git push","tags":"w2 39","url":"./W2 39.html"},{"title":"41123239W5","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 影片整理 教學影片分組整理並自評: * 在影片上填上字幕, 另行上傳到可以嵌入到各分組的網站上 * 從影片字幕中整理出逐字稿, 放在影片下方, 以 .txt 連結安排 * 並在各嵌入的教學影片下方, 以摘要方式說明該影片的教學重點 * 需再加上自評...","tags":"w5 39","url":"./W5 39.html"},{"title":"2024 Spring 課程 39","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1 39","url":"./w1 39.html"}]};