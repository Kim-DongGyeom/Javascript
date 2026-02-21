```markdown
# 📝 Todo List (Vanilla JavaScript)

サーバーを使用せず、純粋なJavaScriptのみで実装したタスク管理アプリです。
LocalStorageを利用し、ブラウザ上でデータを保持します。

---

## 📌 主な機能

### タスク管理（CRUD）
- タスク追加
- タスク編集
- タスク削除
- 完了状態の切り替え

### フィルター機能
- すべて表示
- 完了のみ
- 未完了のみ

### データ永続化
- LocalStorageによる保存
- リロード後もデータ保持

---

## 🛠 使用技術
- HTML
- CSS
- JavaScript（ES6）
- LocalStorage API

---

## 💡 設計ポイント

### 状態管理
Todoデータを配列で管理し、  
状態変更時に再レンダリングを行う設計。

### イベント委任
リスト要素に対してイベント委任を採用し、  
パフォーマンスと可読性を向上。

### 責務分離
ロジックとUI描画を分離し、保守性を意識。

---

## 🚀 実行方法
main.html をブラウザで開くだけで実行可能。
```

```markdown
---memo---
# localstrage利用
```

```js
// *追加* 
localStorage.setItem("key", "value");

// *読み込み*
const cat = localStorage.getItem("key");

// *削除*
localStorage.removeItem("key");

// *すべて削除*
localStorage.clear();
```

```markdown
---memo---
* 調べる予定
 - call by value
 - call bay referance
 - js object プリミティブ値, 違い

```
