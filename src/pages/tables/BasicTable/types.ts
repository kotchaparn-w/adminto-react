export type TableRecord = {
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
};

export type ContexualTableRecord = {
    id: number;
    variant?: string;
    firstName: string;
    lastName: string;
    userName: string;
};
