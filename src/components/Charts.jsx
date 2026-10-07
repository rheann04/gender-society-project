import React, { useEffect, useRef, useState } from 'react';
import Source from './Source';

const useDrawOnView = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || !('IntersectionObserver' in window)) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return [ref, visible];
};

const useChartWidth = (ref) => {
  const [width, setWidth] = useState(640);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof ResizeObserver === 'undefined') return undefined;

    const updateWidth = () => {
      const nextWidth = Math.round(element.getBoundingClientRect().width);
      if (nextWidth > 0) setWidth(currentWidth => currentWidth === nextWidth ? currentWidth : nextWidth);
    };
    const observer = new ResizeObserver(updateWidth);
    observer.observe(element);
    updateWidth();

    return () => observer.disconnect();
  }, [ref]);

  return width;
};

const wrapLabel = (label, maxCharacters) => {
  const lines = [];
  let line = '';

  label.split(/\s+/).forEach((word) => {
    if (line && line.length + word.length + 1 > maxCharacters) {
      lines.push(line);
      line = word;
    } else {
      line = line ? `${line} ${word}` : word;
    }
  });

  if (line) lines.push(line);
  return lines;
};

const ChartFrame = ({ title, year, sourceId, takeaway, dataTable, children }) => (
  <figure className="data-chart graph-paper folded-corner">
    <figcaption>
      <h3>{title}</h3>
      <p className="data-chart-meta">{year}</p>
    </figcaption>
    {children}
    {dataTable && (
      <div className="visually-hidden">
        <table>
          <caption>Data table for {title}</caption>
          <thead>
            <tr>{dataTable.headers.map(header => <th key={header} scope="col">{header}</th>)}</tr>
          </thead>
          <tbody>
            {dataTable.rows.map((row, rowIndex) => (
              <tr key={`${row[0]}-${rowIndex}`}>
                {row.map((cell, cellIndex) => cellIndex === 0
                  ? <th key={cellIndex} scope="row">{cell}</th>
                  : <td key={cellIndex}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
    <Source id={sourceId} className="data-source-line" />
    <p className="data-chart-takeaway">{takeaway}</p>
  </figure>
);

const axisColor = '#2B2B2E';
const gridColor = 'rgba(43, 43, 46, 0.18)';

export const LineChart = ({ data, title, year, sourceId, takeaway, unit = '%', maxValue }) => {
  const [chartRef, visible] = useDrawOnView();
  const [lineDrawn, setLineDrawn] = useState(false);
  const width = useChartWidth(chartRef);
  const height = 300;
  const viewHeight = height + 42;
  const left = unit === '%' ? 104 : 116;
  const right = 36;
  const top = 42;
  const bottom = 54;
  const chartWidth = width - left - right;
  const pointInset = Math.min(24, chartWidth / Math.max(data.length * 2, 1));
  const chartHeight = height - top - bottom;
  const max = maxValue ?? Math.ceil(Math.max(...data.map(item => item.value)) / 2) * 2;
  const points = data.map((item, index) => ({
    ...item,
    x: left + pointInset + (data.length === 1 ? (chartWidth - pointInset * 2) / 2 : index * (chartWidth - pointInset * 2) / (data.length - 1)),
    y: top + chartHeight - item.value / max * chartHeight
  }));
  const path = points.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ');
  const ticks = width <= 420 ? [0, max / 2, max] : [0, max / 4, max / 2, max * 3 / 4, max];
  const formatValue = value => Number(value).toLocaleString('en-US');
  const axisUnit = unit === '%' ? 'Percent' : unit.trim().replace(/^./, character => character.toUpperCase());

  useEffect(() => {
    setLineDrawn(false);
  }, [path, visible]);

  const dataTable = {
    headers: ['Year', axisUnit],
    rows: data.map(item => [item.year, `${formatValue(item.value)}${unit}`])
  };

  return (
    <ChartFrame title={title} year={year} sourceId={sourceId} takeaway={takeaway} dataTable={dataTable}>
      <div ref={chartRef} className={`chart-canvas ${visible ? 'is-visible' : ''}`}>
        <svg viewBox={`0 0 ${width} ${viewHeight}`} role="img" aria-label={`${title}. ${data.map(item => `${item.year}: ${item.value}${unit}`).join('; ')}.`}>
          {ticks.map(tick => {
            const y = top + chartHeight - tick / max * chartHeight;
            return (
              <g key={tick}>
                <line x1={left} y1={y} x2={width - right} y2={y} stroke={gridColor} strokeDasharray="3 5" />
                <text x={left - 10} y={y + 4} textAnchor="end" className="chart-axis-label">
                  {unit === '%' ? `${tick}%` : formatValue(tick)}
                </text>
              </g>
            );
          })}
          <line x1={left} y1={top} x2={left} y2={height - bottom} className="chart-axis" />
          <line x1={left} y1={height - bottom} x2={width - right} y2={height - bottom + 1} className="chart-axis" />
          <text x="20" y={top + chartHeight / 2} textAnchor="middle" transform={`rotate(-90 20 ${top + chartHeight / 2})`} className="chart-axis-title">{axisUnit}</text>
          <text x={left + chartWidth / 2} y={height + 34} textAnchor="middle" className="chart-axis-title">Year</text>
          <path
            key={`${title}-${path}`}
            d={path}
            pathLength="1"
            className={`chart-line ${lineDrawn ? 'is-drawn' : ''}`}
            onAnimationEnd={event => {
              if (event.animationName === 'chart-line-draw') setLineDrawn(true);
            }}
          />
          {points.map((point, index) => {
            const nextPoint = points[index + 1];
            const labelOffset = index === 0 && nextPoint && nextPoint.y < point.y ? 34 : 12;
            const labelX = index === points.length - 1 && points[index - 1]?.y < point.y
              ? point.x + 12
              : point.x;
            const labelAnchor = labelX === point.x ? 'middle' : 'start';

            return (
            <g
              key={point.year}
              className="chart-point"
              tabIndex="0"
              role="button"
              aria-label={`${point.year}: ${point.value}${unit}`}
            >
              <circle cx={point.x} cy={point.y} r="12" className="chart-point-hit" />
              <circle cx={point.x} cy={point.y} r="6" className="chart-point-dot" />
              <text
                x={labelX}
                y={Math.max(20, point.y - labelOffset)}
                textAnchor={labelAnchor}
                className="chart-value-label"
              >{unit === '%' ? `${point.value}${unit}` : formatValue(point.value)}</text>
              <text
                x={point.x}
                y={height - bottom + 25}
                textAnchor="middle"
                className="chart-axis-label"
              >{point.year}</text>
              <g className="chart-tooltip" aria-hidden="true">
                <rect x={Math.min(width - 94, Math.max(4, point.x - 44))} y={Math.max(3, point.y - 53)} width="88" height="28" />
                <text x={Math.min(width - 50, Math.max(48, point.x))} y={Math.max(22, point.y - 34)} textAnchor="middle">{formatValue(point.value)}</text>
              </g>
            </g>
            );
          })}
        </svg>
      </div>
    </ChartFrame>
  );
};

export const BarChart = ({ data, title, year, sourceId, takeaway, unit = '%', maxValue }) => {
  const [chartRef, visible] = useDrawOnView();
  const width = useChartWidth(chartRef);
  const left = Math.min(190, Math.max(92, width * 0.36));
  const right = 72;
  const labelLines = data.map(item => item.labelLines || wrapLabel(item.label, Math.max(10, Math.floor((left - 12) / 7))));
  const rowHeight = labelLines.some(lines => lines.length > 1) ? 54 : 44;
  const height = Math.max(170, data.length * rowHeight + 70);
  const viewHeight = height + 24;
  const top = 22;
  const plotWidth = width - left - right;
  const max = maxValue || Math.ceil(Math.max(...data.map(item => item.value)) / 2) * 2;
  const dataTable = {
    headers: ['Category', unit === '%' ? 'Percent' : unit],
    rows: data.map(item => [item.label, `${item.value}${unit}`])
  };

  return (
    <ChartFrame title={title} year={year} sourceId={sourceId} takeaway={takeaway} dataTable={dataTable}>
      <div ref={chartRef} className={`chart-canvas ${visible ? 'is-visible' : ''}`}>
        <svg viewBox={`0 0 ${width} ${viewHeight}`} role="img" aria-label={`${title}. ${data.map(item => `${item.label}: ${item.value}${unit}`).join('; ')}.`}>
          {[0, max / 4, max / 2, max * 3 / 4, max].map(tick => {
            const x = left + tick / max * plotWidth;
            return (
              <g key={tick}>
                <line x1={x} y1={top} x2={x} y2={height - 38} stroke={gridColor} strokeDasharray="3 5" />
                <text x={x} y={height - 20} textAnchor="middle" className="chart-axis-label">{tick}{unit}</text>
              </g>
            );
          })}
          <line x1={left} y1={top} x2={left} y2={height - 38} className="chart-axis" />
          <line x1={left} y1={height - 38} x2={width - right + 2} y2={height - 38} className="chart-axis" />
          <text x={left + plotWidth / 2} y={height - 2} textAnchor="middle" className="chart-axis-title">{unit}</text>
          {data.map((item, index) => {
            const y = top + index * rowHeight + 9;
            const barWidth = item.value / max * plotWidth;
            const fill = ['#FFE45C', '#1F4FD8', '#D93025'][index % 3];
            const valueText = `${item.value}${unit}`;
            const valueX = left + barWidth + 7;
            const valueAnchor = valueX + valueText.length * 9 > width - 4 ? 'end' : 'start';
            const valueLabelX = valueAnchor === 'end' ? width - 6 : valueX;
            return (
              <g
                key={item.label}
                className="chart-bar"
                tabIndex="0"
                role="button"
                aria-label={`${item.label}: ${item.value}${unit}`}
              >
                <text
                  x={left - 12}
                  y={y + (labelLines[index].length > 1 ? 12 : rowHeight / 2 + 4)}
                  textAnchor="end"
                  className="chart-axis-label"
                >
                  {labelLines[index].map((line, lineIndex) => (
                    <tspan key={line} x={left - 12} dy={lineIndex === 0 ? 0 : 14}>{line}</tspan>
                  ))}
                </text>
                <rect
                  x={left}
                  y={y + (rowHeight - 23) / 2}
                  width={barWidth}
                  height="23"
                  fill={fill}
                  className="chart-bar-fill"
                  style={{ '--chart-index': index }}
                  onAnimationEnd={event => {
                    if (event.animationName === 'chart-bar-grow') event.currentTarget.classList.add('is-grown');
                  }}
                />
                <text x={valueLabelX} y={y + rowHeight / 2 + 5} textAnchor={valueAnchor} className="chart-value-label">{valueText}</text>
                <g className="chart-tooltip" aria-hidden="true">
                  <rect x={Math.min(width - 112, Math.max(left, left + barWidth - 2))} y={y - 32} width="106" height="26" />
                  <text x={Math.min(width - 59, Math.max(left + 53, left + barWidth + 51))} y={y - 14} textAnchor="middle">{item.value}{unit}</text>
                </g>
              </g>
            );
          })}
        </svg>
      </div>
    </ChartFrame>
  );
};

export const ProgressBar = ({ value, title, year, sourceId, takeaway, denominator }) => {
  const [chartRef, visible] = useDrawOnView();
  const dataTable = {
    headers: ['Measure', 'Percent'],
    rows: [[denominator, `${value}%`], ['Remaining', `${100 - value}%`]]
  };

  return (
    <ChartFrame title={title} year={year} sourceId={sourceId} takeaway={takeaway} dataTable={dataTable}>
      <div ref={chartRef} className={`progress-chart ${visible ? 'is-visible' : ''}`} role="img" aria-label={`${title}: ${value}% in ${year}; ${100 - value}% remaining. Scale from 0 to 100 percent.`}>
        <div className="progress-chart-annotation"><span className="hand-number">{value}%</span><span>{denominator}</span></div>
        <div
          className="progress-chart-track"
          tabIndex="0"
          aria-label={`${value}% of ${denominator} had begun childbearing`}
        >
          <span
            className="progress-chart-fill"
            style={{ width: `${value}%` }}
            onAnimationEnd={event => {
              if (event.animationName === 'chart-bar-grow') event.currentTarget.classList.add('is-grown');
            }}
          />
          <span className="progress-chart-tooltip" aria-hidden="true">{value}%</span>
        </div>
        <div className="progress-chart-axis"><span>0%</span><span>100%</span></div>
      </div>
    </ChartFrame>
  );
};