export const angularFirestoreStub = (): any => {
    return {
        collection: (path: string): any => {
            return {
                valueChanges: (): void => {},
                add: (data: object): void => {},
                doc: (id: string): object => {
                    return {
                        get: (): void => {},
                        delete: (): void => {},
                        update: (): void => {},
                    };
                },
            };
        },
    };
};
