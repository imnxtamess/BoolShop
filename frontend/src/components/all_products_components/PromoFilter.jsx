import { useState, useEffect } from "react";
export default function PromoFilter({ activePromo, setFilters, filters, activeKeys }) {
    const [isPromoOpen, setIsPromoOpen] = useState(false);

    const handleOnSaleToggle = () => {
        setFilters((prev) => ({
            ...prev,
            onsale: !prev.onsale,
        }));
    };
    if (filters.onsale === "true") {
        setIsPromoOpen(true)
    }
    useEffect(() => {
        if (activeKeys.onsale) {
            setIsPromoOpen(true);
        } else {
            setIsPromoOpen(false);
        }
    }, [activeKeys]);
    return (
        <>
            <div
                className="filter-items d-flex justify-content-between"
                onClick={() => setIsPromoOpen(!isPromoOpen)}
            >
                promo
                {isPromoOpen ? (
                    <i className="bi bi-chevron-up"></i>
                ) : (
                    <i className="bi bi-chevron-down"></i>
                )}
            </div>
            {isPromoOpen && (
                <div className="form-check my-2">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="on-sale"
                        checked={filters.onsale}
                        onChange={handleOnSaleToggle}
                    />
                    <label className="form-check-label" htmlFor="on-sale">
                        Plata o Promo?
                    </label>
                </div>
            )}
        </>
    );
}