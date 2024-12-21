import React from 'react'
import { RadioGroupItem } from "@/components/ui/radio-group"
import { RadioGroup } from "@radix-ui/react-radio-group"
import { Label } from "@/components/ui/label"
import { getProductField } from "@/api/getProductField"
import { FiltersType } from '@/type/filters'
type FiltersGenderProps = {
    setFilterGender: (gender: string) => void
}
const FilterGender = (props: FiltersGenderProps) => {
    const { setFilterGender: setFilterOrigin } = props
    const { data, loading }: FiltersType = getProductField()
    return (
        <div className="py-5">
            <p className="mb-3 font-bold">Gender</p>
            {
                loading && data == null && (
                    <p>Cargando...</p>
                )

            }
            <RadioGroup onValueChange={(value) => setFilterOrigin(value)}>
                {
                    data != null && data.schema.attributes.gender.enum.map((item: string) => (
                        <div key={item} className="flex my-4 items-center space-x-2">
                            <RadioGroupItem value={item} id={item} />
                            <Label htmlFor={item}>{item}</Label>
                        </div>
                    ))
                }
            </RadioGroup>
        </div>
    )
}

export default FilterGender




/*
<RadioGroup onValueChange={(value) => setFilterOrigin(value)}>
                {
                    data != null && data.schema.attributes.gender.enum.map((item: string) => (
                        <div key={item} className="flex my-4 items-center space-x-2">
                            <RadioGroupItem value={item} id={item} />
                            <Label htmlFor={item}>{item}</Label>
                        </div>
                    ))
                }
            </RadioGroup>
*/