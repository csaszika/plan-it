export const angularFirestoreStub = () => {
  return {
    collection: (path: string): any => {
      return {
        add: (data: object): void => {},
        doc: (id: string): object => {
          return {
            delete: (): void => {},
            update: (): void => {},
          };
        },
      };
    },
  };
};
