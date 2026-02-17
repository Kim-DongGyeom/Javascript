# localstrageを利用するtoDoList

## 追加
```js
// Key: myCat, Value: Tom
localStorage.setItem("myCat", "Tom");
```
## 読み込み
```js
const cat = localStorage.getItem("myCat");
```
## 削除
```js
localStorage.removeItem("myCat");
```
## すべて削除
```js
localStorage.clear();
```
