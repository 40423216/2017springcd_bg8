var tipuesearch = {"pages":[{"url":"./pages/about/","tags":"misc","text":"2017 springcd_bg8 倉儲: 簡報: 網誌: Vimeo:","title":"About"},{"url":"./Week 9.html","tags":"Course","text":"第1位組員(40423214)負責 Length=50 的四連桿分析。 第2位組員(40423216)負責 Length=45 的四連桿分析。 第3位組員(40423225)負責 Length=40 的四連桿分析。 第4位組員(40423234)負責 Length=35 的四連桿分析。 第5位組員(40423242)負責 Length=30 的四連桿分析。 第6位組員(40423244)負責 Length=25 的四連桿分析。 第7位組員(40423247)負責 Length=20 的四連桿分析。 第8位組員(40423249)負責 Length=15 的四連桿分析。","title":"20170419第九週"},{"url":"./Week 4.html","tags":"Course","text":"w1 先到課程網誌下載 tiny2017 1GB大小的可攜式程式。 w2 1.開啟 star，利用 ipconfig /all指令找出自己電腦的IP。 2.把 stunnel.conf拉到SciTE，更改IP，允許防火牆。 W3 1.依照老師上課所繪製的四連趕機構，分別為30、50、60的連桿。轉動連桿確認作動是否會干涉 2.在繪製出零件並俟連桿機構做組合。","title":"20170315第四週"},{"url":"./Week 3.html","tags":"Course","text":"Fourbar 利用Onshape畫出簡單的四連桿機構, 觀察該機構的運動方式 2017-03-15_10-12-37 from 李彥錞 on Vimeo .","title":"20170308第三週"},{"url":"./Week 2.html","tags":"Course","text":"Fourbar 利用Solvespace 畫出簡單的四連桿機構, 觀察該機構的運動方式 2017-03-14 20-20-00 from 李彥錞 on Vimeo . 分組座位原始碼 #import os adata = open(\"w2b_cadlab.txt\", encoding=\"utf-8\").read() #讀取w2b_cadlab.txt 檔案,讓裡面的內容成為資料, 因為檔案裡有中文, 所以設定encoding 使用utf-8 的編驛碼 rdata = open(\"w2b_registered.txt\", encoding=\"utf-8\").read().splitlines() #print(adata) #用print 先檢查資料是否是我們需要的 alist = adata.splitlines() #利用splitlines 的方法把資料隔開, 就可以得到一個特定的數列 #print(alist[2]) n = 0 row = 0 final_list = [] w2_list = [] for stud_num in alist[2:]: #從第2列開始, 因為第0列和第1列都不是我們要的 row = row + 1 blist = stud_num.split(\"\\t\") #print(blist) column = 0 #為了避免序號連續, 利用column = 0 將順序重製, 因為每一列算完之後要換下一列重新開始 for i in range(len(blist)): column = column + 1 if blist[i] != \"\": #print(blist[i]) clist = blist[i].split(\"_\") stud_data = clist[0]+\"_\"+clist[1]+\"_\"+str(row)+\"_\"+str(column) final_list.append(stud_data) w2_list.append(clist[1]) n = n +1 # 根據數列前導字串排序, 目的在建立分組數列 group_list = sorted(final_list) print(\"分組名單:\") for i in range(len(group_list)): print(group_list[i]) print(\"座位列表:\") for i in range(len(final_list)): print(final_list[i]) for i in range(len(rdata)): if rdata[i] not in w2_list: print(\"缺席學生:\", rdata[i]) print(\"學生總數:\", n) #print(os.environ) 心得:協同真的很棒，小組成員各個同心協力完成作業，真的很棒","title":"20170301第二週"},{"url":"./Week 1.html","tags":"Course","text":"修改stunnel.conf的IP設定 2017-03-15_08-32-15 from 李彥錞 on Vimeo .","title":"20170222第一週"}]};