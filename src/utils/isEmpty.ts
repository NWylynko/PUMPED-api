export const isArrayEmpty = (array: any[]): true | undefined => (array.length === 0 ? true : undefined);

export const isEmpty = (object: any): true | undefined => (!object ? true : undefined);
