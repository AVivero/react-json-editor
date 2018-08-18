import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import JsonEditor from './JsonEditor';

storiesOf('JsonEditor', module).addDecorator(withKnobs).addWithInfo('JsonEditor', () => {
  // const id = text('id', 'buttonId');
//   const className = text('className', 'btn-danger');
//   const disabled = boolean('Disabled', false);
//   const type = text('Type', 'button');
//   const tabIndex = number('TabIndex', 4);

  return (
    <div>
      <JsonEditor 
        json = {fcSettings}
      />
    </div>);
});


const fcSettings = {  
    "globalSettings":{  
       "priceFormat":{  
          "decimalSeparator":".",
          "thousandSeparator":",",
          "decimalPlaces":0,
          "currencyInFront":true,
          "currencyCode":"USD"
       },
       "dateFormat":{  
          "pattern":"MMM dd, yyyy"
       }
    },
    "__QA":{  
       "fromTrfx":{  
          "emI18n":{  
             "priceFormat":{  
                "decimalSeparator":".",
                "thousandSeparator":",",
                "currencyInFront":true,
                "currencyCode":"USD",
                "roundPrices":true
             },
             "dateFormat":{  
                "pattern":"M d, Y"
             }
          }
       }
    },
    "meta":{  
       "dataEndPoints":{  
          "datacore":{  
             "variables":[  
                "airline_code",
                "event",
                "event_action",
                "event_category",
                "context",
                "variables",
                "extra_info"
             ]
          },
          "ga":{  
             "gaProp":{  
                "sepCharacter":":",
                "skipKeytrackingModel":[  
                   "airlineId",
                   "event"
                ],
                "sepVariablesLabel":"|",
                "sepVariables":"&",
                "eventCharacters":{  
                   "aIdChar":"tid",
                   "clientIdChar":"cid",
                   "event":"t",
                   "deepPage":"dp",
                   "eventCat":"ec",
                   "eventAct":"ea",
                   "eventLabel":"el",
                   "nonInteraction":"ni"
                }
             }
          }
       }
    },
    "airlineData":{  
       "airlineName":"Copa Air"
    },
    "components":[  
       {  
          "name":"em-cmp-fare-list--mosaic--carousel--cm__fare-list--mosaic--carousel--cm",
          "impressionConfig":{  
             "impId":"fare-list--mosaic--carousel",
             "offset":"50%",
             "offsetUp":"5%",
             "impressionEvents":{  
                "name":"fare-list--mosaic--carousel",
                "eventCategory":"em-farelist-mosaic-carousel",
                "eventAction":"viewable-impression",
                "nonInteraction":true,
                "itRedirects":false,
                "gaLabelTemplate":[  
                   {  
                      "gaId":[  
                         "UA-91360191-1"
                      ],
                      "labelTemplate":"{\"label\": \"n/a\", \"provider\": \"{{ fixture.airlineData.airlineName }}\", \"url\": \"{{ context.datasource.url }}\",\"deviceCategory\": \"{{ context.audience.device_category }}\",\"siteEdition\": \"{{ context.geo.language.site_edition }}\", \"pageTypeCode\": \"{{ context.datasource.step }}\", \"airlineIataCode\": \"{{ context.airline.code}}\", \"journeyType\": \"{{ event.journeyTypeOption}}\", \"route\": \"{{ event.origin || '000' }}>{{ event.destination || '000'}}\",  \"date\": \"{{ event.departureDate || '000000' }}_{{ event.returnDate || '000000' }}\", \"fareClass\": \"{{ event.fareClass }}\", \"adultCount\": \"{{ event.totalPax}}\", \"isFlexibleDates\": \"{{ event.flexibleDates || 'FALSE'}}\", \"discountCode\": \"{{ event.promoCode}}\",\"totalPrice\": \"{{ event.totalPrice}}\", \"currency\": \"{{ event.currencyCode}}\", \"totalPriceUSD\": \"{{ event.USDtotalPrice}}\", \"trackingId\": \"{{ event.journeyTypeOption}} {{ event.origin || '000' }} {{ event.destination || '000' }} {{ event.departureDate }} {{ event.returnDate}} $ {{ event.USDtotalPrice}}\"}"
                   },
                   {  
                      "gaId":[  
                         "UA-26727407-1"
                      ],
                      "labelTemplate":"{\"label\": \"n/a\", \"provider\": \"{{ fixture.airlineData.airlineName }}\", \"url\": \"{{ context.datasource.url }}\",\"deviceCategory\": \"{{ context.audience.device_category }}\",\"siteEdition\": \"{{ context.geo.language.site_edition }}\", \"pageTypeCode\": \"{{ context.datasource.step }}\", \"airlineIataCode\": \"{{ context.airline.code}}\", \"journeyType\": \"{{ event.journeyTypeOption}}\", \"route\": \"{{ event.origin || '000' }}>{{ event.destination || '000'}}\",  \"date\": \"{{ event.departureDate || '000000' }}_{{ event.returnDate || '000000' }}\", \"fareClass\": \"{{ event.fareClass }}\", \"adultCount\": \"{{ event.totalPax}}\", \"isFlexibleDates\": \"{{ event.flexibleDates || 'FALSE'}}\", \"discountCode\": \"{{ event.promoCode}}\",\"totalPrice\": \"{{ event.totalPrice}}\", \"currency\": \"{{ event.currencyCode}}\", \"totalPriceUSD\": \"{{ event.USDtotalPrice}}\", \"trackingId\": \"{{ event.journeyTypeOption}} {{ event.origin || '000' }} {{ event.destination || '000' }} {{ event.departureDate }} {{ event.returnDate}} $ {{ event.USDtotalPrice}}\"}"
                   }
                ]
             }
          },
          "dataEndPoints":{  
             "datacore":{  
                "environments":{  
                   "dev":{  
                      "url":"https://staging-dc-api.securitytrfx.com/w/em_cmp_lib_tracking/1/TRACKING_LIB_API",
                      "token":"43dxk7yxheq43DXK7YXTASeqlctlhse9EQLCTLHSDF"
                   },
                   "prepro":{  
                      "url":"https://staging-dc-api.securitytrfx.com/w/em_cmp_lib_tracking/1/TRACKING_LIB_API",
                      "token":"43dxk7yxheq43DXK7YXTASeqlctlhse9EQLCTLHSDF"
                   },
                   "production":{  
                      "url":"https://datacore-write.securitytrfx.com/w/em_cmp_lib_tracking/1/C0P4tracking",
                      "token":"45t6cxv4dn645T6CXV476Mezbfoziffu45T6CXV4ACC"
                   }
                }
             },
             "ga":{  
                "url":"//www.google-analytics.com/collect?v=1"
             }
          },
          "events":[  
             {  
                "name":"em.fare.book.fareCarousel",
                "eventCategory":"em-farelist-mosaic-carousel",
                "eventAction":"fsi",
                "itRedirects":true,
                "gaLabelTemplate":[  
                   {  
                      "gaId":[  
                         "UA-91360191-1"
                      ],
                      "labelTemplate":"{\"label\": \"book-now\", \"provider\": \"{{ fixture.airlineData.airlineName }}\", \"url\": \"{{ context.datasource.url }}\",\"deviceCategory\": \"{{ context.audience.device_category }}\",\"siteEdition\": \"{{ context.geo.language.site_edition }}\", \"pageTypeCode\": \"{{ context.datasource.step }}\", \"airlineIataCode\": \"{{ context.airline.code}}\", \"journeyType\": \"{{ event.journeyTypeOption}}\", \"route\": \"{{ event.origin || '000' }}>{{ event.destination || '000'}}\",  \"date\": \"{{ event.departureDate || '000000' }}_{{ event.returnDate || '000000' }}\", \"fareClass\": \"{{ event.fareClass }}\", \"adultCount\": \"{{ event.totalPax}}\", \"isFlexibleDates\": \"{{ event.flexibleDates || 'FALSE'}}\", \"discountCode\": \"{{ event.promoCode}}\",\"totalPrice\": \"{{ event.totalPrice}}\", \"currency\": \"{{ event.currencyCode}}\", \"totalPriceUSD\": \"{{ event.USDtotalPrice}}\", \"trackingId\": \"{{ event.journeyTypeOption}} {{ event.origin || '000' }} {{ event.destination || '000' }} {{ event.departureDate }} {{ event.returnDate}} $ {{ event.USDtotalPrice}}\"}"
                   },
                   {  
                      "gaId":[  
                         "UA-26727407-1"
                      ],
                      "labelTemplate":"{\"label\": \"book-now\", \"provider\": \"{{ fixture.airlineData.airlineName }}\", \"url\": \"{{ context.datasource.url }}\",\"deviceCategory\": \"{{ context.audience.device_category }}\",\"siteEdition\": \"{{ context.geo.language.site_edition }}\", \"pageTypeCode\": \"{{ context.datasource.step }}\", \"airlineIataCode\": \"{{ context.airline.code}}\", \"journeyType\": \"{{ event.journeyTypeOption}}\", \"route\": \"{{ event.origin || '000' }}>{{ event.destination || '000'}}\",  \"date\": \"{{ event.departureDate || '000000' }}_{{ event.returnDate || '000000' }}\", \"fareClass\": \"{{ event.fareClass }}\", \"adultCount\": \"{{ event.totalPax}}\", \"isFlexibleDates\": \"{{ event.flexibleDates || 'FALSE'}}\", \"discountCode\": \"{{ event.promoCode}}\",\"totalPrice\": \"{{ event.totalPrice}}\", \"currency\": \"{{ event.currencyCode}}\", \"totalPriceUSD\": \"{{ event.USDtotalPrice}}\", \"trackingId\": \"{{ event.journeyTypeOption}} {{ event.origin || '000' }} {{ event.destination || '000' }} {{ event.departureDate }} {{ event.returnDate}} $ {{ event.USDtotalPrice}}\"}"
                   }
                ],
                "variables":[  
 
                ]
             }
          ]
       }
    ]
 };
