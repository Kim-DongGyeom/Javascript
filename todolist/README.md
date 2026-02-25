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
localStorage.setItem('key', 'value');

// *読み込み*
const cat = localStorage.getItem('key');

// *削除*
localStorage.removeItem('key');

// *すべて削除*
localStorage.clear();
```

```markdown
---memo---

- 調べる予定

* call by value

  > JavaScriptは常に「値渡し（Call by Value）」
  > オブジェクトの場合は「参照値（アドレス）」がコピーされるだけ

* call by referance
  **JavaScriptには Call by Reference は存在しません。**

  > 変数そのもの（メモリアドレス）を直接渡す方式のこと。
  > 関数の中で値を変更すると、元の変数自体が変更される。

* js object プリミティブ値, 違い
  > プリミティブは値そのものを持ち、オブジェクトは参照（アドレス）を持つことが大きな違い
```
