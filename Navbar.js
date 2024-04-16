import { useState } from "react"

const value = [
    {
        "info": {
          "id": "103063",
          "name": "Chinese Wok",
          "cloudinaryImageId": "oeyg6ayfog4rnbgvzzer",
          "locality": "Highland park stall no 68, opp oriental bank",
          "areaName": "Santoshpur",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Momos",
            "Fast Food",
            "Seafood"
          ],
          "avgRating": 4.2,
          "parentId": "61955",
          "avgRatingString": "4.2",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 43,
            "lastMileTravel": 5,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "5.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-04-09 22:45:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹150 OFF",
            "subHeader": "ABOVE ₹399",
            "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-35ad510b-2a50-4b50-8a9c-0b8fa3d83980"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/chinese-wok-highland-park-stall-no-68-opp-oriental-bank-santoshpur-kolkata-103063",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "515520",
          "name": "UBQ BY Barbeque Nation",
          "cloudinaryImageId": "y11tivrx9dsgd6pllc5u",
          "locality": "Rajdanga Main Road",
          "areaName": "Acropolis Mall",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "North Indian",
            "Barbecue",
            "Biryani",
            "Kebabs",
            "Mughlai",
            "Desserts"
          ],
          "avgRating": 4.2,
          "parentId": "10804",
          "avgRatingString": "4.2",
          "totalRatingsString": "500+",
          "sla": {
            "deliveryTime": 38,
            "lastMileTravel": 1.7,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "1.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-04-09 23:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹249"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-35ad510b-2a50-4b50-8a9c-0b8fa3d83980"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-rajdanga-main-road-acropolis-mall-kolkata-515520",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },

]


  
const Navbar=()=>{
    const [valuearr,setvaluearr] = useState(value)
   setvaluearr (value)
    return(
        <div>
            <header className="header">
                   <div >
                   <a href="https://www.swiggy.com/">
                        <img src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo-768x432.png"/>
                        </a>
                   </div>
                   <div className="navbar">
                        <ul>
                            <li><a href="">Search</a></li>
                            <li><a href="">Offers</a></li>
                            <li><a href="">Help</a></li>
                            <li><a href="">Sign in</a></li>
                            <li> <button onClick={()=>(valuearr)}/></li>
                            
                        </ul>
                   </div>
            </header>
        </div>
    )}
    export default Navbar