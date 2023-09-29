// types
import { ContexualTableRecord, TableRecord } from './types';

export const records: TableRecord[] = [
    { id: 1, firstName: 'Mark', lastName: 'Otto', userName: '@mdo' },
    { id: 2, firstName: 'Jacob', lastName: 'Thornton', userName: '@fat' },
    { id: 3, firstName: 'Larry', lastName: 'The Bird', userName: '@twitter' },
];

export const contextualRecords: ContexualTableRecord[] = [
    { id: 1, variant: 'active', firstName: 'Column content', lastName: 'Column content', userName: 'Column content' },
    { id: 2, firstName: 'Column content', lastName: 'Column content', userName: 'Column content' },
    { id: 3, variant: 'success', firstName: 'Column content', lastName: 'Column content', userName: 'Column content' },
    { id: 4, firstName: 'Column content', lastName: 'Column content', userName: 'Column content' },
    { id: 5, variant: 'info', firstName: 'Column content', lastName: 'Column content', userName: 'Column content' },
    { id: 6, firstName: 'Column content', lastName: 'Column content', userName: 'Column content' },
    { id: 7, variant: 'warning', firstName: 'Column content', lastName: 'Column content', userName: 'Column content' },
    { id: 8, firstName: 'Column content', lastName: 'Column content', userName: 'Column content' },
    { id: 9, variant: 'danger', firstName: 'Column content', lastName: 'Column content', userName: 'Column content' },
];
