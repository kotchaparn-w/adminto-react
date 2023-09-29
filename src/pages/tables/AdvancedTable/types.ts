export type Record = {
    id: number;
    age: number;
    name: string;
    company: string;
    phone: string;
};

export type ExpandableRecord = {
    id: number;
    age: number;
    name: string;
    company: string;
    phone: string;
    subRows: Record[];
};
