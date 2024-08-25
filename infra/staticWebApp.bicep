param location string = resourceGroup().location
param name string
param sku string = 'Free'

resource staticWebApp 'Microsoft.Web/staticSites@2022-09-01' = {
  name: name
  location: location
  sku: {
    name: sku
    tier: sku
  }
  properties: {
    buildProperties: {
    }
  }
}

output staticWebAppUrl string = staticWebApp.properties.defaultHostname
