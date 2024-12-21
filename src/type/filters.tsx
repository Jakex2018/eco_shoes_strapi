export type FiltersType = {
    data: dataFilterTypes | null,
    loading: boolean,
    error: string,
}

export type dataFilterTypes = {

    schema: {
        attributes: {
            gender: {
                enum: any
            }
        }
    }
}