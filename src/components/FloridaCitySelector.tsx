import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

// Comprehensive list of Florida cities
const FLORIDA_CITIES: City[] = [
  { rank: 1, name: "Jacksonville" },
  { rank: 2, name: "Miami" },
  { rank: 3, name: "Tampa" },
  { rank: 4, name: "Orlando" },
  { rank: 5, name: "St. Petersburg" },
  { rank: 6, name: "Port St. Lucie" },
  { rank: 7, name: "Cape Coral" },
  { rank: 8, name: "Hialeah" },
  { rank: 9, name: "Tallahassee" },
  { rank: 10, name: "Fort Lauderdale" },
  { rank: 11, name: "Pembroke Pines" },
  { rank: 12, name: "Hollywood" },
  { rank: 13, name: "Gainesville" },
  { rank: 14, name: "Palm Bay" },
  { rank: 15, name: "Miramar" },
  { rank: 16, name: "Coral Springs" },
  { rank: 17, name: "Lehigh Acres" },
  { rank: 18, name: "West Palm Beach" },
  { rank: 19, name: "Lakeland" },
  { rank: 20, name: "Spring Hill" },
  { rank: 21, name: "Brandon" },
  { rank: 22, name: "Clearwater" },
  { rank: 23, name: "Pompano Beach" },
  { rank: 24, name: "Miami Gardens" },
  { rank: 25, name: "Davie" },
  { rank: 26, name: "Riverview" },
  { rank: 27, name: "Palm Coast" },
  { rank: 28, name: "Fort Myers" },
  { rank: 29, name: "Boca Raton" },
  { rank: 30, name: "Deltona" },
  { rank: 31, name: "Plantation" },
  { rank: 32, name: "Sunrise" },
  { rank: 33, name: "Alafaya" },
  { rank: 34, name: "North Port" },
  { rank: 35, name: "Town 'n' Country" },
  { rank: 36, name: "Melbourne" },
  { rank: 37, name: "Deerfield Beach" },
  { rank: 38, name: "Pine Hills" },
  { rank: 39, name: "Daytona Beach" },
  { rank: 40, name: "The Villages" },
  { rank: 41, name: "Largo" },
  { rank: 42, name: "Homestead" },
  { rank: 43, name: "Kissimmee" },
  { rank: 44, name: "Boynton Beach" },
  { rank: 45, name: "Doral" },
  { rank: 46, name: "Kendall" },
  { rank: 47, name: "Miami Beach" },
  { rank: 48, name: "Lauderhill" },
  { rank: 49, name: "Wesley Chapel" },
  { rank: 50, name: "Tamarac" },
  { rank: 51, name: "Poinciana" },
  { rank: 52, name: "Ocala" },
  { rank: 53, name: "St. Cloud" },
  { rank: 54, name: "Weston" },
  { rank: 55, name: "Delray Beach" },
  { rank: 56, name: "Port Orange" },
  { rank: 57, name: "Sanford" },
  { rank: 58, name: "Horizon West" },
  { rank: 59, name: "Port Charlotte" },
  { rank: 60, name: "Palm Harbor" },
  { rank: 61, name: "Palm Beach Gardens" },
  { rank: 62, name: "Wellington" },
  { rank: 63, name: "Four Corners" },
  { rank: 64, name: "Jupiter" },
  { rank: 65, name: "The Hammocks" },
  { rank: 66, name: "Apopka" },
  { rank: 67, name: "Winter Haven" },
  { rank: 68, name: "North Miami" },
  { rank: 69, name: "Margate" },
  { rank: 70, name: "Sarasota" },
  { rank: 71, name: "Westchester" },
  { rank: 72, name: "Coconut Creek" },
  { rank: 73, name: "Bradenton" },
  { rank: 74, name: "Bonita Springs" },
  { rank: 75, name: "Fountainebleau" },
  { rank: 76, name: "Pinellas Park" },
  { rank: 77, name: "Pensacola" },
  { rank: 78, name: "Tamiami" },
  { rank: 79, name: "Kendale Lakes" },
  { rank: 80, name: "Country Club" },
  { rank: 81, name: "University" },
  { rank: 82, name: "Clermont" },
  { rank: 83, name: "Titusville" },
  { rank: 84, name: "Fort Pierce" },
  { rank: 85, name: "Ocoee" },
  { rank: 86, name: "Coral Gables" },
  { rank: 87, name: "Winter Garden" },
  { rank: 88, name: "University" },
  { rank: 89, name: "Meadow Woods" },
  { rank: 90, name: "Altamonte Springs" },
  { rank: 91, name: "North Lauderdale" },
  { rank: 92, name: "Ormond Beach" },
  { rank: 93, name: "DeLand" },
  { rank: 94, name: "Greenacres" },
  { rank: 95, name: "Oakland Park" },
  { rank: 96, name: "Lake Worth Beach" },
  { rank: 97, name: "Cutler Bay" },
  { rank: 98, name: "North Fort Myers" },
  { rank: 99, name: "North Miami Beach" },
  { rank: 100, name: "Land O' Lakes" },
  { rank: 101, name: "Hallandale Beach" },
  { rank: 102, name: "Oviedo" },
  { rank: 103, name: "Plant City" },
  { rank: 104, name: "Princeton" },
  { rank: 105, name: "The Acreage" },
  { rank: 106, name: "Haines City" },
  { rank: 107, name: "Navarre" },
  { rank: 108, name: "Lakewood Ranch" },
  { rank: 109, name: "Royal Palm Beach" },
  { rank: 110, name: "Winter Springs" },
  { rank: 111, name: "Valrico" },
  { rank: 112, name: "Riviera Beach" },
  { rank: 113, name: "Parkland" },
  { rank: 114, name: "Aventura" },
  { rank: 115, name: "Estero" },
  { rank: 116, name: "Richmond West" },
  { rank: 117, name: "Carrollwood" },
  { rank: 118, name: "Panama City" },
  { rank: 119, name: "Fruit Cove" },
  { rank: 120, name: "Egypt Lake-Leto" },
  { rank: 121, name: "Lauderdale Lakes" },
  { rank: 122, name: "Dunedin" },
  { rank: 123, name: "South Miami Heights" },
  { rank: 124, name: "Kendall West" },
  { rank: 125, name: "Golden Glades" },
  { rank: 126, name: "Buenaventura Lakes" },
  { rank: 127, name: "Cooper City" },
  { rank: 128, name: "Merritt Island" },
  { rank: 129, name: "East Lake" },
  { rank: 130, name: "New Smyrna Beach" },
  { rank: 131, name: "West Little River" },
  { rank: 132, name: "Leesburg" },
  { rank: 133, name: "Ferry Pass" },
  { rank: 134, name: "Lake Magdalene" },
  { rank: 135, name: "Dania Beach" },
  { rank: 136, name: "Miami Lakes" },
  { rank: 137, name: "Casselberry" },
  { rank: 138, name: "Vero Beach South" },
  { rank: 139, name: "Lakeside" },
  { rank: 140, name: "Sun City Center" },
  { rank: 141, name: "Ruskin" },
  { rank: 142, name: "Oakleaf Plantation" },
  { rank: 143, name: "East Lake-Orient Park" },
  { rank: 144, name: "Golden Gate" },
  { rank: 145, name: "Fleming Island" },
  { rank: 146, name: "Rockledge" },
  { rank: 147, name: "West Melbourne" },
  { rank: 148, name: "Crestview" },
  { rank: 149, name: "Winter Park" },
  { rank: 150, name: "Venice" },
  { rank: 151, name: "Silver Springs Shores" },
  { rank: 152, name: "Apollo Beach" },
  { rank: 153, name: "Immokalee" },
  { rank: 154, name: "Ives Estates" },
  { rank: 155, name: "Leisure City" },
  { rank: 156, name: "Citrus Park" },
  { rank: 157, name: "Sebastian" },
  { rank: 158, name: "Palm Springs" },
  { rank: 159, name: "Temple Terrace" },
  { rank: 160, name: "Fish Hawk" },
  { rank: 161, name: "Liberty Triangle" },
  { rank: 162, name: "Wright" },
  { rank: 163, name: "Northdale" },
  { rank: 164, name: "Pace" },
  { rank: 165, name: "Palm River-Clair Mel" },
  { rank: 166, name: "Palm City" },
  { rank: 167, name: "Keystone" },
  { rank: 168, name: "Port St. John" },
  { rank: 169, name: "Tarpon Springs" },
  { rank: 170, name: "Nocatee" },
  { rank: 171, name: "South Bradenton" },
  { rank: 172, name: "Lutz" },
  { rank: 173, name: "Westchase" },
  { rank: 174, name: "Groveland" },
  { rank: 175, name: "Jasmine Estates" },
  { rank: 176, name: "Eustis" },
  { rank: 177, name: "Bayonet Point" },
  { rank: 178, name: "Oak Ridge" },
  { rank: 179, name: "Key West" },
  { rank: 180, name: "Wekiwa Springs" },
  { rank: 181, name: "Coral Terrace" },
  { rank: 182, name: "Bloomingdale" },
  { rank: 183, name: "Palmetto Bay" },
  { rank: 184, name: "Bellview" },
  { rank: 185, name: "Edgewater" },
  { rank: 186, name: "World Golf Village" },
  { rank: 187, name: "Marion Oaks" },
  { rank: 188, name: "DeBary" },
  { rank: 189, name: "Jacksonville Beach" },
  { rank: 190, name: "Florida Ridge" },
  { rank: 191, name: "Brent" },
  { rank: 192, name: "The Crossings" },
  { rank: 193, name: "Ensley" },
  { rank: 194, name: "Zephyrhills" },
  { rank: 195, name: "Hialeah Gardens" },
  { rank: 196, name: "Bradfordville" },
  { rank: 197, name: "Sunny Isles Beach" },
  { rank: 198, name: "Tavares" },
  { rank: 199, name: "Lealman" },
  { rank: 200, name: "Auburndale" },
  { rank: 201, name: "Holiday" },
  { rank: 202, name: "West Pensacola" },
  { rank: 203, name: "Lynn Haven" },
  { rank: 204, name: "Bartow" },
  { rank: 205, name: "Fort Walton Beach" },
  { rank: 206, name: "Hunters Creek" },
  { rank: 207, name: "Midway" },
  { rank: 208, name: "Sweetwater" },
  { rank: 209, name: "Punta Gorda" },
  { rank: 210, name: "Cocoa" },
  { rank: 211, name: "Englewood" },
  { rank: 212, name: "Stuart" },
  { rank: 213, name: "Trinity" },
  { rank: 214, name: "Naples" },
  { rank: 215, name: "Panama City Beach" },
  { rank: 216, name: "Palm Valley" },
  { rank: 217, name: "Wildwood" },
  { rank: 218, name: "Minneola" },
  { rank: 219, name: "San Carlos Park" },
  { rank: 220, name: "Seminole" },
  { rank: 221, name: "Country Walk" },
  { rank: 222, name: "Bayshore Gardens" },
  { rank: 223, name: "Maitland" },
  { rank: 224, name: "Gibsonton" },
  { rank: 225, name: "Brownsville" },
  { rank: 226, name: "Mount Dora" },
  { rank: 227, name: "Lake Butler" },
  { rank: 228, name: "Glenvar Heights" },
  { rank: 229, name: "South Venice" },
  { rank: 230, name: "New Port Richey" },
  { rank: 231, name: "Pinecrest" },
  { rank: 232, name: "Palmer Ranch" },
  { rank: 233, name: "Vero Beach" },
  { rank: 234, name: "Upper Grand Lagoon" },
  { rank: 235, name: "Viera West" },
  { rank: 236, name: "Palmetto Estates" },
  { rank: 237, name: "Lady Lake" },
  { rank: 238, name: "Pinewood" },
  { rank: 239, name: "Longwood" },
  { rank: 240, name: "Myrtle Grove" },
  { rank: 241, name: "Safety Harbor" },
  { rank: 242, name: "Warrington" },
  { rank: 243, name: "Belle Glade" },
  { rank: 244, name: "Three Lakes" },
  { rank: 245, name: "Davenport" },
  { rank: 246, name: "Lake Wales" },
  { rank: 247, name: "Niceville" },
  { rank: 248, name: "Lake Mary" },
  { rank: 249, name: "Azalea Park" },
  { rank: 250, name: "Marco Island" },
  { rank: 251, name: "Ojus" },
  { rank: 252, name: "St. Augustine" },
  { rank: 253, name: "Fruitville" },
  { rank: 254, name: "Orange City" },
  { rank: 255, name: "Homosassa Springs" },
  { rank: 256, name: "Opa-locka" },
  { rank: 257, name: "Southchase" },
  { rank: 258, name: "Lockhart" },
  { rank: 259, name: "On Top World" },
  { rank: 260, name: "Gladeview" },
  { rank: 261, name: "West Park" },
  { rank: 262, name: "Forest City" },
  { rank: 263, name: "Oldsmar" },
  { rank: 264, name: "Hobe Sound" },
  { rank: 265, name: "Lakewood Park" },
  { rank: 266, name: "East Milton" },
  { rank: 267, name: "Key Biscayne" },
  { rank: 268, name: "Destin" },
  { rank: 269, name: "Thonotosassa" },
  { rank: 270, name: "Villas" },
  { rank: 271, name: "Yulee" },
  { rank: 272, name: "Iona" },
  { rank: 273, name: "Naranja" },
  { rank: 274, name: "South Daytona" },
  { rank: 275, name: "West Lealman" },
  { rank: 276, name: "Bellair-Meadowbrook Terrace" },
  { rank: 277, name: "Callaway" },
  { rank: 278, name: "Olympia Heights" },
  { rank: 279, name: "Fernandina Beach" },
  { rank: 280, name: "Palmetto" },
  { rank: 281, name: "Gonzalez" },
  { rank: 282, name: "Cheval" },
  { rank: 283, name: "Jupiter Farms" },
  { rank: 284, name: "Conway" },
  { rank: 285, name: "Pasadena Hills" },
  { rank: 286, name: "Sunset" },
  { rank: 287, name: "Wimauma" },
  { rank: 288, name: "Elfers" },
  { rank: 289, name: "Miami Springs" },
  { rank: 290, name: "Asbury Lake" },
  { rank: 291, name: "Holly Hill" },
  { rank: 292, name: "North Palm Beach" },
  { rank: 293, name: "Atlantic Beach" },
  { rank: 294, name: "Viera East" },
  { rank: 295, name: "Celebration" },
  { rank: 296, name: "Jensen Beach" },
  { rank: 297, name: "Highland City" },
  { rank: 298, name: "Lake City" },
  { rank: 299, name: "Mango" },
  { rank: 300, name: "Goldenrod" },
  { rank: 301, name: "Doctor Phillips" },
  { rank: 302, name: "Laurel" },
  { rank: 303, name: "Florida City" },
  { rank: 304, name: "Cypress Lake" },
  { rank: 305, name: "Lantana" },
  { rank: 306, name: "Key Largo" },
  { rank: 307, name: "Goulds" },
  { rank: 308, name: "Sarasota Springs" },
  { rank: 309, name: "South Miami" },
  { rank: 310, name: "Fuller Heights" },
  { rank: 311, name: "Medulla" },
  { rank: 312, name: "Sebring" },
  { rank: 313, name: "Shady Hills" },
  { rank: 314, name: "Port Salerno" },
  { rank: 315, name: "Middleburg" },
  { rank: 316, name: "Gulfport" },
  { rank: 317, name: "Pebble Creek" },
  { rank: 318, name: "Bithlo" },
  { rank: 319, name: "Citrus Springs" },
  { rank: 320, name: "Miami Shores" },
  { rank: 321, name: "Memphis" },
  { rank: 322, name: "Cocoa Beach" },
  { rank: 323, name: "Wilton Manors" },
  { rank: 324, name: "Satellite Beach" },
  { rank: 325, name: "New Port Richey East" },
  { rank: 326, name: "Lakeland Highlands" },
  { rank: 327, name: "Sugarmill Woods" },
  { rank: 328, name: "Westview" },
  { rank: 329, name: "Milton" },
  { rank: 330, name: "Fairview Shores" },
  { rank: 331, name: "Union Park" },
  { rank: 332, name: "Progress Village" },
  { rank: 333, name: "West Vero Corridor" },
  { rank: 334, name: "Alachua" },
  { rank: 335, name: "Palatka" },
  { rank: 336, name: "West Perrine" },
  { rank: 337, name: "Gateway" },
  { rank: 338, name: "Hudson" },
  { rank: 339, name: "Westwood Lakes" },
  { rank: 340, name: "North Merritt Island" },
  { rank: 341, name: "Lighthouse Point" },
  { rank: 342, name: "Rotonda" },
  { rank: 343, name: "Avon Park" },
  { rank: 344, name: "Pine Ridge" },
  { rank: 345, name: "St. Augustine Shores" },
  { rank: 346, name: "Green Cove Springs" },
  { rank: 347, name: "Bee Ridge" },
  { rank: 348, name: "Richmond Heights" },
  { rank: 349, name: "Brooksville" },
  { rank: 350, name: "Cape Canaveral" },
  { rank: 351, name: "Beverly Hills" },
  { rank: 352, name: "Bardmoor" },
  { rank: 353, name: "Marathon" },
  { rank: 354, name: "Cypress Gardens" },
  { rank: 355, name: "Gulf Gate" },
  { rank: 356, name: "Miramar Beach" },
  { rank: 357, name: "Pine Castle" },
  { rank: 358, name: "Palm Beach" },
  { rank: 359, name: "Micco" },
  { rank: 360, name: "Mascotte" },
  { rank: 361, name: "Dade City" },
  { rank: 362, name: "Orange Park" },
  { rank: 363, name: "Indian Harbour Beach" },
  { rank: 364, name: "Lake Park" },
  { rank: 365, name: "Fruitland Park" },
  { rank: 366, name: "Hernando" },
  { rank: 367, name: "Citrus Hills" },
  { rank: 368, name: "Seffner" },
  { rank: 369, name: "St. Pete Beach" },
  { rank: 370, name: "Wedgefield" },
  { rank: 371, name: "Westgate" },
  { rank: 372, name: "Springfield" },
  { rank: 373, name: "Fern Park" },
  { rank: 374, name: "Macclenny" },
  { rank: 375, name: "Newberry" },
  { rank: 376, name: "Inverness Highlands South" },
  { rank: 377, name: "Lely Resort" },
  { rank: 378, name: "Arcadia" },
  { rank: 379, name: "South Apopka" },
  { rank: 380, name: "Quincy" },
  { rank: 381, name: "Inverness" },
  { rank: 382, name: "North Bay Village" },
  { rank: 383, name: "Southeast Arcadia" },
  { rank: 384, name: "Vero Lake Estates" },
  { rank: 385, name: "McGregor" },
  { rank: 386, name: "Westlake" },
  { rank: 387, name: "Sky Lake" },
  { rank: 388, name: "Marianna" },
  { rank: 389, name: "Lake Alfred" },
  { rank: 390, name: "Odessa" },
  { rank: 391, name: "Southwest Ranches" },
  { rank: 392, name: "Longboat Key" },
  { rank: 393, name: "Broadview Park" },
  { rank: 394, name: "Perry" },
  { rank: 395, name: "North Weeki Wachee" },
  { rank: 396, name: "Beacon Square" },
  { rank: 397, name: "Heathrow" },
  { rank: 398, name: "Mims" },
  { rank: 399, name: "West Samoset" },
  { rank: 400, name: "Belle Isle" },
  { rank: 401, name: "Clewiston" },
  { rank: 402, name: "Live Oak" },
  { rank: 403, name: "Lake Lorraine" },
  { rank: 404, name: "Inwood" },
  { rank: 405, name: "Lecanto" },
  { rank: 406, name: "Connerton" },
  { rank: 407, name: "Indian River Estates" },
  { rank: 408, name: "South Patrick Shores" },
  { rank: 409, name: "Freeport" },
  { rank: 410, name: "DeFuniak Springs" },
  { rank: 411, name: "Gulf Breeze" },
  { rank: 412, name: "Islamorada, Village Islands" },
  { rank: 413, name: "Neptune Beach" },
  { rank: 414, name: "Willow Oak" },
  { rank: 415, name: "Loughman" },
  { rank: 416, name: "Ave Maria" },
  { rank: 417, name: "West Miami" },
  { rank: 418, name: "Indiantown" },
  { rank: 419, name: "Williamsburg" },
  { rank: 420, name: "High Springs" },
  { rank: 421, name: "St. Augustine Beach" },
  { rank: 422, name: "Orlovista" },
  { rank: 423, name: "Three Oaks" },
  { rank: 424, name: "Ormond-by-the-Sea" },
  { rank: 425, name: "Fort Pierce North" },
  { rank: 426, name: "Treasure Island" },
  { rank: 427, name: "Pelican Bay" },
  { rank: 428, name: "Jan Phyl Village" },
  { rank: 429, name: "River Park" },
  { rank: 430, name: "Pembroke Park" },
  { rank: 431, name: "Sanibel" },
  { rank: 432, name: "Dundee" },
  { rank: 433, name: "Port LaBelle" },
  { rank: 434, name: "Osprey" },
  { rank: 435, name: "Ocean City" },
  { rank: 436, name: "Zephyrhills West" },
  { rank: 437, name: "Lauderdale-by-the-Sea" },
  { rank: 438, name: "Crystal Lake" },
  { rank: 439, name: "Tequesta" },
  { rank: 440, name: "Fort Myers Shores" },
  { rank: 441, name: "Balm" },
  { rank: 442, name: "Rainbow Springs" },
  { rank: 443, name: "The Meadows" },
  { rank: 444, name: "Southgate" },
  { rank: 445, name: "Starke" },
  { rank: 446, name: "Naples Manor" },
  { rank: 447, name: "South Gate Ridge" },
  { rank: 448, name: "Belleview" },
  { rank: 449, name: "Pensacola Station" },
  { rank: 450, name: "White City" },
  { rank: 451, name: "Kathleen" },
  { rank: 452, name: "Rio Pinar" },
  { rank: 453, name: "Okeechobee" },
  { rank: 454, name: "Cocoa West" },
  { rank: 455, name: "Flagler Beach" },
  { rank: 456, name: "Tice" },
  { rank: 457, name: "Bay Harbor Islands" },
  { rank: 458, name: "Ellenton" },
  { rank: 459, name: "Pahokee" },
  { rank: 460, name: "Crawfordville" },
  { rank: 461, name: "Lochmoor Waterway Estates" },
  { rank: 462, name: "Zephyrhills South" },
  { rank: 463, name: "Surfside" },
  { rank: 464, name: "Whiskey Creek" },
  { rank: 465, name: "Whitfield" },
  { rank: 466, name: "Siesta Key" },
  { rank: 467, name: "Fort Pierce South" },
  { rank: 468, name: "South Highpoint" },
  { rank: 469, name: "Fort Meade" },
  { rank: 470, name: "Palm Springs North" },
  { rank: 471, name: "LaBelle" },
  { rank: 472, name: "South Pasadena" },
  { rank: 473, name: "Grant-Valkaria" },
  { rank: 474, name: "Daytona Beach Shores" },
  { rank: 475, name: "Cortez" },
  { rank: 476, name: "Samsula-Spruce Creek" },
  { rank: 477, name: "Fort Myers Beach" },
  { rank: 478, name: "Valparaiso" },
  { rank: 479, name: "St. Augustine South" },
  { rank: 480, name: "Naples Park" },
  { rank: 481, name: "Fellsmere" },
  { rank: 482, name: "Orangetree" },
  { rank: 483, name: "Timber Pines" }
];

interface FloridaCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const FloridaCitySelector: React.FC<FloridaCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select a Florida City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = FLORIDA_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {FLORIDA_CITIES.map((city) => (
              <SelectItem 
                key={city.rank} 
                value={city.name}
                className="text-white hover:bg-[#E4B649]/20"
                disabled={selectedCities.includes(city.name)}
              >
                {city.name}
              </SelectItem>
            ))}
          </ScrollArea>
        </SelectContent>
      </Select>
      <p className="text-xs text-[#E4B649]/70">
        * You can select up to 10 cities from Florida
      </p>
    </div>
  )
}

export default FloridaCitySelector

