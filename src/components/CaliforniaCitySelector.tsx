import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const CALIFORNIA_CITIES: City[] = [
  { rank: 1, name: "Los Angeles" },
  { rank: 2, name: "San Diego" },
  { rank: 3, name: "San Jose" },
  { rank: 4, name: "San Francisco" },
  { rank: 5, name: "Fresno" },
  { rank: 6, name: "Sacramento" },
  { rank: 7, name: "Long Beach" },
  { rank: 8, name: "Oakland" },
  { rank: 9, name: "Bakersfield" },
  { rank: 10, name: "Anaheim" },
  { rank: 11, name: "Riverside" },
  { rank: 12, name: "Stockton" },
  { rank: 13, name: "Irvine" },
  { rank: 14, name: "Santa Ana" },
  { rank: 15, name: "Chula Vista" },
  { rank: 16, name: "Fremont" },
  { rank: 17, name: "San Bernardino" },
  { rank: 18, name: "Santa Clarita" },
  { rank: 19, name: "Modesto" },
  { rank: 20, name: "Fontana" },
  { rank: 21, name: "Moreno Valley" },
  { rank: 22, name: "Oxnard" },
  { rank: 23, name: "Huntington Beach" },
  { rank: 24, name: "Ontario" },
  { rank: 25, name: "Glendale" },
  { rank: 26, name: "Elk Grove" },
  { rank: 27, name: "Santa Rosa" },
  { rank: 28, name: "Rancho Cucamonga" },
  { rank: 29, name: "Oceanside" },
  { rank: 30, name: "Garden Grove" },
  { rank: 31, name: "Lancaster" },
  { rank: 32, name: "Roseville" },
  { rank: 33, name: "Corona" },
  { rank: 34, name: "Palmdale" },
  { rank: 35, name: "Salinas" },
  { rank: 36, name: "Hayward" },
  { rank: 37, name: "Sunnyvale" },
  { rank: 38, name: "Escondido" },
  { rank: 39, name: "Visalia" },
  { rank: 40, name: "Pomona" },
  { rank: 41, name: "Victorville" },
  { rank: 42, name: "Orange" },
  { rank: 43, name: "Fullerton" },
  { rank: 44, name: "Torrance" },
  { rank: 45, name: "Pasadena" },
  { rank: 46, name: "Santa Clara" },
  { rank: 47, name: "Clovis" },
  { rank: 48, name: "Simi Valley" },
  { rank: 49, name: "Thousand Oaks" },
  { rank: 50, name: "Vallejo" },
  { rank: 51, name: "Concord" },
  { rank: 52, name: "Fairfield" },
  { rank: 53, name: "Antioch" },
  { rank: 54, name: "Berkeley" },
  { rank: 55, name: "Menifee" },
  { rank: 56, name: "East Los Angeles" },
  { rank: 57, name: "Richmond" },
  { rank: 58, name: "Carlsbad" },
  { rank: 59, name: "Murrieta" },
  { rank: 60, name: "Temecula" },
  { rank: 61, name: "Santa Maria" },
  { rank: 62, name: "San Buenaventura (Ventura)" },
  { rank: 63, name: "Jurupa Valley" },
  { rank: 64, name: "Costa Mesa" },
  { rank: 65, name: "Downey" },
  { rank: 66, name: "West Covina" },
  { rank: 67, name: "Rialto" },
  { rank: 68, name: "Vacaville" },
  { rank: 69, name: "El Monte" },
  { rank: 70, name: "El Cajon" },
  { rank: 71, name: "Inglewood" },
  { rank: 72, name: "Burbank" },
  { rank: 73, name: "Hesperia" },
  { rank: 74, name: "Chico" },
  { rank: 75, name: "San Mateo" },
  { rank: 76, name: "Tracy" },
  { rank: 77, name: "Vista" },
  { rank: 78, name: "Daly City" },
  { rank: 79, name: "Arden-Arcade" },
  { rank: 80, name: "Norwalk" },
  { rank: 81, name: "Merced" },
  { rank: 82, name: "Indio" },
  { rank: 83, name: "San Marcos" },
  { rank: 84, name: "Chino" },
  { rank: 85, name: "Manteca" },
  { rank: 86, name: "Hemet" },
  { rank: 87, name: "Redding" },
  { rank: 88, name: "Carson" },
  { rank: 89, name: "Mission Viejo" },
  { rank: 90, name: "Compton" },
  { rank: 91, name: "South Gate" },
  { rank: 92, name: "Santa Monica" },
  { rank: 93, name: "Westminster" },
  { rank: 94, name: "Folsom" },
  { rank: 95, name: "Lake Forest" },
  { rank: 96, name: "Citrus Heights" },
  { rank: 97, name: "Santa Barbara" },
  { rank: 98, name: "San Ramon" },
  { rank: 99, name: "San Leandro" },
  { rank: 100, name: "Rancho Cordova" },
  { rank: 101, name: "Whittier" },
  { rank: 102, name: "Hawthorne" },
  { rank: 103, name: "Newport Beach" },
  { rank: 104, name: "Mountain View" },
  { rank: 105, name: "Buena Park" },
  { rank: 106, name: "Livermore" },
  { rank: 107, name: "Perris" },
  { rank: 108, name: "Carmichael" },
  { rank: 109, name: "Redwood City" },
  { rank: 110, name: "Alhambra" },
  { rank: 111, name: "Upland" },
  { rank: 112, name: "Tustin" },
  { rank: 113, name: "Napa" },
  { rank: 114, name: "Chino Hills" },
  { rank: 115, name: "Lakewood" },
  { rank: 116, name: "Milpitas" },
  { rank: 117, name: "Pittsburg" },
  { rank: 118, name: "Apple Valley" },
  { rank: 119, name: "Alameda" },
  { rank: 120, name: "Rocklin" },
  { rank: 121, name: "Lake Elsinore" },
  { rank: 122, name: "Bellflower" },
  { rank: 123, name: "Pleasanton" },
  { rank: 124, name: "Redlands" },
  { rank: 125, name: "Turlock" },
  { rank: 126, name: "Tulare" },
  { rank: 127, name: "Eastvale" },
  { rank: 128, name: "Camarillo" },
  { rank: 129, name: "Walnut Creek" },
  { rank: 130, name: "Madera" },
  { rank: 131, name: "Yuba City" },
  { rank: 132, name: "Lodi" },
  { rank: 133, name: "Dublin" },
  { rank: 134, name: "Baldwin Park" },
  { rank: 135, name: "Redondo Beach" },
  { rank: 136, name: "Castro Valley" },
  { rank: 137, name: "Davis" },
  { rank: 138, name: "Yorba Linda" },
  { rank: 139, name: "Brentwood" },
  { rank: 140, name: "Palo Alto" },
  { rank: 141, name: "Union City" },
  { rank: 142, name: "Florence-Graham" },
  { rank: 143, name: "Porterville" },
  { rank: 144, name: "Laguna Niguel" },
  { rank: 145, name: "South San Francisco" },
  { rank: 146, name: "Lynwood" },
  { rank: 147, name: "San Clemente" },
  { rank: 148, name: "Woodland" },
  { rank: 149, name: "Santa Cruz" },
  { rank: 150, name: "Encinitas" },
  { rank: 151, name: "La Mesa" },
  { rank: 152, name: "La Habra" },
  { rank: 153, name: "Hanford" },
  { rank: 154, name: "Beaumont" },
  { rank: 155, name: "Santee" },
  { rank: 156, name: "Montebello" },
  { rank: 157, name: "San Rafael" },
  { rank: 158, name: "Petaluma" },
  { rank: 159, name: "Pico Rivera" },
  { rank: 160, name: "Gilroy" },
  { rank: 161, name: "Gardena" },
  { rank: 162, name: "South Whittier" },
  { rank: 163, name: "Monterey Park" },
  { rank: 164, name: "West Sacramento" },
  { rank: 165, name: "Cupertino" },
  { rank: 166, name: "Lincoln" },
  { rank: 167, name: "Highland" },
  { rank: 168, name: "San Jacinto" },
  { rank: 169, name: "Hacienda Heights" },
  { rank: 170, name: "Fountain Valley" },
  { rank: 171, name: "National City" },
  { rank: 172, name: "Yucaipa" },
  { rank: 173, name: "Arcadia" },
  { rank: 174, name: "Colton" },
  { rank: 175, name: "Cathedral City" },
  { rank: 176, name: "Palm Desert" },
  { rank: 177, name: "Delano" },
  { rank: 178, name: "Placentia" },
  { rank: 179, name: "Novato" },
  { rank: 180, name: "Diamond Bar" },
  { rank: 181, name: "Huntington Park" },
  { rank: 182, name: "Florin" },
  { rank: 183, name: "Watsonville" },
  { rank: 184, name: "El Dorado Hills" },
  { rank: 185, name: "Paramount" },
  { rank: 186, name: "San Luis Obispo" },
  { rank: 187, name: "Aliso Viejo" },
  { rank: 188, name: "Los Banos" },
  { rank: 189, name: "Glendora" },
  { rank: 190, name: "North Highlands" },
  { rank: 191, name: "Brea" },
  { rank: 192, name: "Rosemead" },
  { rank: 193, name: "Cypress" },
  { rank: 194, name: "Ceres" },
  { rank: 195, name: "Antelope" },
  { rank: 196, name: "Covina" },
  { rank: 197, name: "Poway" },
  { rank: 198, name: "Azusa" },
  { rank: 199, name: "Rowland Heights" },
  { rank: 200, name: "Newark" },
  { rank: 201, name: "Oakley" },
  { rank: 202, name: "Cerritos" },
  { rank: 203, name: "Vineyard" },
  { rank: 204, name: "Rancho Santa Margarita" },
  { rank: 205, name: "Hollister" },
  { rank: 206, name: "Palm Springs" },
  { rank: 207, name: "La Mirada" },
  { rank: 208, name: "Rohnert Park" },
  { rank: 209, name: "French Valley" },
  { rank: 210, name: "Coachella" },
  { rank: 211, name: "Morgan Hill" },
  { rank: 212, name: "El Centro" },
  { rank: 213, name: "Lathrop" },
  { rank: 214, name: "Danville" },
  { rank: 215, name: "Altadena" },
  { rank: 216, name: "Lompoc" },
  { rank: 217, name: "Campbell" },
  { rank: 218, name: "San Bruno" },
  { rank: 219, name: "La Quinta" },
  { rank: 220, name: "La Presa" },
  { rank: 221, name: "Rancho Palos Verdes" },
  { rank: 222, name: "Stanton" },
  { rank: 223, name: "Culver City" },
  { rank: 224, name: "Foothill Farms" },
  { rank: 225, name: "Adelanto" },
  { rank: 226, name: "Calexico" },
  { rank: 227, name: "Montclair" },
  { rank: 228, name: "San Gabriel" },
  { rank: 229, name: "Wildomar" },
  { rank: 230, name: "Bell Gardens" },
  { rank: 231, name: "Monrovia" },
  { rank: 232, name: "Orangevale" },
  { rank: 233, name: "Martinez" },
  { rank: 234, name: "La Puente" },
  { rank: 235, name: "Westmont" },
  { rank: 236, name: "Pacifica" },
  { rank: 237, name: "Moorpark" },
  { rank: 238, name: "Oildale" },
  { rank: 239, name: "Claremont" },
  { rank: 240, name: "East Niles" },
  { rank: 241, name: "San Juan Capistrano" },
  { rank: 242, name: "Eastern Goleta Valley" },
  { rank: 243, name: "Temple City" },
  { rank: 244, name: "Fallbrook" },
  { rank: 245, name: "West Hollywood" },
  { rank: 246, name: "Desert Hot Springs" },
  { rank: 247, name: "Pleasant Hill" },
  { rank: 248, name: "Spring Valley" },
  { rank: 249, name: "Fair Oaks" },
  { rank: 250, name: "Temescal Valley" },
  { rank: 251, name: "Manhattan Beach" },
  { rank: 252, name: "Goleta" },
  { rank: 253, name: "San Dimas" },
  { rank: 254, name: "Dana Point" },
  { rank: 255, name: "Banning" },
  { rank: 256, name: "Santa Paula" },
  { rank: 257, name: "Atwater" },
  { rank: 258, name: "Los Gatos" },
  { rank: 259, name: "Foster City" },
  { rank: 260, name: "Orcutt" },
  { rank: 261, name: "Bell" },
  { rank: 262, name: "Menlo Park" },
  { rank: 263, name: "El Paso Robles (Paso Robles)" },
  { rank: 264, name: "Seaside" },
  { rank: 265, name: "San Pablo" },
  { rank: 266, name: "San Lorenzo" },
  { rank: 267, name: "Beverly Hills" },
  { rank: 268, name: "Laguna Hills" },
  { rank: 269, name: "Atascadero" },
  { rank: 270, name: "Lawndale" },
  { rank: 271, name: "Los Altos" },
  { rank: 272, name: "Burlingame" },
  { rank: 273, name: "La Verne" },
  { rank: 274, name: "Saratoga" },
  { rank: 275, name: "Twentynine Palms" },
  { rank: 276, name: "Monterey" },
  { rank: 277, name: "Suisun City" },
  { rank: 278, name: "Brawley" },
  { rank: 279, name: "San Carlos" },
  { rank: 280, name: "Ridgecrest" },
  { rank: 281, name: "East Palo Alto" },
  { rank: 282, name: "Lemon Grove" },
  { rank: 283, name: "Wasco" },
  { rank: 284, name: "Hercules" },
  { rank: 285, name: "Lemoore" },
  { rank: 286, name: "Walnut" },
  { rank: 287, name: "Sanger" },
  { rank: 288, name: "Dinuba" },
  { rank: 289, name: "Benicia" },
  { rank: 290, name: "Reedley" },
  { rank: 291, name: "Belmont" },
  { rank: 292, name: "Mountain House" },
  { rank: 293, name: "Galt" },
  { rank: 294, name: "Windsor" },
  { rank: 295, name: "Eureka" },
  { rank: 296, name: "Patterson" },
  { rank: 297, name: "West Whittier-Los Nietos" },
  { rank: 298, name: "El Cerrito" },
  { rank: 299, name: "Norco" },
  { rank: 300, name: "Imperial Beach" }
  { rank: 301, name: "South Pasadena" },
  { rank: 302, name: "Loma Linda" },
  { rank: 303, name: "North Tustin" },
  { rank: 304, name: "Riverbank" },
  { rank: 305, name: "Lafayette" },
  { rank: 306, name: "Bay Point" },
  { rank: 307, name: "West Rancho Dominguez" },
  { rank: 308, name: "Barstow" },
  { rank: 309, name: "Ladera Ranch" },
  { rank: 310, name: "Selma" },
  { rank: 311, name: "Linda" },
  { rank: 312, name: "Seal Beach" },
  { rank: 313, name: "Rosemont" },
  { rank: 314, name: "East San Gabriel" },
  { rank: 315, name: "Soledad" },
  { rank: 316, name: "Duarte" },
  { rank: 317, name: "Maywood" },
  { rank: 318, name: "Ashland" },
  { rank: 319, name: "San Fernando" },
  { rank: 320, name: "Marina" },
  { rank: 321, name: "Oakdale" },
  { rank: 322, name: "Bloomington" },
  { rank: 323, name: "Rancho San Diego" },
  { rank: 324, name: "Shafter" },
  { rank: 325, name: "Granite Bay" },
  { rank: 326, name: "Ramona" },
  { rank: 327, name: "West Carson" },
  { rank: 328, name: "Laguna Beach" },
  { rank: 329, name: "West Puente Valley" },
  { rank: 330, name: "Imperial" },
  { rank: 331, name: "Lakeside" },
  { rank: 332, name: "Calabasas" },
  { rank: 333, name: "Corcoran" },
  { rank: 334, name: "Valinda" },
  { rank: 335, name: "Millbrae" },
  { rank: 336, name: "Yucca Valley" },
  { rank: 337, name: "Winter Gardens" },
  { rank: 338, name: "Cudahy" },
  { rank: 339, name: "American Canyon" },
  { rank: 340, name: "Greenfield" },
  { rank: 341, name: "Rosamond" },
  { rank: 342, name: "South Lake Tahoe" },
  { rank: 343, name: "Stevenson Ranch" },
  { rank: 344, name: "Port Hueneme" },
  { rank: 345, name: "Mead Valley" },
  { rank: 346, name: "East Hemet" },
  { rank: 347, name: "Santa Fe Springs" },
  { rank: 348, name: "Lennox" },
  { rank: 349, name: "Casa Oro-Mount Helix" },
  { rank: 350, name: "Willowbrook" },
  { rank: 351, name: "La Crescenta-Montrose" },
  { rank: 352, name: "Valle Vista" },
  { rank: 353, name: "Rosedale" },
  { rank: 354, name: "Prunedale" },
  { rank: 355, name: "Chowchilla" },
  { rank: 356, name: "Lomita" },
  { rank: 357, name: "Dixon" },
  { rank: 358, name: "Arvin" },
  { rank: 359, name: "Orinda" },
  { rank: 360, name: "Oroville" },
  { rank: 361, name: "Agoura Hills" },
  { rank: 362, name: "La Cañada Flintridge" },
  { rank: 363, name: "Arcata" },
  { rank: 364, name: "Phelan" },
  { rank: 365, name: "South El Monte" },
  { rank: 366, name: "Albany" },
  { rank: 367, name: "Castaic" },
  { rank: 368, name: "Coronado" },
  { rank: 369, name: "South San Jose Hills" },
  { rank: 370, name: "Pinole" },
  { rank: 371, name: "Hermosa Beach" },
  { rank: 372, name: "Nipomo" },
  { rank: 373, name: "Arroyo Grande" },
  { rank: 374, name: "Blythe" },
  { rank: 375, name: "Rancho Mirage" },
  { rank: 376, name: "Olivehurst" },
  { rank: 377, name: "Cameron Park" },
  { rank: 378, name: "Woodcrest" },
  { rank: 379, name: "Stanford" },
  { rank: 380, name: "Vincent" },
  { rank: 381, name: "Live Oak" },
  { rank: 382, name: "Kerman" },
  { rank: 383, name: "Fillmore" },
  { rank: 384, name: "Coalinga" },
  { rank: 385, name: "McKinleyville" },
  { rank: 386, name: "Truckee" },
  { rank: 387, name: "Bostonia" },
  { rank: 388, name: "Rio Linda" },
  { rank: 389, name: "Laguna Woods" },
  { rank: 390, name: "Parkway" },
  { rank: 391, name: "Moraga" },
  { rank: 392, name: "Clearlake" },
  { rank: 393, name: "Walnut Park" },
  { rank: 394, name: "Alpine" },
  { rank: 395, name: "El Segundo" },
  { rank: 396, name: "Ripon" },
  { rank: 397, name: "El Sobrante" },
  { rank: 398, name: "Ukiah" },
  { rank: 399, name: "Coto Caza" },
  { rank: 400, name: "Los Osos" }
  { rank: 401, name: "Discovery Bay" },
  { rank: 402, name: "Cherryland" },
  { rank: 403, name: "Artesia" },
  { rank: 404, name: "Salida" },
  { rank: 405, name: "Lemon Hill" },
  { rank: 406, name: "East Rancho Dominguez" },
  { rank: 407, name: "La Palma" },
  { rank: 408, name: "Livingston" },
  { rank: 409, name: "Pacific Grove" },
  { rank: 410, name: "North Auburn" },
  { rank: 411, name: "Camp Pendleton South" },
  { rank: 412, name: "Parlier" },
  { rank: 413, name: "Red Bluff" },
  { rank: 414, name: "Alamo" },
  { rank: 415, name: "Avenal" },
  { rank: 416, name: "King City" },
  { rank: 417, name: "Grass Valley" },
  { rank: 418, name: "McFarland" },
  { rank: 419, name: "Mill Valley" },
  { rank: 420, name: "Bonita" },
  { rank: 421, name: "Auburn" },
  { rank: 422, name: "Oak Park" },
  { rank: 423, name: "North Fair Oaks" },
  { rank: 424, name: "Lamont" },
  { rank: 425, name: "California City" },
  { rank: 426, name: "University California-Santa Barbara" },
  { rank: 427, name: "Isla Vista" },
  { rank: 428, name: "Lake Los Angeles" },
  { rank: 429, name: "Kingsburg" },
  { rank: 430, name: "Hawaiian Gardens" },
  { rank: 431, name: "Avocado Heights" },
  { rank: 432, name: "Grand Terrace" },
  { rank: 433, name: "Big Bear City" },
  { rank: 434, name: "Carpinteria" },
  { rank: 435, name: "Emeryville" },
  { rank: 436, name: "Marysville" },
  { rank: 437, name: "Solana Beach" },
  { rank: 438, name: "East Bakersfield" },
  { rank: 439, name: "Mendota" },
  { rank: 440, name: "Grover Beach" },
  { rank: 441, name: "Potomac Park" },
  { rank: 442, name: "Rancho Mission Viejo" },
  { rank: 443, name: "Lindsay" },
  { rank: 444, name: "Larkspur" },
  { rank: 445, name: "Tamalpais-Homestead Valley" },
  { rank: 446, name: "Palos Verdes Estates" },
  { rank: 447, name: "Home Gardens" },
  { rank: 448, name: "San Anselmo" },
  { rank: 449, name: "Diamond Springs" },
  { rank: 450, name: "Hillcrest" },
  { rank: 451, name: "Winton" },
  { rank: 452, name: "Fortuna" },
  { rank: 453, name: "View Park-Windsor Hills" },
  { rank: 454, name: "Newman" },
  { rank: 455, name: "El Sobrante" },
  { rank: 456, name: "Muscoy" },
  { rank: 457, name: "Rossmoor" },
  { rank: 458, name: "East Whittier" },
  { rank: 459, name: "Los Alamitos" },
  { rank: 460, name: "San Marino" },
  { rank: 461, name: "La Riviera" },
  { rank: 462, name: "Scotts Valley" },
  { rank: 463, name: "Calimesa" },
  { rank: 464, name: "Commerce" },
  { rank: 465, name: "Sun Village" },
  { rank: 466, name: "Susanville" },
  { rank: 467, name: "Alum Rock" },
  { rank: 468, name: "Valley Center" },
  { rank: 469, name: "Camp Pendleton Mainside" },
  { rank: 470, name: "Anderson" },
  { rank: 471, name: "Canyon Lake" },
  { rank: 472, name: "Healdsburg" },
  { rank: 473, name: "Signal Hill" },
  { rank: 474, name: "Citrus" },
  { rank: 475, name: "Delhi" },
  { rank: 476, name: "Half Moon Bay" },
  { rank: 477, name: "Del Aire" },
  { rank: 478, name: "Blackhawk" },
  { rank: 479, name: "Hillsborough" },
  { rank: 480, name: "Fairview" },
  { rank: 481, name: "Clayton" },
  { rank: 482, name: "Soquel" },
  { rank: 483, name: "Placerville" },
  { rank: 484, name: "Sonoma" },
  { rank: 485, name: "Sierra Madre" },
  { rank: 486, name: "Morro Bay" },
  { rank: 487, name: "Marina Rey" },
  { rank: 488, name: "Piedmont" },
  { rank: 489, name: "Lakeland Village" },
  { rank: 490, name: "San Diego Country Estates" },
  { rank: 491, name: "Shasta Lake" },
  { rank: 492, name: "Farmersville" },
  { rank: 493, name: "Rio Vista" },
  { rank: 494, name: "Tehachapi" },
  { rank: 495, name: "Exeter" },
  { rank: 496, name: "Malibu" },
  { rank: 497, name: "Golden Hills" },
  { rank: 498, name: "Garden Acres" },
  { rank: 499, name: "Quartz Hill" },
  { rank: 500, name: "Madera Acres" }
  { rank: 501, name: "La Cresta" },
  { rank: 502, name: "Mentone" },
  { rank: 503, name: "Corte Madera" },
  { rank: 504, name: "Lake Arrowhead" },
  { rank: 505, name: "Country Club" },
  { rank: 506, name: "Live Oak" },
  { rank: 507, name: "Capitola" },
  { rank: 508, name: "Orange Cove" },
  { rank: 509, name: "Rodeo" },
  { rank: 510, name: "Waterford" },
  { rank: 511, name: "Paradise" },
  { rank: 512, name: "Charter Oak" },
  { rank: 513, name: "August" },
  { rank: 514, name: "West Athens" },
  { rank: 515, name: "Orosi" },
  { rank: 516, name: "Crestline" },
  { rank: 517, name: "Fort Irwin" },
  { rank: 518, name: "Rio Mar" },
  { rank: 519, name: "Magalia" },
  { rank: 520, name: "Spring Valley Lake" },
  { rank: 521, name: "Templeton" },
  { rank: 522, name: "Cloverdale" },
  { rank: 523, name: "Guadalupe" },
  { rank: 524, name: "Tiburon" },
  { rank: 525, name: "Plumas Lake" },
  { rank: 526, name: "Firebaugh" },
  { rank: 527, name: "University California-Davis" },
  { rank: 528, name: "Heber" },
  { rank: 529, name: "Montecito" },
  { rank: 530, name: "Thousand Palms" },
  { rank: 531, name: "East Foothills" },
  { rank: 532, name: "Alondra Park" },
  { rank: 533, name: "Gonzales" },
  { rank: 534, name: "Topanga" },
  { rank: 535, name: "Interlaken" },
  { rank: 536, name: "California Polytechnic State University" },
  { rank: 537, name: "Good Hope" },
  { rank: 538, name: "Los Altos Hills" },
  { rank: 539, name: "Orland" },
  { rank: 540, name: "Contra Costa Centre" },
  { rank: 541, name: "Corning" },
  { rank: 542, name: "Woodlake" },
  { rank: 543, name: "Midway City" },
  { rank: 544, name: "Rolling Hills Estates" },
  { rank: 545, name: "Gold River" },
  { rank: 546, name: "Pismo Beach" },
  { rank: 547, name: "Cherry Valley" },
  { rank: 548, name: "Winters" },
  { rank: 549, name: "Franklin" },
  { rank: 550, name: "Yreka" },
  { rank: 551, name: "Hughson" },
  { rank: 552, name: "South San Gabriel" },
  { rank: 553, name: "Oak Hills" },
  { rank: 554, name: "Highgrove" },
  { rank: 555, name: "Kentfield" },
  { rank: 556, name: "Oroville East" },
  { rank: 557, name: "Earlimart" },
  { rank: 558, name: "Alta Sierra" },
  { rank: 559, name: "Boyes Hot Springs" },
  { rank: 560, name: "Larkfield-Wikiup" },
  { rank: 561, name: "Fowler" },
  { rank: 562, name: "Nuevo" },
  { rank: 563, name: "Westlake Village" },
  { rank: 564, name: "Ben Lomond" },
  { rank: 565, name: "Ojai" },
  { rank: 566, name: "Cotati" },
  { rank: 567, name: "Fairfax" },
  { rank: 568, name: "Sebastopol" },
  { rank: 569, name: "Escalon" },
  { rank: 570, name: "Bermuda Dunes" },
  { rank: 571, name: "Garnet" },
  { rank: 572, name: "Oceano" },
  { rank: 573, name: "Acton" },
  { rank: 574, name: "Gridley" },
  { rank: 575, name: "Mammoth Lakes" },
  { rank: 576, name: "Piñon Hills" },
  { rank: 577, name: "Sausalito" },
  { rank: 578, name: "Camino Tassajara" },
  { rank: 579, name: "Fort Bragg" },
  { rank: 580, name: "Pleasure Point" },
  { rank: 581, name: "Wilton" },
  { rank: 582, name: "Oak View" },
  { rank: 583, name: "South Monrovia Island" },
  { rank: 584, name: "Mira Monte" },
  { rank: 585, name: "Thermalito" },
  { rank: 586, name: "Benton Park" },
  { rank: 587, name: "Taft" },
  { rank: 588, name: "Loomis" },
  { rank: 589, name: "Ladera Heights" },
  { rank: 590, name: "Vandenberg Village" },
  { rank: 591, name: "Atherton" },
  { rank: 592, name: "Hilmar-Irwin" },
  { rank: 593, name: "Eucalyptus Hills" },
  { rank: 594, name: "Aptos" },
  { rank: 595, name: "Castroville" },
  { rank: 596, name: "Joshua Tree" },
  { rank: 597, name: "Salton City" },
  { rank: 598, name: "Lake Mathews" },
  { rank: 599, name: "Bonadelle Ranchos" },
  { rank: 600, name: "Colusa" },
  { rank: 601, name: "Durham" },
  { rank: 602, name: "Happy Valley" },
  { rank: 603, name: "Lucas Valley-Marinwood" },
  { rank: 604, name: "Huron" },
  { rank: 605, name: "Desert Palms" },
  { rank: 606, name: "Cottonwood" },
  { rank: 607, name: "Saranap" },
  { rank: 608, name: "El Rio" },
  { rank: 609, name: "Lucerne Valley" },
  { rank: 610, name: "Homeland" },
  { rank: 611, name: "Lemoore Station" },
  { rank: 612, name: "Rancho Calaveras" },
  { rank: 613, name: "San Martin" },
  { rank: 614, name: "Willows" },
  { rank: 615, name: "Gustine" },
  { rank: 616, name: "Calipatria" },
  { rank: 617, name: "Jamul" },
  { rank: 618, name: "Mecca" },
  { rank: 619, name: "Solvang" },
  { rank: 620, name: "Hidden Valley Lake" },
  { rank: 621, name: "Keyes" },
  { rank: 622, name: "Cambria" },
  { rank: 623, name: "Rancho Murieta" },
  { rank: 624, name: "Pollock Pines" },
  { rank: 625, name: "Las Flores" },
  { rank: 626, name: "Dos Palos" },
  { rank: 627, name: "El Granada" },
  { rank: 628, name: "Strawberry" },
  { rank: 629, name: "Bear Valley Springs" },
  { rank: 630, name: "Williams" },
  { rank: 631, name: "Villa Park" },
  { rank: 632, name: "Boulder Creek" },
  { rank: 633, name: "Fruitridge Pocket" },
  { rank: 634, name: "Holtville" },
  { rank: 635, name: "Palermo" },
  { rank: 636, name: "Ione" },
  { rank: 637, name: "Silver Lakes" },
  { rank: 638, name: "West Modesto" },
  { rank: 639, name: "El Cerrito" },
  { rank: 640, name: "El Cerrito" },
  { rank: 641, name: "Oakhurst" },
  { rank: 642, name: "East Pasadena" },
  { rank: 643, name: "Kensington" },
  { rank: 644, name: "Crescent City" },
  { rank: 645, name: "Goshen" },
  { rank: 646, name: "Burbank" },
  { rank: 647, name: "Yosemite Lakes" },
  { rank: 648, name: "La Habra Heights" },
  { rank: 649, name: "Pacheco" },
  { rank: 650, name: "St. Helena" },
  { rank: 651, name: "Tara Hills" },
  { rank: 652, name: "East Porterville" },
  { rank: 653, name: "McSwain" },
  { rank: 654, name: "Jackson" },
  { rank: 655, name: "Lakeport" },
  { rank: 656, name: "Mayflower Village" },
  { rank: 657, name: "Old Fig Garden" },
  { rank: 658, name: "Twin Lakes" },
  { rank: 659, name: "Elverta" },
  { rank: 660, name: "Coarsegold" },
  { rank: 661, name: "Calistoga" }
]

interface CaliforniaCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const CaliforniaCitySelector: React.FC<CaliforniaCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select a California City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = CALIFORNIA_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {CALIFORNIA_CITIES.map((city) => (
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
        * You can select up to 10 cities from California
      </p>
    </div>
  )
}

export default CaliforniaCitySelector
