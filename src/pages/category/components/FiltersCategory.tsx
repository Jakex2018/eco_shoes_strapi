import FilterGender from "./FilterGender"
type FiltersGenderProps = {
    setFilterOrigin: (origin: string) => void
}


const FiltersCategory = (props: FiltersGenderProps) => {
    const { setFilterOrigin } = props

    return (
        <div className="sm:w-[350px] sm:mt-5 p-6">
            <FilterGender setFilterGender={setFilterOrigin} />
        </div>
    )
}

export default FiltersCategory