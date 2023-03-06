const table = [
  {
    number: 1,
    name: "Independent Regions",
    category: "towns",
    asterisks: 2,
    biggerLinks: [],
    smallerLinks: [2],
    problem:
      "Metropolitan regions will not come to balance until each one is small and autonomous enough to be an independent sphere of culture.",
    therefore:
      "Wherever possible, work toward the evolution of independent regions in the world; each with a population between 2 and 10 million; each with its own natural and geographic boundaries; each with its own economy; each one autonomous and self-governing; each with a seat in a world government, without the intervening power of larger states or countries.",
    bookPage: 10,
  },
  {
    number: 2,
    name: "The Distribution of Towns",
    category: "towns",
    asterisks: 0,
    biggerLinks: [1],
    smallerLinks: [3, 4, 6],
    problem:
      "If the population of a region is weighted too far toward small villages, modern civilization can never emerge; but if the population is weighted too far toward big cities, the earth will go to ruin because the population isn't where it needs to be, to take care of it.",
    therefore:
      "Encourage a birth and death process for towns within the region, which gradually has these effects:  1. The population is evenly distributed in terms of different sizes- example, one town with 1,000,000 people, 10 towns with 100,000 people each, 100 towns with 10,000 people each, and 1000 towns with 1000 people each.  2. These towns are distributed in space in such a way that within each size category the towns are homogeneously distributed all across the region. This progress can be implemented by regional zoning policies, land grants, and incentives which encourage industries to locate according to the dictates of the distribution.",
    bookPage: 16,
  },
  {
    number: 3,
    name: "City Country Fingers",
    category: "towns",
    asterisks: 2,
    biggerLinks: [2],
    smallerLinks: [4, 6, 7, 8],
    problem:
      "Continuous sprawling urbanization destroys life, and makes cities unbearable. But the sheer size of cities is also valuable and potent.",
    therefore:
      "Keep interlocking fingers of farmland and urban land, even at the center of the metropolis. The urban fingers should never be more than 1 mile wide, while the farmland fingers should never be less than 1 mile wide.",
    bookPage: 21,
  },
  {
    number: 4,
    name: "Agricultural Valleys",
    category: "towns",
    asterisks: 1,
    biggerLinks: [1, 3],
    smallerLinks: [3, 7],
    problem:
      "The land which is best for agriculture happens to be best for building too. But it is limited and once destroyed, it cannot be regained for centuries.",
    therefore:
      "Preserve all agricultural valleys as farmland and protect this land from any development which would destroy or lock up the unique fertility of the soil. Even when valleys are not cultivated now, protect them: keep them for farms and parks and wilds.",
    bookPage: 26,
  },
  {
    number: 5,
    name: "Lace of Country Streets",
    category: "towns",
    asterisks: 0,
    biggerLinks: [3],
    smallerLinks: [7, 14, 37],
    problem:
      "The suburb is an obsolete and contradictory form of human settlement.",
    therefore:
      "In the zone where city and country meet, place country roads at least a mile apart, so that they enclose squares of countryside and farmland at least one square mile in area. Build homesteads along these roads, one lot deep, on lots of at least half an acre, with the square mile of open countryside or farmland behind the houses.",
    bookPage: 29,
  },
  {
    number: 6,
    name: "Country Towns",
    category: "towns",
    asterisks: 1,
    biggerLinks: [2],
    smallerLinks: [7, 12, 26],
    problem:
      "The big city is a magnet. It is terribly hard for small towns to stay alive and healthy in the face of central urban growth.",
    therefore:
      "Preserve country towns where they exist; and encourage the growth of new self-contained towns, with populations between 500 and 10,000, entirely surrounded by open countryside and at least 10 miles from neighboring towns. Make it the region's collective concern to give each town the wherewithal it needs to build a base of local industry, so that these towns are not dormitories for people who work in other places, but real towns - able to sustain the whole of life.",
    bookPage: 33,
  },
  {
    number: 7,
    name: "The Countryside",
    category: "towns",
    asterisks: 1,
    biggerLinks: [2, 3, 4, 5, 6],
    smallerLinks: [37, 51],
    problem:
      "I conceive that land belongs for use to a vast family of which many are dead, few are living, and countless members are still unborn. - a Nigerian tribesman",
    therefore:
      "Define all farms as parks, where the public has a right to be; and make all regional parks into working farms. Create stewardships among groups of people, families and cooperatives, with each stewardship responsible for one part of the countryside. The stewards are given a lease for the land, and they are free to tend the land and set ground rules for its use - as a small farm, a forest, marshland, desert, and so forth. The public is free to visit the land, hike there, picnic, explore, boat, so long as they conform to the ground rules. With such a setup, a farm near a city might have picnickers in its fields every day during the summer.",
    bookPage: 36,
  },
  {
    number: 8,
    name: "Mosaic of Subcultures",
    category: "towns",
    asterisks: 2,
    biggerLinks: [3],
    smallerLinks: [4, 12, 13, 37],
    problem:
      "The homogeneous and undifferentiated character of modern cities kills all variety of life styles and arrests the growth of individual character.",
    therefore:
      "Do everything possible to enrich the cultures and subcultures of the city, by breaking the city, as far as possible, into a vast mosaic of small and different subcultures, each with its own spatial territory, and each with the power to create its own distinct life style. Make sure that the subcultures are small enough, so that each person has access to the full variety of life styles in the subcultures near his own.",
    bookPage: 42,
  },
  {
    number: 9,
    name: "Scattered Work",
    category: "towns",
    asterisks: 2,
    biggerLinks: [8],
    smallerLinks: [3, 4, 5, 42, 80, 157],
    problem:
      "The artificial separation of houses and work creates intolerable rifts in people's inner lives.",
    therefore:
      "Use zoning laws, neighborhood planning, tax incentives, and any other means available to scatter workplaces throughout the city. Prohibit large concentrations of work, without family life around them. Prohibit large concentrations of family life, without workplaces around them.",
    bookPage: 51,
  },
  {
    number: 10,
    name: "Magic of the City",
    category: "towns",
    asterisks: 0,
    biggerLinks: [3, 8],
    smallerLinks: [11, 16, 31, 33, 58, 63],
    problem:
      "There are few people who do not enjoy the magic of a great city. But urban sprawl takes it away from everyone except the few who are lucky enough, or rich enough, to live close to the largest centers.",
    therefore:
      "Put the magic of the city within reach of everyone in a metropolitan area. Do this by means of collective regional policies which restrict the growth of downtown areas so strongly that no one downtown can grow to serve more than 300,000 people. With this population base, the downtowns will be between two and nine miles apart.",
    bookPage: 58,
  },
  {
    number: 11,
    name: "Local Transport Areas",
    category: "towns",
    asterisks: 2,
    biggerLinks: [3, 8, 10],
    smallerLinks: [5, 17, 22, 23, 34, 52, 56, 97],
    problem:
      "Cars give people wonderful freedom and increase their opportunities. But they also destroy the environment, to an extent so drastic that they kill all social life.",
    therefore:
      "Break the urban area down into local transport areas, each one between 1 and 2 miles across, surrounded by a ring road. Within the local transport area, build minor local roads and paths for internal movements on foot, by bike, on horseback, and in local vehicles; build major roads which make it easy for cars and trucks to get to and from the ring roads, but place them to make internal local trips slow and inconvenient.",
    bookPage: 63,
  },
  {
    number: 12,
    name: "Community of 7000",
    category: "towns",
    asterisks: 1,
    biggerLinks: [8],
    smallerLinks: [3, 14, 28, 31, 44],
    problem:
      "Individuals have no effective voice in any community of more than 5000-10,000 persons.",
    therefore:
      "Decentralize city governments in a way that gives local control to communities of 5,000 to 10,000 persons. as nearly as possible, use natural geographic and historical boundaries to mark these communities. Give each community the power to initiate, decide, and execute the affairs that concern it closely: land use, housing, maintenance, streets, parks, police, schooling, welfare, neighborhood services.",
    bookPage: 70,
  },
  {
    number: 13,
    name: "Subculture Boundary",
    category: "towns",
    asterisks: 0,
    biggerLinks: [8, 12, 14],
    smallerLinks: [7, 17, 23, 24, 25, 28, 30, 41, 42, 59, 60, 64, 71, 84, 97],
    problem:
      "The mosaic of subcultures requires that hundreds of different cultures live, in their own way, at full intensity, next door to one another. But subcultures have their own ecology. They can only live at full intensity, unhampered by their neighbors, if they are physically separated by physical boundaries.",
    therefore:
      "Separate neighboring subcultures with a swath of land at least 200 feet wide. Let this boundary be natural wilderness, farmland, water - or man-made - railroads, major roads, parks, schools, some housing. Along the seam between two subcultures, build meeting places, shared functions, touching each community.",
    bookPage: 75,
  },
  {
    number: 14,
    name: "Indentifiable Neighborhood",
    category: "towns",
    asterisks: 2,
    biggerLinks: [8, 12],
    smallerLinks: [15, 23, 37, 41, 53, 60, 61],
    problem: "People need an identifiable spatial unit to belong to.",
    therefore:
      "Help people to define the neighborhoods they live in, not more than 300 yards across, with no more than 400 or 500 inhabitants. In existing cities, encourage local groups to organize themselves to form such neighborhoods. Give the neighborhoods some degree of autonomy as far as taxes and land controls are concerned. Keep major roads outside these neighborhoods.",
    bookPage: 80,
  },
  {
    number: 15,
    name: "Neighborhood Boundary",
    category: "towns",
    asterisks: 1,
    biggerLinks: [12, 13, 14],
    smallerLinks: [23, 32, 41, 53, 59, 60, 64, 69, 70, 72, 73, 97, 103],
    problem:
      "The strength of the boundary is essential to a neighborhood. If the boundary is too weak the neighborhood will not be able to maintain its own identifiable character.",
    therefore:
      "Encourage the formation of a boundary around each neighborhood, to separate it from the next door neighborhoods. Form this boundary by closing down streets and limiting access to the neighborhood - cut the normal number of streets at least in half. Place gateways at those points where the restricted access paths cross the boundary; and make the boundary zone wide enough to contain meeting places for the common functions shared by several neighborhoods.",
    bookPage: 86,
  },
  {
    number: 16,
    name: "Web of Public Transportation",
    category: "towns",
    asterisks: 1,
    biggerLinks: [3, 11],
    smallerLinks: [20, 34],
    problem:
      "The system of public transportation - the entire web of airplanes, helicopters, hovercraft, trains, boats, ferries, buses, taxis, mini-trains, carts, ski-lifts, moving sidewalks - can only work if all the parts are well connected. But they usually aren't, because the different agencies in charge of various forms of public transportation have no incentives to connect to one another.",
    therefore:
      "Treat interchanges as primary and transportation lines as secondary. Create incentives so that all the different modes of public transportation - airplanes, helicopters, ferries, boats, trains, rapid transit, buses, mini-buses, ski lifts, escalators, travelators, elevator - plan their lines to connect the interchanges, with the hope that gradually many different lines, of many different types, will meet at every interchange.",
    bookPage: 92,
  },
  {
    number: 17,
    name: "Ring Roads",
    category: "towns",
    asterisks: 0,
    biggerLinks: [11, 16, 34],
    smallerLinks: [13, 25, 42, 97],
    problem:
      "It is not possible to avoid the need for high speed roads in modern society; but it is essential to place them and build them in such a way that they do not destroy communities or countryside.",
    therefore:
      "Place high speed roads (freeways and other major arteries) so that:  1. At least one high speed road lies tangent to each local transport area.  2. Each local transport area has at least one side not bounded by a high speed road' but directly open to the countryside. 3. The road is always sunken, or shielded along its length by berms, or earth, or industrial buildings, to protect the nearby neighborhoods from noise.",
    bookPage: 96,
  },
  {
    number: 18,
    name: "Network of Learning",
    category: "towns",
    asterisks: 1,
    biggerLinks: [],
    smallerLinks: [43, 57, 83, 84, 85, 86, 157],
    problem:
      "In a society which emphasizes teaching, children and students - and adults - become passive and unable to think or act for themselves. Creative, active individuals can only grow up in a society which emphasizes learning instead of teaching.",
    therefore:
      'Instead of the lock-step of compulsory schooling in a fixed place, work in piecemeal ways to decentralize the process of learning and enrich it through contact with many places and people all over the city: workshops, teachers at home or walking through the city, professionals willing to take on the young as helpers, older children teaching younger children, museums, youth groups traveling, scholarly seminars, industrial workshops, old people, and so on. Conceive of all these situations as forming the backbone of the learning process; survey all these situations, describe them, and publish them as the city\'s "curriculum"; then let students, children, their families and neighborhoods weave together for themselves the situations that comprise their "school" paying as they go with standard vouchers, raised by community tax. Build new educational facilities in a way which extends and enriches this network.',
    bookPage: 99,
  },
  {
    number: 19,
    name: "Web of Shopping",
    category: "towns",
    asterisks: 1,
    biggerLinks: [8, 9, 11, 13],
    smallerLinks: [10, 31, 32, 46, 89],
    problem:
      "Shops rarely place themselves in those positions which best serve the people's needs, and also guarantee their own stability.",
    therefore:
      "When you locate any individual shop, follow a three-step procedure:  1. Identify all other shops which offer the service you are interested in; locate them on the map.  2. Identify and map the location of potential consumers. Wherever possible, indicate the density or total number of potential consumers in any given area.  3. Look for the biggest gap in the existing web of shops in those areas where there are potential consumers.  4. Within the gap in the web of similar shops, locate your shop next to the largest cluster of other kinds of shops.",
    bookPage: 104,
  },
  {
    number: 20,
    name: "Mini-Buses",
    category: "towns",
    asterisks: 1,
    biggerLinks: [11, 16],
    smallerLinks: [23, 34, 92],
    problem:
      "Public transportation must be able to take people from any point to any other point within the metropolitan area.",
    therefore:
      "Establish a system of small taxi-like buses, carrying up to six people each, radio-controlled, on call by telephone, able to provide point-to-point service according to the passengers' needs, and supplemented by a computer system which guarantees minimum detours, and minimum waiting times. Make bus stops for the mini-buses every 600 feet in each direction, and equip these bus stops with a phone for dialing a bus.",
    bookPage: 110,
  },
  {
    number: 21,
    name: "Four-Story Limit",
    category: "towns",
    asterisks: 2,
    biggerLinks: [3, 5, 10],
    smallerLinks: [29, 39, 62, 82, 95, 96],
    problem:
      "There is abundant evidence to show that high buildings make people crazy.",
    therefore:
      "In any urban area, no matter how dense, keep the majority of buildings four stories high or less. It is possible that certain buildings should exceed this limit, but they should never be buildings for human habitation.",
    bookPage: 114,
  },
  {
    number: 22,
    name: "Nine per Cent Parking",
    category: "towns",
    asterisks: 2,
    biggerLinks: [11, 12, 14],
    smallerLinks: [97, 103],
    problem:
      "Very simply when the area devoted to parking is too great, it destroys the land.",
    therefore:
      'Do not allow more than 9 per cent of the land in any given area to be used for parking. In order to prevent the "bunching" of parking in huge neglected areas, it is necessary for a town or a community to subdivide its land into "parking zones" no larger than 10 acres each and to apply the same rule in each zone.',
    bookPage: 120,
  },
  {
    number: 23,
    name: "Parallel Roads",
    category: "towns",
    asterisks: 0,
    biggerLinks: [11, 13, 15, 17],
    smallerLinks: [11, 49, 50, 51, 52, 54, 55],
    problem:
      "The net-like pattern of streets is obsolete. Congestion is choking cities. Cars can average 60 miles per hour on freeways, but trips across town have an average speed of only 10 to 15 miles per hour.",
    therefore:
      "Within a local transport area build no intersecting major roads at all; instead, build a system of parallel and alternating one-way roads to carry traffic to the Ring Roads (17). In existing towns, create this structure piecemeal, by gradually making major streets one-way and closing cross streets. Keep parallel roads at least 100 yards apart (to make room for neighborhoods between them) and no more than 300 or 400 yards apart.",
    bookPage: 126,
  },
  {
    number: 24,
    name: "Sacred Sites",
    category: "towns",
    asterisks: 1,
    biggerLinks: [],
    smallerLinks: [59, 66, 134, 171, 176],
    problem:
      "People cannot maintain their spiritual roots and their connections to the past if the physical world they live in does not also sustain these roots.",
    therefore:
      "Whether the sacred sites are large or small, whether they are at the center of the towns, in neighborhoods, or in the deepest countryside, establish ordinances which will protect them absolutely so that our roots in the visible surroundings cannot be violated.",
    bookPage: 131,
  },
  {
    number: 25,
    name: "Access to Water",
    category: "towns",
    asterisks: 1,
    biggerLinks: [24],
    smallerLinks: [7, 23, 31, 103],
    problem:
      "People have a fundamental yearning for great bodies of water. But the very movement of the people toward the water can also destroy the water.",
    therefore:
      "When natural bodies of water occur near human settlements, treat them with great respect. Always preserve a belt of common land, immediately beside the water. And allow dense settlements to come right down to the water only at infrequent intervals along the water's edge.",
    bookPage: 135,
  },
  {
    number: 26,
    name: "Life Cycle",
    category: "towns",
    asterisks: 1,
    biggerLinks: [12, 14],
    smallerLinks: [
      35, 40, 41, 44, 57, 65, 66, 70, 75, 79, 83, 84, 85, 86, 153, 154, 155,
      156, 187,
    ],
    problem:
      "All the world's a stage, And all the men and women merely players: They have their exits and their entrances; And one man in his time plays many parts, His acts being seven ages.",
    therefore:
      "Make certain that the full cycle of life is represented and balanced in each community. Set the ideal of a balanced life cycle as a principal guide for the evolution of communities. This means: 1. That each community include a balance of people at every stage of the life cycle, from infants to the very old; and include the full slate of settings needed for all these stages of life; 2. That the community contain the full slate of settings which best mark the ritual crossing of life from one stage to the next.",
    bookPage: 139,
  },
  {
    number: 27,
    name: "Men and Women",
    category: "towns",
    asterisks: 0,
    biggerLinks: [12, 14, 26],
    smallerLinks: [9, 141],
    problem:
      "The world of a town in the 1970's is split along sexual lines. Suburbs are for women, workplaces for men; kindergartens are for women, professional schools for men; supermarkets are for women, hardware stores for men.",
    therefore:
      "Make certain that each piece of the environment - each building, open space, neighborhood, and work community - is made with a blend of both men's and women's instincts. Keep this balance of masculine and feminine in mind for every project at every scale, from the kitchen to the steel mill.",
    bookPage: 146,
  },
  {
    number: 28,
    name: "Eccentric Nucleus",
    category: "towns",
    asterisks: 1,
    biggerLinks: [10, 12, 13, 21],
    smallerLinks: [24, 29, 30, 31, 32, 59, 71],
    problem:
      "The random character of local densities confuses the identity of our communities, and also creates a chaos in the pattern of land use.",
    therefore:
      "Encourage growth and the accumulation of density to form a clear configuration of peaks and valleys according to the following rules:",
    bookPage: 150,
  },
  {
    number: 29,
    name: "Density Rings",
    category: "towns",
    asterisks: 1,
    biggerLinks: [8, 12, 13, 28],
    smallerLinks: [31, 37, 38, 39, 61, 123],
    problem:
      "People want to be close to shops and services, for excitement and convenience. And they want to be away from services, for quiet and green. The exact balance of these two desires varies from person to person, but in the aggregate it is the balance of these two desires which determines the gradient of housing densities in a neighborhood.",
    therefore:
      "Once the nucleus of a community is clearly placed - define rings of decreasing local housing density around this nucleus. If you cannot avoid it, choose the densities from the foregoing table. But, much better, if you can possibly manage it, play the density rings game, to obtain these densities, from the intuitions of the very people who are going to live in the community.",
    bookPage: 156,
  },
  {
    number: 30,
    name: "Activity Nodes",
    category: "towns",
    asterisks: 2,
    biggerLinks: [12, 13, 14, 15, 28, 29, 31, 52, 100],
    smallerLinks: [
      31, 33, 36, 41, 43, 44, 47, 61, 65, 84, 85, 87, 88, 90, 93, 120,
    ],
    problem:
      "Community facilities scattered individually through the city do nothing for the life of the city.",
    therefore:
      'Create nodes of activity throughout the community, spread about 300 yards apart. First identify those existing spots in the community where action seems to concentrate itself. Then modify the layout of the paths in the community to bring as many of them through these spots as possible. This makes each spot function as a "node" in the path network. Then, at the center of each node, make a small public square, and surround it with a combination of community facilities and shops which are mutually supportive.',
    bookPage: 163,
  },
  {
    number: 31,
    name: "Promenade",
    category: "towns",
    asterisks: 2,
    biggerLinks: [8, 12, 30],
    smallerLinks: [30, 32, 33, 58, 63, 100, 121, 123],
    problem:
      "Each subculture needs a center for its public life: a place where you can go to see people, and to be seen.",
    therefore:
      "Encourage the gradual formation of a promenade at the heart of every community, linking the main activity nodes, and placed centrally, so that each point in the community is within 10 minutes' walk of it. Put main points of attraction at the two ends, to keep a constant movement up and down.",
    bookPage: 168,
  },
  {
    number: 32,
    name: "Shopping Street",
    category: "towns",
    asterisks: 1,
    biggerLinks: [10, 19, 31],
    smallerLinks: [46, 48, 52, 54, 87, 97, 100, 244],
    problem:
      "Shopping centers depend on access: they need locations near major traffic arteries. However, the shoppers themselves don't benefit from traffic: they need quiet, comfort, and convenience, and access from the pedestrian paths in the surrounding area.",
    therefore:
      "Encourage local shopping centers to grow in the form of short pedestrian streets, at right angles to major roads and opening off these roads with parking behind the shops, so that the cars can pull directly off the road, and yet not harm the shopping street.",
    bookPage: 174,
  },
  {
    number: 33,
    name: "Night Life",
    category: "towns",
    asterisks: 1,
    biggerLinks: [10, 12, 31],
    smallerLinks: [30, 44, 58, 63, 88, 90, 91],
    problem:
      "Most of the city's activities close down at night; those which stay open won't do much for the night life of the city unless they are together.",
    therefore:
      "Knit together shops, amusements, and services which are open at night, along with hotels, bars, and all-night diners to form centers of night life: well-lit, safe, and lively places that increase the intensity of pedestrian activity at night by drawing all the people who are out at night to the same few spots in the town. Encourage these evening centers to distribute themselves evenly across the town.",
    bookPage: 179,
  },
  {
    number: 34,
    name: "Interchange",
    category: "towns",
    asterisks: 0,
    biggerLinks: [11, 16],
    smallerLinks: [9, 20, 30, 39, 40, 41, 92, 119],
    problem:
      "Interchanges play a central role in public transportation. Unless the interchanges are working properly, the public transportation system will not be able to sustain itself.",
    therefore:
      "At every interchange in the web of transportation follow these principles: 1. Surround the interchange with workplaces and housing types which specially need public transportation. 2. Keep the interior of the interchange continuous with the exterior pedestrian network, and maintain this continuity by building in small shops and kiosks and by keeping parking to one side. 3. Keep the transfer distance between different modes of transport down to 300 feet wherever possible, with an absolute maximum of 600 feet.",
    bookPage: 183,
  },
  {
    number: 35,
    name: "Household Mix",
    category: "towns",
    asterisks: 1,
    biggerLinks: [14, 26, 37, 41],
    smallerLinks: [40, 68, 75, 76, 77, 78],
    problem: "No one stage in the life cycle is self-sufficient.",
    therefore:
      "Encourage growth toward a mix of household types in every neighborhood, and every cluster, so that one-person households, couples, families with children, and group households are side by side.",
    bookPage: 188,
  },
  {
    number: 36,
    name: "Degrees of Publicness",
    category: "towns",
    asterisks: 2,
    biggerLinks: [14, 29, 30],
    smallerLinks: [37, 38, 39, 51, 55, 100, 121, 123],
    problem:
      "People are different, and the way they want to place their houses in a neighborhood is one of the most basic kinds of difference.",
    therefore:
      "Make a clear distinction between three kinds of homes - those on quiet backwaters, those on busy streets, and those that are more or less in between. Make sure that those on quiet backwaters are on twisting paths, and that these houses are themselves physically secluded; make sure that the more public houses are on busy streets with many people passing by all day long and that the houses themselves are relatively exposed to the passersby. The in between houses may then be located on the paths half-way between the other two. Give every neighborhood about equal numbers of these three kinds of homes.",
    bookPage: 192,
  },
  {
    number: 37,
    name: "House Cluster",
    category: "towns",
    asterisks: 2,
    biggerLinks: [14, 29, 35, 36],
    smallerLinks: [36, 38, 39, 57, 67, 75, 76, 77, 78, 79, 98, 103],
    problem:
      "People will not feel comfortable in their houses unless a group of houses forms a cluster, with the public land between them jointly owned by all the householders.",
    therefore:
      "Arrange houses to form very rough, but identifiable clusters of 8 to 12 households around some common land and paths. Arrange the clusters so that anyone can walk through them, without feeling like a trespasser.",
    bookPage: 197,
  },
  {
    number: 38,
    name: "Row Houses",
    category: "towns",
    asterisks: 1,
    biggerLinks: [29, 36, 37],
    smallerLinks: [23, 37, 52, 75, 76, 77, 78, 95, 103, 109],
    problem:
      "At densities of 15 to 30 houses per acre, row houses are essential. But typical row houses are dark inside, and stamped from an identical mould.",
    therefore:
      "For row houses, place houses along pedestrian paths that run at right angles to local roads and parking lots, and give each house a long frontage and a shallow depth.",
    bookPage: 204,
  },
  {
    number: 39,
    name: "Housing Hill",
    category: "towns",
    asterisks: 0,
    biggerLinks: [21, 29],
    smallerLinks: [67, 68, 79, 118, 158, 177],
    problem:
      "Every town has places in it which are so central and desirable that at least 30-50 households per acre will be living there. But the apartment houses which reach this density are almost all impersonal.",
    therefore:
      "To build more than 30 dwellings per net acre, or to build housing three or four stories high, build a hill of houses. Build them to form stepped terraces, sloping toward the south, served by a great central open stair which also faces south and leads toward a common garden . . .",
    bookPage: 209,
  },
  {
    number: 40,
    name: "Old People Everywhere",
    category: "towns",
    asterisks: 2,
    biggerLinks: [14, 26, 35],
    smallerLinks: [18, 75, 86, 155, 156, 177],
    problem:
      "Old people need old people, but they also need the young, and young people need contact with the old.",
    therefore:
      "Create dwellings for some 50 old people in every neighborhood. Place these dwellings in three rings . . . 1. A central core with cooking and nursing provided. 2. Cottages near the core. 3. Cottages further out from the core, mixed among the other houses of the neighborhood, but never more than 200 yards from the core. . . . in such a way that the 50 houses together form a single coherent swarm, with its own clear center, but interlocked at its periphery with other ordinary houses of the neighborhood.",
    bookPage: 215,
  },
  {
    number: 41,
    name: "Work Community",
    category: "towns",
    asterisks: 2,
    biggerLinks: [9, 13, 15, 30],
    smallerLinks: [60, 61, 72, 80, 88, 93, 115, 147],
    problem:
      "If you spend eight hours of your day at work, and eight hours at home, there is no reason why your workplace should be any less of a community than your home.",
    therefore:
      "Build or encourage the formation of work communities - each one a collection of smaller clusters of workplaces which have their own courtyards, gathered round a larger common square or common courtyard which contains shops and lunch counters. The total work community should have no more than 10 or 20 workplaces in it.",
    bookPage: 222,
  },
  {
    number: 42,
    name: "Industrial Ribbon",
    category: "towns",
    asterisks: 1,
    biggerLinks: [9, 13, 41],
    smallerLinks: [17, 41, 106, 122],
    problem:
      "Exaggerated zoning laws separate industry from the rest of urban life completely, and contribute to the plastic unreality of sheltered residential neighborhoods.",
    therefore:
      "Place industry in ribbons, between 200 and 500 feet wide, which form the boundaries between communities. Break these ribbons into long blocks, varying in area between 1 and 25 acres; and treat the edge of every ribbon as a place where people from nearby communities can benefit from the offshoots of the industrial activity.",
    bookPage: 227,
  },
  {
    number: 43,
    name: "University as Marketplace",
    category: "towns",
    asterisks: 0,
    biggerLinks: [18],
    smallerLinks: [31, 48, 59, 83, 95, 100],
    problem:
      "Concentrated, cloistered universities, with closed admission policies and rigid procedures which dictate who may teach a course, kill opportunities for learning.",
    therefore:
      "Establish the university as a marketplace of higher education. as a social conception this means that the university is open to people of all ages, on a full-time, part-time, or course by course basis. Anyone can offer a class. Anyone can take a class. Physically, the university marketplace has a central crossroads where its main buildings and offices are, and the meeting rooms and labs ripple out from this crossroads - at first concentrated in small buildings along pedestrian streets and then gradually becoming more dispersed and mixed with the town.",
    bookPage: 231,
  },
  {
    number: 44,
    name: "Local Town Hall",
    category: "towns",
    asterisks: 1,
    biggerLinks: [12],
    smallerLinks: [30, 45, 61, 81, 123],
    problem:
      "Local government of communities and local control by the inhabitants, will only happen if each community has its own physical town hall which forms the nucleus of its political activity.",
    therefore:
      "To make the political control of local functions real, establish a small town hall for each community of 7000, and even for each neighborhood; locate it near the busiest intersection in the community. Give the building three parts: an arena for public discussion, public services around the arena, and space to rent out to ad hoc community projects.",
    bookPage: 236,
  },
  {
    number: 45,
    name: "Necklace of Community Projects",
    category: "towns",
    asterisks: 0,
    biggerLinks: [43, 44, 47],
    smallerLinks: [69, 87, 122, 160, 165],
    problem:
      "The local town hall will not be an honest part of the community which lives around it, unIess it is itself surrounded by all kinds of small community activities and projects, generated by the people for themselves.",
    therefore:
      "Allow the growth of shop-size spaces around the local town hall, and any other appropriate community building. Front these shops on a busy path, and lease them for a minimum rent to ad hoc community groups for political work, trial services, research, and advocate groups. No ideological restrictions.",
    bookPage: 242,
  },
  {
    number: 46,
    name: "Market of Many Shops",
    category: "towns",
    asterisks: 2,
    biggerLinks: [19, 32],
    smallerLinks: [87, 100, 101, 212, 244],
    problem:
      "It is natural and convenient to want a market where all the different foods and household goods you need can be bought under a single roof. But when the market has a single management, like a supermarket, the foods are bland, and there is no joy in going there.",
    therefore:
      "Instead of modern supermarkets, establish frequent marketplaces, each one made up of many smaller shops which are autonomous and specialized (cheese, meat, grain, fruit, and so on). Build the structure of the market as a minimum, which provides no more than a roof, columns which define aisles, and basic services. Within this structure allow the different shops to create their own environment, according to their individual taste and needs.",
    bookPage: 246,
  },
  {
    number: 47,
    name: "Health Center",
    category: "towns",
    asterisks: 1,
    biggerLinks: [26],
    smallerLinks: [48, 65, 71, 72, 73, 81, 157, 177],
    problem:
      "More than 90 per cent of the people walking about in an ordinary neighborhood are unhealthy, judged by simple biological criteria. This ill health cannot be cured by hospitals or medicine.",
    therefore:
      "Gradually develop a network of small health centers, perhaps one per community of 7000, across the city; each equipped to treat everyday disease both mental and physical, in children and adults - but organized essentially around a functional emphasis on those recreational and educational activities which help keep people in good health, like swimming and dancing.",
    bookPage: 252,
  },
  {
    number: 48,
    name: "Housing in Between",
    category: "towns",
    asterisks: 2,
    biggerLinks: [13, 14, 15, 37, 41],
    smallerLinks: [37, 38, 79],
    problem:
      "Wherever there is a sharp separation between residential and nonresidential parts of town, the nonresidential areas will quickly turn to slums.",
    therefore:
      'Build houses into the fabric of shops, small industry, schools, public services, universities all those parts of cities which draw people in during the day, but which tend to be "nonresidential." The houses may be in rows or "hills" with shops beneath, or they may be free-standing, so long as they mix with the other functions, and make the entire area "lived-in."',
    bookPage: 256,
  },
  {
    number: 49,
    name: "Looped Local Roads",
    category: "towns",
    asterisks: 2,
    biggerLinks: [11, 14, 23, 37, 41],
    smallerLinks: [50, 51, 52, 103, 113],
    problem: "Nobody wants fast through traffic going by their homes.",
    therefore:
      "Lay out local roads so that they form loops. A loop is defined as any stretch of road which makes it impossible for cars that don't have destinations on it to use it as a shortcut. Do not allow any one loop to serve more than 50 cars, and keep the road really narrow - 17 to 20 feet is quite enough.",
    bookPage: 260,
  },
  {
    number: 50,
    name: "T Junctions",
    category: "towns",
    asterisks: 1,
    biggerLinks: [23, 49],
    smallerLinks: [54],
    problem:
      "Traffic accidents are far more frequent where two roads cross than at T junctions.",
    therefore:
      "Lay out the road system so that any two roads which meet at grade, meet in three-way T junctions as near 90 degrees as possible. Avoid four-way intersections and crossing movements.",
    bookPage: 264,
  },
  {
    number: 51,
    name: "Green Streets",
    category: "towns",
    asterisks: 2,
    biggerLinks: [49, 50, 67],
    smallerLinks: [52, 67, 103, 170, 245, 247],
    problem:
      "There is too much hot hard asphalt in the world. A local road, which only gives access to buildings, needs a few stones for the wheels of the cars; nothing more. Most of it can still be green.",
    therefore:
      "On local roads, closed to through traffic, plant grass all over the road and set occasional paving stones into the grass to form a surface for the wheels of those cars that need access to the street. Make no distinction between street and, sidewalk. Where houses open off the street, put in more paving stones or gravel to let cars turn onto their own land.",
    bookPage: 266,
  },
  {
    number: 52,
    name: "Network of Paths and Cars",
    category: "towns",
    asterisks: 2,
    biggerLinks: [23, 30, 31, 49, 51, 120],
    smallerLinks: [51, 54, 55, 120, 121],
    problem:
      "Cars are dangerous to pedestrians; yet activities occur just where cars and pedestrians meet.",
    therefore:
      'Except where traffic densities are very high or very low, lay out pedestrian paths at right angles to roads, not along them, so that the paths gradually begin to form a second network, distinct from the road system, and orthogonal to it. This can be done quite gradually - even if you put in one path at a time, but always put them in the middle of the "block," so that they run across the roads.',
    bookPage: 270,
  },
  {
    number: 53,
    name: "Main Gateways",
    category: "towns",
    asterisks: 2,
    biggerLinks: [14, 37, 41, 95, 98],
    smallerLinks: [98, 110, 112],
    problem:
      "Any part of a town - large or small - which is to be identified by its inhabitants as a precinct of some kind, will be reinforced, helped in its distinctness, marked, and made more vivid, if the paths which enter it are marked by gateways where they cross the boundary.",
    therefore:
      "Mark every boundary in the city which has important human meaning - the boundary of a building cluster, a neighborhood, a precinct - by great gateways where the major entering paths cross the boundary.",
    bookPage: 276,
  },
  {
    number: 54,
    name: "Road Crossing",
    category: "towns",
    asterisks: 0,
    biggerLinks: [23, 52],
    smallerLinks: [55, 61, 92, 93, 103, 174, 244],
    problem:
      "Where paths cross roads, the cars have power to frighten and subdue the people walking, even when the people walking have the legal right-of-way.",
    therefore:
      'At any point where a pedestrian path crosses a road that has enough traffic to create more than a two second delay to people crossing, make a "knuckle" at the crossing: narrow the road to the width of the through lanes only; continue the pedestrian path through the crossing about a foot above the roadway; put in islands between lanes; slope the road up toward the crossing (1 in 6 maximum); mark the path with a canopy or shelter to make it visible.',
    bookPage: 280,
  },
  {
    number: 55,
    name: "Raised Walk",
    category: "towns",
    asterisks: 1,
    biggerLinks: [23, 52, 54],
    smallerLinks: [119, 125, 243],
    problem:
      "Where fast moving cars and pedestrians meet in cities, the cars overwhelm the pedestrians. The car is king, and people are made to feel small.",
    therefore:
      "We conclude that any pedestrian path along a road carrying fast-moving cars should be about 18 inches above the road, with a low wall or railing, or balustrade along the edge, to mark the edge. Put the raised walk on only one side of the road - make it as wide as possible.",
    bookPage: 285,
  },
  {
    number: 56,
    name: "Bike Paths and Racks",
    category: "towns",
    asterisks: 1,
    biggerLinks: [11, 49, 52],
    smallerLinks: [59, 110, 119, 173],
    problem:
      "Bikes are cheap, healthy, and good for the environment; but the environment is not designed for them. Bikes on roads are threatened by cars; bikes on paths threaten pedestrians.",
    therefore:
      "Build a system of paths designated as bike paths, with the following properties: the bike paths are marked clearly with a special, easily recognizable surface (for example, a red asphalt surface). as far as possible they run along local roads, or major pedestrian paths. Where a bike path runs along a local road, its surface may be, level with the road - if possible, on the sunny side; where a bike path runs along a pedestrian path, keep it separate from that path and a few inches below it. Bring the system of bike paths to within 100 feet of every building, and give every building a bike rack near its main entrance.",
    bookPage: 289,
  },
  {
    number: 57,
    name: "Children in the City",
    category: "towns",
    asterisks: 0,
    biggerLinks: [18, 23, 31, 49, 51, 52, 56],
    smallerLinks: [40, 41, 43, 68, 70, 72, 73, 74, 84, 85, 86, 164],
    problem:
      "If children are not able to explore the whole of the adult world round about them, they cannot become adults. But modern cities are so dangerous that children cannot be allowed to explore them freely.",
    therefore:
      'As part of the network of bike paths, develop one system of paths that is extra safe---entirely separate from automobiles, with lights and bridges at the crossings, with homes and shops along it, so that there are always many eyes on the path. Let this path go through every neighborhood, so that children can get onto it without crossing a main road. And run the path all through the city, down pedestrian streets, through workshops, assembly plants, warehouses, interchanges, print houses, bakeries, all the interesting "invisible" life of a town - so that the children can roam freely on their bikes and trikes.',
    bookPage: 293,
  },
  {
    number: 58,
    name: "Carnival",
    category: "towns",
    asterisks: 0,
    biggerLinks: [31, 33],
    smallerLinks: [61, 63, 69, 93, 100, 244],
    problem:
      "Just as an individual person dreams fantastic happenings to release the inner forces which cannot be encompassed by ordinary events, so too a city needs its dreams.",
    therefore:
      "Set aside some part of the town as a carnival - mad side-shows, tournaments, acts, displays, competitions, dancing, music, street theater, clowns, transvestites, freak events, which allow people to reveal their madness; weave a wide pedestrian street through this area; run booths along the street, narrow alleys; at one end an outdoor theater; perhaps connect the theater stage directly to the carnival street, so the two spill into and feed one another.",
    bookPage: 298,
  },
  {
    number: 59,
    name: "Quiet Backs",
    category: "towns",
    asterisks: 1,
    biggerLinks: [9, 40],
    smallerLinks: [60, 64, 71, 171, 173],
    problem:
      "Any one who has to work in noise, in offices with people all around, needs to be able to pause and refresh himself with quiet in a more natural situation.",
    therefore:
      'Give the buildings in the busy parts of town a quiet "back" behind them and away from the noise. Build a walk along this quiet back, far enough from the building so that it gets full sunlight, but protected from noise by walls and distance and buildings. Make certain that the path is not a natural shortcut for busy foot traffic, and connect it up with other walks, to form a long ribbon of quiet alleyways which converge on the local pools and streams and the local greens.',
    bookPage: 301,
  },
  {
    number: 60,
    name: "Accessible Green",
    category: "towns",
    asterisks: 2,
    biggerLinks: [13, 14, 15, 41, 59],
    smallerLinks: [66, 70, 72, 74, 94, 106, 171, 173],
    problem:
      "People need green open places to go to; when they are close they use them. But if the greens are more than three minutes away, the distance overwhelms the need.",
    therefore:
      "Build one open public green within three minutes' walk - about 750 feet - of every house and workplace. This means that the greens need to be uniformly scattered at 1500-f0ot intervals, throughout the city. Make the greens at least 150 feet across, and at least 60,000 square feet in area.",
    bookPage: 304,
  },
  {
    number: 61,
    name: "Small Public Squares",
    category: "towns",
    asterisks: 2,
    biggerLinks: [14, 30, 31, 41],
    smallerLinks: [106, 114, 122, 123, 124, 125, 126],
    problem:
      "A town needs public squares; they are the largest, most public rooms, that the town has. But when they are too large, they look and feel deserted.",
    therefore:
      "Make a public square much smaller than you would at first imagine; usually no more than 45 to 60 feet across, never more than 70 feet across. This applies only to its width in the short direction. In the long direction it can certainly be longer.",
    bookPage: 310,
  },
  {
    number: 62,
    name: "High Places",
    category: "towns",
    asterisks: 1,
    biggerLinks: [12, 21, 61, 66],
    smallerLinks: [61, 125, 134, 158],
    problem:
      "The instinct to climb up to some high place, from which you can look down and survey your world, seems to be a fundamental human instinct.",
    therefore:
      "Build occasional high places as landmarks throughout the city. They can be a natural part of the topography, or towers, or part of the roofs of the highest local building but, in any case, they should include a physical climb.",
    bookPage: 315,
  },
  {
    number: 63,
    name: "Dancing in the Streets",
    category: "towns",
    asterisks: 1,
    biggerLinks: [10, 31, 33, 58, 61],
    smallerLinks: [69, 93, 124, 244],
    problem: "Why is it that people don't dance in the streets today?",
    therefore:
      "Along promenades, in squares and evening centers, make a slightly raised platform to form a bandstand, where street musicians and local bands can play. Cover it, and perhaps build in at ground level tiny stalls for refreshment. Surround the bandstand with paved surface for dancing -- no admission charge.",
    bookPage: 319,
  },
  {
    number: 64,
    name: "Pools and Streams",
    category: "towns",
    asterisks: 1,
    biggerLinks: [15, 24, 25, 59, 100],
    smallerLinks: [31, 66, 71, 119],
    problem:
      "We came from the water; our bodies are largely water; and water plays a fundamental role in our psychology. We need constant access to water, all around us; and we cannot have it without reverence for water in all its forms. But everywhere in cities water is out of reach.",
    therefore:
      "Preserve natural pools and streams and allow them to run through the city; make paths for people to walk along them and footbridges to cross them. Let the streams form natural barriers in the city, with traffic crossing them only infrequently on bridges. Whenever possible, collect rainwater in open gutters and allow it to flow above ground, along pedestrian paths and in front of houses. In places without natural running water, create fountains in the streets.",
    bookPage: 322,
  },
  {
    number: 65,
    name: "Birth Places",
    category: "towns",
    asterisks: 0,
    biggerLinks: [12, 14, 26],
    smallerLinks: [95, 111, 129, 136, 139, 173],
    problem:
      "It seems unlikely that any process which treats childbirth as a sickness could possibly be a healthy part of a healthy society.",
    therefore:
      "Build local birth places where women go to have their children: places that are specially tailored to childbirth as a natural, eventful moment - where the entire family comes for prenatal care and education; where fathers and midwives help during the hours of labor and birth.",
    bookPage: 328,
  },
  {
    number: 66,
    name: "Holy Ground",
    category: "towns",
    asterisks: 1,
    biggerLinks: [24, 26],
    smallerLinks: [53, 64, 134, 171],
    problem:
      "What is a church or temple? It is a place of worship, spirit, contemplation, of course. But above all, from a human point of view, it is a gateway. A person comes into the world through the church. He leaves it through the church. And, at each of the important thresholds of his life, he once again steps through the church.",
    therefore:
      "In each community and neighborhood, identify some sacred site as consecrated ground, and form a series of nested precincts, each marked by a gateway, each one progressively more private, and more sacred than the last, the innermost a final sanctum that can only be reached by passing through all of the outer ones.",
    bookPage: 331,
  },
  {
    number: 67,
    name: "Common Land",
    category: "towns",
    asterisks: 2,
    biggerLinks: [37, 38, 39, 41, 60],
    smallerLinks: [14, 51, 68, 69, 72, 105, 106, 177],
    problem: "Without common land no social system can survive.",
    therefore:
      "Give over 25 per cent of the land in house clusters to common land which touches, or is very very near, the homes which share it. Basic: be wary of the automobile; on no account let it dominate this land.",
    bookPage: 336,
  },
  {
    number: 68,
    name: "Connected Play",
    category: "towns",
    asterisks: 1,
    biggerLinks: [67],
    smallerLinks: [37, 50, 71, 73, 74, 86],
    problem:
      "If children don't play enough with other children during the first five years of life, there is a great chance that they will have some kind of mental illness later in their lives.",
    therefore:
      "Lay out common land, paths, gardens, and bridges so that groups of at least 64 households are connected by a swath of land that does not cross traffic. Establish this land as the connected play space for the children in these households.",
    bookPage: 341,
  },
  {
    number: 69,
    name: "Public Outdoor Room",
    category: "towns",
    asterisks: 2,
    biggerLinks: [53, 60, 61, 67, 100, 120],
    smallerLinks: [115, 119, 121, 124, 125, 129, 160, 163, 240, 244],
    problem:
      "There are very few spots along the streets of modern towns and neighborhoods where people can hang out, comfortably, for hours at a time.",
    therefore:
      "In every neighborhood and work community, make a piece of the common land into an outdoor room - a partly enclosed place, with some roof, columns, without walls, perhaps with a trellis; place it beside an important path and within view of many homes and workshops.",
    bookPage: 348,
  },
  {
    number: 70,
    name: "Grave Sites",
    category: "towns",
    asterisks: 1,
    biggerLinks: [14, 26, 66, 67],
    smallerLinks: [59, 171, 241],
    problem:
      "No people who turn their backs on death can be alive. The presence of the dead among the living will be a daily fact in any society which encourages its people to live.",
    therefore:
      "Never build massive cemeteries. Instead, allocate pieces of land throughout the community as grave sites - corners of parks, sections of paths, gardens, beside gateways - where memorials to people who have died can be ritually placed with inscriptions and mementos which celebrate their life. Give each grave site an edge, a path, and a quiet corner where people can sit. By custom, this is hallowed ground.",
    bookPage: 353,
  },
  {
    number: 71,
    name: "Still Water",
    category: "towns",
    asterisks: 1,
    biggerLinks: [25, 37, 41, 47, 64, 67, 72],
    smallerLinks: [64, 69, 105, 174, 243],
    problem:
      "To be in touch with water, we must above all be able to swim; and to swim daily, the pools and ponds and holes for swimming must be so widely scattered through the city, that each person can reach one within minutes.",
    therefore:
      "In every neighborhood, provide some still water - a pond, a pool - for swimming. Keep the pool open to the public at all times, but make the entrance to the pool only from the shallow side of the pool, and make the pool deepen gradually, starting from one or two inches deep.",
    bookPage: 358,
  },
  {
    number: 72,
    name: "Local Sports",
    category: "towns",
    asterisks: 1,
    biggerLinks: [41, 47],
    smallerLinks: [71, 95, 101, 144, 165, 241, 243],
    problem:
      "The human body does not wear out with use. On the contrary, it wears down when it is not used.",
    therefore:
      "Scatter places for team and individual sports through every work community and neighborhood: tennis, squash, table tennis, swimming, billiards, basketball, dancing, gymnasium ... and make the action visible to passers-by, as an invitation to participate.",
    bookPage: 363,
  },
  {
    number: 73,
    name: "Adventure Playground",
    category: "towns",
    asterisks: 0,
    biggerLinks: [67, 68],
    smallerLinks: [56, 161, 172, 173, 203, 243],
    problem:
      "A castle, made of cartons, rocks, and old branches, by a group of children for themselves, is worth a thousand perfectly detailed, exactly finished castles, made for them in a factory.",
    therefore:
      "Set up a playground for the children in each neighborhood. Not a highly finished playground, with asphalt and swings, but a place with raw materials of all kinds - nets, boxes, barrels, trees, ropes, simple tools, frames, grass, and water - where children can create and re-create playgrounds of their own.",
    bookPage: 367,
  },
  {
    number: 74,
    name: "Animals",
    category: "towns",
    asterisks: 0,
    biggerLinks: [51, 67, 79],
    smallerLinks: [51, 60, 86, 178],
    problem:
      "Animals are as important a part of nature as the trees and grass and flowers. There is some evidence, in addition, which suggests that contact with animals may play a vital role in a child's emotional development.",
    therefore:
      "Make legal provisions which allow people to keep any animals on their private lots or in private stables. Create a piece of fenced and protected common land, where animals are free to graze, with grass, trees, and water in it. Make at least one system of movement in the neighborhood which is entirely asphalt-free - where dung can fall freely without needing to be cleaned up.",
    bookPage: 371,
  },
  {
    number: 75,
    name: "The Family",
    category: "towns",
    asterisks: 1,
    biggerLinks: [26, 35, 37, 38, 39, 48],
    smallerLinks: [76, 77, 78, 79, 95, 129, 147],
    problem: "The nuclear family is not by itself a viable social form.",
    therefore:
      "Set up processes which encourage groups of 8 to 12 people to come together and establish communal households. Morphologically, the important things are: 1. Private realms for the groups and individuals that make up the extended family: couple's realms, private rooms, sub-households for small families. 2. Common space for shared functions: cooking, working, gardening, child care. 3. At the important crossroads of the site, a place where the entire group can meet and sit together.",
    bookPage: 376,
  },
  {
    number: 76,
    name: "House for a Small Family",
    category: "towns",
    asterisks: 1,
    biggerLinks: [37, 75],
    smallerLinks: [79, 129, 136, 137, 143],
    problem:
      "In a house for a small family, it is the relationship between children and adults which is most critical.",
    therefore:
      "Give the house three distinct parts: a realm for parents, a realm for the children, and a common area. Conceive these three realms as roughly similar in size, with the commons the largest.",
    bookPage: 381,
  },
  {
    number: 77,
    name: "House for a Couple",
    category: "towns",
    asterisks: 1,
    biggerLinks: [37, 75],
    smallerLinks: [79, 136, 140],
    problem:
      "In a small household shared by two, the most important problem which arises is the possibility that each may have too little opportunity for solitude or privacy.",
    therefore:
      "Conceive a house for a couple as being made up of two kinds of places - a shared couple's realm and individual private worlds. Imagine the shared realm as half-public and half-intimate; and the private worlds as entirely individual and private.",
    bookPage: 385,
  },
  {
    number: 78,
    name: "House For One Person",
    category: "towns",
    asterisks: 1,
    biggerLinks: [75, 76, 77],
    smallerLinks: [79, 139, 144, 154, 155, 180, 183, 188, 189],
    problem:
      "Once a household for one person is part of some larger group, the most critical problem which arises is the need for simplicity.",
    therefore:
      "Conceive a house for one person as a place of the utmost simplicity: essentially a one-room cottage or studio, with large and small alcoves around it. When it is most intense, the entire house may be no more than 300 to 400 square feet.",
    bookPage: 389,
  },
  {
    number: 79,
    name: "Your Own Home",
    category: "towns",
    asterisks: 2,
    biggerLinks: [38, 39, 75, 76, 77, 78],
    smallerLinks: [95, 111],
    problem:
      "People cannot be genuinely comfortable and healthy in a house which is not theirs. All forms of rental - whether from private landlords or public housing agencies - work against the natural processes which allow people to form stable, self-healing communities.",
    therefore:
      "Do everything possible to make the traditional forms of rental impossible, indeed, illegal. Give every household its own home, with space enough for a garden. Keep the emphasis in the definition of ownership on control, not on financial ownership. Indeed, where it is possible to construct forms of ownership which give people control over their houses and gardens, but make financial speculation impossible, choose these forms above all others. In all cases give people the legal power, and the physical opportunity to modify and repair their own places. Pay attention to this rule especially, in the case of high density apartments: build the apartments in such a way that every individual apartment has a garden, or a terrace where vegetables will grow, and that even in this situation, each family can build, and change, and add on to their house as they wish.",
    bookPage: 392,
  },
  {
    number: 80,
    name: "Self-Governing Workshops and Offices",
    category: "towns",
    asterisks: 2,
    biggerLinks: [9, 41, 42],
    smallerLinks: [81, 82, 83, 95, 148],
    problem: "No one enjoys his work if he is a cog in a machine.",
    therefore:
      "Encourage the formation of self-governing workshops and offices of 5 to 20 workers. Make each group autonomous - with respect to organization, style, relation to other groups, hiring and firing, work schedule. Where the work is complicated and requires larger organizations, several of these work groups can federate and cooperate to produce complex artifacts and services.",
    bookPage: 398,
  },
  {
    number: 81,
    name: "Small Services Without Red Tape",
    category: "towns",
    asterisks: 1,
    biggerLinks: [41, 43, 44, 47, 84],
    smallerLinks: [45, 82, 95, 101, 102, 146, 148],
    problem:
      "Departments and public services don't work if they are too large. When theyare large, their human qualities vanish; they become bureaucratic; red tape takes over.",
    therefore:
      "In any institution whose departments provide public service: 1. Make each service or department autonomous as far as possible. 2. Allow no one service more than 12 staff members total. 3. House each one in an identifiable piece of the building. 4. Give each one direct access to a public thoroughfare.",
    bookPage: 404,
  },
  {
    number: 82,
    name: "Office Connections",
    category: "towns",
    asterisks: 1,
    biggerLinks: [41, 80, 81],
    smallerLinks: [21, 95, 100, 101, 102, 158],
    problem:
      "If two parts of an office are too far apart, people will not move between them as often as they need to; and if they are more than one floor apart, there will be almost no communication between the two.",
    therefore:
      'To establish distances between departments, calculate the number of trips per day made between each two departments; get the "nuisance distance" from the graph above; then make sure that the physical distance between the two departments is less than the nuisance distance. Reckon one flight of stairs as about 100 feet, and two flights of stairs as about 300 feet.',
    bookPage: 408,
  },
  {
    number: 83,
    name: "Master and Aprentices",
    category: "towns",
    asterisks: 1,
    biggerLinks: [18, 80],
    smallerLinks: [129, 147, 148, 151, 152, 183],
    problem:
      "The fundamental learning situation is one in which a person learns by helping someone who really knows what he is doing.",
    therefore:
      "Arrange the work in every workgroup, industry, and office, in such a way that work and learning go forward hand in hand. Treat every piece of work as an opportunity for learning. To this end, organize work around a tradition of masters and apprentices: and support this form of social organization with a division of the workspace into spatial clusters - one for each master and his apprentices where they can work and meet together.",
    bookPage: 412,
  },
  {
    number: 84,
    name: "Teenage Society",
    category: "towns",
    asterisks: 0,
    biggerLinks: [18, 26, 83],
    smallerLinks: [18, 72, 95, 147, 157],
    problem:
      'Teenage is the time of passage between childhood and adulthood. In traditional societies, this passage is accompanied by rites which suit the psychological demands of the transition. But in modern society the "high school" fails entirely to provide this passage.',
    therefore:
      'Replace the "high school" with an institution which is actually a model of adult society, in which the students take on most of the responsibility for learning and social life, with clearly defined roles and forms of discipline. Provide adult guidance, both for the learning, and the social structure of the society; but keep them as far as feasible, in the hands of the students.',
    bookPage: 416,
  },
  {
    number: 85,
    name: "Shopfront Schools",
    category: "towns",
    asterisks: 0,
    biggerLinks: [18, 86],
    smallerLinks: [60, 80, 95, 100, 165],
    problem:
      "Around the age of 6 or 7, children develop a great need to learn by doing, to make their mark on a community outside the home. If the setting is right, these needs lead children directly to basic skills and habits of learning.",
    therefore:
      "Instead of building large public schools for children 7 to 12, set up tiny independent schools, one school at a time. Keep the school small, so that its overheads are low and a teacher-student ratio of 1:10 can be maintained. Locate it in the public part of the community, with a shopfront and three or four rooms.",
    bookPage: 420,
  },
  {
    number: 86,
    name: "Children",
    category: "towns",
    asterisks: 0,
    biggerLinks: [18, 57, 68],
    smallerLinks: [73, 75, 79, 95, 101, 129],
    problem:
      'The task of looking - after little children is a much deeper and more fundamental social issue than the phrases "babysitting" and "child care" suggest.',
    therefore:
      "In every neighborhood, build a children's home - a second home for children - a large rambling house or workplace - a place where children can stay for an hour or two, or for a week. At least one of the people who run it must live on the premises; it must be open 24 hours a day; open to children of all ages; and it must be clear, from the way that it is run, that it is a second family for the children - not just a place where baby-sitting is available.",
    bookPage: 426,
  },
  {
    number: 87,
    name: "Individually Owned Shops",
    category: "towns",
    asterisks: 2,
    biggerLinks: [32, 46, 88, 89],
    smallerLinks: [95, 165, 191, 197, 200],
    problem:
      "When shops are too large, or controlled by absentee owners, they become plastic, bland, and abstract.",
    therefore:
      "Do what you can to encourage the development of individually owned shops. Approve applications for business licenses only if the business is owned by those people who actually work and manage the store. Approve new commercial building permits only if the proposed structure includes many very very small rental spaces.",
    bookPage: 432,
  },
  {
    number: 88,
    name: "Street Cafe",
    category: "towns",
    asterisks: 2,
    biggerLinks: [14, 30, 61],
    smallerLinks: [95, 125, 150, 165, 243, 244, 250],
    problem:
      "The street cafe provides a unique setting, special to cities: a place where people can sit lazily, legitimately, be on view, and watch the world go by.",
    therefore:
      "Encourage local cafes to spring up in each neighborhood. Make them intimate places, with several rooms, open to a busy path, where people can sit with coffee or a drink and watch the world go by. Build the front of the cafe so that a set of tables stretch out of the cafe, right into the street.",
    bookPage: 436,
  },
  {
    number: 89,
    name: "Corner Grocery",
    category: "towns",
    asterisks: 1,
    biggerLinks: [14, 19, 46],
    smallerLinks: [87, 95, 110, 165, 191, 197, 200],
    problem:
      "It has lately been assumed that people no longer want to walk to local stores. This assumption is mistaken.",
    therefore:
      "Give every neighborhood at least one corner grocery, somewhere near its heart. Place these corner groceries every 200 to 8oo yards, according to the density, so that each one serves about 1000 people. Place them on corners, where large numbers of people are going past. And combine them with houses, so that the people who run them can live over them or next to them.",
    bookPage: 440,
  },
  {
    number: 90,
    name: "Beer Hall",
    category: "towns",
    asterisks: 0,
    biggerLinks: [15, 31, 33],
    smallerLinks: [95, 179, 181, 190],
    problem:
      "Where can people sing, and drink, and shout and drink, and let go of their sorrows?",
    therefore:
      "Somewhere in the community at least one big place where a few hundred people can gather, with beer and wine, music, and perhaps a half-dozen activities, so that people are continuously criss-crossing from one to another.",
    bookPage: 444,
  },
  {
    number: 91,
    name: "Travelers Inn",
    category: "towns",
    asterisks: 1,
    biggerLinks: [10, 30, 31, 33, 41],
    smallerLinks: [65, 90, 94, 95, 129, 147, 186],
    problem:
      "A man who stays the night in a strange place is still a member of the human community, and still needs company. There is no reason why he should creep into a hole, and watch TV alone, the way he does in a roadside motel.",
    therefore:
      "Make the traveler's inn a place where travelers can take rooms for the night, but where - unlike most hotels and motels - the inn draws all its energy from the community of travelers that are there any given evening. The scale is small - 30 or 40 guests to an inn; meals are offered communally; there is even a large space ringed round with beds in alcoves.",
    bookPage: 448,
  },
  {
    number: 92,
    name: "Bus Stop",
    category: "towns",
    asterisks: 1,
    biggerLinks: [20],
    smallerLinks: [53, 69, 93, 121, 150, 241],
    problem:
      "Bus stops must be easy to recognize, and pleasant, with enough activity around them to make people comfortable and safe.",
    therefore:
      "Build bus stops so that they form tiny centers of public life. Build them as part of the gateways into neighborhoods, work communities, parts of town. Locate them so that they work together with several other activities, at least a newsstand, maps, outdoor shelter, seats, and in various combinations, corner groceries, smoke shops, coffee bar, tree places, special road crossings, public bathrooms, squares. . . .",
    bookPage: 451,
  },
  {
    number: 93,
    name: "Food Stands",
    category: "towns",
    asterisks: 1,
    biggerLinks: [30, 54, 55, 61, 92],
    smallerLinks: [87, 124, 244],
    problem:
      "Many of our habits and institutions are bolstered by the fact that we can get simple, inexpensive food on the street, on the way to shopping, work, and friends.",
    therefore:
      "Concentrate food stands where cars and paths meet - either portable stands or small huts, or built into the fronts of buildings, half-open to the street.",
    bookPage: 454,
  },
  {
    number: 94,
    name: "Sleeping in Public",
    category: "towns",
    asterisks: 0,
    biggerLinks: [34, 62, 69, 88, 100, 101, 150],
    smallerLinks: [160, 188, 241],
    problem:
      "It is a mark of success in a park, public lobby or a porch, when people can come there and fall asleep.",
    therefore:
      "Keep the environment filled with ample benches, comfortable places, corners to sit on the ground, or lie in comfort in the sand. Make these places relatively sheltered, protected from circulation, perhaps up a step, with seats and grass to slump down upon, read the paper and doze off.",
    bookPage: 457,
  },
  {
    number: 95,
    name: "Building Complex",
    category: "buildings",
    asterisks: 2,
    biggerLinks: [96],
    smallerLinks: [98, 99, 104, 105, 107, 109, 110, 119, 122, 205],
    problem:
      "A building cannot be a human building unless it is a complex of still smaller buildings or smaller parts which manifest its own internal social facts.",
    therefore:
      "Never build large monolithic buildings. Whenever possible translate your building program into a building complex, whose parts manifest the actual social facts of the situation. At low densities, a building complex may take the form of a collection of small buildings connected by arcades, paths, bridges, shared gardens, and walls.",
    bookPage: 468,
  },
  {
    number: 96,
    name: "Number of Stories",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [21, 95],
    smallerLinks: [99, 104, 105, 116, 117, 118, 171, 205, 213],
    problem:
      "Within the four-story height limit, just exactly how high should your buildings be?",
    therefore:
      "First, decide how many square feet of built space you need, and divide by the area of the site to get the floor area ratio. Then choose the height of your buildings according to the floor area ratio and the height of the surrounding buildings from the following table. In no case build on more than 50 per cent of the land.",
    bookPage: 473,
  },
  {
    number: 97,
    name: "Shielded Parking",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [11, 22, 95],
    smallerLinks: [39, 48, 87, 98, 102, 110, 135, 158, 166, 205, 244],
    problem:
      "Large parking structures full of cars are inhuman and dead buildings - no one wants to see them or walk by them. At the same time, if you are driving, the entrance to a parking structure is essentially the main entrance to the building - and it needs to be visible.",
    therefore:
      "Put all large parking lots, or parking garages, behind some kind of natural wall, so that the cars and parking structures cannot be seen from outside. The wall which surrounds the cars may be a building, connected houses, or housing hills, earth berms, or shops. Make the entrance to the parking lot a natural gateway to the buildings which it serves, and place it so that you can easily see the main entrance to the building from the entrance to the parking.",
    bookPage: 477,
  },
  {
    number: 98,
    name: "Circulation Realms",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [95, 96],
    smallerLinks: [53, 67, 99, 100, 101, 102, 110, 114, 115, 120],
    problem:
      "In many modern building complexes the problem of disorientation is acute. People have no idea where they are, and they experience considerable mental stress as a result.",
    therefore:
      "Lay out very large buildings and collections of small buildings so that one reaches a given point inside by passing through a sequence of realms, each marked by a gateway and becoming smaller and smaller, as one passes from each one, through a gateway, to the next. Choose the realms so that each one can be easily named, so that you can tell a person where to go, simply by telling him which realms to go through.",
    bookPage: 480,
  },
  {
    number: 99,
    name: "Main Building",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [95, 96, 98],
    smallerLinks: [116, 129, 205],
    problem:
      "A complex of buildings with no center is like a man without a head.",
    therefore:
      "For any collection of buildings, decide which building in the group houses the most essential function - which building is the soul of the group, as a human institution. Then form this building as the main building, with a central position, higher roof. Even if the building complex is so dense that it is a single building, build the main part of it higher and more prominent than the rest, so that the eye goes immediately to the part which is the most important.",
    bookPage: 485,
  },
  {
    number: 100,
    name: "Pedestrian Street",
    category: "buildings",
    asterisks: 2,
    biggerLinks: [31, 32, 38, 39, 43, 46, 52, 55, 95, 98],
    smallerLinks: [102, 119, 121, 123, 140, 158, 164, 165, 166, 167],
    problem:
      'The simple social intercourse created when people rub shoulders in public is one of the most essential kinds of social "glue" in society.',
    therefore:
      "Arrange buildings so that they form pedestrian streets with many entrances and open stairs directly from the upper stories to the street, so that even movement between rooms is outdoors, not just movement between buildings.",
    bookPage: 488,
  },
  {
    number: 101,
    name: "Building Thoroughfare",
    category: "buildings",
    asterisks: 0,
    biggerLinks: [95, 98, 100],
    smallerLinks: [100, 102, 123, 124, 135, 149, 158, 180, 190, 194, 237],
    problem:
      "When a public building complex cannot be completely served by outdoor pedestrian streets, a new form of indoor street, quite different from the conventional corridor, is needed.",
    therefore:
      "Wherever density or climate force the main lines of circulation indoors, build them as building thoroughfares. Place each thoroughfare in a position where it functions as a shortcut, as continuous as possible with the public street outside, with wide open entrances. And line its edges with windows, places to sit, counters, and entrances which project out into the hall and expose the buildings' main functions to the public. Make it wider than a normal corridor - at least 11 feet wide and more usually, 15 to 20 feet wide; give it a high ceiling, at least 15 feet, with a glazed roof if possible and low places along the edge. If the street is several stories high, then the walkways along the edges, on the different stories, can be used to form the low places.",
    bookPage: 492,
  },
  {
    number: 102,
    name: "Family of Entrances",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [98],
    smallerLinks: [110, 112, 130, 149],
    problem:
      "When a person arrives in a complex of offices, or services or workshops, or in a group of related houses, there is a good chance he will experience confusion unless the whole collection is laid out before him, so that he can see the entrance of the place where he is going.",
    therefore:
      "Lay out the entrances to form a family. This means: 1. They form a group, are visible together, and each is visible from all the others. 2. They are all broadly similar, for instance all porches, or all gates in a wall, or all marked by a similar kind of doorway.",
    bookPage: 499,
  },
  {
    number: 103,
    name: "Small Parking Lots",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [22, 32, 37, 41, 51, 53, 97, 98],
    smallerLinks: [98, 106, 171, 173],
    problem: "Vast parking lots wreck the land for people.",
    therefore:
      "Make parking lots small, serving no more than five to seven cars, each lot surrounded by garden walls, hedges, fences, slopes, and trees, so that from outside the cars are almost invisible. Space these small lots so that they are at least 100 feet apart.",
    bookPage: 503,
  },
  {
    number: 104,
    name: "Site Repair",
    category: "buildings",
    asterisks: 2,
    biggerLinks: [95, 96, 98],
    smallerLinks: [105, 106, 107, 109, 169, 171, 172],
    problem:
      "Buildings must always be built on those parts of the land which are in the worst condition, not the best.",
    therefore:
      "On no account place buildings in the places which are most beautiful. In fact, do the opposite. Consider the site and its buildings as a single living eco-system. Leave those areas that are the most precious, beautiful, comfortable, and healthy as they are, and build new structures in those parts of the site which are least pleasant now.",
    bookPage: 508,
  },
  {
    number: 105,
    name: "South Facing Outdoors",
    category: "buildings",
    asterisks: 2,
    biggerLinks: [104],
    smallerLinks: [106, 107, 111, 128, 161, 162],
    problem:
      "People use open space if it is sunny, and do not use it if it isn't, in all but desert climates.",
    therefore:
      "Always place buildings to the north of the outdoor spaces that go with them, and keep the outdoor spaces to the south. Never leave a deep band of shade between the building and the sunny part of the outdoors.",
    bookPage: 513,
  },
  {
    number: 106,
    name: "Positive Outdoor Space",
    category: "buildings",
    asterisks: 2,
    biggerLinks: [105, 107],
    smallerLinks: [107, 114, 115, 118, 121, 122, 160, 163, 171, 172, 173, 174],
    problem:
      'Outdoor spaces which are merely "left over" between buildings will, in general, not be used.',
    therefore:
      "Make all the outdoor spaces which surround and lie between your buildings positive. Give each one some degree of enclosure; surround each space with wings of buildings, trees, hedges, fences, arcades, and trellised walks, until it becomes an entity with a positive quality and does not spill out indefinitely around corners.",
    bookPage: 517,
  },
  {
    number: 107,
    name: "Wings of Light",
    category: "buildings",
    asterisks: 2,
    biggerLinks: [75, 76, 77, 78, 80, 81, 82, 83, 87, 105, 106],
    smallerLinks: [106, 108, 116, 119, 132, 159, 205],
    problem:
      "Modern buildings are often shaped with no concern for natural light - they depend almost entirely on artificial light. But buildings which displace natural light as the major source of illumination are not fit places to spend the day.",
    therefore:
      "Arrange each building so that it breaks down into wings which correspond, approximately, to the most important natural social groups within the building. Make each wing long and as narrow as you can - never more than 25 feet wide.",
    bookPage: 524,
  },
  {
    number: 108,
    name: "Connected Buildings",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [95, 106, 107],
    smallerLinks: [115, 119, 163],
    problem: "Isolated buildings are symptoms of a disconnected sick society.",
    therefore:
      "Connect your building up, wherever possible, to the existing buildings round about. Do not keep set backs between buildings; instead, try to form new buildings as continuations of the older buildings.",
    bookPage: 531,
  },
  {
    number: 109,
    name: "Long Thin House",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [106],
    smallerLinks: [106, 116, 127, 129],
    problem:
      "The shape of a building has a great effect on the relative degrees of privacy and overcrowding in it, and this in turn has a critical effect on people's comfort and well being.",
    therefore:
      "In small buildings, don't cluster all the rooms together around each other; instead string out the rooms one after another, so that distance between each room is as great as it can be. You can do this horizontally - so that the plan becomes a thin, long rectangle; or you can do it vertically - so that the building becomes a tall narrow tower. In either case, the building can be surprisingly narrow and still work - 8, 10, and 112 feet are all quite possible.",
    bookPage: 535,
  },
  {
    number: 110,
    name: "Main Entrance",
    category: "buildings",
    asterisks: 2,
    biggerLinks: [98, 102, 104, 105, 107],
    smallerLinks: [97, 102, 112, 113, 130],
    problem:
      "Placing the main entrance (or main entrances) is perhaps the single most important step you take during the evolution of a building plan.",
    therefore:
      "Place the main entrance of the building at a point where it can be seen immediately from the main avenues of approach and give it a bold, visible shape which stands out in front of the building.",
    bookPage: 540,
  },
  {
    number: 111,
    name: "Half-Hidden Garden",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [37, 38, 41, 79, 95, 104, 105],
    smallerLinks: [110, 112, 115, 118, 140, 172, 173],
    problem:
      "If a garden is too close to the street, people won't use it because it isn't private enough. But if it is too far from the street, then it won't be used either, because it is too isolated.",
    therefore:
      "Do not place the garden fully in front of the house, nor fully to the back. Instead, place it in some kind of half-way position, side-by-side with the house, in a position which is half-hidden from the street, and half-exposed.",
    bookPage: 545,
  },
  {
    number: 112,
    name: "Entrance Transition",
    category: "buildings",
    asterisks: 2,
    biggerLinks: [53, 102, 110, 111],
    smallerLinks: [127, 130, 134, 135, 173, 174],
    problem:
      "Buildings, and especially houses, with a graceful transition between the street and the inside, are more tranquil than those which open directly off the street.",
    therefore:
      "Make a transition space between the street and the front door. Bring the path which connects street and entrance through this transition space, and mark it with a change of light, a change of sound, a change of direction, a change of surface, a change of level, perhaps by gateways which make a change of enclosure, and above all with a change of view.",
    bookPage: 548,
  },
  {
    number: 113,
    name: "Car Connection",
    category: "buildings",
    asterisks: 0,
    biggerLinks: [110, 112],
    smallerLinks: [112, 119, 120, 127, 129, 162, 163, 205, 245],
    problem:
      "The process of arriving in a house, and leaving it, is fundamental to our daily fives; and very often it involves a car. But the place where cars connect to houses, far from being important and beautiful, is often off to one side and neglected.",
    therefore:
      "Place the parking place for the car and the main entrance, in such a relation to each other, that the shortest route from the parked car into the house, both to the kitchen and to the living rooms, is always through the main entrance. Make the parking place for the car into an actual room which makes a positive and graceful place where the car stands, not just a gap in the terrain.",
    bookPage: 553,
  },
  {
    number: 114,
    name: "Hierarchy of Open Space",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [104, 105, 106],
    smallerLinks: [7, 49, 51, 60, 61, 67, 106, 124, 140, 176],
    problem:
      "Outdoors, people always try to find a spot where they can have their backs protected, looking out toward some larger opening, beyond the space immediately in front of them.",
    therefore:
      "Whatever space you are shaping - whether it is a garden, terrace, street, park, public outdoor room, or courtyard, make sure of two things. First, make at least one smaller space, which looks into it and forms a natural back for it. Second, place it, and its openings, so that it looks into at least one larger space.",
    bookPage: 557,
  },
  {
    number: 115,
    name: "Courtyards which Live",
    category: "buildings",
    asterisks: 2,
    biggerLinks: [106, 114],
    smallerLinks: [114, 119, 126, 134, 161, 163, 166, 167, 173, 209],
    problem:
      "The courtyards built in modern buildings are very often dead. They are intended to be private open spaces for people to use - but they end up unused, full of gravel and abstract sculptures.",
    therefore:
      "Place every courtyard in such a way that there is a view out of it to some larger open space; place it so that at least two or three doors open from the building into it and so that the natural paths which connect these doors pass across the courtyard. And, at one edge, beside a door, make a roofed veranda or a porch, which is continuous with both the inside and the courtyard.",
    bookPage: 561,
  },
  {
    number: 116,
    name: "Cascade of Roofs",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [95, 96, 99, 107],
    smallerLinks: [117, 118, 190, 205, 209],
    problem:
      "Few buildings will be structurally and socially intact, unless the floors step down toward the ends of wings, and unless the roof, accordingly, forms a cascade.",
    therefore:
      "Visualize the whole building, or building complex, as a system of roofs.",
    bookPage: 565,
  },
  {
    number: 117,
    name: "Sheltering Roof",
    category: "buildings",
    asterisks: 2,
    biggerLinks: [107, 116],
    smallerLinks: [118, 119, 145, 166, 209, 220, 231],
    problem:
      "The roof plays a primal role in our lives. The most primitive buildings are nothing but a roof. If the roof is hidden, if its presence cannot be felt around the building, or if it cannot be used, then people will lack a fundamental sense of shelter.",
    therefore:
      "Slope the roof or make a vault of it, make its entire surface visible, and bring the eaves of the roof down low, as low as 6'0\" or 6'6\" at places like the entrance, where people pause. Build the top story of each wing right into the roof, so that the roof does not only cover it, but actually surrounds it.",
    bookPage: 569,
  },
  {
    number: 118,
    name: "Roof Garden",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [107, 116, 117],
    smallerLinks: [107, 140, 161, 163, 166, 167, 177, 244, 245, 246],
    problem:
      "A vast part of the earth's surface, in a town, consists of roofs. Couple this with the fact that the total area of a town which can be exposed to the sun is finite, and you will realize that is is natural, and indeed essential, to make roofs which take advantage of the sun and air.",
    therefore:
      "Make parts of almost every roof system usable as roof gardens. Make these parts flat, perhaps terraced for planting, with places to sit and sleep, private places. Place the roof gardens at various stories, and always make it possible to walk directly out onto the roof garden from some lived-in part of the building.",
    bookPage: 575,
  },
  {
    number: 119,
    name: "Arcades",
    category: "buildings",
    asterisks: 2,
    biggerLinks: [98, 100, 108, 116],
    smallerLinks: [117, 160, 190, 193, 205, 211, 224, 226, 227],
    problem:
      "Arcades - covered walkways at the edge of buildings, which are partly inside, partly outside - play a vital role in the way that people interact with buildings.",
    therefore:
      "Wherever paths run along the edge of buildings, build arcades, and use the arcades, above all, to connect up the buildings to one another, so that a person can walk from place to place under the cover of the arcades.",
    bookPage: 580,
  },
  {
    number: 120,
    name: "Paths and Goals",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [36, 52, 95, 98, 106, 107, 119],
    smallerLinks: [102, 110, 121, 126, 171, 241, 245, 247],
    problem:
      "The layout of paths will seem right and comfortable only when it is compatible with the process of walking. And the process of walking is far more subtle than one might imagine.",
    therefore:
      "To lay out paths, first place goals at natural points of interest. Then connect the goals to one another to form the paths. The paths may be straight, or gently curving between goals; their paving should swell around the goal. The goals should never be more than a few hundred feet apart.",
    bookPage: 585,
  },
  {
    number: 121,
    name: "Path Shape",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [31, 32, 52, 55, 100, 120],
    smallerLinks: [69, 119, 122, 123, 124, 125, 164],
    problem:
      "Streets should be for staying in, and not just for moving through, the way they are today.",
    therefore:
      "Make a bulge in the middle of a public path, and make the ends narrower, so that the path forms an enclosure which is a place to stay, not just a place to pass through.",
    bookPage: 589,
  },
  {
    number: 122,
    name: "Building Fronts",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [95, 106, 107, 119, 121, 124],
    smallerLinks: [125, 140, 158, 160, 164, 165, 166, 242],
    problem:
      "Building set-backs from the street, originally invented to protect the public welfare by giving every building light and air, have actually helped greatly to destroy the street as a social space.",
    therefore:
      "On no account allow set-backs between streets or paths or public open land and the buildings which front on them. The set-backs do nothing valuable and almost always destroy the value of the open areas between the buildings. Build right up to the paths; change the laws in all communities where obsolete by-laws make this impossible. And let the building fronts take on slightly uneven angles as they accommodate to the shape of the street.",
    bookPage: 593,
  },
  {
    number: 123,
    name: "Pedestrian Density",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [31, 61, 100, 101, 121],
    smallerLinks: [88, 124, 125, 140, 160, 164, 165, 166],
    problem:
      "Many of our modern public squares, though intended as lively plazas, are in fact deserted and dead.",
    therefore:
      "For public squares, courts, pedestrian streets, any place where crowds are drawn together, estimate the mean number of people in the place at any given moment (P), and make the area of the place between 150P and 300P square feet.",
    bookPage: 596,
  },
  {
    number: 124,
    name: "Activity Pockets",
    category: "buildings",
    asterisks: 2,
    biggerLinks: [31, 61, 69, 100, 101, 121],
    smallerLinks: [88, 92, 93, 119, 120, 122, 150, 163, 174, 241, 243],
    problem:
      "The life of a public square forms naturally around its edge. If the edge fails, then the space never becomes lively.",
    therefore:
      "Surround public gathering places with pockets of activity - small, partly enclosed areas at the edges, which jut forward into the open space between the paths, and contain activities which make it natural for people to pause and get involved.",
    bookPage: 599,
  },
  {
    number: 125,
    name: "Stair Seats",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [61, 102, 106, 110, 121, 158],
    smallerLinks: [168, 241, 248],
    problem:
      "Wherever there is action in a place, the spots which are the most inviting, are those high enough to give people a vantage point, and low enough to put them in action.",
    therefore:
      "In any public place where people loiter, add a few steps at the edge where stairs come down or where there is a change of level. Make these raised areas immediately accessible from below, so that people may congregate and sit to watch the goings-on.",
    bookPage: 603,
  },
  {
    number: 126,
    name: "Something Roughly in the Middle",
    category: "buildings",
    asterisks: 0,
    biggerLinks: [61, 67, 115, 121, 124, 125],
    smallerLinks: [62, 63, 64, 69, 71, 120, 171, 243],
    problem: "A public space without a middle is quite likely to stay empty.",
    therefore:
      "Between the natural paths which cross a public square or courtyard or a piece of common land choose something to stand roughly in the middle: a fountain, a tree, a statue, a clock-tower with seats, a windmill, a bandstand. Make it something which gives a strong and steady pulse to the square, drawing people in toward the center. Leave it exactly where it falls between the paths; resist the impulse to put it exactly in the middle.",
    bookPage: 606,
  },
  {
    number: 127,
    name: "Intimacy Gradient",
    category: "buildings",
    asterisks: 2,
    biggerLinks: [96, 107, 110],
    smallerLinks: [129, 130, 141, 142, 144, 149, 152],
    problem:
      "Unless the spaces in a building are arranged in a sequence which corresponds to their degrees of privateness, the visits made by strangers, friends, guests, clients, family, will always be a little awkward.",
    therefore:
      "Lay out the spaces of a building so that they create a sequence which begins with the entrance and the most public parts of the building, then leads into the slightly more private areas, and finally to the most private domains.",
    bookPage: 610,
  },
  {
    number: 128,
    name: "Indoor Sunlight",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [105, 127],
    smallerLinks: [138, 157, 161, 162, 163, 183, 199, 236],
    problem:
      "If the right rooms are facing south, a house is bright and sunny and cheerful; if the wrong rooms are facing south, the house is dark and gloomy.",
    therefore:
      "Place the most important rooms along the south edge of the building, and spread the building out along the east-west axis. Fine tune the arrangement so that the proper rooms are exposed to the south-east and the south-west sun. For example: give the common area a full southern exposure, bedrooms south-east, porch south-west. For most climates, this means the shape of the building is elongated east-west.",
    bookPage: 614,
  },
  {
    number: 129,
    name: "Common Areas at the Heart",
    category: "buildings",
    asterisks: 2,
    biggerLinks: [127, 128],
    smallerLinks: [119, 131, 132, 139, 142, 147, 159, 163, 181, 191],
    problem:
      "No social group - whether a family, a work group, or a school group - can survive without constant informal contact among its members.",
    therefore:
      "Create a single common area for every social group. Locate it at the center of gravity of all the spaces the group occupies, and in such a way that the paths which go in and out of the building lie tangent to it.",
    bookPage: 618,
  },
  {
    number: 130,
    name: "Entrance Room",
    category: "buildings",
    asterisks: 2,
    biggerLinks: [102, 110, 112, 113, 140],
    smallerLinks: [102, 135, 142, 159, 166, 191, 201, 202, 237, 242],
    problem:
      "Arriving in a building, or leaving it, you need a room to pass through, both inside the building and outside it. This is the entrance room.",
    therefore:
      "At the main entrance to a building, make a light-filled room which marks the entrance and straddles the boundary between indoors and outdoors, covering some space outdoors and some space indoors. The outside part may be like an old-fashioned porch; the inside like a hall or sitting room.",
    bookPage: 622,
  },
  {
    number: 131,
    name: "The Flow Through Rooms",
    category: "buildings",
    asterisks: 0,
    biggerLinks: [127, 129],
    smallerLinks: [130, 132, 134, 135, 153, 159, 196],
    problem:
      "The movement between rooms is as important as the rooms themselves; and its arrangement has as much effect on social interaction in the rooms, as the interiors of the rooms.",
    therefore:
      "As far as possible, avoid the use of corridors and passages. Instead, use public rooms and common rooms as rooms for movement and for gathering. To do this, place the common rooms to form a chain, or loop, so that it becomes possible to walk from room to room - and so that private rooms open directly off these public rooms. In every case, give this indoor circulation from room to room a feeling of great generosity, passing in a wide and ample loop around the house, with views of fires and great windows.",
    bookPage: 627,
  },
  {
    number: 132,
    name: "Short Passages",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [98, 101, 131],
    smallerLinks: [159, 163, 166, 179, 180, 191, 194, 197, 198, 222, 237],
    problem:
      '". . . long, sterile corridors set the scene for everything bad about modern architecture."',
    therefore:
      "Keep passages short. Make them as much like rooms as possible, with carpets or wood on the floor, furniture, bookshelves, beautiful windows. Make them generous in shape, and always give them plenty of light; the best corridors and passages of all are those which have windows along an entire wall.",
    bookPage: 632,
  },
  {
    number: 133,
    name: "Staircase as a Stage",
    category: "buildings",
    asterisks: 0,
    biggerLinks: [110, 131, 132],
    smallerLinks: [125, 134, 135, 191, 195],
    problem:
      "A staircase is not just a way of getting from one floor to another. The stair is itself a space, a volume, a part of the building; and unless this space is made to live, it will be a dead spot, and work to disconnect the building and to tear its processes apart.",
    therefore:
      "Place the main stair in a key position, central and visible. Treat the whole staircase as a room (or if it is outside, as a courtyard). Arrange it so that the stair and the room are one, with the stair coming down around one or two walls of the room. Flare out the bottom of the stair with open windows or balustrades and with wide-steps so that the people coming down the stair become part of the action in the room while they are on the stair, and so that people below will naturally use the stair for seats.",
    bookPage: 637,
  },
  {
    number: 134,
    name: "Zen View",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [112, 120, 130, 132, 133],
    smallerLinks: [135, 180, 221],
    problem:
      "The archetypal zen view occurs in a famous Japanese house, which gives this pattern its name.",
    therefore:
      "If there is a beautiful view, don't spoil it by building huge windows that gape incessantly at it. Instead, put the windows which look onto the view at places of transition along paths, in hallways, in entry ways, on stairs, between rooms. If the view window is correctly placed, people will see a glimpse of the distant view as they come up to the window or pass it: but the view is never visible from the places where people stay.",
    bookPage: 641,
  },
  {
    number: 135,
    name: "Tapestry of Light and Dark",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [131, 132, 133, 134],
    smallerLinks: [180, 250, 252],
    problem:
      'In a building with uniform light level, there are few "places" which function as effective settings for human events. This happens because, to a large extent, the places which make effective settings are defined by light.',
    therefore:
      "Create alternating areas of light and dark throughout the building, in such a way that people naturally walk toward the light, whenever they are going to important places: seats, entrances, stairs, passages, places of special beauty, and make other areas darker, to increase the contrast.",
    bookPage: 644,
  },
  {
    number: 136,
    name: "Couple's Realm",
    category: "buildings",
    asterisks: 0,
    biggerLinks: [75, 76, 77, 127],
    smallerLinks: [138, 144, 159, 185, 187, 189, 191, 198, 224],
    problem:
      "The presence of children in a family often destroys the closeness and the special privacy which a man and wife need together.",
    therefore:
      "Make a special part of the house distinct from the common areas and all the children's rooms, where the man and woman of the house can be together in private. Give this place a quick path to the children's rooms, but, at all costs, make it a distinctly separate realm.",
    bookPage: 648,
  },
  {
    number: 137,
    name: "Children's Realm",
    category: "buildings",
    asterisks: 0,
    biggerLinks: [68, 76, 129, 136],
    smallerLinks: [132, 139, 143, 144, 157, 163],
    problem:
      "If children do not have space to release a tremendous amount of energy when they need to, they will drive themselves and everybody else in the family up the wall.",
    therefore:
      "Start by placing the small area which will belong entirely to the children - the cluster of their beds. Place it in a separate position toward the back of the house, and in such a way that a continuous playspace can be made from this cluster to the street, almost like a wide swath inside the house, muddy, toys strewn along the way, touching those family rooms which children need - the bathroom and the kitchen most of all - passing the common area along one side (but leaving quiet sitting areas and the couple's realm entirely separate and inviolate), reaching out to the street, either through its own door or through the entrance room, and ending in an outdoor room, connected to the street, and sheltered, and large enough so that the children can play in it when it rains, yet still be outdoors.",
    bookPage: 651,
  },
  {
    number: 138,
    name: "Sleeping to the East",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [127, 128, 136, 137],
    smallerLinks: [136, 143, 180, 187, 188, 221, 238],
    problem:
      "This is one of the patterns people most often disagree with. However, we believe they are mistaken.",
    therefore:
      "Give those parts of the house where people sleep, an eastern orientation, so that they wake up with the sun and light. This means, typically, that the sleeping area needs to be on the eastern side of the house; but it can also be on the western side provided there is a courtyard or a terrace to the east of it.",
    bookPage: 656,
  },
  {
    number: 139,
    name: "Farmhouse Kitchen",
    category: "buildings",
    asterisks: 2,
    biggerLinks: [129, 147],
    smallerLinks: [142, 159, 179, 182, 184, 191, 199, 200, 201],
    problem:
      "The isolated kitchen, separate from the family and considered as an efficient but unpleasant factory for food is a hangover from the days of servants; and from the more recent days when women willingly took over the servants' role.",
    therefore:
      'Make the kitchen bigger than usual, big enough to include the "family room" space, and place it near the center of the commons, not so far back in the house as an ordinary kitchen. Make it large enough to hold a good big table and chairs, some soft and some hard, with counters and stove and sink around the edge of the room; and make it a bright and comfortable room.',
    bookPage: 660,
  },
  {
    number: 140,
    name: "Private Terrace on the Street",
    category: "buildings",
    asterisks: 2,
    biggerLinks: [51, 100, 111, 129, 142],
    smallerLinks: [163, 169, 173, 193, 243],
    problem:
      "The relationship of a house to a street is often confused: either the house opens entirely to the street and there is no privacy; or the house turns its back on the street, and communion with street life is lost.",
    therefore:
      "Let the common rooms open onto a wide terrace or a porch which looks into the street. Raise the terrace slightly above street level and protect it with a low wall, which you can see over if you sit near it, but which prevents people on the street from looking into the common rooms.",
    bookPage: 664,
  },
  {
    number: 141,
    name: "A Room of One",
    category: "buildings",
    asterisks: 0,
    biggerLinks: [75, 76, 77, 127, 129],
    smallerLinks: [129, 154, 155, 157, 159, 179, 183, 188, 189, 191, 253],
    problem:
      "No one can be close to others, without also having frequent opportunities to be alone.",
    therefore:
      "Give each member of the family a room of his own, especially adults. A minimum room of one's own is an alcove with desk, shelves, and curtain. The maximum is a cottage - like a Teenager's Cottage (154), or an Old Age Cottage (155). In all cases, especially the adult ones, place these rooms at the far ends of the intimacy gradient - far from the common rooms.",
    bookPage: 668,
  },
  {
    number: 142,
    name: "Sequence of Sitting Spaces",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [127],
    smallerLinks: [
      129, 130, 134, 136, 139, 140, 141, 146, 150, 152, 180, 181, 185, 191, 241,
    ],
    problem:
      "Every corner of a building is a potential sitting space. But each sitting space has different needs for comfort and enclosure according to its position in the intimacy gradient.",
    therefore:
      "Put in a sequence of graded sitting spaces throughout the building, varying according to their degree of enclosure. Enclose the most formal ones entirely, in rooms by themselves; put the least formal ones in corners of other rooms, without any kind of screen around them; and place the intermediate one with a partial enclosure round them to keep them connected to some larger space, but also partly separate.",
    bookPage: 673,
  },
  {
    number: 143,
    name: "Bed Cluster",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [136, 137, 138],
    smallerLinks: [137, 159, 186, 188, 189, 191, 198, 203],
    problem:
      "Every child in the family needs a private place, generally centered around the bed. But in many cultures, perhaps all cultures, young children feel isolated if they sleep alone, if their sleeping area is too private.",
    therefore:
      "Place the children's beds in alcoves or small alcove-like rooms, around a common playspace. Make each alcove large enough to contain a table, or chair, or shelves - at least some floor area, where each child has his own things. Give the alcoves curtains looking into the common space, but not walls or doors, which will tend once more to isolate the beds too greatly.",
    bookPage: 676,
  },
  {
    number: 144,
    name: "Bathing Room",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [127, 129, 136, 137, 138, 143],
    smallerLinks: [71, 159, 173, 178, 191, 238],
    problem:
      '"The motions we call bathing are mere ablutions which formerly preceded the bath. The place where they are performed, though adequate for the routine, does not deserve to be called a bathroom." -Bernard Rudofsky',
    therefore:
      "Concentrate the bathing room, toilets, showers, and basins of the house in a single tiled area. Locate this bathing room beside the couple's realm - with private access - in a position half-way between the private secluded parts of the house and the common areas; if possible, give it access to the outdoors; perhaps a tiny balcony or walled garden.",
    bookPage: 681,
  },
  {
    number: 145,
    name: "Bulk Storage",
    category: "buildings",
    asterisks: 0,
    biggerLinks: [76, 80, 87, 95],
    smallerLinks: [117, 153, 162, 169, 215],
    problem:
      "In houses and workplaces there is always some need for bulk storage space; a place for things like suitcases, old furniture, old files, boxes - all those things which you are not ready to throw away, and yet not using everyday.",
    therefore:
      "Do not leave bulk storage till last or forget it. Include a volume for bulk storage in the building - its floor area at least 15 to 20 per cent of the whole building area - not less. Place this storage somewhere in the building where it costs less than other rooms - because, of course, it doesn't need a finish.",
    bookPage: 687,
  },
  {
    number: 146,
    name: "Flexible Office Space",
    category: "buildings",
    asterisks: 0,
    biggerLinks: [80, 82, 127, 129],
    smallerLinks: [147, 148, 149, 152, 159, 190, 226],
    problem:
      "Is it possible to create a kind of space which is specifically tuned to the needs of people working, and yet capable of an infinite number of various arrangements and combinations within it?",
    therefore:
      "Lay out the office space as wings of open space, with free standing columns around their edges, so they define half-private and common spaces opening into one another. Set down enough columns so that people can fill them in over the years, in many different ways - but always in a semipermanent fashion.",
    bookPage: 690,
  },
  {
    number: 147,
    name: "Communal Eating",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [75, 80, 129],
    smallerLinks: [139, 148, 151, 182],
    problem: "Without communal eating, no human group can hold together.",
    therefore:
      "Give every institution and social group a place where people can eat together. Make the common meal a regular event. In particular, start a common lunch in every work place, so that a genuine meal around a common table (not out of boxes, machines, or bags) becomes an important, comfortable, and daily event with room for invited guests. In our own work group at the Center, we found this worked most beautifully when we took it in turns to cook the lunch. The lunch became an event: a gathering: something that each of us put our love and energy into, on our day to cook.",
    bookPage: 696,
  },
  {
    number: 148,
    name: "Small Work Groups",
    category: "buildings",
    asterisks: 2,
    biggerLinks: [80, 146],
    smallerLinks: [82, 83, 129, 146, 152, 158, 183],
    problem:
      "When more than half a dozen people work in the same place, it is essential that they not be forced to work in one huge undifferentiated space, but that instead, they can divide their workspace up, and so form smaller groups.",
    therefore:
      "Break institutions into small, spatially identifiable work groups, with less than half a dozen people in each. Arrange these work groups so that each person is in at least partial view of the other members of his own group; and arrange several groups in such a way that they share a common entrance, food, office equipment, drinking fountains, bathrooms.",
    bookPage: 701,
  },
  {
    number: 149,
    name: "Reception Welcomes You",
    category: "buildings",
    asterisks: 0,
    biggerLinks: [80, 81, 91, 130, 146],
    smallerLinks: [135, 150, 159, 179, 180, 181, 183, 191],
    problem:
      "Have you ever walked into a public building and been processed by the receptionist as if you were a package?",
    therefore:
      "Arrange a series of welcoming things immediately inside the entrance - soft chairs, a fireplace, food, coffee. Place the reception desk so that it is not between the receptionist and the welcoming area, but to one side at an angle - so that she, or he, can get up and walk toward the people who come in, greet them, and then invite them to sit down",
    bookPage: 705,
  },
  {
    number: 150,
    name: "A Place to Wait",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [34, 47, 81, 82],
    smallerLinks: [71, 88, 94, 159, 164, 165, 176, 180, 191],
    problem: "The process of waiting has inherent conflicts in it.",
    therefore:
      "In places where people end up waiting (for a bus, for an appointment, for a plane), create a situation which makes the waiting positive. Fuse the waiting with some other activity - newspaper, coffee, pool tables, horseshoes; something which draws people in who are not simply waiting. And also the opposite: make a place which can draw a person waiting into a reverie; quiet; a positive silence.",
    bookPage: 707,
  },
  {
    number: 151,
    name: "Small Meeting Rooms",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [43, 44, 83, 146, 148],
    smallerLinks: [159, 185, 191, 251, 252],
    problem:
      "The larger meetings are, the less people get out of them. But institutions often put their money and attention into large meeting rooms and lecture halls.",
    therefore:
      "Make at least 70 per cent of all meeting rooms really small - for 12 people or less. Locate them in the most public parts of the building, evenly scattered among the workplaces.",
    bookPage: 712,
  },
  {
    number: 152,
    name: "Half-Private Office",
    category: "buildings",
    asterisks: 0,
    biggerLinks: [127, 146, 148],
    smallerLinks: [159, 183, 185, 191, 192],
    problem:
      "What is the right balance between privacy and connection in office work?",
    therefore:
      "Avoid closed off, separate, or private offices. Make every workroom, whether it is for a group of two or three people or for one person, half-open to the other workgroups and the world immediately beyond it. At the front, just inside the door, make comfortable sitting space, with the actual workspace(s) away from the door, and further back.",
    bookPage: 717,
  },
  {
    number: 153,
    name: "Rooms to Rent",
    category: "buildings",
    asterisks: 0,
    biggerLinks: [45, 75, 80, 81, 146, 154, 155, 157],
    smallerLinks: [112, 154, 155, 157, 158, 159, 191],
    problem:
      "Very simply, when a family or a workgroup shrinks because one or two people leave, the space which becomes empty should be able to find a use. Otherwise, the people who stay behind will rattle around in a hollow shell which is too big for them. They may even be forced to sell their property and move because they cannot afford the upkeep of so big a place.",
    therefore:
      "Make at least some part of the building rentable: give it a private entrance over and above its regular connection to the rest of the house. Make sure that the regular entrance can be easily closed off without destroying the circulation in the house, and make sure that a bathroom can be directly reached from this room without having to go through the main house.",
    bookPage: 720,
  },
  {
    number: 154,
    name: "Teenager's cottage",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [75, 76, 141, 153],
    smallerLinks: [153, 157, 158, 185, 188, 191, 205],
    problem:
      "If a teenager's place in the home does not reflect his need for a measure of independence, he will be locked in conflict with his family.",
    therefore:
      "To mark a child's coming of age, transform his place in the home into a kind of cottage that expresses in a physical way the beginnings of independence. Keep the cottage attached to the home, but make it a distinctly visible bulge, far away from the master bedroom, with its own private entrance, perhaps its own roof.",
    bookPage: 723,
  },
  {
    number: 155,
    name: "Old Age Cottage",
    category: "buildings",
    asterisks: 2,
    biggerLinks: [40, 75, 153, 154],
    smallerLinks: [78, 140, 156, 164, 191, 205, 242],
    problem:
      "Old people, especially when they are alone, face a terrible dilemma. On the one hand, there are inescapable forces pushing them toward independence: their children move away; the neighborhood changes; their friends and wives and husbands die. On the other hand, by the very nature of aging, old people become dependent on simple conveniences, simple connections to the society about them.",
    therefore:
      "Build small cottages specifically for old people. Build some of them on the land of larger houses, for a grand parent; build others on individual lots, much smaller than ordinary lots. In all cases, place these cottages at ground level, right on the street, where people are walking by, and close to neighborhood services and common land.",
    bookPage: 729,
  },
  {
    number: 156,
    name: "Settled Work",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [75, 141, 155],
    smallerLinks: [140, 157, 165],
    problem:
      "The experience of settled work is a prerequisite for peace of mind in old age. Yet our society undermines this experience by making a rift between working life and retirement, and between workplace and home.",
    therefore:
      "Give each person, especially as he grows old, the chance to set up a workplace of his own, within or very near his home. Make it a place that can grow slowly, perhaps in the beginning sustaining a weekend hobby and gradually becoming a complete, productive, and comfortable workshop.",
    bookPage: 733,
  },
  {
    number: 157,
    name: "Home Workshop",
    category: "buildings",
    asterisks: 0,
    biggerLinks: [9, 18, 27, 37, 79],
    smallerLinks: [159, 161, 165, 183, 191, 192],
    problem:
      "As the decentralization of work becomes more and more effective, the workshop in the home grows and grows in importance.",
    therefore:
      "Make a place in the home, where substantial work can be done; not just a hobby, but a job. Change the zoning laws to encourage modest, quiet work operations to locate in neighborhoods. Give the workshop perhaps a few hundred square feet; and locate it so it can be seen from the street and the owner can hang out a shingle.",
    bookPage: 737,
  },
  {
    number: 158,
    name: "Open Stairs",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [76, 77, 78, 80, 81, 100, 148, 153, 154, 156, 157],
    smallerLinks: [102, 118, 125, 161, 195],
    problem:
      "Internal staircases reduce the connection between upper stories and the life of the street to such an extent that they can do enormous social damage.",
    therefore:
      "Do away, as far as possible, with internal staircases in institutions. Connect all autonomous households, public services, and workgroups on the upper floors of buildings directly to the ground. Do this by creating open stairs which are approached directly from the street. Keep the stair roofed or unroofed, according to climate, but at all events leave the stair open at ground level, without a door, so that the stair is functionally a continuation of the street. And build no upstairs corridors. Instead, make open landings or an open arcade where upstairs units share a single stair.",
    bookPage: 740,
  },
  {
    number: 159,
    name: "Light on Two Sides of Every Room",
    category: "buildings",
    asterisks: 2,
    biggerLinks: [106, 107, 109, 116],
    smallerLinks: [106, 180, 192, 209, 221, 223, 238],
    problem:
      "When they have a choice, people will always gravitate to those rooms which have light on two sides, and leave the rooms which are lit only from one side unused and empty.",
    therefore:
      "Locate each room so that it has outdoor space outside it on at least two sides, and then place windows in these outdoor walls so that natural light falls into every room from more than one direction.",
    bookPage: 746,
  },
  {
    number: 160,
    name: "Building Edge",
    category: "buildings",
    asterisks: 2,
    biggerLinks: [106, 107, 159],
    smallerLinks: [119, 125, 161, 162, 163, 164, 166, 167, 168, 241, 242],
    problem:
      "A building is most often thought of as something which turns inward - toward its rooms. People do not often think of a building as something which must also be oriented toward the outside.",
    therefore:
      'Make sure that you treat the edge of the building as a "thing," a "place," a zone with volume to it, not a line or interface which has no thickness. Crenelate the edge of buildings with places that invite people to stop. Make places that have depth and a covering, places to sit, lean, and walk, especially at those points along the perimeter which look onto interesting outdoor life.',
    bookPage: 752,
  },
  {
    number: 161,
    name: "Sunny Place",
    category: "buildings",
    asterisks: 2,
    biggerLinks: [105, 160, 163],
    smallerLinks: [140, 163, 167, 174, 238, 240, 244],
    problem:
      "The area immediately outside the building, to the south - that angle between its walls and the earth where the sun falls - must be developed and made into a place which lets people bask in it.",
    therefore:
      "Inside a south-facing court, or garden, or yard, find the spot between the building and the outdoors which gets the best sun. Develop this spot as a special sunny place - make it the important outdoor room, a place to work in the sun, or a place for a swing and some special plants, a place to sunbathe. Be very careful indeed to place the sunny place in a position where it is sheltered from the wind. A steady wind will prevent you from using the most beautiful place.",
    bookPage: 757,
  },
  {
    number: 162,
    name: "North Face",
    category: "buildings",
    asterisks: 0,
    biggerLinks: [105, 128, 161],
    smallerLinks: [113, 128, 145, 159, 173, 178, 198],
    problem:
      "Look at the north sides of the buildings which you know. Almost everywhere you will find that these are the spots which are dead and dank, gloomy and useless. Yet there are hundreds of acres in a town on the north sides of buildings; and it is inevitable that there must always be land in this position, wherever there are buildings.",
    therefore:
      "Make the north face of the building a cascade which slopes down to the ground, so that the sun which normally casts a long shadow to the north strikes the ground immediately beside the building.",
    bookPage: 761,
  },
  {
    number: 163,
    name: "Outdoor Room",
    category: "buildings",
    asterisks: 2,
    biggerLinks: [69, 111, 129, 139, 140, 142, 161],
    smallerLinks: [168, 173, 174, 191, 205, 226, 243, 244],
    problem:
      "A garden is the place for lying in the grass, swinging, croquet, growing flowers, throwing a ball for the dog. But there is another way of being outdoors: and its needs are not met by the garden at all.",
    therefore:
      'Build a place outdoors which has so much enclosure round it, that it takes on the feeling of a room, even though it is open to the sky. To do this, define it at the corners with columns, perhaps roof it partially with a trellis or a sliding canvas roof, and create "walls" around it, with fences, sitting walls, screens, hedges, or the exterior walls of the building itself.',
    bookPage: 764,
  },
  {
    number: 164,
    name: "Street Windows",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [51, 61, 100, 101],
    smallerLinks: [180, 236, 238, 246],
    problem:
      "A street without windows is blind and frightening. And it is equally uncomfortable to be in a house which bounds a public street with no window at all on the street.",
    therefore:
      "Where buildings run alongside busy streets, build windows with window seats, looking out onto the street. Place them in bedrooms or at some point on a passage or stair, where people keep passing by. On the first floor, keep these windows high enough to be private.",
    bookPage: 769,
  },
  {
    number: 165,
    name: "Opening to the Street",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [43, 44, 45, 46, 47, 88, 101, 164],
    smallerLinks: [121, 163, 243],
    problem:
      "The sight of action is an incentive for action. When people can see into spaces from the street their world is enlarged and made richer, there is more understanding; and there is the possibility for communication, learning.",
    therefore:
      "In any public space which depends for its success on its exposure to the street, open it up, with a fully opening wall which can be thrown wide open, and if it is possible, include some part of the activity on the far side of the pedestrian path, so that it actually straddles the path, and people walk through it as they walk along the path. There are dozens of ways to build such an opening. For example, a wall can be made very cheaply with a simple plywood hanging shutter sliding on an overhead rail, which can be removed to open up completely, and locked in place at night.",
    bookPage: 773,
  },
  {
    number: 166,
    name: "Gallery Surround",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [100, 118, 119, 160],
    smallerLinks: [140, 163, 167, 193, 226],
    problem:
      "If people cannot walk out from the building onto balconies and terraces which look toward the outdoor space around the building, then neither they themselves nor the people outside have any medium which helps them feel the building and the larger public world are intertwined.",
    therefore:
      "Whenever possible, and at every story, build porches, galleries, arcades, balconies, niches, outdoor seats, awnings, trellised rooms, and the like at the edges of buildings - especially where they open off public spaces and streets, and connect them by doors, directly to the rooms inside.",
    bookPage: 777,
  },
  {
    number: 167,
    name: "Six-Foot Balcony",
    category: "buildings",
    asterisks: 2,
    biggerLinks: [119, 166],
    smallerLinks: [161, 163, 191, 193, 226, 243],
    problem:
      "Balconies and porches which are less than six feet deep are hardly ever used.",
    therefore:
      "Whenever you build a balcony, a porch, a gallery, or a terrace always make it at least six feet deep. If possible, recess at least a part of it into the building so that it is not cantilevered out and separated from the building by a simple line, and enclose it partially.",
    bookPage: 781,
  },
  {
    number: 168,
    name: "Connection to the Earth",
    category: "buildings",
    asterisks: 2,
    biggerLinks: [119, 140, 160, 166, 167],
    smallerLinks: [130, 140, 163, 169, 215, 247, 248],
    problem:
      "A house feels isolated from the nature around it, unless its floors are interleaved directly with the earth that is around the house.",
    therefore:
      "Connect the building to the earth around it by building a series of paths and terraces and steps around the edge. Place them deliberately to make the boundary ambiguous - so that it is impossible to say exactly where the building stops and earth begins.",
    bookPage: 785,
  },
  {
    number: 169,
    name: "Terraced Slope",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [104, 160, 168],
    smallerLinks: [170, 177, 243, 245],
    problem:
      "On sloping land, erosion caused by run off can kill the soil. It also creates uneven distribution of rainwater over the land, which naturally does less for plant life than it could if it were evenly distributed.",
    therefore:
      "On all land which slopes - in fields, in parks, in public gardens, even in the private gardens around a house - make a system of terraces and bunds which follow the contour lines. Make them by building low walls along the contour lines, and then backfilling them with earth to form the terraces.",
    bookPage: 790,
  },
  {
    number: 170,
    name: "Fruit Trees",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [67, 111],
    smallerLinks: [120, 171, 176],
    problem:
      "In the climates where fruit trees grow, the orchards give the land an almost magical identity: think of the orange groves of Southern California, the cherry trees of Japan, the olive trees of Greece. But the growth of cities seems always to destroy these trees and the quality they possess.",
    therefore:
      "Plant small orchards of fruit trees in gardens and on common land along paths and streets, in parks, in neighborhoods: wherever there are well-established groups that can themselves care for the trees and harvest the fruit.",
    bookPage: 794,
  },
  {
    number: 171,
    name: "Tree Places",
    category: "buildings",
    asterisks: 2,
    biggerLinks: [104, 170],
    smallerLinks: [163, 174, 176, 241, 243],
    problem:
      "When trees are planted or pruned without regard for the special places they can create, they are as good as dead for the people who need them.",
    therefore:
      "If you are planting trees, plant them according to their nature, to form enclosures, avenues, squares, groves, and single spreading trees toward the middle of open spaces. And shape the nearby buildings in response to trees, so that the trees themselves, and the trees and buildings together, form places which people can use.",
    bookPage: 797,
  },
  {
    number: 172,
    name: "Garden Growing Wild",
    category: "buildings",
    asterisks: 2,
    biggerLinks: [169, 171],
    smallerLinks: [71, 175, 176, 245],
    problem:
      "A garden which grows true to its own laws is not a wilderness, yet not entirely artificial either.",
    therefore:
      "Grow grasses, mosses, bushes, flowers, and trees in a way which comes close to the way that they occur in nature: intermingled, without barriers between them, without bare earth, without formal flower beds, and with all the boundaries and edges made in rough stone and brick and wood which become a part of the natural growth.",
    bookPage: 801,
  },
  {
    number: 173,
    name: "Garden Wall",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [59, 60, 111, 140],
    smallerLinks: [106, 114, 134, 140, 174, 193],
    problem:
      "Gardens and small public parks don't give enough relief from noise unless they are well protected.",
    therefore:
      "Form some kind of enclosure to protect the interior of a quiet garden from the sights and sounds of passing traffic. If it is a large garden or a park, the enclosure can be soft, can include bushes, trees, slopes, and so on. The smaller the garden, however, the harder and more definite the enclosure must become. In a very small garden, form the enclosure with buildings or walls; even hedges and fences will not be enough to keep out sound.",
    bookPage: 805,
  },
  {
    number: 174,
    name: "Trellised Walk",
    category: "buildings",
    asterisks: 2,
    biggerLinks: [106, 112, 120, 163, 170, 171, 175],
    smallerLinks: [226, 238, 246, 247],
    problem:
      "Trellised walks have their own special beauty. They are so unique, so different from other ways of shaping a path, that they are almost archetypal.",
    therefore:
      "Where paths need special protection or where they need some intimacy, build a trellis over the path and plant it with climbing flowers. Use the trellis to help shape the outdoor spaces on either side of it.",
    bookPage: 809,
  },
  {
    number: 175,
    name: "Greenhouse",
    category: "buildings",
    asterisks: 0,
    biggerLinks: [37, 41, 67],
    smallerLinks: [145, 176, 177, 178, 180, 201],
    problem:
      "Many efforts are being made to harness solar energy by converting it into hot water or electric power. And yet the easiest way to harness solar energy is the most obvious and the oldest: namely, to trap the heat inside a greenhouse and use it for growing flowers and vegetables.",
    therefore:
      'In temperate climates, build a greenhouse as part of your house or office, so that it is both a "room" of the house which can be reached directly without going outdoors and a part of the garden which can be reached directly from the garden.',
    bookPage: 812,
  },
  {
    number: 176,
    name: "Garden Seat",
    category: "buildings",
    asterisks: 0,
    biggerLinks: [161, 172],
    smallerLinks: [238, 241],
    problem:
      "Somewhere in every garden, there must be at least one spot, a quiet garden seat, in which a person - or two people - can reach into themselves and be in touch with nothing else but nature.",
    therefore:
      "Make a quiet place in the garden - a private enclosure with a comfortable seat, thick planting, sun. Pick the place for the seat carefully; pick the place that will give you the most intense kind of solitude.",
    bookPage: 815,
  },
  {
    number: 177,
    name: "Vegetable Garden",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [67, 111, 170],
    smallerLinks: [144, 178],
    problem:
      "In a healthy town every family can grow vegetables for itself. The time is past to think of this as a hobby for enthusiasts; it is a fundamental part of human life.",
    therefore:
      "Set aside one piece of land either in the private garden or on common land as a vegetable garden. About one-tenth of an acre is needed for each family of four. Make sure the vegetable garden is in a sunny place and central to all the households it serves. Fence it in and build a small storage shed for gardening tools beside it.",
    bookPage: 818,
  },
  {
    number: 178,
    name: "Compost",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [37, 74, 170, 177],
    smallerLinks: [144],
    problem:
      "Our current ways of getting rid of sewage poison the great bodies of natural water, and rob the land around our buildings of the nutrients they need.",
    therefore:
      "Arrange all toilets over a dry composting chamber. Lead organic garbage chutes to the same chamber, and use the combined products for fertilizer.",
    bookPage: 822,
  },
  {
    number: 179,
    name: "Alcoves",
    category: "buildings",
    asterisks: 2,
    biggerLinks: [129, 139, 142, 146, 150, 151],
    smallerLinks: [180, 190, 191, 193, 202, 211, 226],
    problem:
      "No homogeneous room, of homogeneous height, can serve a group of people well. To give a group a chance to be together, as a group, a room must also give them the chance to be alone, in one's and two's in the same space.",
    therefore:
      "Make small places at the edge of any common room, usually no more than 6 feet wide and 3 to 6 feet deep and possibly much smaller. These alcoves should be large enough for two people to sit, chat, or play and sometimes large enough to contain a desk or a table.",
    bookPage: 828,
  },
  {
    number: 180,
    name: "Window Place",
    category: "buildings",
    asterisks: 2,
    biggerLinks: [130, 134, 159, 164],
    smallerLinks: [179, 202, 221, 222, 223, 231],
    problem:
      "Everybody loves window seats, bay windows, and big windows with low sills and comfortable chairs drawn up to them.",
    therefore:
      'In every room where you spend any length of time during the day, make at least one window into a "window place."',
    bookPage: 833,
  },
  {
    number: 181,
    name: "The Fire",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [129],
    smallerLinks: [178, 180, 185],
    problem: "There is no substitute for fire.",
    therefore:
      "Bbuild the fire in a common space - perhaps in the kitchen - where it provides a natural focus for talk and dreams and thought. Adjust the location until it knits together the social spaces and rooms around it, giving them each a glimpse of the fire; and make a window or some other focus to sustain the place during the times when the fire is out.",
    bookPage: 838,
  },
  {
    number: 182,
    name: "Eating Atmosphere",
    category: "buildings",
    asterisks: 0,
    biggerLinks: [139, 147],
    smallerLinks: [200, 201, 202, 250, 251, 252],
    problem:
      "When people eat together, they may actually be together in spirit - or they may be far apart. Some rooms invite people to eat leisurely and comfortably and feel together, while others force people to eat as quickly as possible so they can go somewhere else to relax.",
    therefore:
      "Put a heavy table in the center of the eating space - large enough for the whole family or the group of people using it. Put a light over the table to create a pool of light over the group, and enclose the space with walls or with contrasting darkness. Make the space large enough so the chairs can be pulled back comfortably, and provide shelves and counters close at hand for things related to the meal.",
    bookPage: 844,
  },
  {
    number: 183,
    name: "Workspace Enclosure",
    category: "buildings",
    asterisks: 2,
    biggerLinks: [146, 152, 157, 179],
    smallerLinks: [185, 191, 192, 193, 197, 200, 201, 252],
    problem:
      "People cannot work effectively if their workspace is too enclosed or too exposed. A good workspace strikes the balance.",
    therefore:
      "Give each workspace an area of at least 60 square feet. Build walls and windows round each workspace to such an extent that their total area (counting windows at one-half) is 50 to 75 per cent of the full enclosure that would be there if all four walls around the 60 square feet were solid. Let the front of the workspace be open for at least 8 feet in front, always into a larger space. Place the desk so that the person working at it has a view out, either to the front or to the side. If there are other people working nearby, arrange the enclosure so that the person has a sense of connection to two or three others; but never put more than eight workspaces within view or earshot of one another.",
    bookPage: 846,
  },
  {
    number: 184,
    name: "Cooking Layout",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [139],
    smallerLinks: [197, 199, 200],
    problem:
      "Cooking is uncomfortable if the kitchen counter is too short and also if it is too long.",
    therefore:
      "To strike the balance between the kitchen which is too small, and the kitchen which is too spread out, place the stove, sink, and food storage and counter in such a way that: 1. No two of the four are more than 10 feet apart; 2. The total length of counter—excluding sink, stove, and refrigerator—is at least 12 feet; 3. No one section of the counter is less than 4 feet long. There's no need for the counter to be continuous or entirelly 'built-in' as in many modern kitchens—it can even consist of free standing tables or counter tops. Only the three functional relationships described above are critical.",
    bookPage: 853,
  },
  {
    number: 185,
    name: "Sitting Circle",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [127, 142],
    smallerLinks: [129, 142, 180, 181, 191, 193, 251, 252],
    problem:
      "A group of chairs, a sofa and a chair, a pile of cushions - these are the most obvious things in everybody's life and yet to make them work, so people become animated and alive in them, is a very subtle business. Most seating arrangements are sterile, people avoid them, nothing ever happens there. Others seem somehow to gather life around them, to concentrate and liberate energy. What is the difference between the two?",
    therefore:
      "Place each sitting space in a position which is protected, not cut by paths or movement, roughly circular, made so that the room itself helps to suggest the circle - not too strongly - with paths and activities around it, so that people naturally gravitate toward the chairs when they get into the mood to sit. Place the chairs and cushions loosely in the circle, and have a few too many.",
    bookPage: 857,
  },
  {
    number: 186,
    name: "Communal Sleeping",
    category: "buildings",
    asterisks: 0,
    biggerLinks: [136, 137, 138, 143, 187, 188],
    smallerLinks: [143, 179, 187, 188, 189],
    problem:
      "In many traditional and primitive cultures, sleep is a communal activity without the sexual overtones it has in the West today. We believe that it may be a vital social function, which plays a role as fundamental and as necessary to people as communal eating.",
    therefore:
      "Arrange the sleeping area so that there is the possibility for children and adults to sleep in the same space, in sight and sound of one another, at least as an occasional alternative to their more usual sleeping habits.",
    bookPage: 861,
  },
  {
    number: 187,
    name: "Marriage Bed",
    category: "buildings",
    asterisks: 0,
    biggerLinks: [136],
    smallerLinks: [188, 189, 190, 191, 249],
    problem:
      "The bed is the center of a couple's life together: the place where they lie together, talk, make love, sleep, sleep late, take care of each other during illness. But beds and bedrooms are not often made in ways which intensify their meaning, and these experiences cannot take hold.",
    therefore:
      "At the right moment in a couple's life, it is important that they make for themselves a special bed - an intimate anchor point for their lives; slightly enclosed, with a low ceiling or a canopy, with the room shaped to it; perhaps a tiny room built around the bed with many windows. Give the bed some shape of its own, perhaps as a fourposter with head board that can be hand carved or painted over the years.",
    bookPage: 864,
  },
  {
    number: 188,
    name: "Bed Alcove",
    category: "buildings",
    asterisks: 2,
    biggerLinks: [141, 143, 186, 187],
    smallerLinks: [189, 190, 191, 193, 197, 200, 221],
    problem: "Bedrooms make no sense.",
    therefore:
      "Don't put single beds in empty rooms called bedrooms, but instead put individual bed alcoves off rooms with other nonsleeping functions, so the bed itself becomes a tiny private haven.",
    bookPage: 868,
  },
  {
    number: 189,
    name: "Dressing Room",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [144, 187, 188],
    smallerLinks: [159, 191, 197, 198, 200, 201],
    problem:
      "Dressing and undressing, storing clothes, having clothes lying around, have no reason to be part of any larger complex of activities. Indeed they disturb other activities: they are so self-contained that they themselves need concentrated space which has no other function.",
    therefore:
      "Give everyone a dressing room-either private or shared - between their bed and the bathing room. Make this dressing room big enough so there is an open area in it at least six feet in diameter; about six linear feet of clothes hanging space; and another six feet of open shelves; two or three drawers; and a mirror.",
    bookPage: 872,
  },
  {
    number: 190,
    name: "Ceiling Height Variety",
    category: "buildings",
    asterisks: 2,
    biggerLinks: [],
    smallerLinks: [145, 191, 213, 219],
    problem:
      "A building in which the ceiling heights are all the same is virtually incapable of making people comfortable.",
    therefore:
      "Vary the ceiling heights continuously throughout the building, especially between rooms which open into each other, so that the relative intimacy of different spaces can be felt. In particular, make ceilings high in rooms which are public or meant for large gatherings (10 to 12 feet), lower in rooms for smaller gatherings (7 to 9 feet), and very low in rooms or alcoves for one or two people (6 to 7 feet).",
    bookPage: 876,
  },
  {
    number: 191,
    name: "The Shape of Indoor Space",
    category: "buildings",
    asterisks: 2,
    biggerLinks: [190],
    smallerLinks: [106, 193, 197, 198, 205, 210, 212, 218, 219],
    problem:
      "The perfectly crystalline squares and rectangles of ultramodern architecture make no special sense in human or in structural terms. They only express the rigid desires and fantasies which people have when they get too preoccupied with systems and the means of their production.",
    therefore:
      "With occasional exceptions, make each indoor space or each position of a space, a rough rectangle, with roughly straight walls, near right angles in the corners, and a roughly symmetrical vault over each room.",
    bookPage: 883,
  },
  {
    number: 192,
    name: "Windows Overlooking Life",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [159, 190, 191],
    smallerLinks: [221, 222, 223, 239],
    problem:
      "Rooms without a view are prisons for the people who have to stay in them.",
    therefore:
      "In each room, place the windows in such a way that their total area conforms roughly to the appropriate figures for your region (25 per cent or more of floor area, in the San Francisco Bay Area), and place them in positions which give the best possible views out over life: activities in streets, quiet gardens, anything different from the indoor scene.",
    bookPage: 889,
  },
  {
    number: 193,
    name: "Half-Open Wall",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [101, 119, 131, 152, 167, 179, 185, 188, 191],
    smallerLinks: [179, 183, 194, 212, 226, 227, 239, 249],
    problem:
      "Rooms which are too closed prevent the natural flow of social occasions, and the natural process of transition from one social moment to another. And rooms which are too open will not support the differentiation of events which social life requires.",
    therefore:
      "Adjust the walls, openings, and windows in each indoor space until you reach the right balance between open, flowing space and closed cell-like space. Do not take it for granted that each space is a room; nor, on the other hand, that all spaces must flow into each other. The right balance will always lie between these extremes: no one room entirely enclosed; and no space totally connected to another. Use combinations of columns, half-open walls, porches, indoor windows, sliding doors, low sills, french doors, sitting walls, and so on, to hit the right balance.",
    bookPage: 893,
  },
  {
    number: 194,
    name: "Interior Windows",
    category: "buildings",
    asterisks: 0,
    biggerLinks: [101, 130, 131, 132, 135, 142, 193],
    smallerLinks: [237, 239],
    problem:
      "Windows are most often used to create connections between the indoor and the outdoors. But there are many cases when an indoor space needs a connecting window to another indoor space.",
    therefore:
      "Put in fully glazed fixed windows between rooms which tend to be dead because they have too little action in them or where inside rooms are unusually dark.",
    bookPage: 897,
  },
  {
    number: 195,
    name: "Staircase Volume",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [133, 158],
    smallerLinks: [125, 203, 212, 228],
    problem:
      "We are putting this pattern in the language because our experiments have shown us that lay people often make mistakes about the volume which a staircase needs and therefore make their plans unbuildable.",
    therefore:
      "Make a two story volume to contain the stairs. It may be straight, L-shaped, U-shaped, or C-shaped. The stair may be 2 feet wide (for a very steep stair) or 5 feet wide for a generous shallow stair. But, in all cases, the entire stairwell must form one complete structural bay, two stories high.",
    bookPage: 900,
  },
  {
    number: 196,
    name: "Corner Doors",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [131, 135, 142],
    smallerLinks: [198, 224, 225, 237, 249],
    problem:
      "The success of a room depends to a great extent on the position of the doors. If the doors create a pattern of movement which destroys the places in the room, the room will never allow people to be comfortable.",
    therefore:
      "Except in very large rooms, a door only rarely makes sense in the middle of a wall. It does in an entrance room, for instance, because this room gets its character essentially from the door. But in most rooms, especially small ones, put the doors as near the corners of the room as possible. If the room has two doors, and people move through it, keep both doors at one end of the room.",
    bookPage: 904,
  },
  {
    number: 197,
    name: "Thick Walls",
    category: "buildings",
    asterisks: 2,
    biggerLinks: [160, 179, 180, 190, 191],
    smallerLinks: [180, 198, 199, 200, 201, 202, 203, 204, 211, 212],
    problem:
      "Houses with smooth hard walls made of prefabricated panels, concrete, gypsum, steel, aluminum, or glass always stay impersonal and dead.",
    therefore:
      "Open your mind to the possibility that the walls of your building can be thick, can occupy a substantial volume - even actual usable space - and need not be merely thin membranes which have no depth. Decide where these thick walls ought to be.",
    bookPage: 908,
  },
  {
    number: 198,
    name: "Closets Between Rooms",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [183, 189, 196],
    smallerLinks: [197],
    problem:
      "The provision of storage and closets usually comes as an afterthought.",
    therefore:
      "Mark all the rooms where you want closets. Then place the closets themselves on those interior walls which lie between two rooms and between rooms and passages where you need acoustic insulation. Place them so as to create transition spaces for the doors into the rooms. On no account put closets on exterior walls. It wastes the opportunity for good acoustic insulation and cuts off precious light.",
    bookPage: 913,
  },
  {
    number: 199,
    name: "Sunny Counter",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [128, 139, 184],
    smallerLinks: [192, 200, 211, 250],
    problem:
      "Dark gloomy kitchens are depressing. The kitchen needs the sun more than the other rooms, not less.",
    therefore:
      "Place the main part of the kitchen counter on the south and southeast side of the kitchen, with big windows around it, so that sun can flood in and fill the kitchen with yellow light both morning and afternoon.",
    bookPage: 916,
  },
  {
    number: 200,
    name: "Open Shelves",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [139, 183, 197],
    smallerLinks: [201, 211],
    problem:
      "Cupboards that are too deep waste valuable space, and it always seems that what you want is behind something else.",
    therefore:
      "Cover the walls with narrow shelves of varying depth but always shallow enough so that things can be placed on them one deep - nothing hiding behind anything else.",
    bookPage: 919,
  },
  {
    number: 201,
    name: "Waist-High Shelf",
    category: "buildings",
    asterisks: 0,
    biggerLinks: [197, 200],
    smallerLinks: [211, 253],
    problem:
      'In every house and every workplace there is a daily "traffic" of the objects which are handled most. Unless such things are immediately at hand, the flow of life is awkward, full of mistakes; things are forgotten, misplaced.',
    therefore:
      "Build waist-high shelves around at least a part of the main rooms where people live and work. Make them long, 9 to 15 inches deep, with shelves or cupboard underneath. Interrupt the shelf for seats, windows, and doors.",
    bookPage: 922,
  },
  {
    number: 202,
    name: "Built-in Seats",
    category: "buildings",
    asterisks: 1,
    biggerLinks: [130, 142, 179, 180],
    smallerLinks: [197, 211],
    problem:
      "Built-in seats are great. Everybody loves them. They make a building feel comfortable and luxurious. But most often they do not actually work. They are placed wrong, or too narrow, or the back does not slope, or the view is wrong, or the seat is too hard. This pattern tells you what to do to make a built-in seat that really works.",
    therefore:
      "Before you build the seat, get hold of an old arm chair or a sofa, and put it into the position where you intend to build a seat. Move it until you really like it. Leave it there for a few days. See if you enjoy sitting in it. Move it if you don't. When you have got it into a position which you like, and where you often find yourself sitting, you know it is a good position. Now build a seat that is just as wide, and just as well padded - and your built-in seat will work.",
    bookPage: 924,
  },
  {
    number: 203,
    name: "Child Caves",
    category: "buildings",
    asterisks: 0,
    biggerLinks: [73, 86, 137, 197],
    smallerLinks: [211, 224],
    problem: "Children love to be in tiny, cave-like places.",
    therefore:
      'Wherever children play, around the house, in the neighborhood, in schools, make small "caves" for them. Tuck these caves away in natural left over spaces, under stairs, under kitchen counters. Keep the ceiling heights low - 2 feet 6 inches to 4 feet - and the entrance tiny.',
    bookPage: 927,
  },
  {
    number: 204,
    name: "Secret Place",
    category: "buildings",
    asterisks: 0,
    biggerLinks: [190, 197],
    smallerLinks: [198, 211, 219],
    problem:
      "Where can the need for concealment be expressed; the need to hide; the need for something precious to be lost, and then revealed?",
    therefore:
      "Make a place in the house, perhaps only a few feet square, which is kept locked and secret; a place which is virtually impossible to discover - until you have been shown where it is; a place where the archives of the house, or other more potent secrets, might be kept.",
    bookPage: 930,
  },
  {
    number: 205,
    name: "Structure Follows Social Spaces",
    category: "construction",
    asterisks: 2,
    biggerLinks: [],
    smallerLinks: [206, 207, 208, 212, 219],
    problem:
      "No building ever feels right to the people in it unless the physical spaces (defined by columns, walls, and ceilings) are congruent with the social spaces (defined by activities and human groups).",
    therefore:
      "A first principle of construction: on no account allow the engineering to dictate the building's form. Place the load bearing elements - the columns and the walls and floors - according to the social spaces of the building; never modify the social spaces to conform to the engineering structure of the building.",
    bookPage: 940,
  },
  {
    number: 206,
    name: "Efficient Structure",
    category: "construction",
    asterisks: 1,
    biggerLinks: [205],
    smallerLinks: [209, 210, 212, 213, 216, 217, 218, 219, 220, 225, 227],
    problem:
      "Some buildings have column and beam structures; others have load-bearing walls with slab floors; others are vaulted structures, or domes, or tents. But which of these, or what mixture of them, is actually the most efficient? What is the best way to distribute materials throughout a building, so as to enclose the space, strongly and well, with the least amount of material?",
    therefore:
      "Conceive the building as a building made from one continuous body of compressive material. In its geometry, conceive it as a three-dimensional system of individually vaulted spaces, most of them roughly rectangular; with thin load-bearing walls, each stiffened by columns at intervals along its length, thickened where walls meet walls and where walls meet vaults and stiffened around the openings.",
    bookPage: 946,
  },
  {
    number: 207,
    name: "Good Materials",
    category: "construction",
    asterisks: 2,
    biggerLinks: [205, 206],
    smallerLinks: [205, 206, 208, 234, 235],
    problem:
      "There is a fundamental conflict in the nature of materials for building in industrial society.",
    therefore:
      "Use only biodegradable, low energy consuming materials, which are easy to cut and modify on site. For bulk materials we suggest ultra-lightweight 40-60 lbs. concrete and earth-based materials like tamped earth, brick, and tile. For secondary materials, use wood planks, gypsum, plywood, cloth, chicken wire, paper, cardboard, particle board, corrugated iron, lime plasters, bamboo, rope, and tile.",
    bookPage: 955,
  },
  {
    number: 208,
    name: "Gradual Stiffening",
    category: "construction",
    asterisks: 2,
    biggerLinks: [205, 206, 207],
    smallerLinks: [207, 216, 217, 218, 219, 220],
    problem:
      "The fundamental philosophy behind the use of pattern languages is that buildings should be uniquely adapted to individual needs and sites; and that the plans of buildings should be rather loose and fluid, in order to accommodate these subtleties.",
    therefore:
      "Recognize that you are not assembling a building from components like an erector set, but that you are instead weaving a structure which starts out globally complete, but flimsy; then gradually making it stiffer but still rather flimsy; and only finally making it completely stiff and strong. We believe that in our own time, the most natural version of this process is to put up a shell of sheet materials, and then make it fully strong by filling it with a compressive fill.",
    bookPage: 962,
  },
  {
    number: 209,
    name: "Roof Layout",
    category: "construction",
    asterisks: 1,
    biggerLinks: [116, 117, 118],
    smallerLinks: [115, 211, 220],
    problem:
      "What kind of roof plan is organically related to the nature of your building?",
    therefore:
      "Arrange the roofs so that each distinct roof corresponds to an identifiable social entity in the building or building complex. Place the largest roofs - those which are highest and have the largest span - over the largest and most important and most communal spaces; build the lesser roofs off these largest and highest roofs; and build the smallest roofs of all off these lesser roofs, in the form of half-vaults and sheds over alcoves and thick walls.",
    bookPage: 970,
  },
  {
    number: 210,
    name: "Floor and Ceiling Layout",
    category: "construction",
    asterisks: 0,
    biggerLinks: [190, 206, 209],
    smallerLinks: [211, 212, 213, 217, 219, 233],
    problem:
      "Again, the basic problem is to maintain the integrity of the social spaces in the plan.",
    therefore:
      "Draw a vault plan, for every floor. Use two-way vaults most often; and one-way barrel vaults for any spaces which are more than twice as long as they are wide. Draw sections through the building as you plan the vaults, and bear the following facts in mind: 1. Generally speaking, the vaults should correspond to rooms. 2. There will have to be a support under the sides of each vault: this will usually be the top of a wall. Under exceptional circumstances, it can be a beam or arch. 3. A vault may span as little as 5 feet and as much as 30 feet. However, it must have a rise equal to at least 13 per cent of its shorter span. 4. If the edge of one vault is more than a couple of feet (in plan) from the edge of the vault below it - then the lower vault will have to contain an arch to support the load from the upper vault.",
    bookPage: 978,
  },
  {
    number: 211,
    name: "Thickening the Outer Walls",
    category: "construction",
    asterisks: 1,
    biggerLinks: [116, 180, 197, 199, 202, 203, 204, 209, 210],
    smallerLinks: [212, 219, 220],
    problem:
      'We have established in Thick Walls (197), how important it is for the walls of a building to have "depth" and "volume," so that character accumulates, in them, with time. But when it comes to laying out a building and constructing it, this turns out to be quite hard to do.',
    therefore:
      "Mark all those places in the plan where seats and closets are to be. These places are given individually by Alcoves (179), Window Places (180), Thick Walls (197), Sunny Counter (199), Waist-High Shelf (201), Built-in Seats (202), and so on. Lay out a wide swath on the plan to correspond to these positions. Make it two or three feet deep; recognize that it will be outside the main space of the room; your seats, niches, shelves, will feel attached to the main space of rooms but not inside them. Then, when you lay out columns and minor columns, place the columns in such a way that they surround and define these thick volumes of wall, as if they were rooms or alcoves.",
    bookPage: 983,
  },
  {
    number: 212,
    name: "Columns at the Corners",
    category: "construction",
    asterisks: 2,
    biggerLinks: [205, 208, 209, 210],
    smallerLinks: [213, 214, 216, 217, 219, 220, 226],
    problem:
      "We have already established the idea that the structural components of a building should be congruent with its social spaces.",
    therefore:
      "On your rough building plan, draw a dot to represent a column at the corner of every room and in the corners formed by lesser spaces like thick walls and alcoves. Then transfer these dots onto the ground out on the site with stakes.",
    bookPage: 989,
  },
  {
    number: 213,
    name: "Final Column Distribution",
    category: "construction",
    asterisks: 2,
    biggerLinks: [190, 206, 212],
    smallerLinks: [190, 216, 218],
    problem:
      "How should the spacing of the secondary columns which stiffen the walls, vary with ceiling height, number of stories and the size of rooms?",
    therefore:
      "Make column stiffeners furthest apart on the ground floor and closer and closer together as you go higher in the building, The exact column spacings for a particular building will depend on heights and loads and wall thicknesses. The numbers in the following table are for illustration only, but they show roughly what is needed.",
    bookPage: 995,
  },
  {
    number: 214,
    name: "Root Foundations",
    category: "construction",
    asterisks: 0,
    biggerLinks: [104, 168, 212, 213],
    smallerLinks: [215, 216],
    problem:
      "The best foundations of all are the kinds of foundations which a tree has - where the entire structure of the tree simply continues below ground level, and creates a system entirely integral with the ground, in tension and compression.",
    therefore:
      "Try to find a way of making foundations in which the columns themselves go right into the earth, and spread out there - so that the footing is continuous with the material of the column, and the column, with its footing, like a tree root, can resist tension and horizontal shear as well as compression.",
    bookPage: 1006,
  },
  {
    number: 215,
    name: "Ground Floor Slab",
    category: "construction",
    asterisks: 0,
    biggerLinks: [168, 206, 212, 214],
    smallerLinks: [168, 219, 233, 248],
    problem:
      "The slab is the easiest, cheapest, and most natural way to lay a ground floor.",
    therefore:
      "Build a ground floor slab, raised slightly - six or nine inches above the ground - by first building a low perimeter wall around the building, tied into the column foundations, and then filling it with rubble, gravel, and concrete.",
    bookPage: 1009,
  },
  {
    number: 216,
    name: "Box Columns",
    category: "construction",
    asterisks: 2,
    biggerLinks: [213, 214],
    smallerLinks: [214, 217, 219, 226, 227],
    problem:
      "In all the world's traditional and historic buildings, the columns are expressive, beautiful, and treasured elements. Only in modern buildings have they become ugly and meaningless.",
    therefore:
      "Make the columns in the form of filled hollow tubes, with a stiff tubular outer skin, and a solid core that is strong in compression. Give the skin of the column some tensile strength - preferably in the skin itself, but perhaps with reinforcing wires in the fill.",
    bookPage: 1012,
  },
  {
    number: 217,
    name: "Perimeter Beams",
    category: "construction",
    asterisks: 1,
    biggerLinks: [210, 216, 219],
    smallerLinks: [219, 227],
    problem:
      "If you conceive and build a room by first placing columns at the corners, and then gradually weaving the walls and ceiling round them, the room needs a perimeter beam around its upper edge.",
    therefore:
      "Build a continuous perimeter beam around the room, strong enough to resist the horizontal thrust of the vault above, to spread the loads from upper stories onto columns, to tie the columns together, and to function as a lintel over openings in the wall. Make this beam continuous with columns, walls and floor above, and columns and walls below.",
    bookPage: 1018,
  },
  {
    number: 218,
    name: "Wall Membrane",
    category: "construction",
    asterisks: 1,
    biggerLinks: [206, 213, 216],
    smallerLinks: [213, 234, 235, 248],
    problem:
      "In organic construction the walls must take their share of the loads. They must work continuously with the structure on all four of their sides; and act to resist shear and bending, and take loads in compression.",
    therefore:
      "Build the wall as a membrane which connects the columns and door frames and windows frames and is, at least in part, continuous with them. To build the wall, first put up an inner and an outer membrane, which can function as a finished surface; then pour the fill into the wall.",
    bookPage: 1023,
  },
  {
    number: 219,
    name: "Floor-Ceiling Vaults",
    category: "construction",
    asterisks: 2,
    biggerLinks: [190, 206, 207, 210, 217],
    smallerLinks: [213, 214, 233, 235],
    problem:
      "We seek a ceiling vault shape which will support a live load on the floor above, form the ceiling of the room below, and generate as little bending and tension as possible so that compressive materials can be relied on.",
    therefore:
      "Build floors and ceilings in the form of elliptical vaults which rise between 13 and 20 per cent of the shorter span. Use a type of construction which makes it possible to fit the vault to any shaped room after the walls and columns are in position: on no account use a prefabricated vault.",
    bookPage: 1027,
  },
  {
    number: 220,
    name: "Roof Vaults",
    category: "construction",
    asterisks: 1,
    biggerLinks: [118, 217, 219],
    smallerLinks: [231, 232, 234],
    problem: "What is the best shape for a roof?",
    therefore:
      "Build the roof vault either as a cylindrical barrel vault, or like a pitched roof with a slight convex curve in each of the two sloping sides. Put in undulations along the vault, to make the shell more effective. The curvature of the main shell, and of the undulations, can vary with the span; the bigger the span, the deeper the curvature and undulations need to be.",
    bookPage: 1036,
  },
  {
    number: 221,
    name: "Natural Doors and Windows",
    category: "construction",
    asterisks: 2,
    biggerLinks: [134, 164, 180, 192, 196, 216, 217],
    smallerLinks: [222, 223, 239],
    problem:
      "Finding the right position for a window or a door is a subtle matter. But there are very few ways of building which take this into consideration.",
    therefore:
      "On no account use standard doors or windows. Make each window a different size, according to its place. Do not fix the exact position or size of the door and window frames until the rough framing of the room has actually been built, and you can really stand inside the room and judge, by eye, exactly where you want to put them, and how big you want them. When you decide, mark the openings with strings. Make the windows smaller and smaller, as you go higher in the building.",
    bookPage: 1046,
  },
  {
    number: 222,
    name: "Low Sill",
    category: "construction",
    asterisks: 0,
    biggerLinks: [134, 180, 192, 221],
    smallerLinks: [201, 225, 236, 245],
    problem:
      "One of a window's most important functions is to put you in touch with the outdoors. If the sill is too high, it cuts you off.",
    therefore:
      "When determining exact location of windows also decide which windows should have low sills. On the first floor, make the sills of windows which you plan to sit by between 12 and 14 inches high. On the upper stories, make them higher, around 20 inches.",
    bookPage: 1050,
  },
  {
    number: 223,
    name: "Deep Reveals",
    category: "construction",
    asterisks: 0,
    biggerLinks: [159, 225],
    smallerLinks: [197, 225, 238, 240, 246],
    problem:
      "Windows with a sharp edge where the frame meets the wall create harsh, blinding glare, and make the rooms they serve uncomfortable.",
    therefore:
      "Make the window frame a deep, splayed edge: about a foot wide and splayed at about 50 to 60 degrees to the plane of the window, so that the gentle gradient of daylight gives a smooth transition between the light of the window and the dark of the inner wall.",
    bookPage: 1053,
  },
  {
    number: 224,
    name: "Low Doorway",
    category: "construction",
    asterisks: 0,
    biggerLinks: [102, 110, 131, 196, 221],
    smallerLinks: [221, 225, 237, 249],
    problem:
      "High doorways are simple and convenient. But a lower door is often more profound.",
    therefore:
      'Instead of taking it for granted that your doors are simply 6\' 8" rectangular openings to pass through, make at least some of your doorways low enough so that the act of going through the door is a deliberate thoughtful passage from one place to another. Especially at the entrance to a house, at the entrance to a private room, or a fire corner make the doorway lower than usual, perhaps even as low as 5" 8".',
    bookPage: 1056,
  },
  {
    number: 225,
    name: "Frames as Thickened Edges",
    category: "construction",
    asterisks: 2,
    biggerLinks: [206, 208, 221],
    smallerLinks: [223, 236, 237, 239],
    problem:
      "Any homogeneous membrane which has holes in it will tend to rupture at the holes, unless the edges of the holes are reinforced by thickening.",
    therefore:
      "Do not consider door and window frames as separate rigid structures which are inserted into holes in walls. Think of them instead as thickenings of the very fabric of the wall itself, made to protect the wall against the concentrations of stress which develop around openings. In line with this conception, build the frames as thickenings of the wall material, continuous with the wall itself, made of the same materials, and poured, or built up, in a manner which is continuous with the structure of the wall.",
    bookPage: 1059,
  },
  {
    number: 226,
    name: "Column Place",
    category: "construction",
    asterisks: 1,
    biggerLinks: [69, 119, 163, 166, 167, 174, 212],
    smallerLinks: [216, 227, 243, 245, 251],
    problem:
      "Thin columns, spindly columns, columns which take their shape from structural arguments alone, will never make a comfortable environment.",
    therefore:
      "When a column is free standing, make it as thick as a man - at least 12 inches, preferably 16 inches: and form places around it where people can sit and lean comfortably: a step, a small seat built up against the column, or a space formed by a pair of columns.",
    bookPage: 1064,
  },
  {
    number: 227,
    name: "Column Connections",
    category: "construction",
    asterisks: 2,
    biggerLinks: [119, 166, 167, 206, 216, 217, 225, 226],
    smallerLinks: [226, 249],
    problem:
      "The strength of a structure depends on the strength of its connections; and these connections are most critical of all at corners, especially at the corners where the columns meet the beams.",
    therefore:
      "Build connections where the columns meet the beams. Any distribution of material which fills the corner up will do: fillets, gussets, column capitals, mushroom column, and most general of all, the arch, which connects column and beam in a continuous curve.",
    bookPage: 1068,
  },
  {
    number: 228,
    name: "Stair Vault",
    category: "construction",
    asterisks: 1,
    biggerLinks: [133, 195, 206, 207],
    smallerLinks: [179, 198, 203, 219, 233, 248],
    problem:
      "Within a building technology which uses compressive materials as much as possible, and excludes the use of wood, it is natural to build stairs over a vaulted void, simply to save weight and materials.",
    therefore:
      "Build a curved diagonal vault in the same way that you build your Floor-Ceiling Vaults (219). Once the vault hardens, cover it with steps of lightweight concrete, trowel-formed into position.",
    bookPage: 1073,
  },
  {
    number: 229,
    name: "Duct Space",
    category: "construction",
    asterisks: 0,
    biggerLinks: [206, 219],
    smallerLinks: [219, 230, 252],
    problem:
      "You never know where pipes and conduits are; they are buried somewhere in the walls; but where exactly are they?",
    therefore:
      "Make ducts to carry hot air conduit, plumbing, gas, and other services in the triangular space, within the vault, around the upper edge of every room. Connect the ducts for different rooms by vertical ducts, in special chases, in the corners of rooms. Build outlets and panels at intervals along the duct for access to the conduits.",
    bookPage: 1076,
  },
  {
    number: 230,
    name: "Radiant Heat",
    category: "construction",
    asterisks: 1,
    biggerLinks: [218, 219, 229],
    smallerLinks: [202, 219, 229],
    problem:
      "This pattern is a biologically precise formulation of the intuition that sunlight and a hot blazing fire are the best kinds of heat.",
    therefore:
      "Choose a way of heating your space-especially those rooms where people are going to gather when it is cold that is essentially a radiative process, where the heat comes more from radiation than convection.",
    bookPage: 1078,
  },
  {
    number: 231,
    name: "Dormer Windows",
    category: "construction",
    asterisks: 1,
    biggerLinks: [117, 180, 220],
    smallerLinks: [179, 180, 208, 212, 216, 217, 218, 219, 220, 225, 236, 239],
    problem:
      "We know from our discussion of Sheltering Roof (117) that the top story of the building should be right inside the roof, surrounded by it.",
    therefore:
      "Wherever you have windows in the roof, make dormer windows which are high enough to stand in, and frame them like any other alcoves in the building.",
    bookPage: 1081,
  },
  {
    number: 232,
    name: "Roof Caps",
    category: "construction",
    asterisks: 0,
    biggerLinks: [118, 220],
    smallerLinks: [249],
    problem:
      "There are few cases in traditional architecture where builders have not used some roof detail to cap the building with an ornament.",
    therefore:
      "Choose a natural way to cap the roof - some way which is in keeping with the kind of construction, and the meaning of the building. The caps may be structural; but their main function is decorative - they mark the top - they mark the place where the roof penetrates the sky.",
    bookPage: 1084,
  },
  {
    number: 233,
    name: "Floor Surface",
    category: "construction",
    asterisks: 2,
    biggerLinks: [127, 215, 219],
    smallerLinks: [248, 249, 250],
    problem:
      "We want the floor to be comfortable, warm to the touch, inviting. But we also want it to be hard enough to resist wear, and easy to clean.",
    therefore:
      "Zone the house, or building, into two kinds of zones: public zones, and private or more intimate zones. Use hard materials like waxed, red polished concrete, tiles, or hardwood in the public zones. In the more intimate zone, use an underfloor of soft materials, like felt, cheap nylon carpet, or straw matting, and cover it with cloths, and pillows, and carpets, and tapestries. Make a clearly marked edge between the two - perhaps even a step - so that people can take their shoes off when they pass from the public to the intimate.",
    bookPage: 1088,
  },
  {
    number: 234,
    name: "Lapped Outside Walls",
    category: "construction",
    asterisks: 0,
    biggerLinks: [218, 220],
    smallerLinks: [],
    problem:
      "The main function of a building's outside wall is to keep weather out. It can only do this if the materials are joined in such a way that they cooperate to make impervious joints.",
    therefore:
      'Build up the exterior wall surface with materials that are lapped against the weather: either "internally lapped," like exterior plaster, or more literally lapped, like shingles and boards and tiles. In either case, choose a material that is easy to repair in little patches, inexpensively, so that little by little, the wall can be maintained in good condition indefinitely.',
    bookPage: 1093,
  },
  {
    number: 235,
    name: "Soft Inside Walls",
    category: "construction",
    asterisks: 1,
    biggerLinks: [218, 219],
    smallerLinks: [218, 219, 240],
    problem:
      "A wall which is too hard or too cold or too solid is unpleasant to touch; it makes decoration impossible, and creates hollow echoes.",
    therefore:
      "Make every inside surface warm to the touch, soft enough to take small nails and tacks, and with a certain slight 'give' to the touch. Soft plaster is very good; textile hangings, canework, weavings, also have this character. And wood is fine, where you can afford it.",
    bookPage: 1096,
  },
  {
    number: 236,
    name: "Windows which Open Wide",
    category: "construction",
    asterisks: 1,
    biggerLinks: [180, 192, 221],
    smallerLinks: [239],
    problem:
      "Many buildings nowadays have no opening windows at all; and many of the opening windows that people do build, don't do the job that opening windows ought to do.",
    therefore:
      "Decide which of the windows will be opening windows. Pick those which are easy to get to, and choose the ones which open onto flowers you want to smell, paths where you might want to talk, and natural breezes. Then put in side-hung casements that open outward. Here and there, go all the way and build full French windows.",
    bookPage: 1100,
  },
  {
    number: 237,
    name: "Solid Doors With Glass",
    category: "construction",
    asterisks: 0,
    biggerLinks: [135, 194, 196, 224],
    smallerLinks: [218, 239],
    problem:
      "An opaque door makes sense in a vast house or palace, where every room is large enough to be a world unto itself; but in a small building, with small rooms, the opaque door is only very rarely useful.",
    therefore:
      'As often as possible build doors with glazing in them, so, that the upper half at least, allows you to see through them. At the same time, build the doors solid enough, so that they give acoustic isolation and make a comfortable "thunk" when they are closed.',
    bookPage: 1103,
  },
  {
    number: 238,
    name: "Filtered Light",
    category: "construction",
    asterisks: 1,
    biggerLinks: [221, 223],
    smallerLinks: [239, 244, 246, 250],
    problem:
      "Light filtered through leaves, or tracery, is wonderful. But why?",
    therefore:
      "Where the edge of a window or the overhanging eave of a roof is silhouetted against the sky, make a rich, detailed tapestry of light and dark, to break up the light and soften it.",
    bookPage: 1105,
  },
  {
    number: 239,
    name: "Small Panes",
    category: "construction",
    asterisks: 2,
    biggerLinks: [194, 221, 225, 236, 237],
    smallerLinks: [238, 240],
    problem:
      "When plate glass windows became possible, people thought that they would put us more directly in touch with nature. In fact, they do the opposite.",
    therefore:
      "Divide each window into small panes. These panes can be very small indeed, and should hardly ever be more than a foot square. To get the exact size of the panes, divide the width and height of the window by the number of panes. Then each window will have different sized panes according to its height and width.",
    bookPage: 1108,
  },
  {
    number: 240,
    name: "Half-Inch Trim",
    category: "construction",
    asterisks: 2,
    biggerLinks: [216, 217, 219, 225, 234, 235, 249],
    smallerLinks: [249, 250],
    problem:
      "Totalitarian, machine buildings do not require trim because they are precise enough to do without. But they buy their precision at a dreadful price: by killing the possibility of freedom in the building plan.",
    therefore:
      "Wherever two materials meet, place a piece of trim over the edge of the connection. Choose the pieces of trim so that the smallest piece, in each component, is always of the order of 1/2 inch wide. The trim can be wood, plaster, terracotta....",
    bookPage: 1112,
  },
  {
    number: 241,
    name: "Seat Spots",
    category: "construction",
    asterisks: 2,
    biggerLinks: [121, 124, 140, 160, 161, 163, 168, 174, 176],
    smallerLinks: [125, 242, 243],
    problem:
      "Where outdoor seats are set down without regard for view and climate, they will almost certainly be useless.",
    therefore:
      "Choosing good spots for outdoor seats is far more important than building fancy benches. Indeed, if the spot is right, the most simple kind of seat is perfect.",
    bookPage: 1118,
  },
  {
    number: 242,
    name: "Front Door Bench",
    category: "construction",
    asterisks: 1,
    biggerLinks: [119, 130, 155, 160, 161, 168, 241],
    smallerLinks: [241, 242, 243, 245],
    problem: "People like to watch the street.",
    therefore:
      "Build a special bench outside the front door where people from inside can sit comfortably for hours on end and watch the world go by. Place the bench to define a half-private domain in front of the house. A low wall, planting, a tree, can help to create the same domain.",
    bookPage: 1121,
  },
  {
    number: 243,
    name: "Sitting Wall",
    category: "construction",
    asterisks: 2,
    biggerLinks: [51, 100, 106, 111, 114, 121, 124, 140, 163, 165, 166, 172],
    smallerLinks: [241, 245, 248, 249],
    problem:
      "If you have also marked the places where it makes sense to build seats - Seat Spots (241), Front Door Bench (242) - you can kill two birds with one stone by using the walls as seats which help enclose the outdoor space wherever its positive character is weakest.",
    therefore:
      "Surround any natural outdoor area, and make minor boundaries between outdoor areas with low walls, about 16 inches high, and wide enough to sit on, at least 12 inches wide.",
    bookPage: 1124,
  },
  {
    number: 244,
    name: "Canvas Roofs",
    category: "construction",
    asterisks: 1,
    biggerLinks: [103, 118, 119, 140, 163, 166, 174, 180, 238],
    smallerLinks: [238, 249, 250],
    problem:
      "There is a very special beauty about tents and canvas awnings. The canvas has a softness, a suppleness, which is in harmony with wind and light and sun. A house or any building built with some canvas will touch all the elements more nearly than it can when it is made only with hard conventional materials.",
    therefore:
      "Build canvas roofs and walls and awnings wherever there are spaces which need softer light or partial shade in summer, or partial protection from mist and dew in autumn and winter. Build them to fold away, with ropes or wires to pull them, so that they can easily be opened.",
    bookPage: 1128,
  },
  {
    number: 245,
    name: "Raised Flowers",
    category: "construction",
    asterisks: 1,
    biggerLinks: [120, 125, 160, 169, 173, 243],
    smallerLinks: [],
    problem:
      "Flowers are beautiful along the edges of paths, buildings, outdoor rooms - but it is just in these places that they need the most protection from traffic. Without some protection they cannot easily survive.",
    therefore:
      "Soften the edges of buildings, paths, and outdoor areas with flowers. Raise the flower beds so that people can touch the flowers, bend to smell them, and sit by them. And build the flower beds with solid edges, so that people can sit on them, among the flowers too.",
    bookPage: 1132,
  },
  {
    number: 246,
    name: "Climbing Plants",
    category: "construction",
    asterisks: 0,
    biggerLinks: [174, 238],
    smallerLinks: [],
    problem:
      "A building finally becomes a part of its surroundings when the plants grow over parts of it as freely as they grow along the ground.",
    therefore:
      "On sunny walls, train climbing plants to grow up round the openings in the wall-the windows, doors, porches, arcades, and trellises.",
    bookPage: 1135,
  },
  {
    number: 247,
    name: "Paving with Cracks Between the Stones",
    category: "construction",
    asterisks: 2,
    biggerLinks: [51, 121, 140, 163, 168, 169],
    smallerLinks: [168, 248],
    problem:
      "Asphalt and concrete surfaces outdoors are easy to wash down, but they do nothing for us, nothing for the paths, and nothing for the rainwater and plants.",
    therefore:
      "On paths and terraces, lay paving stones with a 1 inch crack between the stones, so that grass and mosses and small flowers can grow between the stones. Lay the stones directly into earth, not into mortar, and, of course, use no cement or mortar in between the stones.",
    bookPage: 1138,
  },
  {
    number: 248,
    name: "Soft Tile and Brick",
    category: "construction",
    asterisks: 0,
    biggerLinks: [168, 207, 233, 243, 247],
    smallerLinks: [249, 250],
    problem:
      "How can a person feel the earth, or time, or any connection with his surroundings, when he is walking on the hard mechanical wash-easy surfaces of concrete, asphalt, hard-fired architectural paving bricks, or artificially concocted mixes like terrazzo.",
    therefore:
      "Use bricks and tiles which are soft baked, low fired - so that they will wear with time, and show the marks of use.",
    bookPage: 1141,
  },
  {
    number: 249,
    name: "Ornament",
    category: "construction",
    asterisks: 2,
    biggerLinks: [110, 160, 168, 173, 180, 196, 225, 226, 227, 232, 235, 243],
    smallerLinks: [218, 225, 234, 235, 240, 248, 250, 253],
    problem: "All people have the instinct to decorate their surroundings.",
    therefore:
      "Search around the building, and find those edges and transitions which need emphasis or extra binding energy. Corners, places where materials meet, door frames, windows, main entrances, the place where one wall meets another, the garden gate, a fence - all these are natural places which call out for ornament.",
    bookPage: 1146,
  },
  {
    number: 250,
    name: "Warm Colors",
    category: "construction",
    asterisks: 2,
    biggerLinks: [207, 233, 235],
    smallerLinks: [240, 244, 248, 249, 252],
    problem:
      "The greens and greys of hospitals and office corridors are depressing and cold. Natural wood, sunlight, bright colors are warm. In some way, the warmth of the colors in a room makes a great deal of difference between comfort and discomfort.",
    therefore:
      "Choose surface colors which, together with the color of the natural light, reflected light, and artificial lights, create a warm light in the rooms.",
    bookPage: 1153,
  },
  {
    number: 251,
    name: "Different Chairs",
    category: "construction",
    asterisks: 0,
    biggerLinks: [142, 185, 202],
    smallerLinks: [252],
    problem:
      "People are different sizes; they sit in different ways. And yet there is a tendency in modern times to make all chairs alike.",
    therefore:
      "Never furnish any place with chairs that are identically the same. Choose a variety of different chairs, some big, some small, some softer than others, some rockers, some very old, some new, with arms, without arms, some wicker, some wood, some cloth.",
    bookPage: 1157,
  },
  {
    number: 252,
    name: "Pools of Light",
    category: "construction",
    asterisks: 2,
    biggerLinks: [129, 130, 146, 179, 182, 183, 185, 250, 251],
    smallerLinks: [250],
    problem:
      "Uniform illumination - the sweetheart of the lighting engineers - serves no useful purpose whatsoever. In fact, it destroys the social nature of space, and makes people feel disoriented and unbounded.",
    therefore:
      "Place the lights low, and apart, to form individual pools of light which encompass chairs and tables like bubbles to reinforce the social character of the spaces which they form. Remember that you can't have pools of light without the darker places in between.",
    bookPage: 1160,
  },
  {
    number: 253,
    name: "Things from your Life",
    category: "construction",
    asterisks: 1,
    biggerLinks: [],
    smallerLinks: [],
    problem:
      '"Decor" and the conception of "interior design" have spread so widely, that very often people forget their instinct for the things they really want to keep around them.',
    therefore:
      'Do not be tricked into believing that modern decor must be slick or psychedelic, or "natural" or "modern art," or "plants" or anything else that current taste-makers claim. It is most beautiful when it comes straight from your life - the things you care for, the things that tell your story.',
    bookPage: 1164,
  },
];

// console.log(JSON.stringify(table));

const PATTERNS = {
  all: table,
  list: [...table.map((d) => d.number)].sort((a, b) => (a > b ? 1 : -1)),
  dictionary: table.reduce((acc, d) => ({ ...acc, [d.number]: d }), {}),
};

export default PATTERNS;
