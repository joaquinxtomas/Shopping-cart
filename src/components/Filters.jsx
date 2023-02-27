import { useId } from "react";
import { useFilters } from '../hooks/useFilters'

export const Filters = () => {
    const { filters, setFilters } = useFilters()

    const minPriceId = useId()

    const filterByPrice = (event) => {
        setFilters(prevState => (
            {
                ...prevState,
                minPrice: event.target.value
            }
        ))
    }

    return (
        <div className="bg-gray-200 w-56 p-2 flex flex-col items-center justify-between rounded mr-3 mb-3">
            <div>
                <label
                    htmlFor={minPriceId}
                >Filtrar por precio:</label>
            </div>
            <div className="flex items-center">
                <input
                    className="cursor-pointer mr-3"
                    type='range'
                    id={minPriceId}
                    min='0'
                    max= '46000'
                    onChange={filterByPrice}
                    value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>
        </div>
    )

}