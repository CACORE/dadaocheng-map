# 跟著老闆玩大稻埕

IG Bio 用的大稻埕互動地圖網站，收錄惠通行老闆推薦的迪化街與大稻埕店家、景點、咖啡、酒吧與 Reels 入口。

## 技術

- 靜態網站：HTML / CSS / JavaScript
- 地圖：Google Maps JavaScript API，Leaflet 作為備援
- 資料來源：目前內建 fallback 資料，可改接 Google Sheet CSV

## 上線提醒

公開部署前，請到 Google Cloud Console 將 Google Maps API key 限制為正式網站網域。
