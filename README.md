# 📊 Chart.js Overlap Demo

블로그 포스팅 내용을 기반으로,  
겹치는 그래프와 진행률 기반 차트를 **React + Chart.js**로 직접 구현한 프로젝트입니다.

👉 https://velog.io/@saemmmm/Chart.js-겹치는-그래프-만들기

---

## 🧩 프로젝트 개요

이 프로젝트는 단순한 차트 구현이 아니라,

- **겹치는 막대 그래프 (stack 활용)**
- **진행률 기반 scatter 차트 (데이터 가공 로직 포함)**

을 통해 **실무에서 사용하는 차트 구조와 데이터 처리 방식**을 재현하는 데 목적이 있습니다.

---

## 🚀 주요 기능

### 1. Overlap Bar Chart

- 동일한 `stack` 값을 활용하여 막대 그래프를 겹쳐 표현
- 현재값 vs 전체/추정값을 시각적으로 비교
- Tooltip에서 비율 계산 로직 포함

👉 핵심 포인트

- `stack`을 활용한 겹침 처리
- `tooltip.callbacks`를 활용한 동적 계산

---

### 2. Progress Scatter Chart

진행률 기반 데이터를 표현하기 위해 `scatter + showLine` 조합을 사용했습니다.

👉 특징

- x축: 진행률 (%)
- y축: 물량
- 실제값: 실선
- 예상값: 점선
- 실행 예산: 최대값 기준 수평 기준선

---

## 🔥 핵심 구현 포인트

### 1. 데이터 가공 로직 (실선 + 점선 분리)

단순히 데이터를 넣는 것이 아니라,

- **현재 시점 이전 → 실선**
- **현재 시점 이후 → 점선**

으로 나누기 위해 별도의 데이터 가공 로직을 구현했습니다.

```ts
buildSeriesSegments()
```
👉 역할

실제 데이터와 예상 데이터를 분리
scatter chart에 맞는 { x, y } 형태로 변환
실선과 점선을 자연스럽게 이어지도록 처리

---

## 2. scatter chart에서 line처럼 사용

Chart.js의 scatter는 기본적으로 점 그래프이지만,
```ts
showLine: true
```
옵션을 통해 line chart처럼 활용했습니다.

👉 이유

- 진행률 기반 차트는 x축이 숫자이기 때문에
- line chart보다 scatter가 더 적합

---

## 3. 실행 예산 기준선 처리

실행 예산은 실제 데이터와 다르게
- 변화하는 값이 아니라
- 기준선 역할
을 하기 때문에

```ts
const budgetPoints = progressValues.map((x) => ({
  x,
  y: budgetMaxValue,
}));
```
👉 최대값 기준으로 고정된 y값을 가지는 dataset으로 구현했습니다.

---

## 🛠️ 기술 스택
- React
- TypeScript
- Chart.js
- react-chartjs-2
- MUI (UI 구성)

---

## 📌 실행 방법
```ts
npm install
npm run dev
```

---

## 💡 이 프로젝트에서 고민한 점
- 단순 차트 구현이 아니라 데이터를 어떻게 가공해서 보여줄 것인가
- 실선/점선 구분을 위한 데이터 분리 방식
- scatter chart를 활용한 진행률 기반 시각화 설계
- 기준선(예산)을 별도 dataset으로 분리하는 구조

---

## ✨ 개선 가능 포인트
- 현재 시점 동적 처리 (API 기반)
- legend 토글 기능
- hover 시 강조 효과
- animation 최적화
