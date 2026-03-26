export interface Point {
  x: number;
  y: number;
}

interface BuildSeriesSegmentsParams {
  xValues: number[];
  actualValues: number[];
  projectedValues: number[];
  currentIndex: number;
}

interface SeriesSegments {
  actualPoints: Point[];
  projectedPoints: Point[];
}

export function buildSeriesSegments({
  xValues,
  actualValues,
  projectedValues,
  currentIndex,
}: BuildSeriesSegmentsParams): SeriesSegments {
  const actualPoints: Point[] = [];
  const projectedPoints: Point[] = [];

  for (let i = 0; i <= currentIndex; i += 1) {
    actualPoints.push({
      x: xValues[i],
      y: actualValues[i],
    });
  }

  projectedPoints.push({
    x: xValues[currentIndex],
    y: actualValues[currentIndex],
  });

  for (let i = currentIndex + 1; i < xValues.length; i += 1) {
    projectedPoints.push({
      x: xValues[i],
      y: projectedValues[i],
    });
  }

  return {
    actualPoints,
    projectedPoints,
  };
}