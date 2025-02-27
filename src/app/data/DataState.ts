import type { FileCollection } from 'filelist-utils';

import type { IRMeasurement } from './IRMeasurement';
import type { MeasurementBase } from './MeasurementBase';

export interface DataState {
  measurements: Measurements;
}

export interface Measurements {
  ir: {
    entries: IRMeasurement[];
  };
  iv: {
    entries: MeasurementBase[];
  };
  raman: {
    entries: MeasurementBase[];
  };
  uv: {
    entries: MeasurementBase[];
  };
  uvvis: {
    entries: MeasurementBase[];
  };
  gclc: {
    entries: MeasurementBase[];
  };
  gclcms: {
    entries: MeasurementBase[];
  };
  nmr: {
    entries: MeasurementBase[];
  };
  mass: {
    entries: MeasurementBase[];
  };
  other: {
    entries: MeasurementBase[];
  };
}

export type MeasurementKind = keyof Measurements;

export const measurementKinds = Object.keys(
  getEmptyMeasurements(),
) as MeasurementKind[];

export const kindsLabel: Record<MeasurementKind, string> = {
  ir: 'IR',
  iv: 'IV',
  raman: 'Raman',
  uv: 'UV',
  uvvis: 'UV-VIS',
  mass: 'Mass',
  gclc: 'GC/LC',
  gclcms: 'GC/LC MS',
  nmr: 'NMR',
  other: 'Other',
};

export type Loader = (fileCollection: FileCollection) => Promise<Measurements>;

export function mergeMeasurements(
  measurements: Measurements,
  newMeasurements: Measurements,
) {
  for (const kind in newMeasurements) {
    const entries: MeasurementBase[] = newMeasurements[kind].entries || [];
    measurements[kind].entries.push(...entries);
  }
}

export function getEmptyMeasurements(): Measurements {
  return {
    ir: { entries: [] },
    iv: { entries: [] },
    raman: { entries: [] },
    uv: { entries: [] },
    uvvis: { entries: [] },
    gclc: { entries: [] },
    gclcms: { entries: [] },
    nmr: { entries: [] },
    mass: { entries: [] },
    other: { entries: [] },
  };
}

export function getEmptyDataState(): DataState {
  return {
    measurements: getEmptyMeasurements(),
  };
}
