var tipuesearch = {"pages":[{"url":"./pages/about/","tags":"misc","title":"About","text":"2017springcd_bg1 組長: 40423226 組員: 40123158 , 40423206 , 40423207 , 40423219 , 40423229 , 40423241 , 40423243 倉儲: https://github.com/40423226/2017springcd_bg1 簡報: https://40423226.github.io/2017springcd_bg1 網誌: https://40423226.github.io/2017springcd_bg1/blog/ Fossil: https://mde2a2.kmol.info/cdbg1 2017Spring 機械設計工程系協同產品設計實習 課程倉儲: http://github.com/mdecourse/2017springcd 課程投影片: http://mdecourse.github.io/2017springcd 課程網誌: http://mdecourse.github.io/2017springcd/blog 課程Fossil: https://mde2a1.kmol.info/"},{"url":"./Week 9.html","tags":"Course","title":"期中測驗 ( 20170412 Week 9 )","text":"四連桿機構協同 Trace Point 查驗 參考的網際程式如下: window.onload=function(){ brython(1); } from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar_40123158\"] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../40123158/data/midterm1.csv\").read() fourbar_list = fourbar_data.splitlines() # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 3 倍 ratio = 3 ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() window.onload=function(){ brython(1); } 40423206: 尺寸圖 from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar_40423206\"] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../40423206/data/midterm2.csv\").read() fourbar_list = fourbar_data.splitlines() # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 3 倍 ratio = 3 ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() 40423207: 尺寸圖 from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar_40423207\"] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../40423207/data/midterm3.csv\").read() fourbar_list = fourbar_data.splitlines() # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 3 倍 ratio = 3 ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() 40423219: 尺寸圖 from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar_40423219\"] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../40423219/data/midterm4.csv\").read() fourbar_list = fourbar_data.splitlines() # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 3 倍 ratio = 3 ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() 40423226: 尺寸圖 from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar_40423226\"] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../40423226/data/midterm5.csv\").read() fourbar_list = fourbar_data.splitlines() # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 3 倍 ratio = 3 ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() 40423229: 尺寸圖 from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar_40423229\"] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../40423229/data/midterm6.csv\").read() fourbar_list = fourbar_data.splitlines() # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 3 倍 ratio = 3 ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() 40423241: 尺寸圖 from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar_40423241\"] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../40423241/data/midterm7.csv\").read() fourbar_list = fourbar_data.splitlines() # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 3 倍 ratio = 3 ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() 40423243: 尺寸圖 from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar_40423243\"] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../40423243/data/midterm8.csv\").read() fourbar_list = fourbar_data.splitlines() # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 3 倍 ratio = 3 ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath()"},{"url":"./Week 8.html","tags":"Course","title":"20170412 Week 8","text":"小組互評: https://pygroup-ag100.rhcloud.com"},{"url":"./Week 7.html","tags":"Course","title":"20170405 Week 7","text":"Fossil 推送檔案 1. 在 fossil_repo 的目錄 clone 區網的 fossil 檔 2. 會發現多一個 bg1.fossil 的檔案 3. 新建一個 wd 的目錄, 並且進去 wd 目錄 mkdir wd cd wd 4. 再新建一個 w7 的目錄, 並且進去 w7 目錄 mkdir w7 cd w7 5. 用相對位置打開 bg1.fossil fossil open ./../../bg1.fossil 6. 有出現 _FOSSIL_ 檔, 代表有成功開啟 7.將推送的資料放進資料夾中 8. 依序輸入推送指令 fossil add . fossil remote-url off fossil commit -m \"提交的註解\" fossil push https://user@10.0.0.130 9. 如果遠端已經有別人先進行更新, 需要先更新進端資料, 再進行推送 fossil update Fossil 資料推送 from NFU-MDE-104B-40423226 on Vimeo ."},{"url":"./Week 5.html","tags":"Course","title":"20170322 Week 5","text":"Fossil SCM 與 Stunnel 啟動整合 1. 更改Start.bat設定 REM tiny2017 主要針對初學 Python3 與 C 學員所建立 REM 近端使用 fossil 管理資料版本, 並且定時轉為 git 格式後上傳到 github @echo off REM 設定 y 硬碟代號與 data 目錄對應 set Disk=y subst %Disk%: \"data\" REM 設定 leo 相關對應 Home 位置 set HomePath=%Disk%:\\home set HomeDrive=%Disk%:\\home set Home=%Disk%:\\home REM 將系統 Python 程式的 io 設為 utf-8 set PYTHONIOENCODING=\"utf-8\" REM 將後續的指令執行, 以 %Disk% 為主 %Disk%: REM 設定 PYTHONPATH set PYTHONPATH=%Disk%:\\python-3.5.3-embed-amd64 REM 設定 Leo 所用的編輯器 set LEO_EDITOR=%Disk%:\\wscite\\SciTE.exe REM for fossil https 連線設定 set HTTPS=on REM 指令搜尋路徑設定 set path1=%PATH%;%Disk%:;%Disk%:\\python-3.5.3-embed-amd64;%Disk%:\\git\\bin;%Disk%:\\stunnel\\bin;%Disk%:\\sqlite-tools;%Disk%:\\python-3.5.3-embed-amd64\\Scripts;%Disk%:\\portablegit\\bin; set path2=c:\\Windows\\Microsoft.NET\\Framework\\v3.5;%Disk%:\\python-3.5.3-embed-amd64\\Lib\\site-packages; set path3=\"C:\\Program Files (x86)\\Google\\Chrome\\Application\" path=%path%;%path1%;%path2%;%path3% start /MIN %Disk%:\\wscite\\SciTE.exe start /MIN cmd.exe start /MIN cmd.exe start /MIN cmd.exe REM 啟動 Leo 編輯器 REM %Disk%:\\Miniconda3\\python.exe %Disk%:\\apps\\launchLeo.py REM 啟動 stunnel start /MIN fossil.exe server -P 127.0.0.1:8080 %Disk%:\\tmp\\fossil_repo\\2017springcd_bg1.fossil REM 取得電腦 IP, 然後設定 %Disk%:/stunnel/config/stunnel.conf for /f \"delims=[] tokens=2\" %%a in ('ping -4 -n 1 %ComputerName% &#94;| findstr [') do set NetworkIP=%%a REM echo Network IP: %NetworkIP% REM Saved in %Disk%:\\stunnel\\config\\stunnel.conf @echo off REM 建立 stunnel.conf @echo [https] > %Disk%:\\stunnel\\config\\stunnel.conf REM 附加資料 @echo accept = %NetworkIP%:443 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo connect = 127.0.0.1:8080 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo TIMEOUTclose = 0 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo cert = %Disk%:\\stunnel\\config\\localhost.crt >> %Disk%:\\stunnel\\config\\stunnel.conf @echo key = %Disk%:\\stunnel\\config\\localhost.key >> %Disk%:\\stunnel\\config\\stunnel.conf REM 啟動 stunnel start /MIN stunnel.exe REM 以 chrome 連線到 https://%NetworkIP%:443 chrome https://%NetworkIP% https://mde2a2.kmol.info/cdbg1 Exit 2. 檢查是否有相對應的 fossil檔案 start /MIN fossil.exe server -P 127.0.0.1:8080 %Disk%:\\tmp\\fossil_repo\\2017springcd_bg1.fpssil 3. 自己額外在最後一行, 新增一個小組 fpssil 網址 https://mde2a2.kmol.info/cdbg1 建立與 project name 同名的首頁 wiki https://mde2a2.kmol.info/cdbg1 從 SolveSpace 匯出 onebar 並在 V-rep 加入馬達 SolveSpacec 匯出: 影片 V-rep 加入馬達: 影片"},{"url":"./Week 3.html","tags":"Course","title":"20170308 Week 3","text":"HyperWorks 14.0 Student Edition Student Edition: Download Now! 影片聽打 Over the years, we have assembled a quite portfolio of solution technology. We're going from Structures or Crash Safety, Thermal, Fluid Dynamics, Systems Simulation, all the way to Electro-Magnetic Simulation. Our specialty is connecting all these different disciplines through Multiphyxics Optimization. We're using simulation technology to drive innovation. To create new products. The key enables of our simulation driven innovation and of technology focus is optimization technology first then the Broad Portfolio of Physics and Computation Performance. We made our name OptiStruct's topology optimization. Throughout the years focusing on concept design and we are now coming out with lattice structure optimization. We still put a lot of energy and composites design and optimization. We always keep improving and advancing the nonlinear capabilities of our districts or non-linear durability. We now have finite sliding contact. So you can do things like a gear simulation and of course for the automotive industry our noise and vibration and acoustics are very advanced and I think we are the leading technology here with destruct also an audience. We focus a lot of contact simulation that we have contact simulation artists are contact simulation new contact types and audios for electronic drug testing. We developed a fluid structure interaction we're back simulation or airplane ditching and their plane landing in water all these are multidisciplinary technologies are or multiphysics and heat transfer analysis. We have a very complete solution now giving you a steady state and transient capabilities one additional focus in in multiphysics simulation is as materials in audience. We developed extended finite element technology to model things that glass breakage for example and we also did the just recently an acquisition and the products will be multiscale designer where we can look at the Michael structure of the materials and then derive analytically material property. So we can look at things like fatigue statistical distribution of fibers we can look at failure progressive failure how the material actually fails we have really good technology. 近端Fossil 1. 更改Start.bat設定 REM tiny2017 主要針對初學 Python3 與 C 學員所建立 REM 近端使用 fossil 管理資料版本, 並且定時轉為 git 格式後上傳到 github @echo off REM 設定 y 硬碟代號與 data 目錄對應 set Disk=y subst %Disk%: \"data\" REM 設定 leo 相關對應 Home 位置 set HomePath=%Disk%:\\home set HomeDrive=%Disk%:\\home set Home=%Disk%:\\home REM 將系統 Python 程式的 io 設為 utf-8 set PYTHONIOENCODING=\"utf-8\" REM 將後續的指令執行, 以 %Disk% 為主 %Disk%: REM 設定 PYTHONPATH set PYTHONPATH=%Disk%:\\python-3.5.3-embed-amd64 REM 設定 Leo 所用的編輯器 set LEO_EDITOR=%Disk%:\\wscite\\SciTE.exe REM for fossil https 連線設定 set HTTPS=on REM 指令搜尋路徑設定 set path1=%PATH%;%Disk%:;%Disk%:\\python-3.5.3-embed-amd64;%Disk%:\\git\\bin;%Disk%:\\stunnel\\bin;%Disk%:\\sqlite-tools;%Disk%:\\python-3.5.3-embed-amd64\\Scripts;%Disk%:\\portablegit\\bin; set path2=c:\\Windows\\Microsoft.NET\\Framework\\v3.5;%Disk%:\\python-3.5.3-embed-amd64\\Lib\\site-packages; path=%path%;%path1%;%path2% start /MIN %Disk%:\\wscite\\SciTE.exe start /MIN cmd.exe start /MIN cmd.exe start /MIN cmd.exe REM 啟動 Leo 編輯器 REM %Disk%:\\Miniconda3\\python.exe %Disk%:\\apps\\launchLeo.py REM 啟動 stunnel start /MIN fossil.exe server -P 127.0.0.1:8080 %Disk%:\\tmp\\fossil_repo\\2017springcd_bg1.fpssil REM 取得電腦 IP, 然後設定 %Disk%:/stunnel/config/stunnel.conf for /f \"delims=[] tokens=2\" %%a in ('ping -4 -n 1 %ComputerName% &#94;| findstr [') do set NetworkIP=%%a REM echo Network IP: %NetworkIP% REM Saved in %Disk%:\\stunnel\\config\\stunnel.conf @echo off REM 建立 stunnel.conf @echo [https] > %Disk%:\\stunnel\\config\\stunnel.conf REM 附加資料 @echo accept = %NetworkIP%:443 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo connect = 127.0.0.1:8080 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo TIMEOUTclose = 0 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo cert = %Disk%:\\stunnel\\config\\localhost.crt >> %Disk%:\\stunnel\\config\\stunnel.conf @echo key = %Disk%:\\stunnel\\config\\localhost.key >> %Disk%:\\stunnel\\config\\stunnel.conf REM 啟動 stunnel start /MIN stunnel.exe Exit 2. 在tmp裏的fossil_repo目錄執行指令 fossil init 2017springcd_bg1.fpssil 3. 查詢IP ipconfig /all 4. 確認是否有用Proxy, 若有則需要將自己的IP設為例外 5. 使用瀏覽器輸入網址 https:// 電腦IPv4的IP Fourbar 零件繪製 Link_30: SolveSpace Onshape 尺寸圖 Link_50: SolveSpace Onshape 尺寸圖 Link_60: SolveSpace Onshape 尺寸圖 Fourbar組裝: SolveSpace Onshape 外加正三角形: 尺寸圖 路徑圖"},{"url":"./Week 2.html","tags":"Course","title":"20170301 Week 2","text":"分組座位程式碼 #import os adata = open(\"w2b_cadlab.txt\", encoding=\"utf-8\").read() rdata = open(\"w2b_registered.txt\", encoding=\"utf-8\").read().splitlines() #print(adata) alist = adata.splitlines() #print(alist[2]) n = 0 row = 0 final_list = [] w2_list = [] for stud_num in alist[2:]: row = row + 1 blist = stud_num.split(\"\\t\") #print(blist) column = 0 for i in range(len(blist)): column = column + 1 if blist[i] != \"\": #print(blist[i]) clist = blist[i].split(\"_\") stud_data = clist[0]+\"_\"+clist[1]+\"_\"+str(row)+\"_\"+str(column) final_list.append(stud_data) w2_list.append(clist[1]) n = n +1 # 根據數列前導字串排序, 目的在建立分組數列 group_list = sorted(final_list) print(\"分組名單:\") for i in range(len(group_list)): print(group_list[i]) print(\"座位列表:\") for i in range(len(final_list)): print(final_list[i]) for i in range(len(rdata)): if rdata[i] not in w2_list: print(\"缺席學生:\", rdata[i]) print(\"學生總數:\", n) #print(os.environ) Week 2_Fourbar from NFU-MDE104B-40423226 on Vimeo ."}]};