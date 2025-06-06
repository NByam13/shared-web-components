export interface SalesCompsTransaction  {
    propertyId: number,
    property: string,
    city: string,
    administrativeDivisionCode: string,
    postalCode: string,
    dateSale: string,
    sizeWeb: number,
    sizeWebLabel: string,
    priceWebLocal: number,
    priceWebUsd: number,
    yearBuilt: string,
    entityBuyer: string,
    entitySeller: string,
    addressFull: string,
    address: string,
    zipGrade: string,
    submarketGrade: string,
    formattedSize: string,
    formattedPriceConfirmed: string,
    formattedPricePer: string,
    priceConfirmed: number,
    submarketId: string,
    currencyCode: string,
    region: string,
    latitude: number,
    longitude: number,
}

export interface TableProps {
    token: string,
    basepath: string,
    marketId: string,
    region: string,
    sectorId: string,
    withGrades: boolean,
    marketLevelId: string
}
