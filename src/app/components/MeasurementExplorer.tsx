/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { FaExchangeAlt, FaArrowsAltH } from 'react-icons/fa';

import { MeasurementMassPlot, MeasurementPlot, MeasurementPlotProps } from '.';

export interface MeasurementExplorerProps
  extends Omit<MeasurementPlotProps, keyof ExplorerInfo> {
  kind?: 'mass' | '1d';
}
interface ExplorerInfo {
  dataIndex: number;
  xVariableName: string;
  yVariableName: string;
  flipHorizontalAxis: boolean;
}
export function MeasurementExplorer(props: MeasurementExplorerProps) {
  const {
    measurement: { data },
    width = 800,
    height = 400,
    kind = '1d',
  } = props;
  function defaultInfo(dataIndex: number) {
    return {
      dataIndex,
      xVariableName: Object.keys(data[dataIndex].variables).includes('x')
        ? 'x'
        : Object.keys(data[dataIndex].variables)[0],
      yVariableName: Object.keys(data[dataIndex].variables).includes('y')
        ? 'y'
        : Object.keys(data[dataIndex].variables)[1],
    };
  }
  const [info, setInfo] = useState<ExplorerInfo>({
    flipHorizontalAxis: false,
    ...defaultInfo(0),
  });
  return (
    <div
      style={{ width, height }}
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      {kind === '1d' && (
        <div
          css={css`
            display: flex;
            justify-content: space-around;
            margin-bottom: 20px;
          `}
        >
          <div>
            <label>dataIndex :</label>
            <select
              css={css`
                cursor: pointer;
                border: 1px solid black;
                padding: 1px;
                margin-left: 2px;
              `}
              onChange={({ target }) => {
                const value = Number(target.value);
                if (value !== undefined && !Number.isNaN(value)) {
                  setInfo(({ flipHorizontalAxis }) => ({
                    flipHorizontalAxis,
                    ...defaultInfo(value),
                  }));
                }
              }}
            >
              {data.map((d, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>xVariable :</label>
            <select
              css={css`
                cursor: pointer;
                border: 1px solid black;
                padding: 1px;
                margin-left: 2px;
              `}
              onChange={({ target }) => {
                const value = target.value;
                if (value) {
                  setInfo((info) => ({ ...info, xVariableName: value }));
                }
              }}
              value={info.xVariableName}
            >
              {Object.keys(data[info.dataIndex].variables).map((d) => {
                if (d !== info.yVariableName) {
                  return (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  );
                }
                return null;
              })}
            </select>
          </div>
          <div>
            <FaExchangeAlt
              css={css`
                margin-top: 2px;
                cursor: pointer;
              `}
              size="20"
              onClick={() =>
                setInfo(({ xVariableName, yVariableName, ...info }) => ({
                  ...info,
                  xVariableName: yVariableName,
                  yVariableName: xVariableName,
                }))
              }
            />
          </div>
          <div>
            <label>yVariable :</label>
            <select
              css={css`
                cursor: pointer;
                border: 1px solid black;
                padding: 1px;
                margin-left: 2px;
              `}
              onChange={({ target }) => {
                const value = target.value;
                if (value) {
                  setInfo((info) => ({ ...info, yVariableName: value }));
                }
              }}
              value={info.yVariableName}
            >
              {Object.keys(data[info.dataIndex].variables).map((d) => {
                if (d !== info.xVariableName) {
                  return (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  );
                }
                return null;
              })}
            </select>
          </div>
          <div
            css={css`
              padding: 1px;
              display: flex;
            `}
          >
            Flip &quot;{info.xVariableName}&quot; axis:
            <FaArrowsAltH
              css={css`
                cursor: pointer;
                border: 1px solid black;
                padding: 1px;
                margin-left: 2px;
              `}
              size="28"
              onClick={() =>
                setInfo(({ flipHorizontalAxis, ...other }) => ({
                  flipHorizontalAxis: !flipHorizontalAxis,
                  ...other,
                }))
              }
            />
          </div>
        </div>
      )}
      {kind === '1d' ? (
        <MeasurementPlot {...props} {...info} />
      ) : (
        <MeasurementMassPlot {...props} {...info} />
      )}
    </div>
  );
}
