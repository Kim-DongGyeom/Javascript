## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

---

## path: /shop/src/pages/Detail.js

## styled-components メリット / デメリット

**styled-components**  
Reactでよく使われる **CSS-in-JS ライブラリ**

---

## ■ メリット

### 1. CSSのスコープ管理が自動化される

`styled-components` はコンポーネントごとに **自動でユニークな class 名** を生成するため、  
他のコンポーネントに CSS が影響する **スタイル汚染を防ぐことができる。**

従来のCSSではクラス名の重複によるスタイル衝突が発生する可能性がある。

---

### 2. コンポーネントとスタイルを同じファイルで管理できる

UIロジックとスタイルを **同一コンポーネント内で管理できる**ため、  
関連するコードがまとまり **保守性が向上する。**

---

### 3. JavaScriptロジックを利用した動的スタイリングが可能

`props` や `state` を利用して **条件に応じてスタイルを変更できる。**

```js
const Button = styled.button`
  background: ${(props) => (props.primary ? 'blue' : 'gray')};
`;
```
