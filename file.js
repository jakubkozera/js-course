// pętla for-in

const isoCountryCodes = {
  "US" : "United States",
  "CA": "Canada",
  "PL": "Poland",
  "FR": "France",
  "DE": "Germany"
}

// const keys = Object.keys(isoCountryCodes)
// for (const key of keys) {
//   const countryName = isoCountryCodes[key]
//   console.log(`Country code: ${key} , country name: ${countryName}`)
// }

for(const isoCode in isoCountryCodes) {
    const countryName = isoCountryCodes[isoCode]
    if(countryName === "Canada") {
      continue
    }
    
    console.log(`Country code: ${isoCode}, country name: ${countryName}`)
    if(countryName === "Poland") {
      break
    }
}